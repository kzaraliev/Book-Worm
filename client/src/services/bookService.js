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

export const create = async (gameData) => {
  const result = await request.post(baseUrl, gameData);

  return result;
};
