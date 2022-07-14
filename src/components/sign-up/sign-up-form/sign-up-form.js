import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function SignUpForm(props) {
  const {
    emailAddress,
    firstName,
    lastName,
    onEmailAddressChange,
    onFirstNameChange,
    onLastNameChange,
    onPasswordChange,
    onSubmit,
    password,
  } = props;

  const onSubmitDisabled =
    !emailAddress || !firstName || !lastName || !password;

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
            fullWidth
            label="Last Name"
            onChange={(event) => onLastNameChange(event.target.value)}
            required
            value={lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            onChange={(event) => onPasswordChange(event.target.value)}
            required
            type="password"
            value={password}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid>
      </Grid>
      <Button
        disabled={onSubmitDisabled}
        fullWidth
        sx={{ mt: 3, mb: 2 }}
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
  onEmailAddressChange: PropTypes.func.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
};
