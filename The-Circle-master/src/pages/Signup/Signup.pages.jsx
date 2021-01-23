import React, { useState } from "react";

import FormSignup from "../../components/FormSignup/FormSignup.component";
import FormSuccess from "../../components/FormSuccess.component";
import ImageBig from "../../assets/banner-big.png";
import "./Signup.styles.scss";
const Signup = ({ history, setUser }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
    history.push("/getInfo");
  };
  return (
    <div className="form-container">
      <div className="form-content-left">
        <div className="form-content-img-container">
          <img className="TheCircle" src={ImageBig} alt="Logo" />
        </div>
      </div>
      {!isSubmitted ? (
        <FormSignup submitForm={submitForm} setUser={setUser} />
      ) : (
        <FormSuccess />
      )}
    </div>
  );
};

export default Signup;
