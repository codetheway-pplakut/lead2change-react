/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'interviews';

export const getInterviews = () => {
  return callApi({ endpoint: SERVICE_ROOT });
};

export const getInterviewsById = (id) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${id}` });
};

export const updateInterview = (id) => {
  return callApi({
    body: id,
    endpoint: SERVICE_ROOT,
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};
