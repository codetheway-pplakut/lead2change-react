/* eslint-disable prettier/prettier */
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';



export default function RegisterAdmin() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    borderRadius: '12px',
    width: '50%',
    mt: '3',
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [open, setOpen] = useState(false);
  const [register, setRegister] = useState(false);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailErrorOne, setEmailErrorOne] = useState('');
  const [emailErrorTwo, setEmailErrorTwo] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordErrorTwo, setPasswordErrorTwo] = useState('');
  const [passwordErrorConfirmation, setPasswordErrorConfirmation] =
    useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleRegister = () => {
    setFirstNameError(null);
    setLastNameError(null);
    setEmailErrorOne(null);
    setEmailErrorTwo(null);
    setPasswordError(null);
    setPasswordErrorTwo(null);
    setPasswordErrorConfirmation(null);

    setRegister(true);

    if (firstName.length < 1) {
      setFirstNameError(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          First Name Error; First Name Required.
        </Typography>
      );
      setRegister(false);
    }
    if (lastName.length < 1) {
      setLastNameError(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Last Name Error; Last Name Required.
        </Typography>
      );
      setRegister(false);
    }
    if (email.length < 1) {
      setEmailErrorOne(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Email Error; Email Required.
        </Typography>
      );
      setRegister(false);
    }
    if (email.indexOf('@') < 0) {
      setEmailErrorTwo(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Email Error; Please enter a valid email of the form ___@___.___
        </Typography>
      );
      setRegister(false);
    }
    if (password.length < 1) {
      setPasswordError(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Password Error; Password Required.
        </Typography>
      );
      setRegister(false);
    }
    if (
      password.indexOf('1') < 0 &&
      password.indexOf('2') < 0 &&
      password.indexOf('3') < 0 &&
      password.indexOf('4') < 0 &&
      password.indexOf('5') < 0 &&
      password.indexOf('6') < 0 &&
      password.indexOf('7') < 0 &&
      password.indexOf('8') < 0 &&
      password.indexOf('9') < 0 &&
      password.indexOf('0') < 0
    ) {
      setPasswordErrorTwo(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Password Error; Password must contain a digit (0,1,2,3,4,5,6,7,8,9).
        </Typography>
      );
      setRegister(false);
    }
    if (password !== confirmPassword) {
      setPasswordErrorConfirmation(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Password Error; Password and Confirm Password do not match.
        </Typography>
      );
      setRegister(false);
    }

    if (register) {
      setOpen(false);
    }
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      {/* <ThemeProvider theme={theme}> */}
      <Button color="primary" variant="contained" onClick={handleOpen}>
        + Register Admin
      </Button>
        <Modal
            onClose={handleClose}
            open={open}
            fullWidth='md'
        >
        <Box sx={style}>
            <Grid container spacing={2}  alignItems="center" justifyContent="center">
                <Grid item xs={12} sx={{borderRadius: '12px'}}>
                    <Box bgcolor='#3764A8'  sx={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} >
                        <Typography textAlign= 'center' color='white' variant='h2' fontWeight='bold'>Register New Admin</Typography>
                        <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 8,top: 8,}}>
                            <CloseIcon fontSize="large" sx={{color: 'white'}}/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid container sx={{padding: '10px', paddingLeft:'5px', marginLeft: '0px'}} spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <TextField
                                fullWidth
                                sx={{bgcolor: '#F5F5F5'}}
                                label="First Name"
                                onChange={firstNameChangeHandler}
                                value={firstName}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <TextField
                                fullWidth
                                sx={{bgcolor: '#F5F5F5'}}
                                label="Last Name"
                                onChange={lastNameChangeHandler}
                                value={lastName}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <TextField
                                fullWidth
                                sx={{bgcolor: '#F5F5F5'}}
                                label="Email Address"
                                type="email"
                                onChange={emailChangeHandler}
                                value={email}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <TextField
                                fullWidth
                                sx={{bgcolor: '#F5F5F5'}}
                                label="Password"
                                type="password"
                                onChange={passwordChangeHandler}
                                value={password}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <TextField
                                fullWidth
                                sx={{bgcolor: '#F5F5F5'}}
                                label="Confirm Password"
                                type="password"
                                onChange={confirmPasswordChangeHandler}
                                value={confirmPassword}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            <Grid item xs={6} sx={{paddingTop: '0px'}}>  
                <Box display="flex"
                justifyContent="center"
                alignItems="center">
                    <Button
                        sx={{ mt: 3, mb: 2, bgcolor:'#0AA7FF'}}
                        type="submit"
                        variant="contained"
                        size="large"
                        onClick={handleRegister}
                    >
                        <Typography sx={{padding: '10px'}} variant='h4' fontWeight='bold'>Register</Typography>
                    </Button>
                </Box>
            </Grid>
        </Grid>
        <div>
              {firstNameError}
              {lastNameError}
              {emailErrorOne}
              {emailErrorTwo}
              {passwordError}
              {passwordErrorTwo}
              {passwordErrorConfirmation}
            </div>
        </Box>
        </Modal>
    </Container>
  );
}
