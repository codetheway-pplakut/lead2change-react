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
import Box from '@mui/material/Box';

import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';

import { createTheme } from '@mui/material/styles';
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

  const buttonTheme = createTheme({
    palette: {
      save: {
        main: '#004cbb',
        contrastText: '#fff',
      },
      cancel: {
        main: '#004cbb',
        contrastText: '#fff',
      },
    },
  });
  const modalPosition = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 430,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
  };

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
      <Button
        theme={buttonTheme}
        color="cancel"
        variant="contained"
        onClick={handleOpen}
        sx={{ padding: '8px', minWidth: '100px' }}
        startIcon={<AddIcon />}
      >
        New Career
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box container sx={modalPosition}>
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
                    Add Career
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

          <Grid item xs={12}>
            <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
              <Grid item xs={12}>
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
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  padding="20px"
                  align="center"
                >
                  <Grid item xs={4}>
                    <Box>
                      <Button
                        theme={buttonTheme}
                        color="save"
                        variant="contained"
                        sx={{ minWidth: '120px' }}
                      >
                        <Typography padding="5px">Create</Typography>
                      </Button>
                    </Box>
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
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
