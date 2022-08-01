import Container from '@mui/material/Container';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { addAdmin, getAdmins } from '../../services/Admin/admin';

export default function RegisterAdminModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [open, setOpen] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordErrorConfirmation, setPasswordErrorConfirmation] =
    useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const refreshPage = async () => {
    window.location.reload(true);
  };

  const newAdmin = async (adminEmail, adminPass, adminConfirmPass) => {
    const admin = {
      email: adminEmail,
      password: adminPass,
      confirmPassword: adminConfirmPass,
    };
    await addAdmin(admin);
    handleClose();
    await getAdmins();
    refreshPage();
  };

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

  const handleRegister = () => {
    setEmailError(null);
    setPasswordError(null);
    setPasswordErrorConfirmation(null);

    if (
      email.includes('@') &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword
    ) {
      handleClose();
      newAdmin(email, password, confirmPassword);
    } else {
      if (email.indexOf('@') < 0) {
        setEmailError(
          <Typography variant="subtitle2" sx={{ color: 'red' }}>
            Email Error; Please enter a valid email of the form ___@___.___
          </Typography>
        );
      }
      if (password.length < 1) {
        setPasswordError(
          <Typography variant="subtitle2" sx={{ color: 'red' }}>
            Password Error; Password Required.
          </Typography>
        );
      }
      if (password !== confirmPassword) {
        setPasswordErrorConfirmation(
          <Typography variant="subtitle2" sx={{ color: 'red' }}>
            Password Error; Password and Confirm Password do not match.
          </Typography>
        );
      }
    }
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

  return (
    <Container maxWidth="sm">
      <Button
        theme={buttonTheme}
        color="cancel"
        variant="contained"
        onClick={handleOpen}
      >
        + Admin
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalPosition}>
          <Grid spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} sx={{ borderRadius: '10px' }}>
              <Box
                bgcolor="#004cbb"
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
                  Register Admin
                </Typography>
                <IconButton
                  onClick={handleClose}
                  sx={{ position: 'absolute', right: 8, top: 8 }}
                >
                  <CloseIcon fontSize="large" sx={closeIconColor} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 1 }}>
            <Box container margin="20px">
              <Grid container spacing={2} rowSpacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter email address..."
                    variant="filled"
                    onChange={emailChangeHandler}
                    value={email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter password..."
                    variant="filled"
                    type="password"
                    onChange={passwordChangeHandler}
                    value={password}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter same password..."
                    variant="filled"
                    type="password"
                    onChange={confirmPasswordChangeHandler}
                    value={confirmPassword}
                  />
                </Grid>

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
                        color="save"
                        variant="contained"
                        onClick={handleRegister}
                        style={{ minWidth: '100px' }}
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
                        style={{ minWidth: '100px' }}
                      >
                        <Typography padding="5px">Cancel</Typography>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <div>
                {emailError}
                {passwordError}
                {passwordErrorConfirmation}
              </div>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
