import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';

export default function StudentRegistryModal(props) {
  const {
    confirmHandler,
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onPhoneNumberChange,
    onDateOfBirthChange,
  } = props;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const confirm = () => {
    confirmHandler(firstName, lastName, email, phoneNumber, dateOfBirth);
    handleClose();
  };

  return (
    <div>
      <p />
      <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />}>
        Register Student
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box>
            <Grid container>
              <Grid item xs={11}>
                <Typography variant="h6" component="h3" align="left">
                  Register Student
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton color="primary" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Stack direction="row" spacing={2} sx={{ my: 2 }}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                required
                onChange={(event) => onFirstNameChange(event.target.value)}
                value={firstName}
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                onChange={(event) => onLastNameChange(event.target.value)}
                value={lastName}
              />
            </Stack>
          </Box>
          <Box>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2 }}
              onChange={(event) => onEmailChange(event.target.value)}
              value={email}
            />
          </Box>
          <Box>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2 }}
              onChange={(event) => onPhoneNumberChange(event.target.value)}
              value={phoneNumber}
            />
          </Box>
          <TextField
            label="Date of Birth"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
            type="date"
            onChange={(event) => onDateOfBirthChange(event.target.value)}
            value={dateOfBirth}
          />
          <Button variant="contained" onClick={handleClose} fullWidth>
            Register Student
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

StudentRegistryModal.propTypes = {
  confirmHandler: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPhoneNumberChange: PropTypes.func.isRequired,
  onDateOfBirthChange: PropTypes.func.isRequired,
};
