import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ErrorPage(props) {
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
      </Box>
    </Container>
  );
}

export default ErrorPage;
