import instance from "./instance";
import { AxiosResponse } from "axios";
import { PostsPropsType } from "../../components/posts";

const posts = () => {
  const data = instance.get<AxiosResponse<PostsPropsType>>("/posts");
  return data;
};

export default posts;
