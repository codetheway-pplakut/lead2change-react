/* eslint-disable prettier/prettier */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
 
export default function DeactivateAdminModal() {
 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 
  const modalPosition = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 430,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
  };
 
  const headingCurvedCorners = {
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };
 
  const closeIconColor = {
    color: 'white'
  };
 
  const modalTextStyle = {
    fontSize: 20,
    color: 'grey',
    p: 2,
    fontFamily: 'calibri',
    textAlign: 'center',
  };
 
  const buttonHolder = {
    marginLeft: '0px',
    padding: '20px',
  };
 
  const buttonTheme = createTheme({
    palette: {
      inactivate: {
        main: '#3764A8',
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
      <IconButton>
        <DeleteOutlineIcon         color="inactivate" theme={buttonTheme} onClick={handleOpen}/>
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalPosition}>
            <Grid container spacing={0}  alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <Box bgcolor='#3764A8'  sx={headingCurvedCorners} >
                        <Typography textAlign= 'center' color='white' variant='h4' fontWeight='bold' padding='10px'>Delete Admin</Typography>
                        <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 3,top: 3,}} >
                            <CloseIcon fontSize="large" sx={closeIconColor}/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={modalTextStyle}>
                        Are you sure you want to delete this Administrative account?
                    </Typography>
                </Grid>
                <Grid container spacing={2}  alignItems="center" justifyContent="center" sx={buttonHolder}>
                    <Grid item xs={5}>
                        <Box display="flex"
                        justifyContent="center"
                        alignItems="center">
                            <Button
                            theme={buttonTheme}
                            color="inactivate"
                            variant="contained"
                            onClick={handleClose}
                            textAlign="center"
                            padding="10px"
                            >
                            Confirm
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box display="flex"
                        justifyContent="center"
                        alignItems="center"
                        >
                            <Button
                            theme={buttonTheme}
                            color="cancel"
                            variant="contained"
                            onClick={handleClose}
                            sx={{width: '110px'}}
                            textAlign="center"
                            padding="10px"
                            >
                            Cancel
                            </Button>
                        </Box>
                    </Grid>    
                   
                </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
