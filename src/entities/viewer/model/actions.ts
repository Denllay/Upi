import { auth } from '@shared/config/firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { UpdateUserDetails } from '.';

export const initialViewer = (): AppThunk => (dispatch) => {
  try {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { photoURL, email } = user;
        const token = await user.getIdToken();
        console.log(user);

        const payload = {
          token,
          photoURL,
          email,
        };

        dispatch(UpdateUserDetails(payload));
      }
    });
  } catch (e) {
    console.log(e);
  }
};
