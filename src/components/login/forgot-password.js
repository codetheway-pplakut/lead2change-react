import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Box,
  FormControl,
  Modal,
  TextField,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '750px',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 12,
  // p: 4,
};

function ForgotPassword() {
  const [isError, setIsError] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [enteredEmail, setEmail] = useState('');

  const emailHandler = (event) => {
    // const validRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|edu|org)$/i; old /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    event.preventDefault();

    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (re.test(enteredEmail)) {
      console.log(enteredEmail);
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const reset = () => {
    setIsError(true);
    setEmail('');
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen}>Forgot Password?</Button>
      <Modal
        open={open}
        onClose={reset}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid
              item
              sx={{ bgcolor: '#004cbb', color: 'white', mt: -4 }}
              xs={12}
            >
              <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8} sx={{ m: 2 }}>
                  <Typography variant="h5" component="h2" align="center">
                    Reset Password
                  </Typography>
                </Grid>
                {/* <Grid item sx={{ margin: 1.5 }}>
                  <IconButton
                    align="right"
                    size="medium"
                    onClick={handleClose}
                    sx={{ color: 'white' }}
                  >
                    <CloseOutlinedIcon />
                  </IconButton>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
          {/* <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="#004cbb"
          >
            Forgot Password?
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2, ml: 3 }}>
            Please enter your email for password recovery:
          </Typography>
          <Grid item xs={6}>
            <FormControl sx={{ bgcolor: 'common.white', mt: 1, mb: 2, ml: 3 }}>
              {isError ? (
                <TextField
                  label="Email Address"
                  required
                  value={enteredEmail}
                  onChange={(event) => setEmail(event.target.value)}
                />
              ) : (
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Invaild Email Address."
                  value={enteredEmail}
                  onChange={(event) => setEmail(event.target.value)}
                />
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ ml: 3, mb: 2 }}>
            <Button onClick={emailHandler}>Send email</Button>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default ForgotPassword;
