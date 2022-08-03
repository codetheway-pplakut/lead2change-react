import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import ColorButton from '../coaches/Shared/ColoredButton';

import { getStudentById } from '../../services/students/students';
import { getGoalById } from '../../services/goals/goals';
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

export default function DetailsTabEdit(props) {
  const { onCancelClick, updateFunction, onSaveClick } = props;
  const { studentId, goalId } = useParams();
  const [value, setValue] = React.useState(0);
  const [students, setStudents] = useState({});
  const [goals, setGoals] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function currentStudentTest() {
    return getStudentById(studentId);
  }

  const [enteredPlanAfterHighSchool, setEnteredPlanAfterHighSchool] =
    React.useState(currentStudentTest.planAfterHighSchool);

  const [enteredCollegesList, setEnteredCollegesList] = React.useState(
    currentStudentTest.collegesList
  );

  const [enteredFirstChoiceCollege, setEnteredFirstChoiceCollege] =
    React.useState(currentStudentTest.firstChoiceCollege);

  const [enteredCollegeApplicationStatus, setEnteredCollegeApplicationStatus] =
    React.useState(currentStudentTest.collegeApplicationStatus);

  const [enteredCollegeEssayStatus, setEnteredCollegeEssayStatus] =
    React.useState(currentStudentTest.collegeEssayStatus);

  const [enteredCollegeEssayHelp, setEnteredCollegeEssayHelp] = React.useState(
    currentStudentTest.collegeEssayHelp
  );

  const [enteredPactTestScore, setEnteredPactTestScore] = React.useState(
    currentStudentTest.pactTestScore
  );

  const [enteredPsatTestDate, setEnteredPsatTestDate] = React.useState(
    currentStudentTest.psatTestDate
  );

  const [enteredPsatTestScore, setEnteredPsatTestScore] = React.useState(
    currentStudentTest.psatTestScore
  );

  const [enteredPactTestDate, setEnteredPactTestDate] = React.useState(
    currentStudentTest.pactTestDate
  );

  const [enteredActTestScore, setEnteredActTestScore] = React.useState(
    currentStudentTest.actTestScore
  );

  const [enteredActTestDate, setEnteredActTestDate] = React.useState(
    currentStudentTest.actTestDate
  );

  const [enteredSatTestScore, setEnteredSatTestScore] = React.useState(
    currentStudentTest.satTestScore
  );

  const [enteredSatTestDate, setEnteredSatTestDate] = React.useState(
    currentStudentTest.satTestDate
  );

  const [
    enteredFinancialAidProcessComplete,
    setEnteredFinancialAidProcessComplete,
  ] = React.useState(currentStudentTest.financialAidProcessComplete);

  const [enteredAssistanceForForms, setEnteredAssistanceForForms] =
    React.useState(currentStudentTest.assistanceForForms);

  const [enteredSupportNeeded, setEnteredSupportNeeded] = React.useState(
    currentStudentTest.supportNeeded
  );

  const [enteredGoalSet, setEnteredGoalSet] = React.useState(
    currentStudentTest.goalSet
  );

  const [enteredDateGoalSet, setEnteredDateGoalSet] = React.useState(
    currentStudentTest.dateGoalSet
  );

  const [enteredSel, setEnteredSel] = React.useState(currentStudentTest.sel);

  const [enteredGoalReviewDate, setEnteredGoalReviewDate] = React.useState(
    currentStudentTest.goalReviewDate
  );

  const [enteredWasItAccomplished, setEnteredWasItAccomplished] =
    React.useState(currentStudentTest.wasItAccomplished);

  const [enteredExplanation, setEnteredExplanation] = React.useState(
    currentStudentTest.explanation
  );

  const [enteredParentFirstName, setEnteredParentFirstName] = React.useState(
    currentStudentTest.parentFirstName
  );

  const [enteredParentAddress, setEnteredParentAddress] = React.useState(
    currentStudentTest.parentAddress
  );

  const [enteredParentApartmentNumber, setEnteredParentApartmentNumber] =
    React.useState(currentStudentTest.parentApartmentNumber);

  const [enteredParentCity, setEnteredParentCity] = React.useState(
    currentStudentTest.parentCity
  );

  const [enteredParentState, setEnteredParentState] = React.useState(
    currentStudentTest.parentState
  );

  const [enteredParentZipCode, setEnteredParentZipCode] = React.useState(
    currentStudentTest.parentZipCode
  );

  const [enteredParentCellPhone, setEnteredParentCellPhone] = React.useState(
    currentStudentTest.parentCellPhone
  );

  const [enteredParentEmail, setEnteredParentEmail] = React.useState(
    currentStudentTest.parentEmail
  );

  const [enteredGuidanceCounselor, setEnteredGuidanceCounselor] =
    React.useState(currentStudentTest.guidanceConselor);

  // const [enteredWorkStatus, setEnteredWorkStatus] = React.useState('');

  // const [enteredAcceptanceState, setEnteredAcceptanceStatus] =
  //   React.useState('');

  const [enteredStudentSignature, setEnteredStudentSignature] = React.useState(
    currentStudentTest.studentSignature
  );

  const [enteredStudentSignatureDate, setEnteredStudentSignatureDate] =
    React.useState(currentStudentTest.studentSignatureDate);

  const [enteredParentSignature, setEnteredParentSignature] = React.useState(
    currentStudentTest.parentSignature
  );

  const [enteredParentSignatureDate, setEnteredParentSignatureDate] =
    React.useState(currentStudentTest.parentSignatureDate);

  const [enteredIsCollegeBound, setEnteredIsCollegeBound] = React.useState(
    currentStudentTest.isCollegeBound
  );

  const [enteredCareerCluster, setEnteredCareerCluster] = React.useState(
    currentStudentTest.careerCluster
  );

  const [enteredSpecificCluster, setEnteredSpecificCluster] = React.useState(
    currentStudentTest.specificCluster
  );

  const [enteredTechnicalCollegeBound, setEnteredTechnicalCollegeBound] =
    React.useState(currentStudentTest.technicalCollegeBound);

  const EditField = () => {
    onSaveClick();
    handleClose();
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
    updateFunction(students);
  };
  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);

      const {
        planAfterHighSchool,
        collegesList,
        firstChoiceCollege,
        collegeApplicationStatus,
        collegeEssayStatus,
        collegeEssayHelp,
        pactTestScore,
        psatTestDate,
        psatTestScore,
        pactTestDate,
        actTestScore,
        actTestDate,
        satTestScore,
        satTestDate,
        parentFirstName,
        address,
        parentApartmentNumber,
        parentCity,
        parentZipCode,
        parentState,
        parentCellPhone,
        parentEmail,
        knowGuidanceCounselor,
        // workStatus,
        // acceptanceStatus,
        studentSignature,
        studentSignatureDate,
        parentSignature,
        parentSignatureDate,
      } = currStudent;
      setStudents(currStudent);

      setEnteredPlanAfterHighSchool(planAfterHighSchool);
      setEnteredCollegesList(collegesList);
      setEnteredFirstChoiceCollege(firstChoiceCollege);
      setEnteredCollegeApplicationStatus(collegeApplicationStatus);
      setEnteredCollegeEssayStatus(collegeEssayStatus);
      setEnteredCollegeEssayHelp(collegeEssayHelp);
      setEnteredPactTestScore(pactTestScore);
      setEnteredPsatTestDate(psatTestDate);
      setEnteredPsatTestScore(psatTestScore);
      setEnteredPactTestDate(pactTestDate);
      setEnteredActTestScore(actTestScore);
      setEnteredActTestDate(actTestDate);
      setEnteredSatTestScore(satTestScore);
      setEnteredSatTestDate(satTestDate);
      setEnteredParentFirstName(parentFirstName);
      setEnteredParentAddress(address);
      setEnteredParentApartmentNumber(parentApartmentNumber);
      setEnteredParentCity(parentCity);
      setEnteredParentState(parentState);
      setEnteredParentZipCode(parentZipCode);
      setEnteredParentCellPhone(parentCellPhone);
      setEnteredParentEmail(parentEmail);
      setEnteredGuidanceCounselor(knowGuidanceCounselor);
      setEnteredStudentSignature(studentSignature);
      setEnteredStudentSignatureDate(studentSignatureDate);
      setEnteredParentSignature(parentSignature);
      setEnteredParentSignatureDate(parentSignatureDate);
    };

    const currentGoal = async () => {
      const currGoal = await getGoalById(goalId);

      const {
        goalSet,
        dateGoalSet,
        sel,
        goalReviewDate,
        wasItAccomplished,
        explanation,
      } = currGoal;
      setGoals(currGoal);

      setEnteredGoalSet(goalSet);
      setEnteredDateGoalSet(dateGoalSet);
      setEnteredSel(sel);
      setEnteredGoalReviewDate(goalReviewDate);
      setEnteredWasItAccomplished(wasItAccomplished);
      setEnteredExplanation(explanation);
    };

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
    currentStudent();
    currentGoal();
  }, [studentId, goalId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ marginRight: '8vh' }}>
      <Box
        sx={{ bgcolor: 'background.paper', width: '100vh', overflowY: 'auto' }}
      >
        <form onSubmit={onSaveClick}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#FFFFFF',
                  height: '3px',
                },
              }}
            >
              <Tab label="Education" />
              <Tab label="Goals" />
              <Tab label="Careers" />
              <Tab label="Other" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} style={{ overflowY: 'auto' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container justifyContent="flex-end">
                <Grid
                  item
                  xs={12}
                  sx={{ minWidth: 10, height: 'max-content' }}
                  style={{ height: '64vh' }}
                >
                  <Grid>
                    <h3 style={{ color: '#2656A5' }}>Post Secondary Plan</h3>

                    <TextField
                      fullWidth
                      variant="filled"
                      value={enteredPlanAfterHighSchool}
                      label="Plans after High School"
                      onChange={(e) =>
                        setEnteredPlanAfterHighSchool(e.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid marginTop={2} marginBottom={3}>
                    <TextField
                      id="text-area-q1"
                      multiline
                      fullWidth
                      maxRows={4}
                      variant="filled"
                      value={enteredCollegesList}
                      label="Colleges Plan/Applied To"
                      onChange={(event) =>
                        setEnteredCollegesList(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      size="small"
                      className="typing-container"
                      value={enteredFirstChoiceCollege}
                      label="College First Choice"
                      onChange={(event) =>
                        setEnteredFirstChoiceCollege(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid marginTop={1}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Have Applied To College
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        value={enteredCollegeApplicationStatus}
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Started College Essay
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        value={enteredCollegeEssayStatus}
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Need Help With College Essay
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        value={enteredCollegeEssayHelp}
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <h3 style={{ color: '#2656A5' }}>
                    College Entrance Exam Information:
                  </h3>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      value={enteredPactTestScore}
                      label="PACT Score"
                      type="number"
                      onChange={(event) =>
                        setEnteredPactTestScore(event.target.value)
                      }
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="PACT Date"
                      type="date"
                      value={enteredPactTestDate}
                      onChange={(event) =>
                        setEnteredPactTestDate(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      value={enteredPsatTestScore}
                      label="PSAT Score"
                      type="number"
                      onChange={(e) => setEnteredPsatTestScore(e.target.value)}
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="PSAT Date"
                      type="date"
                      value={enteredPsatTestDate}
                      onChange={(event) =>
                        setEnteredPsatTestDate(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      value={enteredActTestScore}
                      label="ACT Score"
                      type="number"
                      onChange={(event) =>
                        setEnteredActTestScore(event.target.value)
                      }
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="ACT Date"
                      type="date"
                      value={enteredActTestDate}
                      onChange={(event) =>
                        setEnteredActTestDate(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      value={enteredSatTestScore}
                      label="SAT Score"
                      type="number"
                      onChange={(event) =>
                        setEnteredSatTestScore(event.target.value)
                      }
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="SAT Date"
                      type="date"
                      value={enteredSatTestDate}
                      onChange={(event) =>
                        setEnteredSatTestDate(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <h3 style={{ color: '#2656A5' }}>Financial Aid:</h3>
                  <Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Completed Finacial Aid Process
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        value={enteredFinancialAidProcessComplete}
                        onChange={(event) =>
                          setEnteredFinancialAidProcessComplete(
                            event.target.value
                          )
                        }
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Need Help With FAFSA
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        value={enteredAssistanceForForms}
                        onChange={(event) =>
                          setEnteredAssistanceForForms(event.target.value)
                        }
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid marginBottom={2}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Support Needed
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        value={enteredSupportNeeded}
                        onChange={(event) =>
                          setEnteredSupportNeeded(event.target.value)
                        }
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1} style={{ overflowY: 'auto' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container justifyContent="flex-end">
                <Grid item xs={12} style={{ height: '64vh' }}>
                  <Grid>
                    <h3 style={{ color: '#2656A5' }}>Goal One</h3>
                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        value={enteredGoalSet}
                        label="Set Goal"
                        onChange={(event) =>
                          setEnteredGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Set Date"
                        type="date"
                        value={enteredDateGoalSet}
                        onChange={(event) =>
                          setEnteredDateGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredSel}
                        label="SEL"
                        onChange={(event) => setEnteredSel(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        type="date"
                        label="Review Date"
                        value={enteredGoalReviewDate}
                        onChange={(event) =>
                          setEnteredGoalReviewDate(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 200 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Accomplishment State{' '}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={enteredWasItAccomplished}
                          onChange={(event) =>
                            setEnteredWasItAccomplished(event.target.value)
                          }
                        >
                          <MenuItem value="" />
                          <MenuItem value={10}>In Progress</MenuItem>
                          <MenuItem value={20}>Completed</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        value={enteredExplanation}
                        label="Explanation"
                        onChange={(event) =>
                          setEnteredExplanation(event.target.value)
                        }
                        required
                      />
                    </Grid>

                    <h3 style={{ color: '#2656A5' }}>Goal Two</h3>
                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        value={enteredGoalSet}
                        label="Set Goal"
                        onChange={(event) =>
                          setEnteredGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Set Date"
                        type="date"
                        value={enteredDateGoalSet}
                        onChange={(event) =>
                          setEnteredDateGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredSel}
                        label="SEL"
                        onChange={(event) => setEnteredSel(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        type="date"
                        label="Review Date"
                        value={enteredGoalReviewDate}
                        onChange={(event) =>
                          setEnteredGoalReviewDate(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 200 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Accomplishment State{' '}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={enteredWasItAccomplished}
                          onChange={(event) =>
                            setEnteredWasItAccomplished(event.target.value)
                          }
                        >
                          <MenuItem value="" />
                          <MenuItem value={10}>In Progress</MenuItem>
                          <MenuItem value={20}>Completed</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        value={enteredExplanation}
                        label="Explanation"
                        onChange={(event) =>
                          setEnteredExplanation(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <h3 style={{ color: '#2656A5' }}>Goal Three</h3>
                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        value={enteredGoalSet}
                        label="Set Goal"
                        onChange={(event) =>
                          setEnteredGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Set Date"
                        type="date"
                        value={enteredDateGoalSet}
                        onChange={(event) =>
                          setEnteredDateGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredSel}
                        label="SEL"
                        onChange={(event) => setEnteredSel(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        type="date"
                        label="Review Date"
                        value={enteredGoalReviewDate}
                        onChange={(event) =>
                          setEnteredGoalReviewDate(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 200 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Accomplishment State{' '}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={enteredWasItAccomplished}
                          onChange={(event) =>
                            setEnteredWasItAccomplished(event.target.value)
                          }
                        >
                          <MenuItem value="" />
                          <MenuItem value={10}>In Progress</MenuItem>
                          <MenuItem value={20}>Completed</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        value={enteredExplanation}
                        label="Explanation"
                        onChange={(event) =>
                          setEnteredExplanation(event.target.value)
                        }
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2} style={{ overflowY: 'auto' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container justifyContent="flex-end">
                <Grid item xs={12} style={{ height: '64vh' }}>
                  <Grid>
                    <h3 style={{ color: '#2656A5' }}>Career Information</h3>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: '22vh' }}
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
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredCareerCluster}
                        label="Number of Career Clusters"
                        onChange={(event) =>
                          setEnteredCareerCluster(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredSpecificCluster}
                        label="Career of Choice"
                        onChange={(event) =>
                          setEnteredSpecificCluster(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
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
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3} style={{ overflowY: 'auto' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container justifyContent="flex-end">
                <Grid item xs={12} style={{ height: '64vh' }}>
                  <Grid>
                    <h3 style={{ color: '#2656A5' }}>Parent Information</h3>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentFirstName}
                        label="Name"
                        onChange={(event) =>
                          setEnteredParentFirstName(event.target.value)
                        }
                        required
                      />
                    </Grid>

                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentAddress}
                        label="Address"
                        onChange={(event) =>
                          setEnteredParentAddress(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentApartmentNumber}
                        label="Apt. #"
                        onChange={(event) =>
                          setEnteredParentApartmentNumber(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentCity}
                        label="City"
                        onChange={(event) =>
                          setEnteredParentCity(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentState}
                        label="State"
                        onChange={(event) =>
                          setEnteredParentState(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentZipCode}
                        label="Zip Code"
                        onChange={(event) =>
                          setEnteredParentZipCode(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentCellPhone}
                        label="Cell Phone"
                        onChange={(event) =>
                          setEnteredParentCellPhone(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentEmail}
                        label="Email"
                        onChange={(event) =>
                          setEnteredParentEmail(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <h3 style={{ color: '#2656A5' }}>
                      Guidance Couselor Info:
                    </h3>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Knows Guidance Counselor{' '}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        value={enteredGuidanceCounselor}
                        onChange={(event) =>
                          setEnteredGuidanceCounselor(event.target.value)
                        }
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                    <h3 style={{ color: '#2656A5' }}>Admin Details:</h3>
                    <Grid>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 200 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Work Status{' '}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          label="Work Status"
                          // value={enteredWorkStatus}
                          defaultValue={10}
                          // onChange={(event) =>
                          //   setEnteredWorkStatus(event.target.value)
                          // }
                        >
                          <MenuItem value="" />
                          <MenuItem value={10}>Active</MenuItem>
                          <MenuItem value={20}>Inactive</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Acceptance Status{' '}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Acceptance Status"
                        defaultValue={10}
                        // value={enteredAcceptanceStatus}
                        // onChange={(event) =>
                        //   setEnteredAcceptanceStatus(event.target.value)
                        // }
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Accepted</MenuItem>
                        <MenuItem value={20}>Not Accepted</MenuItem>
                      </Select>
                    </FormControl>
                    <h3 style={{ color: '#2656A5' }}>Signatures</h3>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredStudentSignature}
                        label="Student Signature"
                        onChange={(event) =>
                          setEnteredStudentSignature(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Date Signed"
                        type="date"
                        value={enteredStudentSignatureDate}
                        onChange={(event) =>
                          setEnteredStudentSignatureDate(event.target.value)
                        }
                        required
                      />
                    </Grid>

                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentSignature}
                        label="Parent Signature"
                        onChange={(event) =>
                          setEnteredParentSignature(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Date Signed"
                        type="date"
                        value={enteredParentSignatureDate}
                        onChange={(event) =>
                          setEnteredParentSignatureDate(event.target.value)
                        }
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <Grid align="center">
            <ColorButton variant="contained" type="Submit" onClick={EditField}>
              Save
            </ColorButton>
            {'   '}
            <ColorButton variant="contained" onClick={onCancelClick}>
              Cancel
            </ColorButton>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

DetailsTabEdit.propTypes = {
  onCancelClick: PropTypes.func.isRequired,
  updateFunction: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
};
