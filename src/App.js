import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from "./Component/ContactForm";

function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col><ContactForm/></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
