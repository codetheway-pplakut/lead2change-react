import * as React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Stack from '@mui/material/Stack';
import DeleteAdminModal from './deleteAdminModal';
import RegisterAdminModal from './registerAdminModal';
import SearchBar from './SearchBar';

import { getAdmins } from '../../services/Admin/admin';

import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';

const tablePositioning = {
  height: '65vh',
  bgcolor: 'white',
};

const tableHeadingText = {
  align: 'left',
  backgroundColor: '#004cbb',
  color: 'white',
};

export default function AdminTable() {
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  const refreshAdmins = async () => {
    setIsLoading(true);
    const result = await getAdmins();

    setIsLoading(false);
    setAdmins(result);
  };

  useEffect(() => {
    refreshAdmins();
  }, []);

  return (
    <Box
      sx={{ width: '80%', height: '60%', margin: 'auto', marginBottom: '5%' }}
    >
      <ProgressIndicatorOverlay active={isLoading} />

      <Grid item sm={12} md={12} lg={12} xl={12}>
        <Box display="flex" justifyContent="flex-end">
          <Stack direction="row" spacing={0} alignItems="center">
            <SearchBar setSearch={setSearch} />
            <div>
              <RegisterAdminModal />
            </div>
          </Stack>
        </Box>
      </Grid>

      <TableContainer sx={tablePositioning}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={tableHeadingText}>
                <Grid container>
                  <Grid item xs={2} />
                  Email
                </Grid>
              </TableCell>
              <TableCell sx={tableHeadingText}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins
              .filter((post) => {
                if (search === '') {
                  return post;
                }
                if (post.email.toLowerCase().includes(search.toLowerCase())) {
                  return post;
                }
                return null;
              })

              .map((admin) => (
                <TableRow key={admin.id}>
                  <TableCell component="th" scope="row">
                    <Grid container>
                      <Grid item xs={2} />
                      <Grid item xs={8}>
                        {admin.email}
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <DeleteAdminModal id={admin.id} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
