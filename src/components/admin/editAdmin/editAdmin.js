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
import Validation from './editAdminValidation';

export default function EditAdmin() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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

  return (
    <Container maxWidth="sm">
      <IconButton
        variant="contained"
        aria-label="Edit"
        sx={{
          borderRadius: 2,
          backgroundColor: 'orange',
        }}
        // value={admin.Id}
        onClick={handleOpen}
      >
        <EditIcon />
      </IconButton>
      {/* <UpdateAdmin onSubmit={updateModalChange} handleClose={handleClose} /> */}
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
                      onClick={handleClose}
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

            <Validation firstName={firstName} />
          </Box>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
