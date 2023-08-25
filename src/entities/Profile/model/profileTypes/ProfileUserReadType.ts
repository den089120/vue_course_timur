import { ProfileSchema } from '@/entities/Profile'

export interface ProfileUserReadSchema {
  data: ProfileSchema | undefined;
  isLoading: boolean;
  error: string;
  id: string;
}
