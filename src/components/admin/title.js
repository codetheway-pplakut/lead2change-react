import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Title() {
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '2%',
        marginBottom: '2%',
      }}
    >
      <Typography align="center" variant="h3">
        ADMINISTRATORS
      </Typography>
    </Box>
  );
}
