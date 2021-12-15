import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import Sidebar from "../../shared/components/Sidebar/Sidebar";

export default function About() {
  return (
    <Container className="about">
      <Row>
        <Col md={8}>
          <h2>About</h2>
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}
