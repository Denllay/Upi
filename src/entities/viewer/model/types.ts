import { User } from '@firebase/auth';

export interface ViewerInitialState {
  token: string | null;
  email: string | null;
  photoURL: string | null;
  isAuth: boolean;
}

export interface UpdateUserDetailsPayload {
  token: string | null;
  email: string | null;
  photoURL: string | null;
}
