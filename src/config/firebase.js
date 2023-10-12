import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDWxTweoVe6mzCu04GgOuOi3rcL6GxKsf8",
    authDomain: "olx-firebase-699dd.firebaseapp.com",
    projectId: "olx-firebase-699dd",
    storageBucket: "olx-firebase-699dd.appspot.com",
    messagingSenderId: "1061051572258",
    appId: "1:1061051572258:web:ce27d213c3ddac6f92ea7b"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  function register(email, password, fullname, age){
    createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    try {
        const docRef = await addDoc(collection(db, "users"), {
          fullname: "fullname",
          email: "email",
          age: "age"
        });
        alert('Successfully Registered!')
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        alert(e.message)
      }      
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
  }

  function login(email, password){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert('Successfully Logged In!')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });


  }

export {
    register,
    login
}