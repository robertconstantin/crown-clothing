// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUsertDocumentFromAuth,
// } from "../../utils/firebase.utils.js/firebase.utils";

import './authentification.styles.scss';

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentification = () => {
  //auth with redirect
//   useEffect(() => {
//     async function fetchData() {
//       // You can await here
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const userDocRef = await createUsertDocumentFromAuth(response.user);
//       }
//     }
//     fetchData();
//   }, []);

//   const logGoogleUser = async () => {
//     const { user } = await signInWithGooglePopup();
//     const userDocRef = await createUsertDocumentFromAuth(user);
//     //console.log(userDocRef);
//   };

  return (
    <div className="authentification-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentification;
