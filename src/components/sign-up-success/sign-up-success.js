import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/routes';

export default function SignUpSuccess() {
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
        <Avatar sx={{ m: 1, bgcolor: 'success.light' }}>
          <SupervisedUserCircleIcon />
        </Avatar>
        <Typography variant="h2">Success!</Typography>
        <Typography
          align="center"
          color="text.secondary"
          paragraph
          variant="h5"
        >
          You&apos;ve sucessfully signed up. Thank you for joining!
        </Typography>
        <Button variant="contained" onClick={() => navigate(ROUTES.HOME)}>
          Return Home
        </Button>
      </Box>
    </Container>
  );
}
