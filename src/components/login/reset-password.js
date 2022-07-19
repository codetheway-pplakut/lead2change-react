import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Box,
  FormControl,
  Modal,
  TextField,
  Paper,
  Container,
  Stack,
  Avatar,
} from '@mui/material';
import AutorenewTwoToneIcon from '@mui/icons-material/AutorenewTwoTone';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isBlank, setIsBlank] = useState(false); // got it from onSubmitDisabled

  const onSubmitDisabled = !newPassword || !confirmNewPassword;

  const confirmHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
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
            fullWidth
            label="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
            required
            type="email"
            value={newPassword}
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
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={onSubmitDisabled}
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            onClick={confirmHandler}
            variant="contained"
          >
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ResetPassword;

// vaildations
// 0. password regex: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// 1. blank- got it
// 2. both same
// 3. !pre
