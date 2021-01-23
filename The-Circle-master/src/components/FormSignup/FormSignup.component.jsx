import React, { useState } from "react";
import validateSignUpInfo from "../../utils/validateSignUpInfo.utils";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp.hooks";
import "./FormSignup.styles.scss";
const FormSignup = ({ submitForm, history, setUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleChange, handleSubmit, values, user } = useSignUp(
    submitForm,
    validateSignUpInfo
  );
  return (
    <div className="form-content-right">
      <h3 className="form-content-right-heading">
        Welcome! <br /> Sign Up to continue
      </h3>
      <form
        onSubmit={handleSubmit}
        className="form-content-right-form"
        noValidate
      >
        <h1 className="form-content-right-form--heading">Create account</h1>
        <div className="form-content-right-form--input__container">
          <label className="form-label">
            <input
              className="form-content-right-form--input__container--input"
              type="text"
              name="username"
              placeholder="Name"
              value={values.username}
              onChange={handleChange}
            />
          </label>
          <p>{values.nameError}</p>
        </div>

        <div className="form-content-right-form--input__container">
          <label className="form-label">
            <input
              className="form-content-right-form--input__container--input"
              type="email"
              name="email"
              placeholder="Your email address"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <p>{values.emailError}</p>
        </div>
        <div className="form-content-right-form--input__container">
          <label className="form-label">
            <input
              className="form-content-right-form--input__container--input"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create Password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <p>{values.passwordError}</p>
        </div>
        <div className="form-content-right-form--input__container">
          <label className="form-label">
            <input
              className="form-content-right-form--input__container--input"
              type={showPassword ? "text" : "password"}
              name="password2"
              placeholder="Confirm Password"
              value={values.password2}
              onChange={handleChange}
            />
          </label>
          <p>{values.passwordError}</p>
        </div>
        <div className="signup-show--password">
          <input
            type="checkbox"
            id="signup-show--password"
            onClick={() => setShowPassword(!showPassword)}
          />
          <label
            htmlFor="signup-show--password"
            className="signup-show--password--label"
          >
            Show Password
          </label>
        </div>

        <button
          className="form-content-right-btn"
          type="submit"
          onClick={() => {
            if (values.username) {
              setUser({
                username: values.username,
              });
            }
          }}
        >
          Sign Up
        </button>
        <div className="signup-tc--container">
          <input type="checkbox" id="signup-tc" required />
          <label htmlFor="signup-tc" className="signup-tc--label">
            By creating account or logging in , you agree to BookMyMum's{" "}
            <Link>Condition of Use</Link> and <Link>policy</Link>
          </label>
        </div>
      </form>
      <span className="form-input-login-link">
        Already have an account? <Link to="/SignIn">Log In</Link>
      </span>
    </div>
  );
};

export default FormSignup;
