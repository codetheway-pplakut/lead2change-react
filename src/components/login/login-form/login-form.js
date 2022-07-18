import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function LoginForm(props) {
  const { onPasswordChange, onSubmit, onUsernameChange, password, username } =
    props;

  const onSubmitDisabled = !username || !password;

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username"
            onChange={(event) => onUsernameChange(event.target.value)}
            required
            type="email"
            value={username}
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
      </Grid>
      <Button
        disabled={onSubmitDisabled}
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        onClick={onSubmit}
        variant="contained"
      >
        Log-In
      </Button>
    </Box>
  );
}

LoginForm.propTypes = {
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
