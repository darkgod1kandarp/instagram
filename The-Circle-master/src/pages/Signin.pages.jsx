import React, { useState } from "react";
import ImageBig from "../assets/banner-big.png";
import FormSuccess from "../components/FormSuccess.component";
import FormSignin from "../components/FormSignIn/FormSignin.component";

const Signin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="form-container">
      <span className="close-btn">×</span>
      <div className="form-content-left">
        <div className="form-content-img-container">
          <img className="TheCircle" src={ImageBig} alt="Logo" />
        </div>
      </div>

      {!isSubmitted ? <FormSignin submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Signin;
