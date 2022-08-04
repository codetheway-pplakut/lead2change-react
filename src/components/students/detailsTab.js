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

export default function TabsFunction(props) {
  const [goals, setGoals] = useState({});
  const [career, setCareer] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { studentId } = useParams();
  const { updateFunction } = props;
  const [students, setStudents] = useState({});
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);
  const cancelEditing = () => setIsEditing(false);

  const refreshStudents = async () => {
    setIsLoading(true);
    const result = await getStudentById(studentId);
    setIsLoading(false);
    setStudents(result);
  };

  const updateStudentInfo = async (student) => {
    await updateStudent(student);
    await refreshStudents();
  };

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
    const currentGoal = async () => {
      const currGoal = await getGoalsByStudentId(students.id);

      const {
        goalSet,
        dateGoalSet,
        sel,
        goalReviewDate,
        wasItAccomplished,
        explanation,
      } = currGoal;
      setGoals(currGoal);
    };

    const currentCareer = async () => {
      const currCareer = await getCareersById(students.id);

      const {
        collegeBound,
        careerCluster,
        specificCluster,
        technicalCollegeBound,
      } = currCareer;
      setCareer(currCareer);
    };
    currentCareer();
    currentGoal();
  }, [studentId]);

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
          updateFunction={updateStudentInfo}
          students={students}
        />
      ) : (
        <DetailsTabDisplay
          students={students}
          goals={goals}
          careers={career}
          onEditClick={startEditing}
        />
      )}
    </Grid>
  );
}
TabsFunction.propTypes = {
  updateFunction: PropTypes.func.isRequired,
};
