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
// import UpdateAdmin from './update-admin';

export default function Students() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastOwner] = useState('');
  // const [email, setEmail] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [updateAdminModal, setUpdateAdminModal] = useState(false);
  // const [adminToUpdate, setAdminToUpdate] = useState('');

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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

  const closeIconColor = {
    color: 'white',
  };

  const buttonTheme = createTheme({
    palette: {
      save: {
        main: '#ffba06',
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

  // const updateAdmin = (event) => {
  //   updateAdminHandler(event.target.value);
  // };

  // const updateModalChange = (wasteId) => {
  //   if (updateAdminModal === true) {
  //     setUpdateAdminModal(false);
  //   } else {
  //     setAdminToUpdate(admin);
  //     setUpdateAdminModal(true);
  //   }
  // };

  // const updateAdminHandler = async (
  //   adminId,
  //   newFirstName,
  //   newLastName,
  //   newEmail,
  //   newUsername,
  //   newPassword
  // ) => {
  //   const updatedWaste = {
  //     id: adminId,
  //     name: newFirstName,
  //     owner: newLastName,
  //     price: newEmail,
  //     city: newUsername,
  //     state: newPassword,
  //   };
  //   await UpdateAdmin(updatedWaste);
  //   updateModalChange();
  // };

  return (
    <Container maxWidth="sm">
      <Button
        theme={buttonTheme}
        color="cancel"
        variant="contained"
        onClick={handleOpen}
      >
        + Register Admin
      </Button>
      {/* <UpdateAdmin onSubmit={updateModalChange} handleClose={handleClose} /> */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalPosition}>
          <Grid spacing={2} alignItems="center" justifyContent="center">
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
                <Grid item xs={6} sm={6}>
                  <TextField
                    fullWidth
                    label="Enter first name..."
                    variant="filled"

                    // onChange={firstNameChangeHandler}
                    // value={firstName}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    fullWidth
                    label="Enter last name..."
                    variant="filled"
                    // onChange={lastNameChangeHandler}
                    // value={lastName}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter email address..."
                    variant="filled"
                    // onChange={emailChangeHandler}
                    // value={email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter password..."
                    variant="filled"
                    // onChange={passwordChangeHandler}
                    // value={password}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter same password..."
                    variant="filled"
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
                        onClick={handleClose}
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
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
