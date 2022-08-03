import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { Stack, TextField } from '@mui/material';
import ColorButton from '../coaches/Shared/ColoredButton';
import TabsFunction from './detailsTab';

import StudentInfoEdit from './studentInfoEdit';
import StudentInfoDisplay from './studentInfoDisplay';

import {
  getStudentById,
  getStudents,
  updateStudent,
} from '../../services/students/students';

const StudentInfo = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  p: 0.1,
  m: 0.1,
  bgcolor: 'background.paper',
  borderRadius: 1,
}));

function DisplayBanner() {
  const { studentId } = useParams();
  const [students, setStudents] = useState({});

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);
  return (
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
  );
}

export default function ResponsiveGrid(props) {
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
    console.log(student);
    await updateStudent(student);
    await refreshStudents();
  };

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);

  const { updateFunction } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [enteredFirstName, setEnteredFirstName] = React.useState(
    students.studentFirstName
  );
  const [enteredDateOfBirth, setEnteredDateOfBirth] = React.useState(
    students.studentDateOfBirth
  );
  const [enteredEmail, setEnteredEmail] = React.useState(students.studentEmail);
  const [enteredCellPhone, setEnteredCellPhone] = React.useState(
    students.studentCellPhone
  );
  const [enteredAddress, setEnteredAddress] = React.useState(
    students.studentAddress
  );
  const [enteredApartmentNumber, setEnteredApartmentNumber] = React.useState(
    students.studentApartmentNumber
  );
  const [enteredState, setEnteredState] = React.useState(students.studentState);
  const [enteredZipCode, setEnteredZipCode] = React.useState(
    students.studentZipCode
  );

  const Edit = () => {
    handleClose();
    const updatedStudent = {
      id: students.id, // TODO : Update to agreed ID creation method
      studentFirstName: enteredFirstName,
      studentDateOfBirth: enteredDateOfBirth,
      studentEmail: enteredEmail,
      studentCellPhone: enteredCellPhone,
      studentAddress: enteredAddress,
      studentApartmentNumber: enteredApartmentNumber,
      studentState: enteredState,
      studentZipCode: enteredZipCode,
    };
    updateFunction(updatedStudent);
  };

  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);
  const cancelEditing = () => setIsEditing(false);

  const saveStudentInfo = (studentInfo) => {
    console.log(studentInfo);
    updateStudent(studentInfo);
  };

  const cancelStudentInfo = (studentInfo) => {
    console.log('cancel');
  };

  const onSaveClick = (event) => {
    saveStudentInfo(students);
    endEditing();
    event.preventDefault();
  };

  const onCancelClick = () => {
    cancelStudentInfo();
    cancelEditing();
  };

  return (
    <Grid container>
      <DisplayBanner />
      <Stack direction="row" spacing={2}>
        {isEditing ? (
          <StudentInfoEdit
            onSaveClick={onSaveClick}
            onCancelClick={onCancelClick}
            updateFunction={updateStudentInfo}
          />
        ) : (
          <StudentInfoDisplay onEditClick={startEditing} />
        )}
        <TabsFunction />
      </Stack>
    </Grid>
  );
}
ResponsiveGrid.propTypes = {
  updateFunction: PropTypes.func.isRequired,
};
