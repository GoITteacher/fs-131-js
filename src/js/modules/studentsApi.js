import axios from 'axios';

axios.defaults.baseURL =
  'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com';

export const getStudents = () => {
  return axios.get('/public/students').then(res => {
    return res.data;
  });
};

export const createStudent = body => {
  return axios.post('/public/students', body).then(res => res.data);
};

export const getStudentById = id => {
  return axios.get(`/public/students/${id}`).then(res => res.data);
};

export const updateStudent = (id, body) => {
  return axios.patch(`/public/students/${id}`, body).then(res => res.data);
};

export const resetStudent = (id, body) => {
  return axios.put(`/public/students/${id}`, body).then(res => res.data);
};

export const deleteStudent = id => {
  return axios.delete(`/public/students/${id}`).then(res => res.data);
};
