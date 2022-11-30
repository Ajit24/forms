import React, { useState } from 'react'
import '../Page1/Page1.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Popper } from '@mui/material';
import Footer from '../Footer/Footer';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GoogleAutoCompleteAddress from '../GoogleAutoCompleteAddress/GoogleAutoCompleteAddress';
import SmartSearch from '../SmartSearch/SmartSearch'
import EdiText from 'react-editext'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  // border: '3px solid black',
  borderRadius: '55px',
  boxShadow: 24,
  height: '40%',
  p: 16,
};
const Page1 = ({ handleNext, handleBack }) => {
  const [name, setName] = useState("");
  const [accNumber, setAccNumber] = useState('')
  const [currentAddress, setCurrentAddress] = useState("")
  const [city, setCity] = useState("")
  const [date,setDate ] = useState("")
  const [location, setLocation] = useState("")
  const [radio, setRadio] = useState('')
  const [apartment, setApartment] = useState("")
  const [valuerun,setValueRun] = useState(true)
  const [open, setOpen] = React.useState(false);
  const [locationValue, setLocationValue] = useState(true)
  
  
  const handleRadioInput = (e) => {
    setRadio(e.target.value);
  }
  let data = JSON.parse(localStorage.getItem("page1-data")) || [];
  //let pincode = JSON.parse(localStorage.getItem("pincode")) || [];
  let setvalue = (localStorage.getItem("valueset")) || [];

  let shifting = JSON.parse(localStorage.getItem("text")) || [];
  const [monkey, setMonkey] = useState(true)

  React.useEffect(()=>{
    setMonkey(false)
  },[city])

 // console.log("locationValue", locationValue)
  const handleaddress = (e) => {

    setLocationValue(false)
    let text = document.getElementById("location");
    text.value = "";
  }
  const radioChange1 = () => {
    setValueRun(false)
    setApartment(city)
        !city ? alert("please select your city") : setMonkey(false)
        
     // setApartment(e.target.value)
  }

  const radioChange2 = () => {
    setMonkey(true)
    setValueRun(true)


  }
  const handleLocation = (e) => {
    // setLocation(e.target.value);
    // axios.get("https://ipapi.co/json?token=45420d190496ea").then((response)=>{
    //   let city=response.data.city;
    //   let region =response.data.region;
    //   let pincode=response.data.postal;
    //   let country_name=response.data.country_name
    //   localStorage.setItem("pincode", JSON.stringify(pincode));
    //   localStorage.setItem("text", JSON.stringify(region));
    //    let text=document.getElementById("location");
    //   text.value=city+","+region+","+pincode+","+country_name
    // })
    const sucess = (pos) => {
      setLocationValue(true)
      console.log(pos);
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
     const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude${lat}=&longitude=${lon}&localityLanguage=en`;
     //const geoApiUrl   = `https://maps.googleapis.com/maps/api/js/GeocodeService.Search?latitude${lat}=&longitude=${lon}&localityLanguage=en`;
     fetch(geoApiUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let text = document.getElementById("location");
          let city = data.city;
          let mandal = data.locality;
          let state = data.principalSubdivision;
          let country = data.countryName;
          // let pincode = data.postcode;
          text.value =
            city + "," + mandal + "," + state + "," + country;
          let val = document.getElementById("location").value;
          console.log("location-value", val);
          // localStorage.setItem("pincode", JSON.stringify(pincode));
          localStorage.setItem("city", JSON.stringify(city))
          localStorage.setItem("text", JSON.stringify(val));
        });
    };
    const error = () => {
      console.log("unable to fetch the location");
    };
    navigator.geolocation.getCurrentPosition(sucess, error);
  };
  const handleProceed = () => {
    setOpen(true);
    
    // console.log("page1", data);
  }
  const handleClose = () => setOpen(false);
  const handleBackkk = () => {
    setOpen(false)
    handleBack()
  }
  
  const handleConfirm = (e) => {
    e.preventDefault();
    handleNext()
    const data = {
      name,
      accNumber,
      currentAddress,
      city,
      date,
      location,
      radio,
      apartment
    }
    // handleNext();
    console.log("page1-data", data)
    localStorage.setItem("page1-data", JSON.stringify(data));
  }
  
  const handleSave = (val) => {
    // console.log('Edited Value -> ', val)
   }
 
  return (
    <>
      <div className='first-div'>
        <h2>Enter details for a quick feasibility</h2>
        <div className='page1-main'>
         <div className='left-content'>
                    <TextField className='Name' fullWidth label="Name" id="fullWidth" onChange={(e) => setName(e.target.value)} /> <br/>  <br/>
                  
                    <TextField className='Acc' fullWidth label="Acc No." id="fullWidth" onChange={(e) => setAccNumber(e.target.value)} />  <br/>  <br/>
                  
                    <TextField className='Current Address' fullWidth label="Current Address" id="fullWidth" onChange={(e) => setCurrentAddress(e.target.value)} />  <br/>  <br/>
                  
                    <FormControl className='city-option' sx={{ m: .3, }}>
                      <InputLabel id="demo-multiple-name-label"> select the city you want to shift </InputLabel>
                      <Select
                        onChange={(e) => {
                          localStorage.setItem("statesName", JSON.stringify(e.target.value))
                          const selectedCity = e.target.value;
                          setCity(selectedCity);
                        }}
                        label="select the city you want to shift"
                      >
                        <MenuItem value="">select the city you want to shift</MenuItem>
                        <MenuItem value="HYDERABAD">HYDERABAD</MenuItem>
                        <MenuItem value="GUNTUR">GUNTUR</MenuItem>
                        <MenuItem value="BANGALORE">BANGALORE</MenuItem>
                        <MenuItem value="NELLORE">NELLORE</MenuItem>
                        <MenuItem value="COIMBATORE">COIMBATORE</MenuItem>
                      </Select>
                    </FormControl>
                  
                  <br />  <br/>
                
                    {city !== "BANGALORE" ? <LocalizationProvider dateAdapter={AdapterDayjs} >
                      
                      <DatePicker
                       className='datePicker'
                        label="choose a date"
                        value={date}
                        onChange={(e) => {
                          setDate(e);
                        }}
                      
                        renderInput={(params) => <TextField {...params} />}
                      />
                      
                       
                    </LocalizationProvider> : ""} 
                    
                     <br/>  <br/>

                    </div>
          {/*............... // right-side content ........................*/}
          <div className='right-content'>
            <RadioGroup
           
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel  className='radio-1' id="current-location" value=" current location" onChange={handleLocation} control={<Radio />} label="use current location" fullWidth />
              <FormControlLabel  className='radio-2' id="enter-address" value="enter address" onChange={handleaddress} control={<Radio />} label="enter Address" />
            </RadioGroup>
            <br /> 
          
              {
                locationValue ? <TextField
                className='address-input'
                  id="location"
                  label=""
                  fullWidth
                  variant='outlined'
                /> :
                  <GoogleAutoCompleteAddress></GoogleAutoCompleteAddress>
              }
              <br/>
              <br/>
            <div>
             <h3 className='floors'>Multi-Storey Building (4 or more floors)
             <RadioGroup

                  value={radio}
                  onChange={handleRadioInput}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel className='radio-yes' value="Yes" control={<Radio />} onChange={radioChange1} label="yes" />
                  <FormControlLabel className='radio-no' value="No" control={<Radio />} onChange={radioChange2} label="No" />
                </RadioGroup> 
             </h3>
               
            </div> 
            <div>
              {
                (monkey) ? <TextField label="Apartment/building name/House no" id="fullWidth" fullWidth
                className='Apartment-name'
                  onChange={(e) => setApartment(e.target.value)}
                  
                /> :
                  <SmartSearch handleSeacrYesNo={""} onChange={(e) => setApartment(e.target.value)} ></SmartSearch>
                  // <SmartSearch handleSeacrYesNo={radioChange1}></SmartSearch>
              }
            </div>
           
            <br />
            <div className='proceed-btn'>
              <Button onClick={handleProceed}>
                PROCEED
              </Button>
            </div>
            </div>
            {/* <div className='proceed-btn'>
              <Button onClick={handleProceed}>
                PROCEED
              </Button>
            </div> */}
        </div>
      </div>
      {/* <div>
        <Footer />
      </div> */}
      <div className='modal'>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
            <Typography id="modal-title" variant="h6" component="h2">
              <h5>Please confirm your address for <br />
                Fibrenet installation.</h5> <hr />
            </Typography>

            <Typography>
              <h5>city               : {city}</h5>
             
              {
                valuerun && apartment ?   <h5>building Name/D:No: 
                         <EdiText
                         className='edit-btn'
        type='text'
        value={apartment}
        onSave={handleSave}
      />
               </h5> : <h5>building Name/D:No: {setvalue} </h5>
              }      
    
              <h5>shifting address  :
                
              <EdiText
              className='edit-btn'
        type='text'
        value={shifting}
        onSave={handleSave}
      />
      </h5>

              {/* <h5>pincode           :{ }</h5> */}
            </Typography>
            <div className='modal-btn' >
            <button  className='btn1' onClick={handleBackkk} >CHNAGE</button>
              <button className='btn2' onClick={handleConfirm}>CONFIRM</button>
            </div>
            </div>
          
          </Box>
        </Modal>
      </div>
    </>
  )
}
export default Page1;