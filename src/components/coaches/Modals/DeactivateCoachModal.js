import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
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
  return (
    <div>
      <ColorButton variant="contained" onClick={handleOpen}>
        Deactivate
      </ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Grid container variant="small">
          <Grid container>
            <Grid item sx={{ bgcolor: '#2656A5', color: 'white' }} xs={12}>
              <Grid container alignItems="center" sx={{ margin: 1 }}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography variant="h5" component="h2" align="center">
                    Deactivate Coach
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    align="right"
                    size="medium"
                    onClick={handleClose}
                    sx={{ color: 'white' }}
                  >
                    <CloseOutlinedIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
            <Grid item xs={12} align="center">
              Are you sure you want to deactivate {coach.coachFirstName}{' '}
              {coach.coachLastName}?
            </Grid>
            <Grid item xs={6}>
              <ColorButton variant="contained" fullWidth onClick={Inactivate}>
                Deactivate
              </ColorButton>
            </Grid>
            <Grid item xs={6}>
              <ColorButton variant="contained" fullWidth onClick={handleClose}>
                Cancel
              </ColorButton>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}

InactivationModal.propTypes = {
  coach: PropTypes.object.isRequired,
  unassignFunction: PropTypes.func.isRequired,
};
