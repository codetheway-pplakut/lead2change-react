import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import SignUpForm from './sign-up-form/sign-up-form';
import signUp from '../../services/sign-up/sign-up';
import { addStudent } from '../../services/students/students';
import ROUTES from '../../constants/routes';
import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';

export default function SignUp() {
  const [studentEmail, setEmail] = useState('');
  const [studentFirstName, setFirstName] = useState('');
  const [studentLastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [studentCellPhone, setStudentCellPhone] = useState('');
  const [studentDateOfBirth, setStudentDateOfBirth] = useState(new Date());

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSignUpFormSubmit = async () => {
    const student = {
      studentEmail,
      studentFirstName,
      studentLastName /* password */,
    };
    /* setIsLoading(true); */

    await addStudent(student);
    console.log('Success');
    /* setIsLoading(false);
    navigate(ROUTES.SIGN_UP_SUCCESS); */
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
            emailAddress={studentEmail}
            firstName={studentFirstName}
            lastName={studentLastName}
            studentCellPhone={studentCellPhone}
            studentDateOfBirth={studentDateOfBirth}
            onEmailAddressChange={setEmail}
            onStudentDateOfBirthChange={setStudentDateOfBirth}
            onStudentCellPhoneChange={setStudentCellPhone}
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
