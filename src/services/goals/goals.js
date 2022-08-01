/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Goals';

export const addGoal = async (goal) => {
  return callApi({
    body: goal,
    endpoint: SERVICE_ROOT,
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};

export const getGoals = () => {
  return callApi({ endpoint: SERVICE_ROOT });
};

export const getGoalById = (id) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${id}` });
};
