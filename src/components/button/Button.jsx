import React from "react";
import "./Button.scss";
/*
 default
 inverted
 google-sign-in
 */

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="spinner-overlay">
          <div className="spinner-container"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
