import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ColorButton from '../coaches/Shared/ColoredButton';
import CreateGoalModal from './create-goal-modal';
import DetailsTabEdit from './detailTabEdit';
import AddCareer from './addCareer';
import DetailsTabDisplay from './detailsTabDisplay';

import { getStudentById } from '../../services/students/students';
import { getGoalById, getGoalsByStudentId } from '../../services/goals/goals';
import { getCareersById } from '../../services/careers/careers';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function TabsFunction() {
  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);
  const cancelEditing = () => setIsEditing(false);

  const saveStudentInfo = (studentInfo) => {
    console.log(studentInfo);
  };

  const cancelStudentInfo = (studentInfo) => {
    console.log('cancel');
  };

  const onSaveClick = (event) => {
    saveStudentInfo();
    endEditing();
    event.preventDefault();
  };

  const onCancelClick = () => {
    cancelStudentInfo();
    cancelEditing();
  };

  return (
    <Grid container>
      {isEditing ? (
        <DetailsTabEdit
          onSaveClick={onSaveClick}
          onCancelClick={onCancelClick}
        />
      ) : (
        <DetailsTabDisplay onEditClick={startEditing} />
      )}
    </Grid>
  );
}
