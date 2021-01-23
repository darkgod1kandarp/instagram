import React from "react";
import validateChangePassword from "../../utils/validateChangePassword.utils";
import useSignIn from "../../hooks/useSignIn.hooks.";
import "./FormSignIn.styles.scss";

const FormSignin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors, a } = useSignIn(
    submitForm,
    validateChangePassword
  );

  return (
    <div className="signIn-form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Welcome</h1>
        <h1>Log In to continue</h1>

        <div className="form-inputs" id="email">
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs" >
          <input
            id="pass"
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div class="show-checkbox">
          <input type="checkbox" id="show-pass" name="show-pass" value="Show" />
          <label for="show-pass">Show password</label><br></br>
        </div>
        <span className="form-forgot">
          <a href="/Forgot">Forgot Password?</a>
        </span>

        <button className="signIn-form-input-btn" type="submit">
          Log In
        </button>
        <div className="form-signup">
          <span>Don't have an account?</span>
          <a href="/Signup">Sign Up</a>
        </div>
        
      </form>
    </div>
  );
};

export default FormSignin;
