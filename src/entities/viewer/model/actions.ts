import { getLocalStorage } from '@shared/lib';
import { UpdateUserDetails } from '.';

export const initialViewer = (): AppThunk => (dispatch) => {
  try {
    const token = getLocalStorage<string>('CLIENT_TOKEN');

    if (token) {
      dispatch(UpdateUserDetails({ token, isAuth: true }));
    } else {
      dispatch(UpdateUserDetails({ token: null, isAuth: false }));
    }
  } catch (e) {
    console.log(e);
  }
};
