// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvgO6LNcBP9Qryt-k5nyPsdCP9YIk6nHg",
  authDomain: "msk-react.firebaseapp.com",
  projectId: "msk-react",
  storageBucket: "msk-react.appspot.com",
  messagingSenderId: "986274445585",
  appId: "1:986274445585:web:4a1f0392fc1a31b17ff4b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

async function userSignUp(data) {
  const { email, pass, ConPass } = data
  try {
    await createUserWithEmailAndPassword(auth, email, pass, ConPass)
    return { error: false, message: "user created" }
  }
  catch (error) {
    return { error: true, message: error.message }
  }

  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential;
  //   console.log(user);
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log("Nh chal gaya ", data, error);
  //   // ..
  // });
}

async function userSignIn(loginData) {
  const { email, pass } = loginData
  try {
    await signInWithEmailAndPassword(auth, email, pass)
    return { error: false, message: "user created" }
  }
  catch (error) {
    return { error: true, message: error.message }
  }

  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log("yes yes yes got it");
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.group("Nopes", error);
  //     });
}

export { userSignIn, userSignUp };
