/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Careers';

export const addCareer = async (career) => {
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

export const getCareerById = (id) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${id}` });
};
