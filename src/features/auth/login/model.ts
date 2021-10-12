import { UpdateUserDetails } from '@entities/viewer/model';
import { GithubAuthProvider, signInWithPopup } from '@firebase/auth';
import { CLIENT_CREDENTIAL } from '@shared/config';
import { auth, provider } from '@shared/config/firebase';
import { setLocalStorage } from '@shared/lib';

export const LoginUser = (): AppThunk => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;

    if (token) {
      setLocalStorage<string>(CLIENT_CREDENTIAL, token);

      dispatch(UpdateUserDetails(token));
    } else {
      Promise.reject(new Error('Insufficient data'));
    }
  } catch (e) {
    console.log(e);
  }
};
