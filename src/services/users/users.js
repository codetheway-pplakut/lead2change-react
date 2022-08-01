/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Users';

export const authenticateUser = ({ username, password } = {}) => {
  if (!username || !password) return;

  return callApi({
    authenticated: false,
    body: { username, password },
    endpoint: `${SERVICE_ROOT}/authenticate`,
    method: 'POST',
  });
};
export const requestReset = (email) => {
  // if (!email) return;
  // const email = 'admin-test@lead2changeinc.org';

  return callApi({
    body: { email },
    endpoint: `${SERVICE_ROOT}/request-password-reset`,
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};
export const resetPassword = ({
  token,
  email,
  password,
  confirmPassword,
} = {}) => {
  if (!email || !token || !password || !confirmPassword) return;

  return callApi({
    body: { token, email, password, confirmPassword },
    endpoint: `${SERVICE_ROOT}/reset-password`,
    method: 'POST',
  });
};
