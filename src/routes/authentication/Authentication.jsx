
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";
import "./Authentication.scss"
const Authentication = () => {

// google popup

  return (
    <div className=" a-container paddings innerWidth flexCenter">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
