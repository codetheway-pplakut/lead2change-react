import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
import ColorButton from '../Shared/ColoredButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '750px',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 12,
};

export default function EditCoachModal(props) {
  const { coach } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [enteredFirstName, setEnteredFirstName] = React.useState(
    coach.coachFirstName
  );
  const [enteredLastName, setEnteredLastName] = React.useState(
    coach.coachLastName
  );

  const [enteredPhoneNumber, setEnteredPhoneNumber] = React.useState(
    coach.coachPhoneNumber
  );
  const [enteredEmail, setEnteredEmail] = React.useState(coach.coachEmail);
  const Edit = () => {
    handleClose();
    // TODO: API Integration
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item sx={{ bgcolor: '#004cbb', color: 'white' }} xs={12}>
              <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8} sx={{ margin: 2 }}>
                  <Typography variant="h5" component="h2" align="center">
                    Edit {coach.coachFirstName} {coach.coachLastName}
                  </Typography>
                </Grid>
                <Grid item sx={{ margin: 1.5 }}>
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
                    value={enteredFirstName}
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setEnteredFirstName(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    value={enteredLastName}
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setEnteredLastName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={14}>
                  <TextField
                    value={enteredEmail}
                    fullWidth
                    label="Email"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setEnteredEmail(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={enteredPhoneNumber}
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setEnteredPhoneNumber(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <ColorButton variant="contained" fullWidth onClick={Edit}>
                    Confirm Changes
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
        </Box>
      </Modal>
    </div>
  );
}

EditCoachModal.propTypes = {
  coach: PropTypes.object.isRequired,
};
