import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/routes';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          align="center"
          color="text.primary"
          component="h1"
          gutterBottom
          variant="h2"
          sx={{ mt: 5 }}
        >
          Something went wrong
        </Typography>
        <Button variant="contained" onClick={() => navigate(ROUTES.HOME)}>
          Go Back To Home
        </Button>
      </Box>
    </Container>
  );
}

export default ErrorPage;
