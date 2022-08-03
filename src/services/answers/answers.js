/* eslint-disable import/prefer-default-export */
import callApi from '../../util/call-api/call-api';

const SERVICE_ROOT = 'Answers';

export const getAnswerById = (studentId, questionId) => {
  return callApi({ endpoint: `${SERVICE_ROOT}/${studentId}/${questionId}` });
};
