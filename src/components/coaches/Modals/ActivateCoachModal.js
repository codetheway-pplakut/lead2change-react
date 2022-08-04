import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';

import ColorButton from '../Shared/ColoredButton';

export default function ReactivationModal(props) {
  const { coach, updateFunction } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Reactivate = () => {
    handleClose();
    const updatedCoach = {
      id: coach.id, // TODO : Update to agreed ID creation method
      coachFirstName: coach.coachFirstName,
      coachLastName: coach.coachLastName,
      coachEmail: coach.coachEmail,
      coachPhoneNumber: coach.coachPhoneNumber,
      students: coach.students,
      active: true,
    };
    updateFunction(updatedCoach, true);
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

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        theme={buttonTheme}
        color="cancel"
      >
        Reactivate
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
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
                    Reactivate Coach
                  </Typography>
                  <IconButton
                    onClick={handleClose}
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                  >
                    <CloseIcon fontSize="large" sx={{ color: 'white' }} />
                  </IconButton>
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
            <Box padding="30px">
              <Grid item xs={12} align="center">
                Are you sure you want to Reactivate {coach.coachFirstName}{' '}
                {coach.coachLastName}?
              </Grid>
            </Box>

            <Grid item xs={4}>
              <Button
                theme={buttonTheme}
                color="delete"
                variant="contained"
                onClick={Reactivate}
                style={{ minWidth: '120px' }}
              >
                <Typography paddingTop="5px" paddingBottom="5px">
                  Reactivate
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

ReactivationModal.propTypes = {
  coach: PropTypes.object.isRequired,
  updateFunction: PropTypes.func.isRequired,
};
