import "rsuite/dist/rsuite.min.css";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SingInForm";
import { Container, Content } from "rsuite";
import { Grid, Row, VStack, Col } from "rsuite";
import "./Swiggy-theme.css";

function App() {
  return (
    <Container>
      <Content>
        <VStack alignItems="center" justifyContent="center">
          <Row className="show-grid">
            <Col>
              <SignUpForm />
            </Col>
          </Row>
        </VStack>
      </Content>
    </Container>
  );
}

export default App;
