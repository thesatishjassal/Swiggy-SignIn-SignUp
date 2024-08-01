import "rsuite/dist/rsuite.min.css";
import { Panel } from "rsuite";
import { useFormik } from "formik";
import OtpVerification from "./OtpVerfication";
import RegisterForm from "./RegisterForm";

function SignUpForm() {
  return (
    <Panel shaded bordered bodyFill className="auth_card">
      <RegisterForm />
    </Panel>
  );
}

export default SignUpForm;
