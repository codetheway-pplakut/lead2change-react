import { useContext, useState } from 'react';
import { Avatar, Container, Typography, Box } from '@mui/material';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { useNavigate } from 'react-router-dom';
import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';
import LoginForm from './login-form/login-form';
import AuthenticationContext from '../../context/authentication/authentication';
import ROUTES from '../../constants/routes';
import ForgotPassword from './forgot-password';
import getToken from '../../util/get-token/get-token';

export default function Login() {
  const { login } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSignUpFormSubmit = async () => {
    setIsLoading(true);
    await login({ username, password });

    setIsLoading(false);
    navigate(ROUTES.HOME);
    window.localStorage.setItem(
      'lead2change-token',
      sessionStorage.getItem('lead2change-token')
    );
    console.log(sessionStorage.getItem('lead2change-token'));
  };

  return (
    <>
      <ProgressIndicatorOverlay active={isLoading} />
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <SupervisedUserCircleIcon />
          </Avatar>
          <Typography variant="h5">Log-in</Typography>
          <LoginForm
            onUsernameChange={setUsername}
            onPasswordChange={setPassword}
            onSubmit={onSignUpFormSubmit}
            password={password}
            username={username}
          />
          <ForgotPassword />
        </Box>
      </Container>
    </>
  );
}
