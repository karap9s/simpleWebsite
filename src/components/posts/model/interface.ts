import { CommentsType } from "../../comments";
import { UsersType } from "../../users";

export interface PostsType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface PostsPropsType {
  usersState: Array<UsersType>;
  postsState: Array<PostsType>;
  setCommentsState: (value: Array<CommentsType>) => void;
  setCurrentPost: (value: PostsType) => void;
  setCurrentUser: (value: UsersType) => void;
}
