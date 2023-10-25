
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {

// google popup
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className=" paddings innerWidth flexCenter">
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in google account</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
