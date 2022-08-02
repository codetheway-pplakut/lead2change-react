import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { green, red } from '@mui/material/colors';

export default function GritItem() {
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
          questionId: 'd68119f8-26ef-4936-cde0-08d95db8fbe0',
          questionString:
            '1. New ideas and projects sometimes distract me from previous ones.',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewSetbacksDoNotDiscourage ,
          studentId: students.id,
          questionId: 'bcd51d11-0289-4f13-cde4-08d95db8fbe0',
          questionString:
            '2. Setbacks do not discourage me.',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewLostInterest,
          studentId: students.id,
          questionId: 'ca080589-073d-4432-cde5-08d95db8fbe0',
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
          questionId: '10a9e191-a426-409c-cde7-08d95db8fbe0',
          questionString:
            '4. I am a hardworker.',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewDifferentGoals,
          studentId: students.id,
          questionId: '7827a50d-f932-40c4-cde2-08d95db8fbe0',
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
          questionId: '63e82d00-bcf8-4a04-cde3-08d95db8fbe0',
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
          questionId: '1f3a4a74-4236-46ef-cde9-08d95db8fbe0',
          questionString:
            '7. I finish whatever I begin.',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewIsDiligent,
          studentId: students.id,
          questionId: '3bab2c58-942d-46db-cdea-08d95db8fbe0',
          questionString:
            '8. I am diligent',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        
      ],
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
      onChange={[
        handleChange,
        handleChange1,
        handleChange2,
        handleChange3,
        handleChange4,
        handleChange5,
        handleChange6,
        handleChange7,
      ]}
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
            onChange={[
              handleChange,
              handleChange1,
              handleChange2,
              handleChange3,
              handleChange4,
              handleChange5,
              handleChange6,
              handleChange7,
            ]}
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
            onChange={[
              handleChange,
              handleChange1,
              handleChange2,
              handleChange3,
              handleChange4,
              handleChange5,
              handleChange6,
              handleChange7,
            ]}
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
            onChange={[
              handleChange,
              handleChange1,
              handleChange2,
              handleChange3,
              handleChange4,
              handleChange5,
              handleChange6,
              handleChange7,
            ]}
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
            onChange={[
              handleChange,
              handleChange1,
              handleChange2,
              handleChange3,
              handleChange4,
              handleChange5,
              handleChange6,
              handleChange7,
            ]}
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
            onChange={[
              handleChange,
              handleChange1,
              handleChange2,
              handleChange3,
              handleChange4,
              handleChange5,
              handleChange6,
              handleChange7,
            ]}
          />
        }
        // labelPlacement="end"
        //  label="Very Much Like Me"
      />
      <span> Very Much Like Me </span>
    </RadioGroup>
  );
}
