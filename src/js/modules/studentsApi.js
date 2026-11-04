import { goitServer } from './serverConfig';

export const getStudents = () => {
  return goitServer.get('/public/students').then(res => {
    return res.data;
  });
};

export const createStudent = async body => {
  const res = await goitServer.post('/public/students', body);
  return res.data;
};

export const getStudentById = async id => {
  const res = await goitServer.get(`/public/students/${id}`);
  return res.data;
};

export const updateStudent = async (id, body) => {
  const res = await goitServer.patch(`/public/students/${id}`, body);
  return res.data;
};

export const resetStudent = async (id, body) => {
  const res = await goitServer.put(`/public/students/${id}`, body);
  return res.data;
};

export const deleteStudent = async id => {
  const res = await goitServer.delete(`/public/students/${id}`);
  return res.data;
};
