
export interface commentUserServer {
  id: string;
  username: string;
  password: string;
  role: string;
  avatar: string;
}

export interface CommentServer {
  id: string;
  text: string;
  articlesId: string;
  userId: string;
  user: commentUserServer;
}

export interface CommentStoreSchema {
  isLoading?: boolean;
  error?: string;
}

export interface schemaComment {
  text: string;
  articlesId: string;
  userId: string;
}

export interface Comment {
  id: string;
  text: string;
  articlesId: string;
  userId: string;
}
