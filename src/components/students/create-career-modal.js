import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ColorButton from '../coaches/Shared/ColoredButton';
import { addCareers } from '../../services/careers/careers';

export default function CreateCareerModal(props) {
  const { studentId } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [collegeBound, setCollegeBound] = React.useState('');
  const [careerCluster, setCareerCluster] = React.useState('');
  const [specificCareer, setSpecificCareer] = React.useState('');
  const [technicalCollegeBound, setTechnicalCollegeBound] = React.useState('');

  const Create = async () => {
    handleClose();
    {
      const Career = {
        studentId,
        collegeBound,
        careerCluster,
        specificCareer,
        technicalCollegeBound,
      };
      await addCareers(Career);
      window.location.reload(false);
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '750px',
    width: '50%',
    backgroundColor: 'white',
    boxShadow: 12,
  };

  return (
    <div>
      <ColorButton
        variant="contained"
        onClick={handleOpen}
        studentId={studentId}
      >
        + New Career
      </ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Grid container sx={style}>
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
          <Grid item xs={12}>
            <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: '40vh' }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    I am College Bound{' '}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="College Bound?"
                    fullWidth
                    value={collegeBound}
                    onChange={(event) => setCollegeBound(event.target.value)}
                  >
                    <MenuItem value="" />
                    <MenuItem value>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant="standard"
                  sx={{
                    m: 1,
                    minWidth: '42vh',
                    marginBottom: '1.5vh',
                    marginLeft: '2vh',
                  }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    I am Technical Bound{' '}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Technical Bound?"
                    value={technicalCollegeBound}
                    onChange={(event) =>
                      setTechnicalCollegeBound(event.target.value)
                    }
                  >
                    <MenuItem value="" />
                    <MenuItem value>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
                <Grid item xs={12} sx={{ marginBottom: '1.5vh' }}>
                  <TextField
                    size="small"
                    className="typing-container"
                    variant="outlined"
                    value={careerCluster}
                    label="Number of Career Clusters"
                    fullWidth
                    onChange={(event) => setCareerCluster(event.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '1.5vh' }}>
                  <TextField
                    size="small"
                    className="typing-container"
                    value={specificCareer}
                    fullWidth
                    label="Career of Choice"
                    onChange={(event) => setSpecificCareer(event.target.value)}
                    required
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
