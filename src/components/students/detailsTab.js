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

import {
  getStudentById,
  getStudents,
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
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { studentId } = useParams();
  const { updateFunction } = props;
  const [students, setStudents] = useState({});
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);
  const cancelEditing = () => setIsEditing(false);

  const [enteredPlanAfterHighSchool, setEnteredPlanAfterHighSchool] =
    React.useState(students.planAfterHighSchool);

  const [enteredCollegesList, setEnteredCollegesList] = React.useState(
    students.collegesList
  );

  const [enteredFirstChoiceCollege, setEnteredFirstChoiceCollege] =
    React.useState(students.firstChoiceCollege);

  const [enteredCollegeApplicationStatus, setEnteredCollegeApplicationStatus] =
    React.useState(students.collegeApplicationStatus);

  const [enteredCollegeEssayStatus, setEnteredCollegeEssayStatus] =
    React.useState(students.collegeEssayStatus);

  const [enteredCollegeEssayHelp, setEnteredCollegeEssayHelp] = React.useState(
    students.collegeEssayHelp
  );

  const [enteredPactTestScore, setEnteredPactTestScore] = React.useState(
    students.pactTestScore
  );

  const [enteredPsatTestDate, setEnteredPsatTestDate] = React.useState(
    students.psatTestDate
  );

  const [enteredPsatTestScore, setEnteredPsatTestScore] = React.useState(
    students.psatTestScore
  );

  const [enteredPactTestDate, setEnteredPactTestDate] = React.useState(
    students.pactTestDate
  );

  const [enteredActTestScore, setEnteredActTestScore] = React.useState(
    students.actTestScore
  );

  const [enteredActTestDate, setEnteredActTestDate] = React.useState(
    students.actTestDate
  );

  const [enteredSatTestScore, setEnteredSatTestScore] = React.useState(
    students.satTestScore
  );

  const [enteredSatTestDate, setEnteredSatTestDate] = React.useState(
    students.satTestDate
  );

  const [
    enteredFinancialAidProcessComplete,
    setEnteredFinancialAidProcessComplete,
  ] = React.useState(students.financialAidProcessComplete);

  const [enteredAssistanceForForms, setEnteredAssistanceForForms] =
    React.useState(students.assistanceForForms);

  const [enteredSupportNeeded, setEnteredSupportNeeded] = React.useState(
    students.supportNeeded
  );

  const [enteredGoalSet, setEnteredGoalSet] = React.useState(students.goalSet);

  const [enteredDateGoalSet, setEnteredDateGoalSet] = React.useState(
    students.dateGoalSet
  );

  const [enteredSel, setEnteredSel] = React.useState(students.sel);

  const [enteredGoalReviewDate, setEnteredGoalReviewDate] = React.useState(
    students.goalReviewDate
  );

  const [enteredWasItAccomplished, setEnteredWasItAccomplished] =
    React.useState(students.wasItAccomplished);

  const [enteredExplanation, setEnteredExplanation] = React.useState(
    students.explanation
  );

  const [enteredParentFirstName, setEnteredParentFirstName] = React.useState(
    students.parentFirstName
  );

  const [enteredParentAddress, setEnteredParentAddress] = React.useState(
    students.parentAddress
  );

  const [enteredParentApartmentNumber, setEnteredParentApartmentNumber] =
    React.useState(students.parentApartmentNumber);

  const [enteredParentCity, setEnteredParentCity] = React.useState(
    students.parentCity
  );

  const [enteredParentState, setEnteredParentState] = React.useState(
    students.parentState
  );

  const [enteredParentZipCode, setEnteredParentZipCode] = React.useState(
    students.parentZipCode
  );

  const [enteredParentCellPhone, setEnteredParentCellPhone] = React.useState(
    students.parentCellPhone
  );

  const [enteredParentEmail, setEnteredParentEmail] = React.useState(
    students.parentEmail
  );

  const [enteredGuidanceCounselor, setEnteredGuidanceCounselor] =
    React.useState(students.guidanceConselor);

  // const [enteredWorkStatus, setEnteredWorkStatus] = React.useState('');

  // const [enteredAcceptanceState, setEnteredAcceptanceStatus] =
  //   React.useState('');

  const [enteredStudentSignature, setEnteredStudentSignature] = React.useState(
    students.studentSignature
  );

  const [enteredStudentSignatureDate, setEnteredStudentSignatureDate] =
    React.useState(students.studentSignatureDate);

  const [enteredParentSignature, setEnteredParentSignature] = React.useState(
    students.parentSignature
  );

  const [enteredParentSignatureDate, setEnteredParentSignatureDate] =
    React.useState(students.parentSignatureDate);

  const [enteredIsCollegeBound, setEnteredIsCollegeBound] = React.useState(
    students.isCollegeBound
  );

  const [enteredCareerCluster, setEnteredCareerCluster] = React.useState(
    students.careerCluster
  );

  const [enteredSpecificCluster, setEnteredSpecificCluster] = React.useState(
    students.specificCluster
  );

  const [enteredTechnicalCollegeBound, setEnteredTechnicalCollegeBound] =
    React.useState(students.technicalCollegeBound);

  const EditField = () => {
    students.planAfterHighSchool = enteredPlanAfterHighSchool;
    students.collegesList = enteredCollegesList;
    students.firstChoiceCollege = enteredFirstChoiceCollege;
    students.collegeApplicationStatus = enteredCollegeApplicationStatus;
    students.collegeEssayStatus = enteredCollegeEssayStatus;
    students.collegeEssayHelp = enteredCollegeEssayHelp;
    students.pactTestScore = enteredPactTestScore;
    students.psatTestDate = enteredPsatTestDate;
    students.psatTestScore = enteredPsatTestScore;
    students.pactTestDate = enteredPactTestDate;
    students.actTestScore = enteredActTestScore;
    students.actTestDate = enteredActTestDate;
    students.satTestScore = enteredSatTestScore;
    students.satTestDate = enteredSatTestDate;
    students.goalSet = enteredGoalSet;
    students.dateGoalSet = enteredGoalSet;
    students.sel = enteredSel;
    students.goalReviewDate = enteredGoalReviewDate;
    students.wasItAccomplished = enteredWasItAccomplished;
    students.explanation = enteredExplanation;
    students.parentFirstName = enteredParentFirstName;
    students.address = enteredParentAddress;
    students.parentApartmentNumber = enteredParentApartmentNumber;
    students.parentCity = enteredParentCity;
    students.parentState = enteredParentState;
    students.parentZipCode = enteredParentZipCode;
    students.parentCellPhone = enteredParentCellPhone;
    students.parentEmail = enteredParentEmail;
    students.knowGuidanceCounselor = enteredGuidanceCounselor;
    // workStatus: enteredWorkStatus,
    // acceptanceState: enteredAcceptanceState,
    students.studentSignature = enteredStudentSignature;
    students.studentSignatureDate = enteredStudentSignatureDate;
    students.parentSignature = enteredParentSignature;
    students.parentSignatureDate = enteredParentSignatureDate;
    students.collegeBound = enteredIsCollegeBound;
    students.careerCluster = enteredCareerCluster;
    students.specificCluster = enteredSpecificCluster;
    students.technicalCollegeBound = enteredTechnicalCollegeBound;
  };

  const refreshStudents = async () => {
    setIsLoading(true);
    const result = await getStudents();
    setIsLoading(false);
    setStudents(result);
  };

  const saveStudentInfo = (studentInfo) => {
    console.log(studentInfo);
    updateStudent(studentInfo);
    refreshStudents();
  };

  const cancelStudentInfo = (studentInfo) => {
    console.log('cancel');
  };

  const onSaveClick = (event) => {
    EditField();
    console.log(students);
    saveStudentInfo(students);
    endEditing();
  };

  const updateStudentInfo = async (student) => {
    // console.log(student);
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
          updateFunction={updateStudentInfo}
        />
      ) : (
        <DetailsTabDisplay onEditClick={startEditing} />
      )}
    </Grid>
  );
}
TabsFunction.propTypes = {
  updateFunction: PropTypes.func.isRequired,
};
