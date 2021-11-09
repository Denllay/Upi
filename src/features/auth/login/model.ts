import { viewerModel } from '@entities/viewer';
import { GithubAuthProvider, signInWithPopup } from '@firebase/auth';
import { auth, provider } from '@shared/config/firebase';
import { setLocalStorage } from '@shared/lib';
import { UserData } from './types';
import { History } from 'history';
import axios from 'axios';

export const LoginUser =
  (history: History): AppThunk =>
  async (dispatch) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // ? из-за того, что при авторизации oAuth гитхаба не дает логин, приходится дергать api
      const {
        data: { login },
      } = await axios.get<UserData>('https://api.github.com/user', {
        headers: { authorization: `Bearer ${token}` },
      });

      if (token) {
        setLocalStorage<string>('CLIENT_TOKEN', token);
        const payload = {
          isAuth: true,
          token,
          login,
        };

        dispatch(viewerModel.UpdateUserDetails(payload));
        history.push(`/${login}`);
      } else {
        Promise.reject(new Error('Insufficient data'));
      }
    } catch (e) {
      console.log(e);
    }
  };
