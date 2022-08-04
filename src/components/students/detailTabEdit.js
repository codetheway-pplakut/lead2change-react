import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import ColorButton from '../coaches/Shared/ColoredButton';

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
  const { students } = props;
  const { onCancelClick, updateFunction, onSaveClick } = props;
  const [value, setValue] = React.useState(0);

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

  const [enteredParentLastName, setEnteredParentLastName] = React.useState(
    students.parentLastName
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
    students.assistanceForForms = enteredAssistanceForForms;
    students.supportNeeded = enteredSupportNeeded;
    students.goalSet = enteredGoalSet;
    students.dateGoalSet = enteredGoalSet;
    students.sel = enteredSel;
    students.goalReviewDate = enteredGoalReviewDate;
    students.wasItAccomplished = enteredWasItAccomplished;
    students.explanation = enteredExplanation;
    students.parentFirstName = enteredParentFirstName;
    students.parentLastName = enteredParentLastName;
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ marginRight: '8vh' }}>
      <Box
        sx={{ bgcolor: 'background.paper', width: '75vh', overflowY: 'auto' }}
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
              sx={{ bgcolor: '#2656A5' }}
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
                      value={enteredPlanAfterHighSchool}
                      label="Plans after High School"
                      onChange={(e) =>
                        setEnteredPlanAfterHighSchool(e.target.value)
                      }
                      required
                      focused
                    />
                  </Grid>
                  <Grid marginTop={2} marginBottom={3}>
                    <TextField
                      id="text-area-q1"
                      multiline
                      fullWidth
                      maxRows={4}
                      value={enteredCollegesList}
                      label="Colleges Plan/Applied To"
                      onChange={(event) =>
                        setEnteredCollegesList(event.target.value)
                      }
                      required
                      focused
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
                      focused
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
                        onChange={(e) =>
                          setEnteredCollegeApplicationStatus(e.target.value)
                        }
                      >
                        <MenuItem value="" />
                        <MenuItem value>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
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
                        onChange={(e) =>
                          setEnteredCollegeEssayStatus(e.target.value)
                        }
                      >
                        <MenuItem value="" />
                        <MenuItem value>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
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
                        onChange={(e) =>
                          setEnteredCollegeEssayHelp(e.target.value)
                        }
                      >
                        <MenuItem value="" />
                        <MenuItem value>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
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
                      focused
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
                      focused
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
                      focused
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
                      focused
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
                      focused
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
                      focused
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
                      focused
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
                      focused
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
                        label="CompletedFinAid"
                        value={enteredFinancialAidProcessComplete}
                        onChange={(e) =>
                          setEnteredFinancialAidProcessComplete(e.target.value)
                        }
                      >
                        <MenuItem value="" />
                        <MenuItem value>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
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
                        <MenuItem value>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
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
                        <MenuItem value>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
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
                        label="First Name"
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
                        value={enteredParentLastName}
                        label="Last Name"
                        onChange={(event) =>
                          setEnteredParentLastName(event.target.value)
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
          <Grid align="right">
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
  students: PropTypes.object.isRequired,
};
