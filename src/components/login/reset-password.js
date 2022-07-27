import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Grid,
  Typography,
  Box,
  TextField,
  Avatar,
} from '@mui/material';

import AutorenewTwoToneIcon from '@mui/icons-material/AutorenewTwoTone';
import ROUTES from '../../constants/routes';

function ResetPassword() {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [changeButton, setChangeButton] = useState(false);
  // const [isError, setIsError] = useState(false);

  // Checks if both field is filled
  const onSubmitDisabled = !newPassword || !confirmNewPassword;

  const confirmHandler = (e) => {
    e.preventDefault();

    // const validRegex =
    //   '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$';

    // if ((newPassword && confirmNewPassword) === validRegex) {

    if (newPassword === confirmNewPassword) {
      // console.log('Both field match now the password will be changed.');
      setChangeButton(true);
    } else {
      // console.log(
      //   'Both fields do not match, so your password will not be changed'
      // );
    }
    // }
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center" //  what is this doing
      >
        <Grid item xs={12}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AutorenewTwoToneIcon />
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Set New Password</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7">
            Please set a new password for the following account.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ mt: 3 }}
            fullWidth
            label="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
            required
            type="email"
            value={newPassword}
            // error
            // helperText
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Confirm New Password"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
            type="password"
            value={confirmNewPassword}
            error={newPassword !== confirmNewPassword}
            helperText={
              newPassword !== confirmNewPassword
                ? 'Both field must match!'
                : ' '
            }
          />
        </Grid>
        <Grid item xs={12}>
          {changeButton ? (
            <Button
              fullWidth
              sx={{ mt: 1, mb: 16 }}
              type="button"
              onClick={() => navigate(ROUTES.SIGN_UP)}
              variant="contained"
            >
              Back to Login
            </Button>
          ) : (
            <Button
              fullWidth
              disabled={onSubmitDisabled}
              sx={{ mt: 1, mb: 16 }}
              type="submit"
              onClick={confirmHandler}
              variant="contained"
            >
              Confirm
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ResetPassword;

// vaildations
// 0. password regex: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// 1. blank- got it
// 2. both same - got it
// 3. !pre
