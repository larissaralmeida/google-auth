import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBrGFm2O1r8EnbsIORclUicRX0ijlVqoEo',
  authDomain: 'auth-2ade9.firebaseapp.com',
  projectId: 'auth-2ade9',
  storageBucket: 'auth-2ade9.appspot.com',
  messagingSenderId: '921672699768',
  appId: '1:921672699768:web:e76b1da74333a90566028d'
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);