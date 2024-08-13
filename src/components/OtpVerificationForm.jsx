import { Button, Divider, Stack } from "rsuite";
import FloatingLabelInput from "./FloatingLabelInput";
import ArowBackIcon from "@rsuite/icons/ArowBack";
import MessageIcon from "@rsuite/icons/Message";
import useVerifyOtp from "../hooks/useVerifyOtp";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import RegisterSchema from "../Schema/RegisterSchema";
import toast, { Toaster } from "react-hot-toast";

function OtpVerificationForm({ setShowOtpVerification, phoneNumber }) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [resendPass, setResendPass] = useState(false);
  const { loading, error, response, statusCode, verifyOtp } = useVerifyOtp(
    "http://localhost:8080/api/v1/verify-otp"
  );

  // Formik for OTP verification
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: RegisterSchema.pick(["otp"]),
    onSubmit: async (values) => {
      await verifyOtp(phoneNumber, formik.values.otp);
    },
  });

  useEffect(() => {
    if (timeLeft <= 0) {
      setResendPass(true);
      return;
    }

    console.log(error, statusCode);
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleResendClick = async () => {
    try {
      await resendOtp();
      setTimeLeft(60);
      setResendPass(false);
    } catch (error) {
      console.error("Error resending OTP:", error);
    }
  };

  const handleBackClick = () => {
    setShowOtpVerification(false);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="otpverification-container fade-in">
        <div className="back-arrow" onClick={handleBackClick}>
          <ArowBackIcon />
        </div>
        <Stack alignItems="center" justifyContent="space-between">
          <div>
            <h3 className="heading poppins-medium">Enter OTP</h3>
            <p className="action-text poppins-regular">
              We've sent an OTP to your phone number
              <span className="cta phoneNumber">{phoneNumber}</span>
            </p>
          </div>
          <div className="otp_container">
            {timeLeft > 0 ? timeLeft : <MessageIcon />}
          </div>
        </Stack>
        <Divider className="div-25" />
        <div className="form-container">
          <FloatingLabelInput
            label="One Time Password"
            name="otp"
            statusCode={statusCode}
            value={formik.values.otp}
            onChange={(value) => formik.setFieldValue("otp", value)}
            error={
              formik.errors.otp && formik.touched.otp ? formik.errors.otp : null
            }
          />
          {resendPass ? (
            <p className="refrral-label">
              Did not receive OTP? &nbsp;
              <a href="." className="cta" onClick={handleResendClick}>
                Resend
              </a>
            </p>
          ) : null}
          <Button
            type="submit"
            className={`${
              statusCode === 200 ? "btn success-btn" : "btn"
            } ${resendPass ? "btn" : "btn  mt-30"}`}
            block
          >
            <span className={statusCode === 200 ? "success-text" : ""}>
              {statusCode === 200 ? "Verified Successfully!" : "Verify OTP"}
            </span>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default OtpVerificationForm;
