import { CommentsType } from "../../comments";

export interface PostsType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface PostsPropsType {
  postsState: Array<PostsType>;
  setCommentsState: (value: Array<CommentsType>) => void;
}
