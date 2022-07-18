/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Coaches';

export const getCoaches = () => {
  return callApi({ endpoint: SERVICE_ROOT });
};

export const getCoachById = (id) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${id}` });
};

export const updateCoach = (coach) => {
  return callApi({
    body: coach,
    endpoint: SERVICE_ROOT,
    method: 'POST',
  });
};
