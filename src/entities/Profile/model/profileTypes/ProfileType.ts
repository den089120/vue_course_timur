
export interface ProfileSchema extends Record<string, string | undefined>{
  firstname: string | undefined;
  lastname: string | undefined;
  age: string | undefined;
  currency: string | undefined;
  country: string | undefined;
  username: string | undefined;
  avatar: string | undefined;
}

export interface ProfileType {
  data: ProfileSchema | undefined,
  isLoading: boolean;
  error: string;
  readonly: boolean;
}
