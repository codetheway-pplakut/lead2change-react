import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Divider } from '@mui/material';
import GritItem from './grit-item';

export default function GritSliderQuestions() {
  return (
    <Container fixed="true">
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

          <GritItem />
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
          <GritItem />
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
          <GritItem />
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
          <GritItem />
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
          <GritItem />
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
          <GritItem />
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
          <GritItem />
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
          <GritItem />
        </FormControl>
      </Box>
    </Container>
  );
}
