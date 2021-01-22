import React, { useState } from "react";
import validateSignUpInfo from "../../utils/validateSignUpInfo.utils";
import useSignUp from "../../hooks/useSignUp.hooks";
import "./FormSignup.styles.scss";
import Signup from "../../pages/Signup/Signup.pages";
const FormSignup = ({ submitForm, history, setUser }) => {
  // const { handleChange, handleSubmit, values, errors } = useSignUp(
  //   submitForm,
  //   validateuse
  // );
  const [showPassword, setShowPassword] = useState(false);
  const { handleChange, handleSubmit, values, user } = useSignUp(
    submitForm,
    validateSignUpInfo
  );
  return (
    <div className="form-content-right">
      <h3 className="form-content-right-heading">
        Welcome! Sign Up to continue
      </h3>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Create account</h1>
        <div className="form-inputs">
          <label className="form-label">
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
          </label>
          <p>{values.nameError}</p>
        </div>

        <div className="form-inputs">
          <label className="form-label">
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <p>{values.emailError}</p>
        </div>
        <div className="form-inputs">
          <label className="form-label">
            <input
              className="form-input"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <p>{values.passwordError}</p>
        </div>
        <div className="form-inputs">
          <label className="form-label">
            <input
              className="form-input"
              type={showPassword ? "text" : "password"}
              name="password2"
              placeholder="Confirm your password"
              value={values.password2}
              onChange={handleChange}
            />
          </label>
          <p>{values.passwordError}</p>
        </div>
        <input
          type="checkbox"
          id="show--password"
          onClick={() => setShowPassword(!showPassword)}
          required
        />
        <label htmlFor="show--password">show password</label>

        <button
          className="form-input-btn"
          type="submit"
          onClick={() => {
            if (values.username) {
              setUser({
                username: values.username,
              });
            }
          }}
        >
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="/SignIn">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
