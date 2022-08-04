import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { createTheme } from '@mui/material/styles';
import ColorButton from '../Shared/ColoredButton';

export default function RegisterCoachModal(props) {
  const { addFunction } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
  const closeIconColor = {
    color: 'white',
  };
  const buttonTheme = createTheme({
    palette: {
      save: {
        main: '#004cbb',
        contrastText: '#fff',
      },
      cancel: {
        main: '#004cbb',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: 'Calibri',
      fontSize: 18,
    },
  });

  const Register = () => {
    if (
      email.includes('@') &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      phoneNumber.length > 0
    ) {
      handleClose();
      addFunction(firstName, lastName, email, phoneNumber);
    }
  };
  return (
    <div>
      <ColorButton
        sx={{ minWidth: '120px' }}
        variant="contained"
        onClick={handleOpen}
      >
        + Register
      </ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={modalPosition}>
          <Grid container>
            <Grid
              item
              sx={{
                bgcolor: '#004cbb',
                color: 'white',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              xs={12}
            >
              <Grid container alignItems="center" sx={{ margin: 1 }}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography
                    variant="h5"
                    component="h2"
                    align="center"
                    padding="10px"
                  >
                    Register Coach
                  </Typography>
                  <IconButton
                    onClick={handleClose}
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                  >
                    <CloseIcon fontSize="large" sx={closeIconColor} />
                  </IconButton>
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
                <Grid item xs={6}>
                  <TextField
                    value={firstName}
                    fullWidth
                    helperText={firstName.length < 1 ? 'Enter First Name' : ' '}
                    error={firstName.length < 1}
                    label="First Name"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    value={lastName}
                    helperText={lastName.length < 1 ? 'Enter Last Name' : ' '}
                    error={lastName.length < 1}
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={14}>
                  <TextField
                    value={email}
                    fullWidth
                    error={!email.includes('@')}
                    helperText={
                      !email.includes('@') ? 'Must contain an @ sign.' : ' '
                    }
                    label="Email"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={phoneNumber}
                    fullWidth
                    helperText={
                      phoneNumber.length < 1 ? 'Enter Phone Number' : ' '
                    }
                    error={phoneNumber.length < 1}
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value.replace(' ', '-'));
                    }}
                  />
                </Grid>
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  padding="20px"
                  align="center"
                >
                  <Grid item xs={4}>
                    <Box>
                      <Button
                        theme={buttonTheme}
                        color="save"
                        variant="contained"
                        value={(firstName, lastName, email, phoneNumber)}
                        onClick={Register}
                        sx={{ minWidth: '120px' }}
                      >
                        <Typography padding="5px">Register</Typography>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={2} />
                  <Grid item xs={4}>
                    <Box>
                      <Button
                        theme={buttonTheme}
                        color="cancel"
                        variant="contained"
                        onClick={handleClose}
                        sx={{ minWidth: '120px' }}
                      >
                        <Typography padding="5px">Cancel</Typography>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

RegisterCoachModal.propTypes = {
  addFunction: PropTypes.func.isRequired,
};
