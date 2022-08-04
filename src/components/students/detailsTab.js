import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import DetailsTabEdit from './detailTabEdit';
import DetailsTabDisplay from './detailsTabDisplay';

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
  careers: PropTypes.array.isRequired,
};
