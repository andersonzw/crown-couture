import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../util/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {

// google redirect
  const asyncFunction = async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
    if (response){
        const userDocRef = await createUserDocumentFromAuth(response.user)
    }
  };
  useEffect(() => {
    asyncFunction();
  }, []);

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
  };

// google popup
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className=" paddings innerWidth flexCenter">
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in google account</button>
      <button onClick={logGoogleRedirectUser}>
        Sign in with google redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
