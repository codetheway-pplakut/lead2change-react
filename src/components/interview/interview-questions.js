import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

import { createInterview } from '../../services/interviews/interview';

export default function InterviewQuestions() {
  const [interviewIdealCareer, setinterviewIdealCareer] = useState('');
  const [interviewPersonalStrengths, setinterviewPersonalStrengths] =
    useState('');
  const [interviewImportantWord, setinterviewImportantWord] = useState('');
  const [interviewOvercomeDifficulty, setinterviewOvercomeDifficulty] =
    useState('');
  const [interviewOtherCommitments, setinterviewOtherCommitments] =
    useState('');
  const [interviewSacrificeTime, setinterviewSacrificeTime] = useState('');
  const [interviewPostHighSchoolCoaching, setinterviewPostHighSchoolCoaching] =
    useState('');
  const [interviewScheduleManagement, setinterviewScheduleManagement] =
    useState('');
  const [interviewCommunicateWithMentors, setinterviewCommunicateWithMentors] =
    useState('');
  const [interviewDiverseClass, setinterviewDiverseClass] = useState('');
  const [interviewOpenMinded, setinterviewOpenMinded] = useState('');
  const [
    interviewProfessionalRepresentation,
    setinterviewProfessionalRepresentation,
  ] = useState('');
  const [interviewTryingNewThings, setinterviewTryingNewThings] = useState('');
  const [interviewCommitToActivities, setinterviewCommitToActivities] =
    useState('');
  // const [interviewNewThingsDistract, setinterviewNewThingsDistract] =
  //   useState('');
  // const [
  //   interviewSetbacksDoNotDiscourage,
  //   setinterviewSetbacksDoNotDiscourage,
  // ] = useState('');
  // const [interviewLostInterest, setinterviewLostInterest] = useState('');
  // const [interviewHardWorking, setinterviewHardWorking] = useState('');
  // const [interviewDifferentGoals, setinterviewDifferentGoals] = useState('');
  // const [interviewMaintainFocusOnGoals, setinterviewMaintainFocusOnGoals] =
  //   useState('');
  // const [interviewFinishGoals, setinterviewFinishGoals] = useState('');
  // const [interviewIsDiligent, setinterviewIsDiligent] = useState('');
  const Save = () => {
    const interview = {
      interviewIdealCareer,
      interviewPersonalStrengths,
      interviewImportantWord,
      interviewOvercomeDifficulty,
      interviewOtherCommitments,
      interviewSacrificeTime,
      interviewPostHighSchoolCoaching,
      interviewScheduleManagement,
      interviewCommunicateWithMentors,
      interviewDiverseClass,
      interviewOpenMinded,
      interviewProfessionalRepresentation,
      interviewTryingNewThings,
      interviewCommitToActivities,
    };
    createInterview(interview);
  };

  // const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setinterviewSacrificeTime(event.target.value);
  };
  const handleChange1 = (event) => {
    setinterviewPostHighSchoolCoaching(event.target.value);
  };
  const handleChange2 = (event) => {
    setinterviewScheduleManagement(event.target.value);
  };
  const handleChange3 = (event) => {
    setinterviewCommunicateWithMentors(event.target.value);
  };
  const handleChange4 = (event) => {
    setinterviewDiverseClass(event.target.value);
  };
  const handleChange5 = (event) => {
    setinterviewOpenMinded(event.target.value);
  };
  const handleChange6 = (event) => {
    setinterviewProfessionalRepresentation(event.target.value);
  };
  const handleChange7 = (event) => {
    setinterviewTryingNewThings(event.target.value);
  };
  const handleChange8 = (event) => {
    setinterviewCommitToActivities(event.target.value);
  };
  // setinterviewNewThingsDistract(event.target.value);
  // setinterviewSetbacksDoNotDiscourage(event.target.value);
  // setinterviewLostInterest(event.target.value);
  // setinterviewHardWorking(event.target.value);
  // setinterviewDifferentGoals(event.target.value);
  // setinterviewMaintainFocusOnGoals(event.target.value);
  // setinterviewFinishGoals(event.target.value);
  // setinterviewIsDiligent(event.target.value);

  return (
    <Container fixed textalign="true" justify="center">
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '5%',
        }}
      >
        {' '}
        1. On your application, you stated that you would like to be a
        ______________, why did you choose this career?
        <TextField
          id="text-area-q1"
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
          value={interviewIdealCareer}
          onChange={(e) => {
            setinterviewIdealCareer(e.target.value);
          }}
        />
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        {' '}
        2. Describe your personal strengths? Why do you describe those as
        strengths?
        <TextField
          id="text-area-q2"
          label=""
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
          value={interviewPersonalStrengths}
          onChange={(e) => {
            setinterviewPersonalStrengths(e.target.value);
          }}
        />{' '}
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        {' '}
        3. Of the following words - Commitment, Leadership, and Achievement;
        which is most important? Why is it important to you?
        <TextField
          id="text-area-q3"
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
          value={interviewImportantWord}
          onChange={(e) => {
            setinterviewImportantWord(e.target.value);
          }}
        />{' '}
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        {' '}
        4. Describe a difficult situation/project and how you overcame it?
        <TextField
          id="text-area-q4"
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
          value={interviewOvercomeDifficulty}
          onChange={(e) => {
            setinterviewOvercomeDifficulty(e.target.value);
          }}
        />{' '}
      </Box>

      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        {' '}
        5. What other extra-curricular activities, employment opportunities or
        other programs are you currently involved in or will you become involved
        in this year?
        <TextField
          id="text-area-q5"
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
          value={interviewOtherCommitments}
          onChange={(e) => {
            setinterviewOtherCommitments(e.target.value);
          }}
        />
      </Box>
      <Divider>For the following questions, choose only one option.</Divider>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        <FormControl>
          <FormLabel id="radio-button-q6">
            {' '}
            6. Are you willing to sacrifice some things you usually do after
            school to prepare for a very fulfilling career that you were
            designed to do?
          </FormLabel>
          <RadioGroup>
            <FormControlLabel
              control={<Radio value="yes" onChange={handleChange} />}
              label="Yes"
            />
            <FormControlLabel
              control={<Radio value="no" onChange={handleChange} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        <FormControl>
          <FormLabel id="radio-button-q7">
            {' '}
            7. Are you interested in participating in one on one coaching
            concerning life after high school?
          </FormLabel>
          <RadioGroup
          // aria-labelledby="demo-radio-buttons-group-label"
          // name="radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio value="yes" onChange={handleChange1} />}
              label="Yes"
            />
            <FormControlLabel
              control={<Radio value="no" onChange={handleChange1} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        <FormControl>
          <FormLabel id="radio-button-q8">
            {' '}
            8. Are you willing to manage your schedule to meet the program
            requirements?
          </FormLabel>
          <RadioGroup
          // aria-labelledby="demo-radio-buttons-group-label"
          // name="radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio value="yes" onChange={handleChange2} />}
              label="Yes"
            />
            <FormControlLabel
              control={<Radio value="no" onChange={handleChange2} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        <FormControl>
          <FormLabel id="radio-button-q9">
            {' '}
            9. Are you able to communicate the expectations to your
            parent/guardian or mentor and ask for their support?
          </FormLabel>
          <RadioGroup
          // aria-labelledby="demo-radio-buttons-group-label"
          // name="radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio value="yes" onChange={handleChange3} />}
              label="Yes"
            />
            <FormControlLabel
              control={<Radio value="no" onChange={handleChange3} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        <FormControl>
          <FormLabel id="radio-button-q10">
            {' '}
            10. Are you willing to be in a class with a diverse group of
            learners that may or may not know what you know?
          </FormLabel>
          <RadioGroup
          // aria-labelledby="demo-radio-buttons-group-label"
          // name="radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio value="yes" onChange={handleChange4} />}
              label="Yes"
            />
            <FormControlLabel
              control={<Radio value="no" onChange={handleChange4} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        <FormControl>
          <FormLabel id="radio-button-q11">
            {' '}
            11. Are you willing to be open minded and courteous to your peers so
            that everyone in your class benefits from this experience?
          </FormLabel>
          <RadioGroup
          // aria-labelledby="demo-radio-buttons-group-label"
          // name="radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio value="yes" onChange={handleChange5} />}
              label="Yes"
            />
            <FormControlLabel
              control={<Radio value="no" onChange={handleChange5} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            12. Are you willing to do what is necessary to represent the
            Lead2Change brand of excellence and professionalism?
          </FormLabel>
          <RadioGroup
            // aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio value="yes" onChange={handleChange6} />}
              label="Yes"
            />
            <FormControlLabel
              control={<Radio value="no" onChange={handleChange6} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            13. Are you willing to try new things and things that may have been
            hard for you in the past?
          </FormLabel>
          <RadioGroup
            // aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio value="yes" onChange={handleChange7} />}
              label="Yes"
            />
            <FormControlLabel
              control={<Radio value="no" onChange={handleChange7} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: '100%',
          height: '100%',
        }}
      >
        {' '}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            It&rsquo;s important that you understand what you are committing to.
            We are looking for you to participate in weekly class sessions,
            bi-monthly Etiquette Boot Camps on a Saturday and a summer
            internship experience. How confident are you that you can completely
            commit to the activities of this program?
          </FormLabel>
          <RadioGroup
            // aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio value="yes" onChange={handleChange8} />}
              label="Very Confident"
            />
            <FormControlLabel
              control={<Radio value="maybe" onChange={handleChange8} />}
              label="Mildly Confident"
            />
            <FormControlLabel
              control={<Radio value="no" onChange={handleChange8} />}
              label="Not Confident at all"
            />
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
            interviewIdealCareer,
            interviewPersonalStrengths,
            interviewImportantWord,
            interviewOvercomeDifficulty,
            interviewOtherCommitments,
            interviewSacrificeTime,
            interviewPostHighSchoolCoaching,
            interviewScheduleManagement,
            interviewCommunicateWithMentors,
            interviewDiverseClass,
            interviewOpenMinded,
            interviewProfessionalRepresentation,
            interviewTryingNewThings,
            interviewCommitToActivities,
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
