import './App.css';
import React from 'react';
import HorizontalLinearStepper from './Components/HorizontalLinearStepper/HorizontalLinearStepper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  const externalImage ="https://betafibernet.actcorp.in/assets/images/Rectangle_1.png";
  return (
  
    <div style={{backgroundImage: `url(${externalImage})`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',height:'95%'}}>
      <Container>
      
        <Box className='box'>
        
        <HorizontalLinearStepper/>
        </Box>
      </Container>
     
    
      </div>
    




  );
}

export default App;

