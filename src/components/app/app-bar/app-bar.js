import React from 'react';
import { useNavigate } from 'react-router';
import Menu from '@mui/icons-material/Menu';
import MaterialAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

export default function AppBar(props) {
  const navigate = useNavigate();
  const { onMenuClick, title } = props;

  const onStudentClick = () => {
    navigate(ROUTES.STUDENTS);
  };
  const onHomeClick = () => {
    navigate(ROUTES.HOME);
  };
  const onCoachesClick = () => {
    navigate(ROUTES.COACHES);
  };
  const onInterviewsClick = () => {
    navigate(ROUTES.INTERVIEW_PAGE);
  };
  const onSignUpClick = () => {
    navigate(ROUTES.SIGN_UP);
  };
  const onLogoutClick = () => {
    navigate(ROUTES.LOGIN);
    localStorage.removeItem('token'); // I don't know backend
  };

  return (
    <MaterialAppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          size="large"
        >
          <Menu />
        </IconButton>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item xs="auto">
            <Button variant="text" onClick={onHomeClick}>
              {title && (
                <Typography variant="h6" color="white">
                  {title}
                </Typography>
              )}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" onClick={onStudentClick}>
              <Typography color="white" variant="body2">
                Students
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" onClick={onCoachesClick}>
              <Typography color="white" variant="body2">
                Coaches
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" onClick={onInterviewsClick}>
              <Typography color="white" variant="body2">
                Interviews
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" onClick={onSignUpClick}>
              <Typography color="white" variant="body2">
                Sign Up
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="flex-end">
          <Grid xs="auto">
            <Button variant="text" onClick={onLogoutClick}>
              <Typography color="white" variant="body2">
                <span>LOG OUT: ***</span>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </MaterialAppBar>
  );
}

AppBar.propTypes = {
  onMenuClick: PropTypes.func,
  title: PropTypes.string,
};

AppBar.defaultProps = {
  onMenuClick: undefined,
  title: '',
};
