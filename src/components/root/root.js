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
import Login from '../login/login';
import AuthenticationProvider from '../authentication-provider/authentication-provider';
import ApiDemo from '../api-demo/api-demo';
import BasicTabs from '../interview/tabs';
import HeaderandFooter from '../interview/HeaderandFooter';

const theme = createTheme();

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route
                path={ROUTES.SIGN_UP_SUCCESS}
                element={<SignUpSuccess />}
              />
              <Route path={ROUTES.API_DEMO} element={<ApiDemo />} />
              <Route path={ROUTES.LAYOUT} element={<Layout />} />
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
              <Route
                path={ROUTES.HeaderandFooter}
                element={<HeaderandFooter />}
              />
              <Route path={ROUTES.TABS} element={<BasicTabs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}
