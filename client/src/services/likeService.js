import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/likes";

export const getAll = async (bookId) => {
  const query = new URLSearchParams({
    where: `bookId="${bookId}"`,
    load: `owner=_ownerId:users`,
  });

  const result = await request.get(`${baseUrl}?${query}`);
  return result;
};

export const like = async (bookId, _ownerId) => {
  const newLike = await request.post(baseUrl, {
    bookId,
    _ownerId,
  });

  return newLike;
};

export const unlike = async (likeId) => {
  await request.remove(`${baseUrl}/${likeId}`)
};
