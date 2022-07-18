import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function deleteAdmin() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 430,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
  };

  const modalTextStyle = {
    fontSize: 20,
    color: 'grey',
    p: 2,
    fontFamily: 'calibri',
    textAlign: 'center',
  };

  const modalWarningStyle = {
    fontSize: 20,
    color: '#FF4D4D',
    textAlign: 'center',
    fontFamily: 'calibri',
    p: 1,
  };

  const buttonTheme = createTheme({
    palette: {
      delete: {
        main: '#FF4D4D',
        contrastText: '#fff',
      },
      cancel: {
        main: '#3764A8',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: 'Calibri',
      fontSize: 20,
    },
  });

  return (
    <div>
      <Button
        theme={buttonTheme}
        color="delete"
        onClick={handleOpen}
        variant="contained"
      >
        <Typography padding="5px">Delete</Typography>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sx={{ borderRadius: '10px' }}>
              <Box
                bgcolor="#3764A8"
                sx={{
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              >
                <Typography
                  textAlign="center"
                  color="white"
                  variant="h4"
                  fontWeight="bold"
                  padding="10px"
                >
                  Delete Admin
                </Typography>
                <IconButton
                  onClick={handleClose}
                  sx={{ position: 'absolute', right: 8, top: 8 }}
                >
                  <CloseIcon fontSize="large" sx={{ color: 'white' }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          <Typography sx={modalTextStyle}>
            Are you sure you want to delete this administrative account?
          </Typography>
          <Typography sx={modalWarningStyle}>All data will be lost.</Typography>

          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            padding="20px"
            align="center"
          >
            <Grid item xs={4}>
              <Box>
                <Button
                  theme={buttonTheme}
                  color="delete"
                  variant="contained"
                  onClick={handleClose}
                >
                  <Typography padding="5px">Delete</Typography>
                </Button>
              </Box>
            </Grid>

            <Grid item xs={4} sx={{ borderRadius: '10px' }}>
              <Box>
                <Button
                  theme={buttonTheme}
                  color="cancel"
                  variant="contained"
                  onClick={handleClose}
                >
                  <Typography padding="5px">Cancel</Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
