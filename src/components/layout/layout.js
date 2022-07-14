import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';

function Layout() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={8} lg={9}>
          <Typography variant="h2">Screen Title</Typography>
          <Typography variant="h6" gutterBottom>
            Screen Subtitle
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Button color="error">Action 1</Button>
            <Button>Action 2</Button>
            <Button>Action 3</Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          Secondary
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Card>
            <Box sx={{ m: 1 }}>Primary</Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;
