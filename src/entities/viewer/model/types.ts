export interface ViewerInitialState {
  token: string | null;
  isAuth: boolean | null;
  login: string | null;
}

export interface UpdateUserDetailsPayload extends Partial<ViewerInitialState> {}
