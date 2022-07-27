import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function CreateCareerModal(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vh',
    bgcolor: 'background.paper',
    border: '',
    boxShadow: '12vh',
    p: '2vh',
  };
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
      <Button onClick={handleOpen}>Create a New Career</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Box>
              <Grid container>
                <Grid item xs={11}>
                  <Typography variant="h5" component="h2" align="center">
                    New Career
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <IconButton color="primary" onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Stack direction="row" spacing={2} sx={{ my: 2 }}>
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
              </Stack>
            </Box>
            <Box>
              <Stack direction="column" spacing={2} sx={{ my: 2 }}>
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
              </Stack>
            </Box>
            <Button
              variant="contained"
              fullWidth
              onClick={Create}
              type="submit"
              value={
                (collegeBound,
                careerCluster,
                specificCareer,
                technicalCollegeBound)
              }
            >
              Create Career
            </Button>
          </Box>
        </Modal>
      </Modal>
    </div>
  );
}

CreateCareerModal.propTypes = {
  addFunction: PropTypes.func.isRequired,
};
