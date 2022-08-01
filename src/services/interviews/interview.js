/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Interviews';

export const getInterviews = () => {
  return callApi({ endpoint: SERVICE_ROOT });
};

export const getInterviewsById = (id) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${id}` });
};

export const updateInterview = (interview) => {
  return callApi({
    body: interview,
    endpoint: SERVICE_ROOT,
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};

export const createInterview = async (interview) => {
  return callApi({
    body: interview,
    endpoint: `${SERVICE_ROOT}/create-student-response`,
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};
