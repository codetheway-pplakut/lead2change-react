/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Careers';
const SERVICE_ROOT_STUDENT_CAREERS = 'Careers/get-student-careers';

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

export const getStudentCareers = async (id) => {
  return callApi({endpoint: `${SERVICE_ROOT_STUDENT_CAREERS}/${id}` });
    
};
