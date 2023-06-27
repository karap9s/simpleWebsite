import instance from "./instance";

const getComments = (id: number) => {
  const data = instance.get(`/comments?postId=${id}`);
  return data;
};

export default getComments;
