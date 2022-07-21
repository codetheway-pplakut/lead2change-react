/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Students';

export const getStudents = () => {
  return callApi({ endpoint: SERVICE_ROOT });
};

export const getStudentById = (id) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${id}` });
};

export const updateStudent = (student) => {
  return callApi({
    body: student,
    endpoint: SERVICE_ROOT,
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};
