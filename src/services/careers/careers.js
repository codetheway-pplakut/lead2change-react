/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Careers';

export const addCareers = async (career) => {
  return callApi({
    body: career,
    endpoint: SERVICE_ROOT,
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};

export const getCareers = () => {
  return callApi({ endpoint: SERVICE_ROOT });
};

export const getCareersById = (id) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${id}` });
};

// add all stuff in here
// add careers to add career modal
// addCareer(Career); NOT in return
