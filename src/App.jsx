import "rsuite/dist/rsuite.min.css";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SingInForm";
import { Container, Content } from "rsuite";
import { Grid, Row, HStack, Col } from "rsuite";
import "./main";

function App() {
  return (
    <Container>
      <Content>
        <HStack
          alignItems="center"
          justifyContent="center"
          style={{ height: "100vh" }}
        >
          <Row className="show-grid">
            <Col xs={12}>
              <SignUpForm />
            </Col>
            <Col xs={12}>
              <SignInForm />
            </Col>
          </Row>
        </HStack>
      </Content>
    </Container>
  );
}

export default App;
