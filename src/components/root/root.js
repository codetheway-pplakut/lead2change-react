import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ROUTES from '../../constants/routes';
import SignUp from '../sign-up/sign-up';
import App from '../app/app';
import Home from '../home/home';
import SignUpSuccess from '../sign-up-success/sign-up-success';
import Layout from '../layout/layout';
import '../../styles/base.css';

const theme = createTheme();

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SIGN_UP_SUCCESS} element={<SignUpSuccess />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.LAYOUT} element={<Layout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
