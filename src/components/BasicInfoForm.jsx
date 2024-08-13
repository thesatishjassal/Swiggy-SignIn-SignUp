import React from "react";
import { Button, Divider, Stack } from "rsuite";
import FloatingLabelInput from "./FloatingLabelInput";
import SwiggyLogo from "../assets/swiggy-logo.png";
import useRegisterAccount from "../hooks/useRegisterAccount"; // Import the custom hook
import { useFormik } from "formik";
import RegisterSchema from "../Schema/RegisterSchema";

function BasicInfoForm({ setShowOtpVerification, setShowPhoneNumber }) {
  const { loading, error, response, registerAccount } = useRegisterAccount(
    "http://localhost:8080/api/v1/register"
  ); // Use the custom hook

  // Formik for basic info/
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      fullName: "",
    },
    validationSchema: RegisterSchema.pick(["fullName", "phoneNumber"]),
    onSubmit: (values) => {
      registerAccount(formik.values.fullName, formik.values.phoneNumber); // Call the hook's function to register the account
      setShowPhoneNumber(formik.values.phoneNumber)
      setShowOtpVerification(true);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="registration-form fade-in">
        <Stack alignItems="center" justifyContent="space-between">
          <div>
            <h3 className="heading poppins-medium">Sign up</h3>
            <p className="action-text poppins-regular">
              or &nbsp;
              <a href="" className="active cta">
                login to your account
              </a>
            </p>
          </div>
          <img className="swiggy-icon" src={SwiggyLogo} />
        </Stack>
        <Divider className="div-25" />
        <div className="form-container">
          <FloatingLabelInput
            label="Full Name"
            name="fullName"
            value={formik.values.fullName}
            onChange={(value) => formik.setFieldValue("fullName", value)}
            error={
              formik.errors.fullName && formik.touched.fullName
                ? formik.errors.fullName
                : null
            }
          />
          <FloatingLabelInput
            label="Phone Number"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={(value) => formik.setFieldValue("phoneNumber", value)}
            error={
              formik.errors.phoneNumber && formik.touched.phoneNumber
                ? formik.errors.phoneNumber
                : null
            }
          />
          <Button type="submit" className="btn mt-30" block>
            Continue
          </Button>
          <p className="term-cond-text">
            By creating an account, I accept the{" "}
            <a href=".">Terms & Conditions</a> & <a href=".">Privacy Policy</a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default BasicInfoForm;
