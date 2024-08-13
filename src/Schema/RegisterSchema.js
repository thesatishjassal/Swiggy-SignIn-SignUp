import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  otp: Yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
});

export default RegisterSchema;
