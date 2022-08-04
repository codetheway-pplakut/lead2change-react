import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Button,
  Grid,
  Typography,
  Box,
  FormControl,
  Modal,
  TextField,
  Container,
} from '@mui/material';
import { requestReset } from '../../services/users/users';
// import { getStudentById } from '../../services/students/students';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '500px',
  width: '40%',
  bgcolor: 'background.paper',
  boxShadow: 12,
  // p: 4,
};

function ForgotPassword() {
  // const { studentId } = useParams();
  // const [students, setStudents] = useState({});

  // useEffect(() => {
  //   const currentStudent = async () => {
  //     const currStudent = await getStudentById(studentId);
  //     setStudents(currStudent);
  //   };
  //   currentStudent();
  // }, [studentId]);
  // const x = students.studentEmail;
  // console.log(`${x}`);

  const [isError, setIsError] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState('');
  const emailHandler = async (event) => {
    // const validRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|edu|org)$/i; old /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    event.preventDefault();

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      console.log(email);
      await requestReset(email);
      console.log('Test');

      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const reset = () => {
    setIsError(true);
    setEmail('');
    handleClose();
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button onClick={handleOpen}>Forgot Password?</Button>
        <Modal
          open={open}
          onClose={reset}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container>
              <Grid
                item
                sx={{ bgcolor: '#004cbb', color: 'white', mt: -4 }}
                xs={12}
              >
                <Grid container>
                  <Grid item xs={2} />
                  <Grid item xs={8} sx={{ m: 2, pr: 4 }}>
                    <Typography variant="h5" component="h2" align="center">
                      Reset Password
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Typography
              id="modal-modal-description"
              align="center"
              sx={{ mt: 1, ml: 3, pr: 4 }}
            >
              Please enter your email for password recovery
            </Typography>
            <Grid item align="center" xs={6}>
              <FormControl
                sx={{ bgcolor: 'common.white', mt: 3, mb: 2, ml: 3, pr: 4 }}
              >
                {isError ? (
                  <TextField
                    label="Email Address"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                ) : (
                  <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Invaild Email Address."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                )}
              </FormControl>
            </Grid>
            <Grid item align="center" xs={6} sx={{ ml: 3, mb: 2, pr: 4 }}>
              <Button onClick={emailHandler}>Send email</Button>
            </Grid>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
}

export default ForgotPassword;
