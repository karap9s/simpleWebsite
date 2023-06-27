import { PostsPropsType } from "../../posts";
import { UsersPropsType } from "../../users";
import { CommentsPropsType } from "../../comments";

export interface AppPropsType {
  postsState: Array<PostsPropsType>;
  setPostsState: (value: PostsPropsType) => void;
  usersState: Array<UsersPropsType>;
  setUsersState: (value: UsersPropsType) => void;
  commentsState: Array<CommentsPropsType>;
  setCommentsState: (value: CommentsPropsType) => void;
}
