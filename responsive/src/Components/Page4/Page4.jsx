import React, { useState } from 'react'
//import '../App.css'
import '../Page4/Page4.css';
import Box from '@mui/material/Box';
import { Container } from '@mui/system'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import images from "../Image/images.png"
import Button from '@material-ui/core/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


const style = {
  position: "absolute",
  overflowY: "scroll",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "3px solid black",
  borderRadius: "35px",
  boxShadow: 24,
  height: "60%",
  p: 18,
};




const Page4 = ({handleBack}) => {
    const [documentType, setDocumentType] = React.useState([]);
    const [divUpload, setDivUpload] = React.useState(null);
  
    const [open, setOpen] = useState(false);
    // const handleProceed = () => {
    //   setOpen(true);
    //   // console.log("page1", data);
    // };
    const handleClose = () => setOpen(false);
    // const handleBackkk = () => {
    //   setOpen(false);
    //   handleBack();
    // };
    const handleSubmit = () => {
      setOpen(true);
      alert("Click Ok to review your data");
    };
  
    //let pincode = JSON.parse(localStorage.getItem("pincode")) || [];
    let shifting = JSON.parse(localStorage.getItem("text")) || [];
    let data = JSON.parse(localStorage.getItem("page1-data")) || [];
    let date = JSON.parse(localStorage.getItem("page2-data")) || [];
    const handleConfirm = () => {
      alert("Form Successfully submitted");
      window.location.reload();
    };
const handleDocType = (e)=>{
  setDocumentType(e.target.value)
  console.log("page4-data", documentType)
}
    
const handleBackk = ()=>{
  handleBack()
  
}


    
  return (
    <>
    <div>
       <Container  className='main-container' maxWidth="sm" >
        <Box className='box'>

      <div className='first-div'>
        <h3 >Please upload the documents</h3>
        <h5>Dear customer, as a TRAI mendate we would require a proof of address</h5>
        <h5>documents for the connection to be shifted</h5>
      </div>
      {/* <div className=''> */}
      <FormControl className='form-choose-document' sx={{ m: 2.5, }}>
      <InputLabel className='choose-document' id="demo-simple-select-label">Choose Document type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={documentType}
          label="Choose Document type"
          onChange={handleDocType}
        >
    

          <MenuItem value="Aadhar Card">Aadhar Card</MenuItem>
          <br />
          <MenuItem value="Pan Card">Pan Card</MenuItem> 
          <br />
          <MenuItem value="Voter ID">Voter ID</MenuItem>
       
        </Select>
      </FormControl>

      <div className='second-div'>
        <h4 style={{textAlign:'center',color:'gray', fontWeight:'50px'}}>
          Please upload a clear scanned copy of both front <br/>
         and back side of relevant document. In case the <br/>
          document is not readable or clear, shifting process <br/>
           may get delayed
        </h4>
        </div>
        <div className='div-img'>
        <label htmlFor="">Front img</label>
        <label htmlFor="">Back img</label>
        </div>
        <div className='div-upload'>
          
         <div className='image-upload' style={{border: '2px dashed grey', width:'110px', height:'90px',}}>
         <label for="file-input">
        <img src={images} style={{width:'100px'}}/>
    </label>

    <input id="file-input" type="file"/>
          <br/>
          <br/>
          <div>
          <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={(event) => {
          console.log("front-img",event.target.files[0]);
          setDivUpload(event.target.files[0]);
        }}
      />
      <label htmlFor="select-image">
        <Button variant=""  component="span" style={{backgroundColor:'red', color:'white',height:'25px',width:''}}>
          Upload
        </Button>
      </label>
          </div>
          {/* <button accept="image/*" type="file"  style={{backgroundColor:'red', color:'rgba(255,255,255,1)',width:'110px', height:'25px',borderRadius:'10px'}}>Upload</button> */}
         </div>
         <div className='image-upload' style={{border: '2px dashed grey', width:'110px',height:'90px'}}>
         <label for="file-input">
        <img src={images} style={{width:'100px'}}/>
    </label>

          <br/>
          <br/>
          <div>
          <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={(event) => {
          console.log("back-img",event.target.files[0]);
          setDivUpload(event.target.files[0]);
        }}
      />
      <label htmlFor="select-image">
        <Button variant=""  component="span" style={{backgroundColor:'red', color:'white',height:'25px',width:''}}>
          Upload
        </Button>
      </label>
          </div>
         </div>
         
        </div>  <br/> <br/>
        <div className='div-btn'>
         <button className='btn-back'  onClick={handleBackk}>BACK</button>

         <button className='btn-submit' onClick={handleSubmit}>SUBMIT</button>
         </div>
      {/* </div> */}
     
        </Box>
      </Container>

    </div>
    <div className="modal">
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="keep-mounted-modal-title"
          variant="h6"
          component="h2"
        >
          <h5>Complete Details of User</h5> <hr />
        </Typography>
        <div>
          <iframe
            title="gmap"
            name="gMap"
            className="map"
            src={`https://maps.google.com/maps?q=${data.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
        </div>
        <Typography>
          <h5>Name of the User : {data.name}</h5>
          <h5>user's account No: {data.accNumber}</h5>
          <h5>Current Address : {data.currentAddress}</h5>
          <h5>user's city : {data.city}</h5>
          {data.city !== "BANGALORE"? <h5>Date of Registration : {data.date}</h5>: ""}
          {/* <h5>Date of Registration : {data.date}</h5> */}
          <h5>Multi Store Building : {data.radio}</h5>
          <h5>shifting address :{shifting}</h5>
          {/* <h5>pincode :{}</h5> */}
          <h5>Date of Appointment:{date.selectedDate}</h5>
        </Typography>

        <div
          style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        >
          <button
            onClick={handleConfirm}
            style={{
              backgroundColor: "red",
              color: "rgba(255,255,255,1)",
              width: "150px",
              height: "35px",
              fontWeight: "500px",
              fontSize: "15px",
              fontFamily: "sans-serif",
              borderRadius: "10px",
            }}
          >
            CONFIRM
          </button>
        </div>
      </Box>
    </Modal>
  </div>
  </>
  )
}

export default Page4