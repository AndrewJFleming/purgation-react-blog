import React, { useState } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import { ErrorPrompt } from "../../shared/components/ErrorPrompt/ErrorPrompt";

export default function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const emailMessage = {
      subject,
      name,
      email,
      message,
    };

    try {
      // const res = await axios.post("/send", newMessage);
      console.log("Email sent: ", emailMessage);
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <Container className="page">
      <Row>
        <Col md={8} className="pageLeft">
          <h2 className="serifTitle">Contact</h2>
          <p>
            For questions and inquiries please send a message with the form
            below.
          </p>
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="contactFormGroup">
              <h5 className="serifTitle">Subject</h5>
              <input
                type="text"
                placeholder="Subject"
                autoFocus={true}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="contactFormGroup d-flex justify-content-between">
              <div className="inputWrapper">
                <h5 className="serifTitle mt-3">Name</h5>
                <input
                  type="text"
                  placeholder="Name"
                  autoFocus={true}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="inputWrapper">
                <h5 className="serifTitle mt-3">Email</h5>
                <input
                  type="text"
                  placeholder="Email"
                  autoFocus={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="contactFormGroup">
              <h5 className="serifTitle mt-3">Message</h5>
              <textarea
                placeholder="Message..."
                type="text"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {!success ? (
              <div className="submitWrapper">
                <button className="buttonSuccess" type="submit">
                  Send
                </button>
              </div>
            ) : (
              <p className="success">Email sent successfully</p>
            )}
          </form>
          {error && <ErrorPrompt />}
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}
