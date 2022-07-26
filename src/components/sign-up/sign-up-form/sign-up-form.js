import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function SignUpForm(props) {
  const {
    emailAddress,
    firstName,
    lastName,
    studentCellPhone,
    studentDateOfBirth,
    onStudentCellPhoneChange,
    onStudentDateOfBirthChange,
    onEmailAddressChange,
    onFirstNameChange,
    onLastNameChange,
    // onPasswordChange,
    onSubmit,
    // password,
  } = props;

  const currentYear = new Date().getFullYear();
  const studentYear = +studentDateOfBirth.substring(0, 4);
  const studentAge = currentYear - studentYear;

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onSubmitDisabled =
    !emailAddress ||
    !firstName ||
    !lastName ||
    // !password ||
    !studentDateOfBirth ||
    (studentDateOfBirth !== null && studentYear >= currentYear);

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email Address"
            onChange={(event) => onEmailAddressChange(event.target.value)}
            required
            type="email"
            value={emailAddress}
            error={!re.test(emailAddress)}
            helperText={re.test(emailAddress) ? '' : 'Invaild Email Address'}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            onChange={(event) => onFirstNameChange(event.target.value)}
            required
            value={firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            fullWidth
            onChange={(event) => onLastNameChange(event.target.value)}
            required
            value={lastName}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Password"
            onChange={(event) => onPasswordChange(event.target.value)}
            required
            type="password"
            value={password}
          />
        </Grid> */}
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Cell Phone Number (Optional)"
            onChange={(event) => onStudentCellPhoneChange(event.target.value)}
            value={studentCellPhone}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            onChange={(event) => onStudentDateOfBirthChange(event.target.value)}
            type="date"
            value={studentDateOfBirth}
            error={studentAge < 13}
            helperText={studentAge > 13 ? ' ' : 'Age Must Be Atleast 13'}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            disabled={onSubmitDisabled}
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            onClick={onSubmit}
            variant="contained"
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

SignUpForm.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  studentCellPhone: PropTypes.string.isRequired,
  studentDateOfBirth: PropTypes.string.isRequired,
  onStudentCellPhoneChange: PropTypes.func.isRequired,
  onStudentDateOfBirthChange: PropTypes.func.isRequired,
  onEmailAddressChange: PropTypes.func.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  // onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // password: PropTypes.string.isRequired,
};
