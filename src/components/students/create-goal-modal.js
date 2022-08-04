import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import ColorButton from '../coaches/Shared/ColoredButton';
import { addGoal } from '../../services/goals/goals';

export default function CreateGoalModal(props) {
  const { studentId } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [goalSet, setGoalSet] = useState('');
  const [dateGoalSet, setDateGoalSet] = useState('');
  const [sel, setsel] = useState('');
  const [goalReviewDate, setGoalReviewDate] = useState('');
  const [wasItAccomplished, setWasItAccomplished] = useState('');
  const [explanation, setExplanation] = useState('');

  const Create = async () => {
    handleClose();
    {
      const Goal = {
        studentId,
        goalSet,
        sel,
        dateGoalSet,
        goalReviewDate,
        wasItAccomplished,
        explanation,
      };
      await addGoal(Goal);
      window.location.reload(false);
    }
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
        studentId={studentId}
        startIcon={<AddIcon />}
        sx={{ padding: '8px', minWidth: '100px' }}
        theme={buttonTheme}
        color="cancel"
      >
        New Goal
      </Button>
      <Modal open={open} onClose={handleClose}>
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
                    New Goal
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

          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
                <Grid item xs={12}>
                  <TextField
                    value={goalSet}
                    fullWidth
                    label="Your Goal"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setGoalSet(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={sel}
                    fullWidth
                    label="SEL"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setsel(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Goal Set Date:</Typography>
                  <TextField
                    value={dateGoalSet}
                    fullWidth
                    type="date"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setDateGoalSet(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Goal review date:</Typography>
                  <TextField
                    value={goalReviewDate}
                    fullWidth
                    type="date"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setGoalReviewDate(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={wasItAccomplished}
                    fullWidth
                    label="Was the goal accomplished?"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setWasItAccomplished(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={explanation}
                    fullWidth
                    label="Explanation"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setExplanation(e.target.value);
                    }}
                  />
                </Grid>
                <Grid
                  container
                  spacing={1}
                  sx={{ p: 2 }}
                  justifyContent="center"
                >
                  <Grid item xs={4}>
                    <Button
                      theme={buttonTheme}
                      color="delete"
                      variant="contained"
                      onClick={Create}
                      style={{ minWidth: '120px' }}
                      value={
                        (goalSet,
                        dateGoalSet,
                        sel,
                        goalReviewDate,
                        wasItAccomplished,
                        explanation)
                      }
                    >
                      <Typography paddingTop="5px" paddingBottom="5px">
                        Add Goal
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
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
