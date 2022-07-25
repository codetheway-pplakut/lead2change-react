import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/EditRounded';
import ColorButton from '../Shared/ColoredButton';

export default function EditCoachModal(props) {
  const { coach, updateFunction } = props;
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
    if (coach.students === null) {
      coach.students = [];
    }
    const updatedCoach = {
      id: coach.id, // TODO : Update to agreed ID creation method
      coachFirstName: enteredFirstName,
      coachLastName: enteredLastName,
      coachEmail: enteredEmail,
      coachPhoneNumber: enteredPhoneNumber,
      students: coach.students,
      active: coach.active,
    };
    updateFunction(updatedCoach);
  };
  return (
    <div>
      <IconButton sx={{ color: '#2656A5' }} size="small" onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Grid variant="large">
          <Grid container>
            <Grid item sx={{ bgcolor: '#2656A5', color: 'white' }} xs={12}>
              <Grid container alignItems="center" sx={{ margin: 1 }}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography variant="h5" component="h2" align="center">
                    Edit {coach.coachFirstName} {coach.coachLastName}&#39;s
                    Information
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
                <Grid item xs={2}>
                  <ColorButton variant="contained" fullWidth onClick={Edit}>
                    Confirm
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

EditCoachModal.propTypes = {
  coach: PropTypes.object.isRequired,
  updateFunction: PropTypes.func.isRequired,
};
