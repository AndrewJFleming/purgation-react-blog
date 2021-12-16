import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import Post from "./Post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  return (
    <Row className="posts ">
      {posts.length ? (
        posts.map((p) => (
          <Col xs={12} sm={6} md={4} lg={3}>
            <Post key={p._id} post={p} />{" "}
          </Col>
        ))
      ) : (
        <div className="noResults">
          <p>No results for that search:</p>
          <Link to={"/"} className="link">
            <span>Return to homepage</span>
          </Link>
        </div>
      )}
    </Row>
  );
}
