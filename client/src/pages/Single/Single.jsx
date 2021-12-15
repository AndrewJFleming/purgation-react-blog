import { Container, Row, Col } from "react-bootstrap";
import "./Single.css";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";

export default function Single() {
  return (
    <Container className="page">
      <Row>
        <Col md={8}>
          <SinglePost />
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}
