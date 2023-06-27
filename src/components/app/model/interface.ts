import { PostsPropsType } from "../../posts";
import { UsersPropsType } from "../../users";

export interface AppPropsType {
  postsState: Array<PostsPropsType>;
  setPostsState: (value: PostsPropsType) => void;
  usersState: Array<UsersPropsType>;
  setUsersState: (value: UsersPropsType) => void;
}
