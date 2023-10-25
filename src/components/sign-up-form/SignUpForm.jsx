import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import "./SignUpForm.scss"
import Button from "../button/Button";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("password do not match");
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, {
          displayName,
        });
        resetFormFields();
      } catch (error) {
        if (error.code === "auth/email-already-in-use")
          alert("Cannot create user, email already in use");
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and passwod</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type={"text"}
          changeHandler={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label={"Email"}
          type={"email"}
          changeHandler={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          type={"password"}
          changeHandler={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label={"Confirm Password"}
          type={"password"}
          changeHandler={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
