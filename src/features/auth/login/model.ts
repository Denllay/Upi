import { UpdateUserDetails } from '@entities/viewer/model';
import { GithubAuthProvider, signInWithPopup } from '@firebase/auth';
import { CLIENT_CREDENTIAL } from '@shared/config';
import { auth, provider } from '@shared/config/firebase';
import { setLocalStorage } from '@shared/lib';
import { UserData } from './types';
import axios from 'axios';
import { History } from 'history';

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
        setLocalStorage<string>(CLIENT_CREDENTIAL, token);
        const payload = {
          isAuth: true,
          token,
          login,
        };

        dispatch(UpdateUserDetails(payload));
        history.push(`/${login}`);
      } else {
        Promise.reject(new Error('Insufficient data'));
      }
    } catch (e) {
      console.log(e);
    }
  };
