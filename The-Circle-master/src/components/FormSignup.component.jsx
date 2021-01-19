import React from "react";
import validateSignUpInfo from "../utils/validateSignUpInfo.utils";
import useSignUp from "../hooks/useSignUp.hooks";
import "../Form.css";
const FormSignup = ({ submitForm,history , setUser }) => {
  // const { handleChange, handleSubmit, values, errors } = useSignUp(
  //   submitForm,
  //   validateuse
  // );

  const { handleChange, handleSubmit, values ,user } = useSignUp(
    submitForm,
    validateSignUpInfo
  );
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>please fill out your form</h1>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          <p>{values.nameError}</p>
        </div>

        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          <p>{values.emailError}</p>
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          <p>{values.passwordError}</p>
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          <p>{values.passwordError}</p>
        </div>
        <button className="form-input-btn" type="submit" onClick={() => {
          console.log("Con",values)
          if(values.username){
            setUser({
              username:values.username,
            });
            console.log(user)
          }
        }}>
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="/SignIn">here</a>
        </span>
        <span className="form-input-login">
          Forgot Password? <a href="/Forgot">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
