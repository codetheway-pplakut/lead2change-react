import Container from '@mui/material/Container';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';
// import Validation from './editAdminValidation';
// import UpdateAdmin from './update-admin';

export default function Students() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [open, setOpen] = useState(false);
  const [save, setSave] = useState(false);

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

  const handleSave = () => {
    setFirstNameError(null);
    setLastNameError(null);
    setEmailErrorOne(null);
    setEmailErrorTwo(null);
    setPasswordError(null);
    setPasswordErrorTwo(null);
    setPasswordErrorConfirmation(null);

    setSave(true);

    if (firstName.length < 1) {
      setFirstNameError(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          First Name Error; First Name Required.
        </Typography>
      );
      setSave(false);
    }
    if (lastName.length < 1) {
      setLastNameError(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Last Name Error; Last Name Required.
        </Typography>
      );
      setSave(false);
    }
    if (email.length < 1) {
      setEmailErrorOne(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Email Error; Email Required.
        </Typography>
      );
      setSave(false);
    }
    if (email.indexOf('@') < 0) {
      setEmailErrorTwo(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Email Error; Please enter a valid email of the form ___@___.___
        </Typography>
      );
      setSave(false);
    }
    if (password.length < 1) {
      setPasswordError(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Password Error; Password Required.
        </Typography>
      );
      setSave(false);
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
      setSave(false);
    }
    if (password !== confirmPassword) {
      setPasswordErrorConfirmation(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Password Error; Password and Confirm Password do not match.
        </Typography>
      );
      setSave(false);
    }

    if (save) {
      setPasswordErrorConfirmation(
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Bruh
        </Typography>
      );
    }
  };

  const buttonTheme = createTheme({
    palette: {
      delete: {
        main: green[400],
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
      <IconButton
        variant="contained"
        aria-label="Edit"
        sx={{
          borderRadius: 2,
          backgroundColor: 'orange',
        }}
        onClick={handleOpen}
      >
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <Grid item xs={12} sx={{ borderRadius: '10px' }}>
          <Box
            bgcolor="#3764A8"
            sx={{
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
            }}
          >
            <Typography
              textAlign="center"
              color="white"
              variant="h4"
              fontWeight="bold"
              padding="10px"
            >
              Edit Admin
            </Typography>
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon fontSize="large" sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Grid>

        <DialogActions>
          <Box sx={{ mt: 1 }}>
            <Grid container spacing={2} rowSpacing={2}>
              <Grid item xs={6} sm={6}>
                <TextField
                  fullWidth
                  label="Enter first name..."
                  variant="filled"
                  sx={{
                    backgroundColor: grey[100],
                    boxShadow: 2,
                  }}
                  onChange={firstNameChangeHandler}
                  value={firstName}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  fullWidth
                  label="Enter last name..."
                  variant="filled"
                  sx={{
                    backgroundColor: grey[100],
                    boxShadow: 2,
                  }}
                  onChange={lastNameChangeHandler}
                  value={lastName}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter email address..."
                  variant="filled"
                  sx={{
                    backgroundColor: grey[100],
                    boxShadow: 2,
                  }}
                  onChange={emailChangeHandler}
                  value={email}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter password..."
                  variant="filled"
                  sx={{
                    backgroundColor: grey[100],
                    boxShadow: 2,
                  }}
                  onChange={passwordChangeHandler}
                  value={password}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter same password..."
                  variant="filled"
                  sx={{
                    backgroundColor: grey[100],
                    boxShadow: 2,
                  }}
                  onChange={confirmPasswordChangeHandler}
                  value={confirmPassword}
                />
              </Grid>

              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                paddingTop="10px"
                paddingBottom="10px"
                marginTop="0px"
                marginLeft="0px"
                align="center"
              >
                <Grid item xs={4}>
                  <Box>
                    <Button
                      theme={buttonTheme}
                      color="delete"
                      variant="contained"
                      onClick={handleSave}
                    >
                      <Typography padding="5px">Save</Typography>
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
        </DialogActions>
      </Dialog>
    </Container>
  );
}
