import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA3iDv-jr8glSqJXiiRmgEr7AmvGEltbRg',
  authDomain: 'github-profile-725fd.firebaseapp.com',
  projectId: 'github-profile-725fd',
  storageBucket: 'github-profile-725fd.appspot.com',
  messagingSenderId: '984499102898',
  appId: '1:984499102898:web:ed5cbf8363abde097755ab',
  measurementId: 'G-XKV4BD9YYP',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GithubAuthProvider();
provider.addScope('repo');
provider.addScope('user');
