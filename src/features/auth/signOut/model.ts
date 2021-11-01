import { signOut } from '@firebase/auth';
import { auth } from '@shared/config/firebase';
import { setLocalStorage } from '@shared/lib';
import { viewerModel } from '@entities/viewer';

export const SignOutUser = (): AppThunk => async (dispatch) => {
  try {
    await signOut(auth);

    setLocalStorage('CLIENT_TOKEN', null);
    dispatch(viewerModel.SignOutUser());
  } catch (e) {
    console.log(e);
  }
};
