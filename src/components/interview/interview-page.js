import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BasicTabs from './tabs';
import Navbar from '../admin/sampleNavbar';
import ExitModal from './exit-modal';

import {
  getInterviews,
  getInterviewsById,
} from '../../services/interviews/interview';

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
  const [isLoading, setIsLoading] = useState(false);
  const [interview, setInterview] = useState();

  const refreshInterview = async () => {
    setIsLoading(true);
    const response = await getInterviewsById(
      'b0ba6354-eb97-49b1-a030-08da6b234c0f'
    );
    setIsLoading(false);
    setInterview(response);
    console.log(response);
    response.questions.map((question) => {
      console.log(question.questionString);
      console.log(question.answerString);
      console.log(question);
    });
  };
  useEffect(() => {
    refreshInterview();
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
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
            <h1>STUDENT NAME INTERVIEW</h1>
          </Grid>
        </Grid>
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
