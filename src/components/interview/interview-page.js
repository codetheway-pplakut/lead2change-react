import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import BasicTabs from './tabs';
import Navbar from '../admin/sampleNavbar';
import ROUTES from '../../constants/routes';

function saveResponses() {
  return null;
}

export default function InterviewPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <h1
        align="center"
        style={{ backgroundColor: '#004cbb', color: 'rgb(255,255,255)' }}
      >
        Student Names Interview
      </h1>

      <BasicTabs />
      <Stack
        spacing={75}
        direction="row"
        sx={{
          p: 2,
        }}
      >
        <Button variant="outlined" onClick={() => navigate(ROUTES.HOME)}>
          Back To Home
        </Button>
        <Button variant="contained" onClick={saveResponses}>
          Save
        </Button>
      </Stack>
    </div>
  );
}
