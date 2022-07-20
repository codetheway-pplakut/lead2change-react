/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Admin';

export const getAdmin = () => {
  return callApi({ endpoint: SERVICE_ROOT });
};

export const getAdminById = (id) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${id}` });
};

export const updateAdmin = (admin) => {
  return callApi({
    body: admin,
    endpoint: SERVICE_ROOT,
    method: 'POST',
  });
};
