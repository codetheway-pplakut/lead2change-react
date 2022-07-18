import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
import ColorButton from '../Shared/ColoredButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '750px',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 12,
};

export default function InactivationModal(props) {
  const { coach } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Inactivate = () => {
    handleClose();
    // TODO: API Integration
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
        <Box sx={style}>
          <Grid container>
            <Grid item sx={{ bgcolor: '#004cbb', color: 'white' }} xs={12}>
              <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8} sx={{ margin: 2 }}>
                  <Typography variant="h5" component="h2" align="center">
                    Inactivation
                  </Typography>
                </Grid>
                <Grid item sx={{ margin: 1.5 }}>
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
              Are you sure you want to inactivate {coach.coachFirstName}{' '}
              {coach.coachLastName}?
            </Grid>
            <Grid item xs={2}>
              <ColorButton variant="contained" fullWidth onClick={Inactivate}>
                Inactivate
              </ColorButton>
            </Grid>
            <Grid item xs={2}>
              <ColorButton variant="contained" fullWidth onClick={handleClose}>
                Cancel
              </ColorButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

InactivationModal.propTypes = {
  coach: PropTypes.object.isRequired,
};
