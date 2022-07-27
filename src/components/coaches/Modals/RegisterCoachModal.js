import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
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
  const Register = () => {
    if (
      email.includes('@') &&
      firstName.length > 1 &&
      lastName.length > 1 &&
      phoneNumber.length > 1
    ) {
      handleClose();
      addFunction(firstName, lastName, email, phoneNumber);
    }
  };
  return (
    <div>
      <ColorButton variant="contained" onClick={handleOpen}>
        + Register
      </ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Grid container variant="large">
          <Grid container>
            <Grid item sx={{ bgcolor: '#2656A5', color: 'white' }} xs={12}>
              <Grid container alignItems="center" sx={{ margin: 1 }}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography variant="h5" component="h2" align="center">
                    Register Coach
                  </Typography>
                </Grid>
                <Grid item xs={1} />
                <Grid item>
                  <IconButton
                    align="right"
                    size="medium"
                    onClick={handleClose}
                    sx={{ color: 'white' }}
                  >
                    <CloseOutlinedIcon />
                  </IconButton>
                </Grid>
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
                    helperText={email.length < 1 ? 'Enter Email' : ' '}
                    error={email.length < 1}
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
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <ColorButton
                    variant="contained"
                    fullWidth
                    onClick={Register}
                    value={(firstName, lastName, email, phoneNumber)}
                  >
                    Register
                  </ColorButton>
                </Grid>
                <Grid item xs={2}>
                  <ColorButton
                    variant="contained"
                    fullWidth
                    onClick={handleClose}
                  >
                    Cancel
                  </ColorButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}

RegisterCoachModal.propTypes = {
  addFunction: PropTypes.func.isRequired,
};
