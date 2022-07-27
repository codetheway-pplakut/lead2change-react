import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
import ColorButton from '../coaches/Shared/ColoredButton';

export default function CreateCareerModal(props) {
  const { addFunction } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [collegeBound, setCollegeBound] = useState('');
  const [careerCluster, setCareerCluster] = useState('');
  const [specificCareer, setSpecificCareer] = useState('');
  const [technicalCollegeBound, setTechnicalCollegeBound] = useState('');

  const Create = () => {
    handleClose();
    addFunction(
      collegeBound,
      careerCluster,
      specificCareer,
      technicalCollegeBound
    );
  };

  return (
    <div>
      <ColorButton variant="contained" onClick={handleOpen}>
        + New Career
      </ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Grid container variant="large">
          <Grid container>
            <Grid item sx={{ bgcolor: '#004cbb', color: 'white' }} xs={12}>
              <Grid container alignItems="center" sx={{ margin: 1 }}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography variant="h5" component="h2" align="center">
                    New Career
                  </Typography>
                </Grid>
                <Grid item xs={1} />
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
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
                <Grid item xs={12}>
                  <TextField
                    value={collegeBound}
                    fullWidth
                    label="Are you College Bound?"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setCollegeBound(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={careerCluster}
                    fullWidth
                    label="Enter your Career Cluster"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setCareerCluster(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={specificCareer}
                    fullWidth
                    label="What is your specific career of choice?"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setSpecificCareer(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={technicalCollegeBound}
                    fullWidth
                    label="Are you Technical College Bound?"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setTechnicalCollegeBound(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <ColorButton
                    variant="contained"
                    fullWidth
                    onClick={Create}
                    value={
                      (collegeBound,
                      careerCluster,
                      specificCareer,
                      technicalCollegeBound)
                    }
                  >
                    Create
                  </ColorButton>
                </Grid>
                <Grid item xs={2}>
                  <ColorButton
                    variant="contained"
                    fullWidth
                    onClick={handleClose}
                  >
                    Cancel
                  </ColorButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}

CreateCareerModal.propTypes = {
  addFunction: PropTypes.func.isRequired,
};
