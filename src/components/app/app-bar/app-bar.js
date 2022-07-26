import React from 'react';
import { useNavigate } from 'react-router';
import Menu from '@mui/icons-material/Menu';
import MaterialAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
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
          sx={{ mr: 1 }}
        >
          <Menu />
        </IconButton>
        <Button variant="text" onClick={onHomeClick} justify="center">
          {title && (
            <Typography variant="h6" color="white">
              {title}
            </Typography>
          )}
        </Button>
        {/* {title && <Typography variant="h6">{title}</Typography>} */}
        <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xl={2} sx={{ ml: 2 }}>
              <Button variant="text" onClick={onStudentClick} justify="center">
                <Typography color="white" variant="body2">
                  Students
                </Typography>
              </Button>
            </Grid>
            <Grid item xl={2}>
              <Button variant="text" onClick={onCoachesClick} justify="center">
                <Typography color="white" variant="body2">
                  Coaches
                </Typography>
              </Button>
            </Grid>
            <Grid item xl={2}>
              <Button
                variant="text"
                onClick={onInterviewsClick}
                justify="center"
              >
                <Typography color="white" variant="body2">
                  Interviews
                </Typography>
              </Button>
            </Grid>
            <Grid item xl={2}>
              <Button variant="text" onClick={onSignUpClick} justify="center">
                <Typography color="white" variant="body2">
                  Sign Up
                </Typography>
              </Button>
            </Grid>
            <Grid item xl={2} sx={{ ml: 52 }}>
              <Button variant="text" onClick={onLogoutClick} justify="center">
                <Typography color="white" variant="body2">
                  <span>LOG OUT: ***</span>
                </Typography>
              </Button>
            </Grid>
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
