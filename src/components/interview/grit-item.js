import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { green, red } from '@mui/material/colors';

export default function GritItem() {
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
    >
      <p> Not Like Me At All </p>
      <FormControlLabel
        value="1"
        control={
          <Radio
            size="large"
            color="warning"
            sx={{
              px: 4,
              '& .MuiSvgIcon-root': {
                fontSize: 45,
              },
              color: red[800],
              '&.Mui-checked': {
                color: red[600],
                marginBottom: 0,
              },
            }}
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
                fontSize: 25,
              },
            }}
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
          />
        }
        // labelPlacement="bottom"
        // label="Mostly Like Me"
      />

      <FormControlLabel
        value="5"
        control={
          <Radio
            size="large"
            color="success"
            sx={{
              px: 4,
              '& .MuiSvgIcon-root': {
                fontSize: 45,
              },
              color: green[800],
              '&.Mui-checked': {
                color: green[600],
                marginBottom: 0,
              },
            }}
          />
        }
        // labelPlacement="end"
        //  label="Very Much Like Me"
      />
      <p> Very Much Like Me </p>
    </RadioGroup>
  );
}
