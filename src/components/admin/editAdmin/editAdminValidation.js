import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function Validation(props) {
  const { firstName, lastName, email, password, confirmPassword, save } = props;

  if (save) {
    let firstNameError;
    let lastNameError;
    let emailErrorOne;
    let emailErrorTwo;
    let passwordError;
    let passwordErrorConfirmation;

    if (firstName.length < 1) {
      firstNameError = (
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          First Name Error; First Name Required.
        </Typography>
      );
    }
    if (lastName.length < 1) {
      lastNameError = (
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Last Name Error; Last Name Required.
        </Typography>
      );
    }
    if (email.length < 1) {
      emailErrorOne = (
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Email Error; Email Required.
        </Typography>
      );
    }
    if (email.indexOf('@') < 0) {
      emailErrorTwo = (
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Email Error; Please enter a valid email of the form ___@___.___
        </Typography>
      );
    }
    if (password.length < 1) {
      passwordError = (
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Password Error; Password Required.
        </Typography>
      );
    }
    if (
      password.indexOf('1') < 0 &&
      password.indexOf('2') < 0 &&
      password.indexOf('3') < 0 &&
      password.indexOf('4') < 0 &&
      password.indexOf('5') < 0 &&
      password.indexOf('6') < 0 &&
      password.indexOf('7') < 0 &&
      password.indexOf('8') < 0 &&
      password.indexOf('9') < 0 &&
      password.indexOf('0') < 0
    ) {
      passwordError = (
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Password Error; Password must contain a digit (0,1,2,3,4,5,6,7,8,9).
        </Typography>
      );
    }
    if (password === confirmPassword) {
      passwordErrorConfirmation = (
        <Typography variant="subtitle2" sx={{ color: 'red' }}>
          Password Error; Password and Confirm Password do not match.
        </Typography>
      );
    }

    return (
      <div>
        {firstNameError}
        {lastNameError}
        {emailErrorOne}
        {emailErrorTwo}
        {passwordError}
        {passwordErrorConfirmation}
      </div>
    );
  }
}

Validation.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  save: PropTypes.bool.isRequired,
};
