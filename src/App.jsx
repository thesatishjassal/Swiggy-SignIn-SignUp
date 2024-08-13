import "rsuite/dist/rsuite.min.css";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SingInForm";
import { Container, Content } from "rsuite";
import { Grid, Row, HStack, Col } from "rsuite";
import "./Swiggy-theme.css";

function App() {
  return (
    <Container>
      <Content>
        <HStack alignItems="center" justifyContent="center">
          <Row className="show-grid">
            <Col>
              <SignUpForm />
            </Col>
          </Row>
        </HStack>
      </Content>
    </Container>
  );
}

export default App;
