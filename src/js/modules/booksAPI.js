import { goitServer } from './serverConfig';

export const getBooks = async () => {
  const res = await goitServer.get('/books');
};
export const createBook = async () => {};
export const getBookById = async () => {};
export const replaceBookById = async () => {};
export const updateBookById = async () => {};
export const deleteBookById = async () => {};
