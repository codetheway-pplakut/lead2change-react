import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import SignUpForm from './sign-up-form/sign-up-form';

import { addStudent, getStudents } from '../../services/students/students';
import ROUTES from '../../constants/routes';
import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [dob, setDOB] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  const refreshStudents = async () => {
    setIsLoading(true);
    const response = await getStudents();

    setIsLoading(false);
    setStudents(response);
  };
  useEffect(() => {
    refreshStudents();
  }, []);

  const onSignUpFormSubmit = async () => {
    const dateOfBirth = new Date(dob);
    const student = {
      email,
      firstName,
      lastName,
      dateOfBirth,
      cellPhone,
    };

    const filteredStudents = students.filter((studentx) => {
      if (
        studentx.email === student.email &&
        studentx.firstName === student.firstName &&
        studentx.lastName === student.lastName
      ) {
        return true;
      }
      return false;
    });

    if (filteredStudents.length > 0) {
      console.log('Existing Student');
    } else {
      await addStudent(student);
      navigate(ROUTES.SIGN_UP_SUCCESS);
    }
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
            emailAddress={email}
            firstName={firstName}
            lastName={lastName}
            studentCellPhone={cellPhone}
            studentDateOfBirth={dob}
            onEmailAddressChange={setEmail}
            onStudentDateOfBirthChange={setDOB}
            onStudentCellPhoneChange={setCellPhone}
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
