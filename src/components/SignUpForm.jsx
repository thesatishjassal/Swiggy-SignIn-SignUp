import { Panel } from "rsuite";
import React, { useState, useEffect } from "react";
import BasicInfoForm from "./BasicInfoForm";
import OtpVerificationForm from "./OtpVerificationForm";
import "rsuite/dist/rsuite.min.css";
import signupBanner from "../assets/signup-banner.gif";

function SignUpForm() {
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState();

  return (
    <Panel shaded bordered bodyFill className="auth_card">
      <img src={signupBanner} className="zomato-banner" />
      <div className="panel-body">
        {!showOtpVerification ? (
          <BasicInfoForm
            setShowOtpVerification={setShowOtpVerification}
            setShowPhoneNumber={setShowPhoneNumber}
          />
        ) : (
          <OtpVerificationForm
            setShowOtpVerification={setShowOtpVerification}
            phoneNumber={showPhoneNumber}
          />
        )}
      </div>
    </Panel>
  );
}

export default SignUpForm;
