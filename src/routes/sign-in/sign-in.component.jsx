import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUsertDocumentFromAuth,
} from "../../utils/firebase.utils.js/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  //auth with redirect
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUsertDocumentFromAuth(response.user);
      }
    }
    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUsertDocumentFromAuth(user);
    //console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
