/* eslint-disable prettier/prettier */
import React from 'react';
import Button from '@mui/material/Button'; 
import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

 
export default function inactiveAdmin() { 
  const buttonTheme = createTheme({ 
    palette: { 
      delete: { 
        main: 'orange', 
        contrastText: '#fff', 
      }, 
      cancel: { 
        main: '#3764A8', 
        contrastText: '#fff', 
      }, 
    }, 
    typography: { 
      fontFamily: 'Calibri', 
      fontSize: 18, 
    }, 
  }); 
 
  return ( 
    <div> 
      <Button 
        theme={buttonTheme} 
        color="delete" 
        variant="disabled" 
      > 
        <Typography textAlign= 'center' color='#56585c'>Inactivate </Typography>
      </Button> 
    </div> 
  ); 
} 