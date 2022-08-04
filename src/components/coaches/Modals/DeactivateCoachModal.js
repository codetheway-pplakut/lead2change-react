import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import ColorButton from '../Shared/ColoredButton';

export default function InactivationModal(props) {
  const { coach, unassignFunction } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Inactivate = () => {
    handleClose();
    unassignFunction(coach);
  };

  const closeIconColor = {
    color: 'white',
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 430,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
  };

  const buttonTheme = createTheme({
    palette: {
      delete: {
        main: '#004cbb',
        contrastText: '#fff',
      },
      cancel: {
        main: '#004cbb',
        contrastText: '#fff',
      },
    },
  });

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        theme={buttonTheme}
        color="cancel"
      >
        Deactivate
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid container>
            <Grid
              item
              sx={{
                bgcolor: '#004cbb',
                color: 'white',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              xs={12}
            >
              <Grid container alignItems="center" sx={{ margin: 1 }}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography
                    variant="h5"
                    component="h2"
                    align="center"
                    padding="10px"
                  >
                    Deactivate Coach
                  </Typography>
                  <IconButton
                    onClick={handleClose}
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                  >
                    <CloseIcon fontSize="large" sx={closeIconColor} />
                  </IconButton>
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
            <Box padding="30px">
              <Grid item xs={12} align="center">
                Are you sure you want to deactivate {coach.coachFirstName}{' '}
                {coach.coachLastName}?
              </Grid>
            </Box>
            <Grid item xs={4}>
              <Button
                theme={buttonTheme}
                color="delete"
                variant="contained"
                onClick={Inactivate}
                style={{ minWidth: '120px' }}
              >
                <Typography paddingTop="5px" paddingBottom="5px">
                  Deactivate
                </Typography>
              </Button>
            </Grid>
            <Grid xs={1} />
            <Grid item xs={4}>
              <Button
                theme={buttonTheme}
                color="cancel"
                variant="contained"
                onClick={handleClose}
                style={{ minWidth: '120px' }}
              >
                <Typography padding="5px">Cancel</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

InactivationModal.propTypes = {
  coach: PropTypes.object.isRequired,
  unassignFunction: PropTypes.func.isRequired,
};
