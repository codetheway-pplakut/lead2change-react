import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/root/root';
import APP_CONFIG from './constants/app-config';
import reportWebVitals from './reportWebVitals';
import isDomAccessible from './util/is-dom-accessible/is-dom-accessible';

/* This code sets the API and the application base URL to the "window" object,
 * depending on the environment.  Then those values can be used throughout the
 * application.  For example, you might want to use a different API during
 * development than production.
 */
if (isDomAccessible())
  window.ENV_CONFIG = {
    API: APP_CONFIG.DEVELOPMENT.API,
  };

/* This code initializes a React application.  The code searches the index.html
 * file (./public/index.html) for an element with the id attribute "root," then
 * replaces that element with the React application.
 *
 * The code replaces <div id="root" /> with the React component <Root />.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

/* If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
