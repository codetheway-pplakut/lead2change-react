/* eslint-disable prettier/prettier */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
 
export default function Title(){
    return (
        <Box
        sx={{
            width: '100%',
            backgroundColor: '#3764A8',
            mt: '20px',
        }}>
            <Typography align="center" variant="h2" color="white" fontWeight="bold">ADMINISTRATORS</Typography>
        </Box>
    );
}
