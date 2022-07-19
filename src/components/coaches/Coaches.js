import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CoachesList from './CoachesList';
import RegisterCoachModal from './Modals/RegisterCoachModal';

export default function Coaches() {
  const [coaches, setCoaches] = useState([]);
  const refreshCoaches = async () => {
    // TODO: API Integration
    const listOfCoaches = [
      {
        id: 'c1',
        active: true,
        coachFirstName: 'John',
        coachLastName: 'Zoe',
        coachPhoneNumber: '789-555-1234',
        coachEmail: 'john.zoe@mail.org',
        students: [
          {
            id: 'c1s1',
            studentFirstName: 'Jane',
            studentLastName: 'Roe',
            studentPhoneNumber: 'janeroe@mail.com',
            studentEmail: '311-398-0204',
          },
          {
            id: 'c1s2',
            studentFirstName: 'Bob',
            studentLastName: 'Charleston',
            studentPhoneNumber: 'bobc@mail.com',
            studentEmail: '695-951-8473',
          },
        ],
      },
      {
        id: 'c2',
        coachFirstName: 'Mrs',
        coachLastName: 'Foe',
        coachPhoneNumber: '423-548-6135',
        coachEmail: 'mrsf@mail.org',
        active: true,
        students: [
          {
            id: 'c2s1',
            studentFirstName: 'Dane',
            studentLastName: 'Roe',
            studentPhoneNumber: 'droe@mail.com',
            studentEmail: '587-231-6858',
          },
        ],
      },
      {
        id: 'c3',
        active: true,
        coachFirstName: 'John',
        coachLastName: 'Johnson',
        coachPhoneNumber: '641-151-8626',
        coachEmail: 'johnj@mail.org',
        students: [],
      },
      {
        id: 'c4',
        active: false,
        coachFirstName: 'James',
        coachLastName: 'Jackson',
        coachPhoneNumber: '391-564-0197',
        coachEmail: 'jjack@mail.org',
        students: [],
      },
      {
        id: 'c5',
        active: false,
        coachFirstName: 'Zack',
        coachLastName: 'Jameson',
        coachPhoneNumber: '317-989-5736',
        coachEmail: 'zj@mail.org',
        students: [],
      },
      {
        id: 'c6',
        active: false,
        coachFirstName: 'Jack',
        coachLastName: 'Smith',
        coachPhoneNumber: '596-620-4768',
        coachEmail: 'jsmith@mail.org',
        students: [],
      },
    ];

    setCoaches(
      listOfCoaches.sort((a, b) => (a.coachLastName > b.coachLastName ? 1 : -1))
    );
  };

  useEffect(() => {
    refreshCoaches();
  }, []);
  const newCoach = (first, last, email, phone) => {
    const coach = {
      id: Date.now(), // TODO : Update to agreed ID creation method
      coachFirstName: first,
      coachLastName: last,
      coachEmail: email,
      coachPhoneNumber: phone,
      students: [],
    };
    setCoaches([...coaches, coach]);
  };

  const deleteCoach = (id) => {
    setCoaches(coaches.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={8}>
          <Grid container justifyContent="right" spacing={1}>
            <Grid item>
              <RegisterCoachModal addFunction={newCoach} />
            </Grid>
            <Grid item xs={12}>
              <CoachesList rows={coaches} deleteFunction={deleteCoach} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
