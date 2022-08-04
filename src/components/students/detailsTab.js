import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import DetailsTabEdit from './detailTabEdit';
import DetailsTabDisplay from './detailsTabDisplay';

import {
  getStudentById,
  updateStudent,
} from '../../services/students/students';

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

export default function TabsFunction(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { updateFunction, students, goals, careers } = props;
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);
  const cancelEditing = () => setIsEditing(false);

  const onSaveClick = async (event) => {
    endEditing();
  };

  const onCancelClick = () => {
    cancelEditing();
  };

  return (
    <Grid container>
      {isEditing ? (
        <DetailsTabEdit
          onSaveClick={onSaveClick}
          onCancelClick={onCancelClick}
          updateFunction={updateFunction}
          students={students}
        />
      ) : (
        <DetailsTabDisplay
          students={students}
          goals={goals}
          careers={careers}
          onEditClick={startEditing}
        />
      )}
    </Grid>
  );
}
TabsFunction.propTypes = {
  updateFunction: PropTypes.func.isRequired,
  students: PropTypes.object.isRequired,
  goals: PropTypes.array.isRequired,
  careers: PropTypes.object.isRequired,
};
