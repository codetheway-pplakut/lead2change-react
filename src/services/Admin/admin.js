/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Admin';

export const getAdmins = async () => {
  return callApi({ endpoint: SERVICE_ROOT });
};

export const getAdminById = (id) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${id}` });
};

export const deleteAdmin = async (admin) => {
  return callApi({
    body: admin,
    endpoint: SERVICE_ROOT,
    method: 'DELETE',
  });
};

export const updateAdmin = (admin) => {
  return callApi({
    body: admin,
    endpoint: SERVICE_ROOT,
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
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
