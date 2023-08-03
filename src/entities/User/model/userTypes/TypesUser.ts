
export interface TypeUser {
  id: string;
  username: string;
  avatar?: string;
}

export interface TypeUserStore {
  user: TypeUser;
  isAuth: boolean;
}

export interface UserTypeServer {
  id: string;
  username: string;
  password: string;
  role: string;
  avatar: string;
}
