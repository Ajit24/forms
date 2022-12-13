import { Container } from '@mui/system'
import React from 'react'
import '../Page3/Page3.css';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const Page3 = ({handleNext}) => {

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    localStorage.setItem("user has choosen upload doc-", JSON.stringify(value))
    console.log("page3-data", value);

  };

const handleUpload = ()=>{
  handleNext()
  console.log("page3-data",)
}
 
  return (
    <div>
     <Container  className='main-container' maxWidth="sm">
        <Box  className='box-main'>
          <FormControl>
      <RadioGroup

        value={value}
        onChange={handleChange}
      >
        <br/>
        <br/>
         
         <FormControlLabel value="eKYC" control={<Radio />} label={<h2>eKYC using Aadhar No</h2>} />
         <p className='p-ekyc'>(Instant approval, faster processing)</p>
         
        <br/>
        <br/>
        <div>
        <FormControlLabel className='scan-copy' onClick={handleUpload} value="upload" control={<Radio />} label={<h2 style={{}}>Upload a scanned copy of your documents</h2>} />
        <p className='p-upload'>(48-72 hrs for document approval)</p>

        </div>
      </RadioGroup>
    </FormControl>
          
        </Box>
      </Container>
    </div>
  )
}

export default Page3