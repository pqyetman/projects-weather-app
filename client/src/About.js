import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutProcess from "./AboutProcess";
import AboutComponents from "./AboutComponents";

function About() {
  return (
    <Container fluid className="m-0 px-2 text-white">
      <Row className="my-5 text-center">
        <Col md={12}>
          <h1>~About~</h1>
        </Col>
      </Row>
      <AboutComponents />
      <AboutProcess />
    </Container>
  );
}

export default About;
