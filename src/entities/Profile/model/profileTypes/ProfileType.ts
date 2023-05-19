
export interface ProfileSchema {
  firstname: string;
  lastname: string;
  age: string;
  currency: string;
  country: string;
  username: string;
  avatar: string;
}

export interface ProfileType {
  data: ProfileSchema | undefined,
  isLoading: boolean;
  error: string;
  readonly: boolean;
}
