
// import React, { useEffect, useState } from "react";
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
// import 'firebase/auth';
// import "./SignUp.css";
// import { Link } from "react-router-dom";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCJ5oCRLHZ_HHQOQxh7SyKi1c",
//   authDomain: "my-first-signup-16a9d.firebaseapp.com",
//   projectId: "my-first-signup-16a9d",
//   storageBucket: "my-first-signup-16a9d.appspot.com",
//   messagingSenderId: "8136298345",
//   appId: "1:8136298345:web:91ed6bae60cb3c8"
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// function Signup() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth,(person) => {
//       if (person) {
//         setUser(person);
//         alert("your signup successfully completed");
//         <Link to = "/home">home</Link>
//       } else {
//         setUser(null);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);
//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, new GoogleAuthProvider().setCustomParameters({
//         prompt: 'select_account'
//       }));
//       const userCredential = result.user;
//       setUser(userCredential);
//     } catch (err) {
//       console.error('Error during Google Sign-In:', err.message);
//     }
//   };
//   return (
//     <div className="App">
//       {user ? (
//         <div>
//           <h1>Welcome to home</h1>
//             <button className="Signout" id="Signout" onClick={() => { auth.signOut(); setUser(null); }}>Sign out</button>

//         </div>
//       ) : (
//         <div className="Signup_div_main_onclick"><button className="Onclick_signup" onClick={signInWithGoogle}> <img className ="Sign_google_img" src ="/photos/google_log.png" alt =""/>Sign Up With Google</button></div>
//       )}
//     </div>
//   );
// }

// export default Signup;



