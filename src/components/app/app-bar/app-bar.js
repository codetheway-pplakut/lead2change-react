import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Menu from '@mui/icons-material/Menu';
import MaterialAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import getName from '../../../util/name/get-name';
import ROUTES from '../../../constants/routes';
import getToken from '../../../util/get-token/get-token';
import isTokenExpired from '../../../util/is-token-expired/is-token-expired';

export default function AppBar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { onMenuClick, title } = props;

  const token = getToken('lead2change-token');
  const isExpired = isTokenExpired(token);

  const onStudentClick = () => {
    navigate(ROUTES.STUDENTS);
  };
  const onHomeClick = () => {
    navigate(ROUTES.HOME);
  };
  const onCoachesClick = () => {
    navigate(ROUTES.COACHES);
  };
  const onAdminsClick = () => {
    navigate(ROUTES.ADMIN);
  };
  const onSignUpClick = () => {
    navigate(ROUTES.SIGN_UP);
  };
  const onLogoutClick = () => {
    sessionStorage.removeItem('lead2change-token');
    window.location.href = '/';
  };

  return location.pathname === '/' && isExpired ? (
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
            <Button variant="text">
              {title && (
                <Typography variant="h6" color="white">
                  {title}
                </Typography>
              )}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text">
              <Typography color="white" variant="body2">
                Students
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text">
              <Typography color="white" variant="body2">
                Coaches
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text">
              <Typography color="white" variant="body2">
                Admins
              </Typography>
            </Button>
          </Grid>
          {/* <Grid item>
            <Button variant="text">
              <Typography color="white" variant="body2">
                Sign Up
              </Typography>
            </Button>
              </Grid> */}
        </Grid>
      </Toolbar>
    </MaterialAppBar>
  ) : (
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
            <Button variant="text" onClick={onAdminsClick}>
              <Typography color="white" variant="body2">
                Admins
              </Typography>
            </Button>
          </Grid>
          {/* <Grid item>
            <Button variant="text" onClick={onSignUpClick}>
              <Typography color="white" variant="body2">
                Sign Up
              </Typography>
            </Button>
          </Grid>
              */}
        </Grid>
        <Grid container alignItems="center" justifyContent="flex-end">
          <Grid item xs="auto">
            <Button variant="text" onClick={onLogoutClick}>
              <Typography color="white" variant="body2">
                <span>LOG OUT: {getName()}</span>
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
