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

  const onSubmitDisabled =
    !emailAddress ||
    !firstName ||
    !lastName ||
    // !password ||
    !studentDateOfBirth ||
    (studentDateOfBirth !== null && studentDateOfBirth.includes(currentYear));

  return (
    <Box sx={{ m: 20 }}>
      <Grid container spacing={2} sx={{ alig: 'center' }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email Address"
            onChange={(event) => onEmailAddressChange(event.target.value)}
            required
            type="email"
            value={emailAddress}
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
        <Grid item xs={12} sm={6}>
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
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid> */}
      </Grid>
      <Button
        disabled={onSubmitDisabled}
        sx={{ mt: 3, mb: 2, ml: '46%' }}
        type="submit"
        onClick={onSubmit}
        variant="contained"
      >
        Sign Up
      </Button>
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
