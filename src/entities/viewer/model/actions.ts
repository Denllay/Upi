import { CLIENT_CREDENTIAL } from '@shared/config';
import { getLocalStorage } from '@shared/lib';
import { UpdateUserDetails } from '.';

export const initialViewer = (): AppThunk => (dispatch) => {
  try {
    const token = getLocalStorage<string>(CLIENT_CREDENTIAL);

    if (token) {
      dispatch(UpdateUserDetails(token));
    }
  } catch (e) {
    console.log(e);
  }
};
