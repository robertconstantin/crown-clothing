import {
  signInWithGooglePopup,
  createUsertDocumentFromAuth,
} from "../../utils/firebase.utils.js/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUsertDocumentFromAuth(user);
    //console.log(user);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
    </div>
  );
};

export default SignIn;
