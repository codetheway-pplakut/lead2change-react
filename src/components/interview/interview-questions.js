import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
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

import { createStudentResponse } from '../../services/interviews/interview';
import { getStudentById } from '../../services/students/students';

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
  const { studentId } = useParams();
  const [students, setStudents] = useState({});

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);

  const Save = () => {
    const response = {
      answers: [
        {
          answerString: interviewIdealCareer,
          studentId: students.id,
          questionId: 'd68119f8-26ef-4936-cde0-08d95db8fbe0',
          questionString:
            '1. On your application, you stated that you would like to be a ______________, why did you choose this career?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewPersonalStrengths,
          studentId: students.id,
          questionId: 'bcd51d11-0289-4f13-cde4-08d95db8fbe0',
          questionString:
            '2. Describe your personal strengths? Why do you describe those as strengths?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewImportantWord,
          studentId: students.id,
          questionId: 'ca080589-073d-4432-cde5-08d95db8fbe0',
          questionString:
            '3. Of the following words - Commitment, Leadership, and Achievement; which is most important? Why is it important to you?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewOvercomeDifficulty,
          studentId: students.id,
          questionId: '10a9e191-a426-409c-cde7-08d95db8fbe0',
          questionString:
            '4. Describe a difficult situation/project and how you overcame it?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewOtherCommitments,
          studentId: students.id,
          questionId: '7827a50d-f932-40c4-cde2-08d95db8fbe0',
          questionString:
            '5. What other extra-curricular activities, employment opportunities or other programs are you currently involved in or will you become involved in this year?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewSacrificeTime,
          studentId: students.id,
          questionId: '63e82d00-bcf8-4a04-cde3-08d95db8fbe0',
          questionString:
            '6. Are you willing to sacrifice some things you usually do after school to prepare for a very fulfilling career that you were designed to do?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewPostHighSchoolCoaching,
          studentId: students.id,
          questionId: '1f3a4a74-4236-46ef-cde9-08d95db8fbe0',
          questionString:
            '7. Are you interested in participating in one on one coaching concerning life after high school?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewScheduleManagement,
          studentId: students.id,
          questionId: '3bab2c58-942d-46db-cdea-08d95db8fbe0',
          questionString:
            '8. Are you willing to manage your schedule to meet the program requirements?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewCommunicateWithMentors,
          studentId: students.id,
          questionId: '73455ba8-7379-401d-cdec-08d95db8fbe0',
          questionString:
            '9. Are you able to communicate the expectations to your parent/guardian or mentor and ask for their support?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewDiverseClass,
          studentId: students.id,
          questionId: 'bb96a326-5117-430f-cded-08d95db8fbe0',
          questionString:
            '10. Are you willing to be in a class with a diverse group of learners that may or may not know what you know?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewOpenMinded,
          studentId: students.id,
          questionId: 'ed60a032-7712-43ed-cdf0-08d95db8fbe0',
          questionString:
            '11. Are you willing to be open minded and courteous to your peers so that everyone in your class benefits from this experience?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewProfessionalRepresentation,
          studentId: students.id,
          questionId: 'e346f9ec-f527-4d4f-b4e2-0ea386e9992e',
          questionString:
            '12. Are you willing to do what is necessary to represent the Lead2Change brand of excellence and professionalism?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewTryingNewThings,
          studentId: students.id,
          questionId: '41a23c18-a7a3-4815-963f-96a5a100019e',
          questionString:
            '13. Are you willing to try new things and things that may have been hard for you in the past?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
        {
          answerString: interviewCommitToActivities,
          studentId: students.id,
          questionId: 'cddf1ee2-c1c6-4123-81c1-7d5ca938ad4e',
          questionString:
            '14. It’s important that you understand what you are committing to. We are looking for you to participate in weekly class sessions, bi-monthly Etiquette Boot Camps on a Saturday and a summer internship experience. How confident are you that you can completely commit to the activities of this program?',
          interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
          isArchived: false,
          studentName: students.studentFirstName,
          interviewName: '',
        },
      ],
    };

    console.log(response.answers.length);
    createStudentResponse(response);
  };
  // const num1 = {
  //   answerString: interviewCommitToActivities,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'd68119f8-26ef-4936-cde0-08d95db8fbe0',
  //   questionString:
  //     '1. On your application, you stated that you would like to be a ______________, why did you choose this career?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: students.studentFirstName,
  //   interviewName: '',
  // };
  // answers[1] = {
  //   answerString: interviewPersonalStrengths,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'bcd51d11-0289-4f13-cde4-08d95db8fbe0',
  //   questionString:
  //     '2. Describe your personal strengths? Why do you describe those as strengths?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[2] = {
  //   answerString: interviewImportantWord,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'ca080589-073d-4432-cde5-08d95db8fbe0',
  //   questionString:
  //     '3. Of the following words - Commitment, Leadership, and Achievement; which is most important? Why is it important to you?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[3] = {
  //   answerString: interviewOvercomeDifficulty,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: '10a9e191-a426-409c-cde7-08d95db8fbe0',
  //   questionString:
  //     '4. Describe a difficult situation/project and how you overcame it?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[4] = {
  //   answerString: interviewOtherCommitments,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: '7827a50d-f932-40c4-cde2-08d95db8fbe0',
  //   questionString:
  //     '5. What other extra-curricular activities, employment opportunities or other programs are you currently involved in or will you become involved in this year?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[5] = {
  //   answerString: interviewSacrificeTime,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: '63e82d00-bcf8-4a04-cde3-08d95db8fbe0',
  //   questionString:
  //     '6. Are you willing to sacrifice some things you usually do after school to prepare for a very fulfilling career that you were designed to do?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[6] = {
  //   answerString: interviewPostHighSchoolCoaching,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: '1f3a4a74-4236-46ef-cde9-08d95db8fbe0',
  //   questionString:
  //     '7. Are you interested in participating in one on one coaching concerning life after high school?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[7] = {
  //   answerString: interviewScheduleManagement,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: '3bab2c58-942d-46db-cdea-08d95db8fbe0',
  //   questionString:
  //     '8. Are you willing to manage your schedule to meet the program requirements?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[8] = {
  //   answerString: interviewCommunicateWithMentors,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: '73455ba8-7379-401d-cdec-08d95db8fbe0',
  //   questionString:
  //     '9. Are you able to communicate the expectations to your parent/guardian or mentor and ask for their support?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[9] = {
  //   answerString: interviewDiverseClass,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'bb96a326-5117-430f-cded-08d95db8fbe0',
  //   questionString:
  //     '10. Are you willing to be in a class with a diverse group of learners that may or may not know what you know?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[10] = {
  //   answerString: interviewOpenMinded,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'ed60a032-7712-43ed-cdf0-08d95db8fbe0',
  //   questionString:
  //     '11. Are you willing to be open minded and courteous to your peers so that everyone in your class benefits from this experience?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[11] = {
  //   answerString: interviewProfessionalRepresentation,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'e346f9ec-f527-4d4f-b4e2-0ea386e9992e',
  //   questionString:
  //     '12. Are you willing to do what is necessary to represent the Lead2Change brand of excellence and professionalism?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[12] = {
  //   answerString: interviewTryingNewThings,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: '41a23c18-a7a3-4815-963f-96a5a100019e',
  //   questionString:
  //     '13. Are you willing to try new things and things that may have been hard for you in the past?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[13] = {
  //   answerString: interviewCommitToActivities,
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'cddf1ee2-c1c6-4123-81c1-7d5ca938ad4e',
  //   questionString:
  //     '14. It’s important that you understand what you are committing to. We are looking for you to participate in weekly class sessions, bi-monthly Etiquette Boot Camps on a Saturday and a summer internship experience. How confident are you that you can completely commit to the activities of this program?',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[14] = {
  //   answerString: '',
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'ef016860-a37c-4cd9-bdda-2db31471a0f3',
  //   questionString:
  //     '1. New ideas and projects sometimes distract me from previous ones.',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[15] = {
  //   answerString: '',
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'a0298dcb-9145-45bf-9b77-a16210fc989f',
  //   questionString: '2. Setbacks do not discourage me.',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[16] = {
  //   answerString: '',
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'aa11692a-db27-4e96-8516-6fd1f2b430c2',
  //   questionString:
  //     '3. I have been obsessed with a certain idea or project for a short time but later lost interest.',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[17] = {
  //   answerString: '',
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'f73e90f5-a846-4f5b-9dec-56c4e8ea9a47',
  //   questionString: '4. I am a hardworker.',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[18] = {
  //   answerString: '',
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: '1a846eb0-b51d-49d2-bf60-da9c73fbbf97',
  //   questionString:
  //     '5. I often set goals but later choose to pursue a different one.',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[19] = {
  //   answerString: '',
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: 'cd87d632-510d-4aa9-bee1-cbb1b789f6a3',
  //   questionString:
  //     '6. I have a difficulty maintaining my focus on projects that take more than a few months to complete.',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[20] = {
  //   answerString: '',
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: '899f29ef-4910-4580-ab06-05d5993d8f69',
  //   questionString: '7. I finish whatever I begin.',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };
  // answers[21] = {
  //   answerString: '',
  //   studentId: 'b0ba6354-eb97-49b1-a030-08da6b234c0f',
  //   questionId: '1794e461-ca4d-4249-8124-c7bcf7d29f4d',
  //   questionString: ' 8. I am diligent',
  //   interviewId: '92ad7555-1de2-4c82-9cbb-1e24117f0626',
  //   isArchived: false,
  //   studentName: getStudentById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .studentFirstname,
  //   interviewName: '',
  // };

  // const interview = {
  //   interviewIdealCareer,
  //   interviewPersonalStrengths,
  //   interviewImportantWord,
  //   interviewOvercomeDifficulty,
  //   interviewOtherCommitments,
  //   interviewSacrificeTime,
  //   interviewPostHighSchoolCoaching,
  //   interviewScheduleManagement,
  //   interviewCommunicateWithMentors,
  //   interviewDiverseClass,
  //   interviewOpenMinded,
  //   interviewProfessionalRepresentation,
  //   interviewTryingNewThings,
  //   interviewCommitToActivities,
  // };
  // console.log(answers.length);
  // createStudentResponse(answers);
  // console.log(
  //   getInterviewsById('b0ba6354-eb97-49b1-a030-08da6b234c0f')
  //     .InterviewQuestions.answerString
  // );
  // };

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
              control={
                <Radio value="Very Confident" onChange={handleChange8} />
              }
              label="Very Confident"
            />
            <FormControlLabel
              control={
                <Radio value="Mildly Confident" onChange={handleChange8} />
              }
              label="Mildly Confident"
            />
            <FormControlLabel
              control={
                <Radio value="Not Confident at all" onChange={handleChange8} />
              }
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
