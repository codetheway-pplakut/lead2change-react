/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Coaches';

export const getCoaches = async () => {
  return callApi({ endpoint: SERVICE_ROOT });
};

export const getCoachById = async (id) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${id}` });
};

export const updateCoach = async (coach) => {
  return callApi({
    body: coach,
    endpoint: SERVICE_ROOT,
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};
export const addCoach = async (coach) => {
  return callApi({
    body: coach,
    endpoint: SERVICE_ROOT,
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};
