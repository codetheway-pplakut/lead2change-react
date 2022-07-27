import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import ColorButton from '../coaches/Shared/ColoredButton';

export default function AddCareerModal(props) {
  const { addFunction } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [id] = useState('');
  const [collegeBound, setCollegeBound] = useState(false);
  const [careerCluster, setCareerCluster] = useState(3);
  const [specificCareer, setSpecificCareer] = useState('');
  const [technicalCollegeBound, setTechnicalCollegeBound] = useState(false);

  const Complete = () => {
    handleClose();
    console.log(id);
    console.log(collegeBound);
    console.log(careerCluster);
    console.log(specificCareer);
    console.log(technicalCollegeBound);
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
                  label=""
                  justifyContent="center"
                  onChange={(e) => {
                    setCollegeBound(e.target.value);
                  }}
                >
                  <FormControl>
                    <FormLabel>
                      Is this student college bound?
                      <FormControlLabel
                        control={
                          <Checkbox name="collegeBoundTrue" value="true" />
                        }
                        label="Yes"
                      />
                    </FormLabel>
                  </FormControl>
                </Box>
                <Box
                  value={collegeBound}
                  fullWidth
                  label="Is this student technical college bound?"
                  justifyContent="center"
                  onChange={(e) => {
                    setTechnicalCollegeBound(e.target.value);
                  }}
                >
                  {' '}
                  <FormControl>
                    <FormLabel>
                      Is this student technical college bound?
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="technicalcollegeBoundTrue"
                            value="true"
                          />
                        }
                        label="Yes"
                      />
                    </FormLabel>
                  </FormControl>
                </Box>
                <Grid item xs={12}>
                  What career cluster is the student interested in?
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Career Clusters
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={careerCluster}
                        label="careerCluster"
                        onChange={(e) => {
                          setCareerCluster(e.target.value);
                        }}
                      >
                        <MenuItem value={1}>
                          Agriculture, Food &#38; Natural Resources
                        </MenuItem>
                        <MenuItem value={2}>
                          Architecture &#38; Construction
                        </MenuItem>
                        <MenuItem value={3}>
                          Arts, A/V Technology &#38; Communications
                        </MenuItem>
                        <MenuItem value={4}>
                          Business Management &#38; Administration
                        </MenuItem>
                        <MenuItem value={5}>Education &#38; Training</MenuItem>
                        <MenuItem value={6}>Finance</MenuItem>
                        <MenuItem value={7}>
                          Government &#38; Public Administration
                        </MenuItem>
                        <MenuItem value={8}>Health Science</MenuItem>
                        <MenuItem value={9}>Hospitality &#38; Tourism</MenuItem>
                        <MenuItem value={10}>Human Services</MenuItem>
                        <MenuItem value={11}>Information Technology</MenuItem>
                        <MenuItem value={12}>
                          Law, Public Safety, Corrections &#38; Security
                        </MenuItem>
                        <MenuItem value={13}>Manufacturing</MenuItem>
                        <MenuItem value={14}>Marketing</MenuItem>
                        <MenuItem value={15}>
                          Science, Technology, Engineering &#38; Mathematics
                        </MenuItem>
                        <MenuItem value={16}>
                          Transportation, Distribution &#38; Logistics
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
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
                    components="span"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
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
                  </Box>
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
