import { PostsType } from "../../posts";
import { UsersType } from "../../users";

export interface CommentsType {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export interface CommentsPropsType {
  commentsState: Array<CommentsType>;
  setCommentsState: (value: Array<CommentsType>) => void;
  currentPost: PostsType;
  setCurrentPost: (value: PostsType) => void;
  currentUser: UsersType;
}
