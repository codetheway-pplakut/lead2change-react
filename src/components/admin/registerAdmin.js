/* eslint-disable prettier/prettier */
import Button from '@mui/material/Button';
import React from 'react';
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="sm">
      {/* <ThemeProvider theme={theme}> */}
      <Button color="primary" variant="contained" onClick={handleOpen}>
        + Register Admin
      </Button>
      <Modal onClose={handleClose} open={open} fullWidth="md">
        <Box sx={style}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sx={{ borderRadius: '12px' }}>
              <Box
                bgcolor="#3764A8"
                sx={{
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                }}
              >
                <Typography
                  textAlign="center"
                  color="white"
                  variant="h2"
                  fontWeight="bold"
                >
                  Register New Admin
                </Typography>
                <IconButton
                  onClick={handleClose}
                  sx={{ position: 'absolute', right: 8, top: 8 }}
                >
                  <CloseIcon fontSize="large" sx={{ color: 'white' }} />
                </IconButton>
              </Box>
            </Grid>
            <Grid
              container
              sx={{ padding: '10px', paddingLeft: '5px', marginLeft: '0px' }}
              spacing={3}
            >
              <Grid item xs={12} sm={6}>
                <Paper>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: '#F5F5F5' }}
                    label="First Name"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: '#F5F5F5' }}
                    label="Last Name"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: '#F5F5F5' }}
                    label="Email Address"
                    type="email"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: '#F5F5F5' }}
                    label="Username"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: '#F5F5F5' }}
                    label="Password"
                    type="password"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: '#F5F5F5' }}
                    label="Confirm Password"
                    type="password"
                  />
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={6} sx={{ paddingTop: '0px' }}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  sx={{ mt: 3, mb: 2, bgcolor: '#0AA7FF' }}
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  <Typography
                    sx={{ padding: '10px' }}
                    variant="h4"
                    fontWeight="bold"
                  >
                    Register
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* </ThemeProvider> */}
    </Container>
  );
}
