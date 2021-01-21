import React, { useState } from "react";
import "../Form.css";
import FormSignup from "../components/FormSignup.component";
import FormSuccess from "../components/FormSuccess.component";
import Image from "../assets/TheCircle.jpeg";

const Signup = ({ history, setUser }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
    history.push("/getInfo");
  };
  return (
    <div className="form-container">
      <div className="form-content-left">
        <img className="TheCircle" src={Image} alt="Logo" />
      </div>
      {isSubmitted ? console.log("True") : console.log("False")}
      {!isSubmitted ? (
        <FormSignup submitForm={submitForm} setUser={setUser} />
      ) : (
        <FormSuccess />
      )}
    </div>
  );
};

export default Signup;
