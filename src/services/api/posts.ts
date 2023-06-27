import instance from "./instance";
import { AxiosResponse } from "axios";
import { PostsPropsType } from "../../components/posts";

const posts = (userId?: number) => {
  const data = instance.get<AxiosResponse<PostsPropsType>>(
    `${userId ? `/posts?userId=${userId}` : "/posts"}`
  );
  return data;
};

export default posts;
