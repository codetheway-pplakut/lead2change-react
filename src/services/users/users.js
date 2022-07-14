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
