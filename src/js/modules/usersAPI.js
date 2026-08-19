import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3000',
});

export function getUsers() {
  return server.get('/users').then(res => res.data);
}

export function createUser(data) {
  return server.post('/users', data).then(res => res.data);
}

export function updateUser(id, user) {
  return server.patch(`/users/${id}`, user).then(res => res.data);
}

export function resetUser(id, user) {
  return server.put(`/users/${id}`, user).then(res => res.data);
}

export function deleteUser(id) {
  return server.delete(`/users/${id}`).then(res => res.data);
}
