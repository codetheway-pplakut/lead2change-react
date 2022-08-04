import React, { useEffect, useState } from 'react';
import { Grid, Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import { useParams } from 'react-router-dom';
import BasicTabs from './tabs';
import ExitModal from './exit-modal';

import { getInterviewsById } from '../../services/interviews/interview';
import { getStudentById } from '../../services/students/students';

const theme = createTheme({
  components: {
    MuiGrid: {
      variants: [
        {
          props: { variant: 'large' },
          style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '750px',
            width: '50%',
            backgroundColor: 'white',
            boxShadow: 12,
          },
        },
        {
          props: { variant: 'small' },
          style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '150px',
            width: '25%',
            backgroundColor: 'white',
            boxShadow: 12,
          },
        },
        {
          props: { variant: 'ModalText' },
          style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '150px',
            width: '25%',
            backgroundColor: 'white',
            boxShadow: 12,
          },
        },
      ],
    },
  },
});

export default function InterviewPage() {
  const { studentId } = useParams();
  const [students, setStudents] = useState({});

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid
            item
            align="center"
            style={{
              // backgroundColor: '#2656A5',
              marginBottom: '2vh',
              color: 'black',
              padding: '0.1vh',
            }}
            sx={{ width: '100%' }}
          >
            <h1>{students.studentFirstName}&#39;s Interview</h1>
          </Grid>
        </Grid>
        <Alert severity="warning" align="center">
          Please make sure to finish all InterviewQuestions before saving!
        </Alert>
        <BasicTabs />
        <Stack
          spacing={75}
          direction="row"
          sx={{
            p: 2,
          }}
        >
          <ExitModal />
        </Stack>
      </ThemeProvider>
    </div>
  );
}
