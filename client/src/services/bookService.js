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

export const getLatest = async () => {
  const query = new URLSearchParams({
      offset: 0,
      pageSize: 3,
  });

  const result = await request.get(`${baseUrl}?${query}`);

  return result;
}

export const create = async (bookData) => {
  const result = await request.post(baseUrl, bookData);

  return result;
};

export const edit = async (bookId, bookData) => {
  const result = await request.put(`${baseUrl}/${bookId}`, bookData);

  return result;
};
