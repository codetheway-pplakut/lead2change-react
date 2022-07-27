import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import ColorButton from '../coaches/Shared/ColoredButton';

export default function AddCareerModal(props) {
  const { addFunction } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [id] = useState('');
  const [collegeBound, setCollegeBound] = useState(false);
  const [careerCluster, setCareerCluster] = useState(-1);
  const [specificCareer, setSpecificCareer] = useState('');
  const [technicalCollegeBound, setTechnicalCollegeBound] = useState(false);

  const Complete = () => {
    handleClose();
    addFunction(
      id,
      collegeBound,
      careerCluster,
      specificCareer,
      technicalCollegeBound
    );
  };

  return (
    <div>
      <ColorButton variant="contained" onClick={handleOpen}>
        New Career
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
                <Box
                  value={collegeBound}
                  fullWidth
                  label="Is this student college bound?"
                  justifyContent="center"
                  onChange={(e) => {
                    setCollegeBound(collegeBound + e.target.value);
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox name="collegeBoundTrue" value="true" />}
                    label="Yes"
                  />
                </Box>
                <Grid item xs={12}>
                  What career cluster is the student interested in?
                  <TextField
                    value={careerCluster}
                    fullWidth
                    label="career cluster"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setCareerCluster(e.target.value);
                    }}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  What specific career did the student take interest in?
                  <TextField
                    value={specificCareer}
                    fullWidth
                    label="Specified Career"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setSpecificCareer(e.target.value);
                    }}
                  />
                  <Box
                    value={collegeBound}
                    fullWidth
                    label="Is this student technical college bound?"
                    justifyContent="center"
                    onChange={(e) => {
                      setTechnicalCollegeBound(
                        technicalCollegeBound + e.target.value
                      );
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="technicalcollegeBoundTrue"
                          value="true"
                        />
                      }
                      label="Yes"
                    />
                  </Box>
                  <Grid item xs={2}>
                    <ColorButton
                      variant="contained"
                      fullWidth
                      onClick={Complete}
                      value={
                        (id,
                        collegeBound,
                        careerCluster,
                        specificCareer,
                        technicalCollegeBound)
                      }
                    >
                      Complete
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
        </Grid>
      </Modal>
    </div>
  );
}

AddCareerModal.propTypes = {
  id: PropTypes.string.isRequired,
  collegeBound: PropTypes.bool.isRequired,
  careerCluster: PropTypes.number.isRequired,
  specificCareer: PropTypes.string.isRequired,
  technicalCollegeBound: PropTypes.bool.isRequired,
  addFunction: PropTypes.func.isRequired,
};
