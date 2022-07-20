/* eslint-disable react/require-default-props */
import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { getCoachById, getCoaches } from '../../services/coaches/coaches';

export default function CoachAssignModal(props) {
  const { confirmHandler, studentId, coachId } = props;
  const [coaches, setCoaches] = useState([]);
  const [value, setValue] = useState('Unassigned');
  const [newCoachId, setNewCoachId] = useState('');
  const refreshCoaches = async () => {
    const response = await getCoaches();
    setCoaches(response);
  };
  useEffect(() => {
    refreshCoaches();
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const confirm = () => {
    if (newCoachId !== '') {
      confirmHandler(studentId, newCoachId);
    }
    handleClose();
  };

  const handleGetCoach = (id) => {
    if (id !== null) {
      const coachName = `${getCoachById(id).coachFirstName} ${
        getCoachById(id).coachLastName
      }`;
      return coachName;
    }
    return 'Unassigned';
  };

  const handleCoachChange = (event) => {
    setValue(event.target.value);
    setNewCoachId(value.value);
  };

  return (
    <div>
      {handleGetCoach(coachId)} <IconButton onClick={handleOpen}> <EditIcon /> </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <FormControl>
            <FormLabel>Coaches</FormLabel>
            <RadioGroup value={value} onChange={handleCoachChange}>
              <FormControlLabel
                value="Unassigned"
                control={<Radio />}
                label="Unassigned"
              />
              {coaches.map((coach) => (
                <FormControlLabel
                  value={coach.id}
                  control={<Radio />}
                  label={handleGetCoach(coach.id)}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <Grid container spacing={4} sx={{ mt: '1vh' }}>
            <Grid item xs={6} align="center">
              <Button
                variant="contained"
                color="warning"
                onClick={confirm}
                fullWidth
              >
                Assign
              </Button>
            </Grid>
            <Grid item xs={6} align="center">
              <Button variant="contained" onClick={handleClose} fullWidth>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

CoachAssignModal.propTypes = {
  confirmHandler: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
  coachId: PropTypes.string,
};
