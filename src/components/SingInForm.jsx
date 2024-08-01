import "rsuite/dist/rsuite.min.css";
import { Panel } from "rsuite";
import { useFormik } from "formik";
import LoginForm from "./LoginForm";

function SingInForm() {
  return (
    <Panel shaded bordered bodyFill className="auth_card">
      <LoginForm />
    </Panel>
  );
}

export default SingInForm;
