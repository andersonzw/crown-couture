import React from "react";
import "./FormInput.scss";

const FormInput = ({ label, changeHandler, value, type, name }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        onChange={changeHandler}
        required
        name={name}
        value={value}
      />
      {label && (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
