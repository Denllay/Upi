import { UpdateUserDetails } from '@entities/viewer/model';
import { GithubAuthProvider, signInWithPopup } from '@firebase/auth';
import { auth, provider } from '@shared/config/firebase';

export const LoginUser = (): AppThunk => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, provider);

    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken || null;
    const { email, photoURL } = result.user;

    const payload = {
      email,
      photoURL,
      token,
    };

    dispatch(UpdateUserDetails(payload));
  } catch (e) {
    console.log(e);
  }
};
