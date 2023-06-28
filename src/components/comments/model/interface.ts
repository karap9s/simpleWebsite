export interface CommentsType {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export interface CommentsPropsType {
  commentsState: Array<CommentsType>;
  setCommentsState: (value: CommentsType) => void;
}
