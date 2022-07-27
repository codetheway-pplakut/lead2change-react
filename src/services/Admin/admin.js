/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Admin';

export const getAdmins = async () => {
  return callApi({ endpoint: SERVICE_ROOT });
};

export const getAdminById = (id) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${id}` });
};

export const deleteAdmin = async (id) => {
  return callApi({
    endpoint: `${SERVICE_ROOT}?id=${id}`,
    method: 'DELETE',
  });
};

export const addAdmin = async (admin) => {
  return callApi({
    body: admin,
    endpoint: SERVICE_ROOT,
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};
