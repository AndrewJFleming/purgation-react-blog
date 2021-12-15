import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import Sidebar from "../../shared/components/Sidebar/Sidebar";

export default function Contact() {
  return (
    <Container className="page">
      <Row>
        <Col md={8}>
          <h2>Contact</h2>
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}
