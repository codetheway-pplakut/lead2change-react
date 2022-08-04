import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import TabsFunction from './detailsTab';
import StudentInfoEdit from './studentInfoEdit';
import StudentInfoDisplay from './studentInfoDisplay';
import { getGoalById, getGoalsByStudentId } from '../../services/goals/goals';
import { getCareersById } from '../../services/careers/careers';
import {
  getStudentById,
  getStudents,
  updateStudent,
} from '../../services/students/students';

export default function ResponsiveGrid(props) {
  const [goals, setGoals] = useState({});
  const [career, setCareer] = useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const { studentId } = useParams();
  const [students, setStudents] = useState({});

  const refreshStudents = async () => {
    setIsLoading(true);
    const result = await getStudents();
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
      const currGoal = await getGoalsByStudentId(studentId);
      setGoals(currGoal);
    };

    const currentCareer = async () => {
      const currCareer = await getCareersById(studentId);
      setCareer(currCareer);
    };
    currentCareer();
    currentGoal();
  }, [studentId]);

  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);
  const cancelEditing = () => setIsEditing(false);

  const saveStudentInfo = (studentInfo) => {
    updateStudent(studentInfo);
    refreshStudents();
  };

  const onSaveClick = async (event) => {
    saveStudentInfo(students);
    endEditing();
  };

  const onCancelClick = () => {
    cancelEditing();
  };

  return (
    <Grid container>
      <Grid
        item
        align="center"
        style={{
          backgroundColor: '#2656A5',
          marginBottom: '3vh',
          color: '#FFFFFF',
          padding: '0.1vh',
        }}
        sx={{ width: '100%' }}
      >
        <h1>
          {students.studentFirstName} {students.studentLastName}&rsquo;s Details
        </h1>
      </Grid>
      <Stack direction="row" spacing={2}>
        {isEditing ? (
          <StudentInfoEdit
            students={students}
            goals={goals}
            careers={career}
            onSaveClick={onSaveClick}
            onCancelClick={onCancelClick}
            updateFunction={updateStudentInfo}
          />
        ) : (
          <StudentInfoDisplay
            students={students}
            goals={goals}
            careers={career}
            onEditClick={startEditing}
          />
        )}
        <TabsFunction
          students={students}
          goals={goals}
          careers={career}
          updateFunction={updateStudentInfo}
        />
      </Stack>
    </Grid>
  );
}
