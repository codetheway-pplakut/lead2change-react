/* eslint-disable prettier/prettier */
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchBar from './SearchBar';
import Admin from './registerAdminModal';
 
 
export default function SearchAndRegister(){
    return(
        <Box sx={{ mt: '10px', mb: '10px' }}>
            <Grid container alignItems="center" justify="center">
                <Grid item xs={3} />
                <Grid item xs={4} align="right">
                    <Admin />
                </Grid>
                <Grid item xs={2} align="right">
                    <Box>
                        <SearchBar />
                    </Box>
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </Box>
    );
}
