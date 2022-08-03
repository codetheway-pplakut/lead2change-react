import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Divider, Button } from '@mui/material';
import { useParams } from 'react-router';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { green, red } from '@mui/material/colors';

import { createStudentResponse } from '../../services/interviews/interview';
import { getStudentById } from '../../services/students/students';

export default function GritSliderQuestions() {
  const { studentId } = useParams();
  const [students, setStudents] = useState({});

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);

  // const previousResponse = getInterviewsById(studentId);
  // const [interviewNewThingsDistract, setinterviewNewThingsDistract] =
  //   useState(previousResponse.questions[14].answerString);
  // const [
  //   interviewSetbacksDoNotDiscourage,
  //   setinterviewSetbacksDoNotDiscourage,
  // ] = useState('previousResponse.questions[15].answerString');
  // const [interviewLostInterest, setinterviewLostInterest] = useState('previousResponse.questions[16].answerString');
  // const [interviewHardWorking, setinterviewHardWorking] = useState(previousResponse.questions[17].answerString);
  // const [interviewDifferentGoals, setinterviewDifferentGoals] = useState(previousResponse.questions[18].answerString);
  // const [interviewMaintainFocusOnGoals, setinterviewMaintainFocusOnGoals] =
  //   useState(previousResponse.questions[18].answerString);
  // const [interviewFinishGoals, setinterviewFinishGoals] = useState(previousResponse.questions[20].answerString);
  // const [interviewIsDiligent, setinterviewIsDiligent] = useState(previousResponse.questions[21].answerString);

  const [interviewNewThingsDistract, setinterviewNewThingsDistract] =
    useState('');
  const [
    interviewSetbacksDoNotDiscourage,
    setinterviewSetbacksDoNotDiscourage,
  ] = useState('');
  const [interviewLostInterest, setinterviewLostInterest] = useState('');
  const [interviewHardWorking, setinterviewHardWorking] = useState('');
  const [interviewDifferentGoals, setinterviewDifferentGoals] = useState('');
  const [interviewMaintainFocusOnGoals, setinterviewMaintainFocusOnGoals] =
    useState('');
  const [interviewFinishGoals, setinterviewFinishGoals] = useState('');
  const [interviewIsDiligent, setinterviewIsDiligent] = useState('');

  const Save = () => {
    const response = {
      answers: [
        {
          answerString: interviewNewThingsDistract,
          studentId: students.id,
          questionId: 'ef016860-a37c-4cd9-bdda-2db31471a0f3',
          questionString:
            '1. New ideas and projects sometimes distract me from previous ones.',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewSetbacksDoNotDiscourage,
          studentId: students.id,
          questionId: 'a0298dcb-9145-45bf-9b77-a16210fc989f',
          questionString: '2. Setbacks do not discourage me.',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewLostInterest,
          studentId: students.id,
          questionId: 'aa11692a-db27-4e96-8516-6fd1f2b430c2',
          questionString:
            '3. I have been obsessed with a certain idea or project for a short time but later lost interest.',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewHardWorking,
          studentId: students.id,
          questionId: 'f73e90f5-a846-4f5b-9dec-56c4e8ea9a47',
          questionString: '4. I am a hardworker.',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewDifferentGoals,
          studentId: students.id,
          questionId: '1a846eb0-b51d-49d2-bf60-da9c73fbbf97',
          questionString:
            '5. I often set goals but later choose to pursue a different one.',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewMaintainFocusOnGoals,
          studentId: students.id,
          questionId: 'cd87d632-510d-4aa9-bee1-cbb1b789f6a3',
          questionString:
            '6. I have a difficulty maintaining my focus on projects that take more than a few months to complete.',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewFinishGoals,
          studentId: students.id,
          questionId: '899f29ef-4910-4580-ab06-05d5993d8f69',
          questionString: '7. I finish whatever I begin.',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewIsDiligent,
          studentId: students.id,
          questionId: '1794e461-ca4d-4249-8124-c7bcf7d29f4d',
          questionString: '8. I am diligent',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
      ],
    };
    createStudentResponse(response);
  };
  const handleChange = (event) => {
    setinterviewNewThingsDistract(event.target.value);
  };
  const handleChange1 = (event) => {
    setinterviewSetbacksDoNotDiscourage(event.target.value);
  };
  const handleChange2 = (event) => {
    setinterviewLostInterest(event.target.value);
  };
  const handleChange3 = (event) => {
    setinterviewHardWorking(event.target.value);
  };
  const handleChange4 = (event) => {
    setinterviewDifferentGoals(event.target.value);
  };
  const handleChange5 = (event) => {
    setinterviewMaintainFocusOnGoals(event.target.value);
  };
  const handleChange6 = (event) => {
    setinterviewFinishGoals(event.target.value);
  };
  const handleChange7 = (event) => {
    setinterviewIsDiligent(event.target.value);
  };
  return (
    <Container>
      <Box
        components="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          px: 10,
          py: 2,
          width: '100%',
          height: '5%',
        }}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            1. New ideas and projects sometimes distract me from previous ones.{' '}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            align-items="center"
            justify-content="center"
            display="flex"
            sx={{
              pt: 2,
            }}
          >
            <span> Not Like Me At All </span>
            <FormControlLabel
              value="1"
              control={
                <Radio
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange}
                />
              }
              //   labelPlacement="start"
              //  label="Not Like Me At All"
            />

            <FormControlLabel
              value="2"
              control={
                <Radio
                  size="medium"
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange}
                />
              }
              //  labelPlacement="bottom"
              // label="Not Much Like Me"
            />

            <FormControlLabel
              value="3"
              control={
                <Radio
                  size="small"
                  color="default"
                  sx={{
                    px: 4,
                    marginBottom: 0,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                  }}
                  onChange={handleChange}
                />
              }
              //  labelPlacement="bottom"
              // label="Somewhat Like Me"
            />

            <FormControlLabel
              value="4"
              control={
                <Radio
                  size="medium"
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange}
                />
              }
              // labelPlacement="bottom"
              // label="Mostly Like Me"
            />

            <FormControlLabel
              value="5"
              control={
                <Radio
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange}
                />
              }
              // labelPlacement="end"
              //  label="Very Much Like Me"
            />
            <span> Very Much Like Me </span>
          </RadioGroup>
        </FormControl>
      </Box>

      <Divider />

      <Box
        components="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          px: 10,
          py: 2,
          width: '100%',
          height: '5%',
        }}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            2. Setbacks do not discourage me.{' '}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            align-items="center"
            justify-content="center"
            display="flex"
            sx={{
              pt: 2,
            }}
          >
            <span> Not Like Me At All </span>
            <FormControlLabel
              value="1"
              control={
                <Radio
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange1}
                />
              }
              //   labelPlacement="start"
              //  label="Not Like Me At All"
            />

            <FormControlLabel
              value="2"
              control={
                <Radio
                  size="medium"
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange1}
                />
              }
              //  labelPlacement="bottom"
              // label="Not Much Like Me"
            />

            <FormControlLabel
              value="3"
              control={
                <Radio
                  size="small"
                  color="default"
                  sx={{
                    px: 4,
                    marginBottom: 0,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                  }}
                  onChange={handleChange1}
                />
              }
              //  labelPlacement="bottom"
              // label="Somewhat Like Me"
            />

            <FormControlLabel
              value="4"
              control={
                <Radio
                  size="medium"
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange1}
                />
              }
              // labelPlacement="bottom"
              // label="Mostly Like Me"
            />

            <FormControlLabel
              value="5"
              control={
                <Radio
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange1}
                />
              }
              // labelPlacement="end"
              //  label="Very Much Like Me"
            />
            <span> Very Much Like Me </span>
          </RadioGroup>
        </FormControl>
      </Box>
      <Divider />
      <Box
        components="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          px: 10,
          py: 2,
          width: '100%',
          height: '5%',
        }}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            3. I have been obsessed with a certain idea or project for a short
            time but later lost interest.
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            align-items="center"
            justify-content="center"
            display="flex"
            sx={{
              pt: 2,
            }}
          >
            <span> Not Like Me At All </span>
            <FormControlLabel
              value="1"
              control={
                <Radio
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange2}
                />
              }
              //   labelPlacement="start"
              //  label="Not Like Me At All"
            />

            <FormControlLabel
              value="2"
              control={
                <Radio
                  size="medium"
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange2}
                />
              }
              //  labelPlacement="bottom"
              // label="Not Much Like Me"
            />

            <FormControlLabel
              value="3"
              control={
                <Radio
                  size="small"
                  color="default"
                  sx={{
                    px: 4,
                    marginBottom: 0,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                  }}
                  onChange={handleChange2}
                />
              }
              //  labelPlacement="bottom"
              // label="Somewhat Like Me"
            />

            <FormControlLabel
              value="4"
              control={
                <Radio
                  size="medium"
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange2}
                />
              }
              // labelPlacement="bottom"
              // label="Mostly Like Me"
            />

            <FormControlLabel
              value="5"
              control={
                <Radio
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange2}
                />
              }
              // labelPlacement="end"
              //  label="Very Much Like Me"
            />
            <span> Very Much Like Me </span>
          </RadioGroup>
        </FormControl>
      </Box>
      <Divider />
      <Box
        components="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          px: 10,
          py: 2,
          width: '100%',
          height: '5%',
        }}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            4. I am a hardworker.{' '}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            align-items="center"
            justify-content="center"
            display="flex"
            sx={{
              pt: 2,
            }}
          >
            <span> Not Like Me At All </span>
            <FormControlLabel
              value="1"
              control={
                <Radio
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange3}
                />
              }
              //   labelPlacement="start"
              //  label="Not Like Me At All"
            />

            <FormControlLabel
              value="2"
              control={
                <Radio
                  size="medium"
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange3}
                />
              }
              //  labelPlacement="bottom"
              // label="Not Much Like Me"
            />

            <FormControlLabel
              value="3"
              control={
                <Radio
                  size="small"
                  color="default"
                  sx={{
                    px: 4,
                    marginBottom: 0,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                  }}
                  onChange={handleChange3}
                />
              }
              //  labelPlacement="bottom"
              // label="Somewhat Like Me"
            />

            <FormControlLabel
              value="4"
              control={
                <Radio
                  size="medium"
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange3}
                />
              }
              // labelPlacement="bottom"
              // label="Mostly Like Me"
            />

            <FormControlLabel
              value="5"
              control={
                <Radio
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange3}
                />
              }
              // labelPlacement="end"
              //  label="Very Much Like Me"
            />
            <span> Very Much Like Me </span>
          </RadioGroup>
        </FormControl>
      </Box>
      <Divider />
      <Box
        components="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          px: 10,
          py: 2,
          width: '100%',
          height: '5%',
        }}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            5. I often set goals but later choose to pursue a different one.{' '}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            align-items="center"
            justify-content="center"
            display="flex"
            sx={{
              pt: 2,
            }}
          >
            <span> Not Like Me At All </span>
            <FormControlLabel
              value="1"
              control={
                <Radio
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange4}
                />
              }
              //   labelPlacement="start"
              //  label="Not Like Me At All"
            />

            <FormControlLabel
              value="2"
              control={
                <Radio
                  size="medium"
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange4}
                />
              }
              //  labelPlacement="bottom"
              // label="Not Much Like Me"
            />

            <FormControlLabel
              value="3"
              control={
                <Radio
                  size="small"
                  color="default"
                  sx={{
                    px: 4,
                    marginBottom: 0,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                  }}
                  onChange={handleChange4}
                />
              }
              //  labelPlacement="bottom"
              // label="Somewhat Like Me"
            />

            <FormControlLabel
              value="4"
              control={
                <Radio
                  size="medium"
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange4}
                />
              }
              // labelPlacement="bottom"
              // label="Mostly Like Me"
            />

            <FormControlLabel
              value="5"
              control={
                <Radio
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange4}
                />
              }
              // labelPlacement="end"
              //  label="Very Much Like Me"
            />
            <span> Very Much Like Me </span>
          </RadioGroup>
        </FormControl>
      </Box>
      <Divider />
      <Box
        components="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          px: 10,
          py: 2,
          width: '100%',
          height: '5%',
        }}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            6. I have a difficulty maintaining my focus on projects that take
            more than a few months to complete.{' '}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            align-items="center"
            justify-content="center"
            display="flex"
            sx={{
              pt: 2,
            }}
          >
            <span> Not Like Me At All </span>
            <FormControlLabel
              value="1"
              control={
                <Radio
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange5}
                />
              }
              //   labelPlacement="start"
              //  label="Not Like Me At All"
            />

            <FormControlLabel
              value="2"
              control={
                <Radio
                  size="medium"
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange5}
                />
              }
              //  labelPlacement="bottom"
              // label="Not Much Like Me"
            />

            <FormControlLabel
              value="3"
              control={
                <Radio
                  size="small"
                  color="default"
                  sx={{
                    px: 4,
                    marginBottom: 0,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                  }}
                  onChange={handleChange5}
                />
              }
              //  labelPlacement="bottom"
              // label="Somewhat Like Me"
            />

            <FormControlLabel
              value="4"
              control={
                <Radio
                  size="medium"
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange5}
                />
              }
              // labelPlacement="bottom"
              // label="Mostly Like Me"
            />

            <FormControlLabel
              value="5"
              control={
                <Radio
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange5}
                />
              }
              // labelPlacement="end"
              //  label="Very Much Like Me"
            />
            <span> Very Much Like Me </span>
          </RadioGroup>
        </FormControl>
      </Box>
      <Divider />
      <Box
        components="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          px: 10,
          py: 2,
          width: '100%',
          height: '5%',
        }}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            7. I finish whatever I begin.{' '}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            align-items="center"
            justify-content="center"
            display="flex"
            sx={{
              pt: 2,
            }}
          >
            <span> Not Like Me At All </span>
            <FormControlLabel
              value="1"
              control={
                <Radio
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange6}
                />
              }
              //   labelPlacement="start"
              //  label="Not Like Me At All"
            />

            <FormControlLabel
              value="2"
              control={
                <Radio
                  size="medium"
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange6}
                />
              }
              //  labelPlacement="bottom"
              // label="Not Much Like Me"
            />

            <FormControlLabel
              value="3"
              control={
                <Radio
                  size="small"
                  color="default"
                  sx={{
                    px: 4,
                    marginBottom: 0,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                  }}
                  onChange={handleChange6}
                />
              }
              //  labelPlacement="bottom"
              // label="Somewhat Like Me"
            />

            <FormControlLabel
              value="4"
              control={
                <Radio
                  size="medium"
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange6}
                />
              }
              // labelPlacement="bottom"
              // label="Mostly Like Me"
            />

            <FormControlLabel
              value="5"
              control={
                <Radio
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange6}
                />
              }
              // labelPlacement="end"
              //  label="Very Much Like Me"
            />
            <span> Very Much Like Me </span>
          </RadioGroup>
        </FormControl>
      </Box>
      <Divider />
      <Box
        components="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          px: 10,
          py: 2,
          width: '100%',
          height: '5%',
        }}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            8. I am diligent{' '}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            align-items="center"
            justify-content="center"
            display="flex"
            sx={{
              pt: 2,
            }}
          >
            <span> Not Like Me At All </span>
            <FormControlLabel
              value="1"
              control={
                <Radio
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange7}
                />
              }
              //   labelPlacement="start"
              //  label="Not Like Me At All"
            />

            <FormControlLabel
              value="2"
              control={
                <Radio
                  size="medium"
                  color="warning"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange7}
                />
              }
              //  labelPlacement="bottom"
              // label="Not Much Like Me"
            />

            <FormControlLabel
              value="3"
              control={
                <Radio
                  size="small"
                  color="default"
                  sx={{
                    px: 4,
                    marginBottom: 0,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                  }}
                  onChange={handleChange7}
                />
              }
              //  labelPlacement="bottom"
              // label="Somewhat Like Me"
            />

            <FormControlLabel
              value="4"
              control={
                <Radio
                  size="medium"
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange7}
                />
              }
              // labelPlacement="bottom"
              // label="Mostly Like Me"
            />

            <FormControlLabel
              value="5"
              control={
                <Radio
                  color="success"
                  sx={{
                    px: 4,
                    '& .MuiSvgIcon-root': {
                      fontSize: 35,
                    },
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                      marginBottom: 0,
                    },
                  }}
                  onChange={handleChange7}
                />
              }
              // labelPlacement="end"
              //  label="Very Much Like Me"
            />
            <span> Very Much Like Me </span>
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          onClick={Save}
          value={{
            interviewNewThingsDistract,
            interviewSetbacksDoNotDiscourage,
            interviewLostInterest,
            interviewHardWorking,
            interviewDifferentGoals,
            interviewMaintainFocusOnGoals,
            interviewFinishGoals,
            interviewIsDiligent,
          }}
          style={{
            backgroundColor: '#004cbb',
          }}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
}
