import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import SignUpForm from './sign-up-form/sign-up-form';
import signUp from '../../services/sign-up/sign-up';
import ROUTES from '../../constants/routes';
import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';

export default function SignUp() {
  const [emailAddress, setEmailAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSignUpFormSubmit = async () => {
    const user = { emailAddress, firstName, lastName, password };
    setIsLoading(true);

    await signUp(user);
    setIsLoading(false);
    navigate(ROUTES.SIGN_UP_SUCCESS);
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
          <Typography variant="h5">Sign up</Typography>
          <SignUpForm
            emailAddress={emailAddress}
            firstName={firstName}
            lastName={lastName}
            onEmailAddressChange={setEmailAddress}
            onFirstNameChange={setFirstName}
            onLastNameChange={setLastName}
            onPasswordChange={setPassword}
            onSubmit={onSignUpFormSubmit}
            password={password}
          />
        </Box>
      </Container>
    </>
  );
}
