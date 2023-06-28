import instance from "./instance";
import { AxiosResponse } from "axios";

interface ArgumentsProps {
  postId: number;
  email: string;
  body: string;
}

const sendComment = ({ postId, email, body }: ArgumentsProps) => {
  const data = instance.post("/comments", {
    postId: postId,
    name: "My cool topic",
    email: email,
    body: body,
  });
  return data;
};

export default sendComment;
