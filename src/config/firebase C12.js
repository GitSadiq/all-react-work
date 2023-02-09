// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where, doc, getDoc, getDocFromCache, setDoc } from "firebase/firestore";
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
const db = getFirestore(app);

async function userSignUp(data) {
  const { name, email, pass } = data
  try {
    const response = await createUserWithEmailAndPassword(auth, email, pass)
    const uid = response.user.uid
    console.log(response)
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      uid: uid,
    });

    // Difference between setdoc and adddoc is that adddoc generate auto ID while setdoc generate specific which you want

    // await setDoc(doc(db, "users", uid), {
    //   name: name,
    //   email: email,
    //   uid: uid,
    // });
    console.log(docRef)
    return { error: false, message: "user created" }
  }
  catch (error) {
    // console.log("ye q chal raha hai", error)
    return { error: true, message: error.message }
  }
}

async function userSignIn(loginData) {
  const { email, pass } = loginData
  try {
    const res = await signInWithEmailAndPassword(auth, email, pass)
    // console.log(res)
    return { error: false, message: "user login successfully", uid: res.user.uid }
  }
  catch (error) {
    return { error: true, message: error.message }
  }
}

async function getCurrentUserData(uid) {

  // const docRef = doc(db, "users", uid);
  // const docSnap = await getDoc(docRef);
  // console.log(docSnap)
  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());

  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  // const docRef = doc(db, "users", uid);
  // console.log(docRef)
  // // Get a document, forcing the SDK to fetch from the offline cache.
  // try {
  //   const doc = await getDocFromCache(docRef);
  //   // Document was found in the cache. If no cached document exists,
  //   // an error will be returned to the 'catch' block below.
  //   console.log("Cached document data:", doc.data());
  // } catch (e) {
  //   console.log("Error getting cached document:", e);
  // }

  const q = query(collection(db, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  // console.log("querySnapshot", querySnapshot)
  let copyArray = []
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    copyArray.push(doc.data())
  })
  return copyArray[0]
}

export { userSignIn, userSignUp, auth, getCurrentUserData };
