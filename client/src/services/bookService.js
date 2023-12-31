import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/books";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return Object.values(result);
};

export const getOne = async (bookId) => {
  const result = await request.get(`${baseUrl}/${bookId}`);

  return result;
};

export const getUserBooks = async (userId) => {
  const query = new URLSearchParams({
    where: `_ownerId="${userId}"`,
  });

  const result = await request.get(`${baseUrl}?${query}`);
  return result;
};

export const getLatest = async () => {
  //const query = encodeURIComponent(`offset=0&pageSize=3`); - not working correctly

  const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);

  return result;
};

export const create = async (bookData) => {
  const result = await request.post(baseUrl, bookData);

  return result;
};

export const edit = async (bookId, bookData) => {
  const result = await request.put(`${baseUrl}/${bookId}`, bookData);

  return result;
};

export const remove = async (bookId) => request.remove(`${baseUrl}/${bookId}`);
