import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import BasicTabs from './tabs';
import Navbar from '../admin/sampleNavbar';
import ExitModal from './exit-modal';

function saveResponses() {
  return null;
}

export default function InterviewPage() {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid
          item
          align="center"
          style={{
            backgroundColor: '#2656A5',
            marginBottom: '2vh',
            color: '#FFFFFF',
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

        <Button variant="contained" onClick={saveResponses}>
          Save
        </Button>
      </Stack>
    </div>
  );
}
