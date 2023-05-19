
export interface TypeUser {
  id: number;
  username: string;
}

export interface TypeUserStore {
  user: TypeUser;
  isAuth: boolean;
}
