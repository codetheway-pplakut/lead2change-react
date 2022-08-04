/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Interviews';

export const getInterviews = () => {
  return callApi({ endpoint: SERVICE_ROOT });
};

export const getInterviewsById = (studentId) => {
  return callApi({ endpoint: `interviews/student-responses/${studentId}` });
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

export const createStudentResponse = async (answers) => {
  return callApi({
    body: answers,
    endpoint: 'interviews/create-student-response',
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
};
