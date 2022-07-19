/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Students';

export const addStudent = async (student) => {
  return callApi({
    body: JSON.stringify(student),
    endpoint: SERVICE_ROOT,
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};

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
    method: 'POST',
  });
};
