import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';
import { getStudents } from '../../services/students/students';

export default function ApiDemo() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onRequestStudentsPress = async () => {
    setIsLoading(true);
    const response = await getStudents();

    setIsLoading(false);
    setStudents(response);
  };

  const studentsExist = Boolean(students.length);

  return (
    <>
      <ProgressIndicatorOverlay active={isLoading} />
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            align="center"
            color="text.primary"
            component="h1"
            gutterBottom
            variant="h2"
            sx={{ mt: 5 }}
          >
            Student API Demo
          </Typography>
          <Typography variant="h5">
            Press the button below to test the <code>/Students</code> API.
          </Typography>
          <Button
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            onClick={onRequestStudentsPress}
            variant="contained"
          >
            Request Students
          </Button>
          {studentsExist && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map((student) => (
                    <TableRow
                      key={student.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{student.firstName || '--'}</TableCell>
                      <TableCell>{student.lastName || '--'}</TableCell>
                      <TableCell>{student.email || '--'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Container>
    </>
  );
}
