import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3000',
});

export function getBooks() {
  return server.get('/books').then(res => res.data);
}

export function createBook(data) {
  return server.post('/books', data).then(res => res.data);
}

export function updateBook(id, book) {
  return server.patch(`/books/${id}`, book).then(res => res.data);
}

export function resetBook(id, book) {
  return server.put(`/books/${id}`, book).then(res => res.data);
}

export function deleteBook(id) {
  return server.delete(`/books/${id}`).then(res => res.data);
}
