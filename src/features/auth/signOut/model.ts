import { ClearUserDetails } from '@entities/viewer/model';
import { signOut } from '@firebase/auth';
import { CLIENT_CREDENTIAL } from '@shared/config';
import { auth } from '@shared/config/firebase';
import { setLocalStorage } from '@shared/lib';

export const SignOutUser = (): AppThunk => async (dispatch) => {
  try {
    await signOut(auth);

    setLocalStorage(CLIENT_CREDENTIAL, null);
    dispatch(ClearUserDetails());
  } catch (e) {
    console.log(e);
  }
};
