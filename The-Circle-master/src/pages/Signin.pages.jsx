import React, { useState } from "react";
import "../Form.css";

import FormSuccess from "../components/FormSuccess.component";
import FormSignin from "../components/FormSignin.component";
const Signin = () => {
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

      {!isSubmitted ? <FormSignin submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Signin;
