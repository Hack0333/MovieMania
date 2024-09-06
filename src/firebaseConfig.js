import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDoasdFoAMbadeDp2gY2uHDVXM1MHmG1Rc",
    authDomain: "moviemania-d0f70.firebaseapp.com",
    projectId: "moviemania-d0f70",
    storageBucket: "moviemania-d0f70.appspot.com",
    messagingSenderId: "399672258941",
    appId: "1:399672258941:web:d4d524badb4149d8109c14",
    measurementId: "G-7ZTDK17QP2"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;