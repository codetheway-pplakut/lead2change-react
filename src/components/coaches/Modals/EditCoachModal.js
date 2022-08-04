import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/EditRounded';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
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
    if (
      enteredEmail.includes('@') &&
      enteredFirstName.length > 0 &&
      enteredLastName.length > 0 &&
      enteredPhoneNumber.length > 0
    ) {
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
    }
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 430,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
  };

  const buttonTheme = createTheme({
    palette: {
      delete: {
        main: '#004cbb',
        contrastText: '#fff',
      },
      cancel: {
        main: '#004cbb',
        contrastText: '#fff',
      },
    },
  });
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
        <Box sx={style}>
          <Grid container>
            <Grid
              item
              sx={{
                bgcolor: '#004cbb',
                color: 'white',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              xs={12}
            >
              <Grid container alignItems="center" sx={{ margin: 1 }}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography variant="h5" align="center" padding="10px">
                    Edit {coach.coachFirstName} {coach.coachLastName}&#39;s
                    Information
                  </Typography>
                  <IconButton
                    onClick={handleClose}
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                  >
                    <CloseIcon fontSize="large" sx={{ color: 'white' }} />
                  </IconButton>
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={1}
                  sx={{ p: 2 }}
                  justifyContent="center"
                >
                  <Grid item xs={6}>
                    <TextField
                      helperText={
                        enteredFirstName.length < 1 ? 'Enter First Name' : ' '
                      }
                      error={enteredFirstName.length < 1}
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
                      helperText={
                        enteredLastName.length < 1 ? 'Enter Last Name' : ' '
                      }
                      error={enteredLastName.length < 1}
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
                      error={!enteredEmail.includes('@')}
                      helperText={
                        !enteredEmail.includes('@')
                          ? 'Must contain an @ sign.'
                          : ' '
                      }
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
                      error={enteredPhoneNumber.length < 1}
                      helperText={
                        enteredPhoneNumber.length < 1
                          ? 'Enter a Phone Number'
                          : ' '
                      }
                      value={enteredPhoneNumber}
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      size="small"
                      onChange={(e) => {
                        setEnteredPhoneNumber(e.target.value.replace(' ', '-'));
                      }}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Button
                      theme={buttonTheme}
                      color="delete"
                      variant="contained"
                      onClick={Edit}
                      style={{ minWidth: '120px' }}
                    >
                      <Typography paddingTop="5px" paddingBottom="5px">
                        Confirm
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid xs={1} />
                  <Grid item xs={4}>
                    <Button
                      theme={buttonTheme}
                      color="cancel"
                      variant="contained"
                      onClick={handleClose}
                      style={{ minWidth: '120px' }}
                    >
                      <Typography padding="5px">Cancel</Typography>
                    </Button>
                  </Grid>
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
  updateFunction: PropTypes.func.isRequired,
};
