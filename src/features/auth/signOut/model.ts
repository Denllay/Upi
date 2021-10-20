import { signOut } from '@firebase/auth';
import { auth } from '@shared/config/firebase';
import { setLocalStorage } from '@shared/lib';
import { SignOutUser as SignOutUserAction } from '@entities/viewer/model';

export const SignOutUser = (): AppThunk => async (dispatch) => {
  try {
    await signOut(auth);

    setLocalStorage('CLIENT_TOKEN', null);
    dispatch(SignOutUserAction());
  } catch (e) {
    console.log(e);
  }
};
