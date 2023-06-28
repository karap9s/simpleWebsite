import { PostsType } from "../../posts";
import { UsersType } from "../../users";
import { CommentsType } from "../../comments";

export interface AppPropsType {
  postsState: Array<PostsType>;
  setPostsState: (value: Array<PostsType>) => void;
  usersState: Array<UsersType>;
  setUsersState: (value: Array<UsersType>) => void;
  commentsState: Array<CommentsType>;
  setCommentsState: (value: Array<CommentsType>) => void;
}
