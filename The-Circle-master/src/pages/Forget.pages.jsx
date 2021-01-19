import React, { useState } from "react";
import "../Form.css";
import FormForgotVerification from "../components/FormForgotVerification.component";
import FormForgot from "../components/FormForgot.component";
const ForgetPasswordFormComp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="form-container">
      <span className="close-btn">×</span>
      <div className="form-content-left">
        <h1>tare je nakhvu hoy te</h1>
      </div>

      {!isSubmitted ? (
        <FormForgot submitForm={submitForm} />
      ) : (
        <FormForgotVerification />
      )}
    </div>
  );
};

export default ForgetPasswordFormComp;
