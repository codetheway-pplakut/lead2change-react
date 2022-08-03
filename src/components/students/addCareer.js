import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ColorButton from '../coaches/Shared/ColoredButton';

import { getCareersById } from '../../services/careers/careers';

export default function AddCareer(props) {
  const { studentId } = useParams;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [students, setStudents] = useState({});
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
  const [enteredIsCollegeBound, setEnteredIsCollegeBound] = React.useState('');

  const [enteredCareerCluster, setEnteredCareerCluster] = React.useState('');

  const [enteredSpecificCluster, setEnteredSpecificCluster] =
    React.useState('');

  const [enteredTechnicalCollegeBound, setEnteredTechnicalCollegeBound] =
    React.useState('');

  useEffect(() => {
    const currentCareer = async () => {
      const currCareer = await getCareersById(studentId);

      const {
        collegeBound,
        careerCluster,
        specificCluster,
        technicalCollegeBound,
      } = currCareer;
      setStudents(currCareer);

      setEnteredIsCollegeBound(collegeBound);
      setEnteredCareerCluster(careerCluster);
      setEnteredSpecificCluster(specificCluster);
      setEnteredTechnicalCollegeBound(technicalCollegeBound);
    };
    currentCareer();
  }, [studentId]);

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
                    value={enteredIsCollegeBound}
                    onChange={(event) =>
                      setEnteredIsCollegeBound(event.target.value)
                    }
                  >
                    <MenuItem value="" />
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
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
                    value={enteredTechnicalCollegeBound}
                    onChange={(event) =>
                      setEnteredTechnicalCollegeBound(event.target.value)
                    }
                  >
                    <MenuItem value="" />
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
                  </Select>
                </FormControl>
                <Grid item xs={12} sx={{ marginBottom: '1.5vh' }}>
                  <TextField
                    size="small"
                    className="typing-container"
                    variant="outlined"
                    value={enteredCareerCluster}
                    label="Number of Career Clusters"
                    fullWidth
                    onChange={(event) =>
                      setEnteredCareerCluster(event.target.value)
                    }
                    required
                  />
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '1.5vh' }}>
                  <TextField
                    size="small"
                    className="typing-container"
                    value={enteredSpecificCluster}
                    fullWidth
                    label="Career of Choice"
                    onChange={(event) =>
                      setEnteredSpecificCluster(event.target.value)
                    }
                    required
                  />
                </Grid>
                <Grid item xs={2}>
                  <ColorButton
                    variant="contained"
                    fullWidth
                    style={{ marginBottom: '1.5vh' }}
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
