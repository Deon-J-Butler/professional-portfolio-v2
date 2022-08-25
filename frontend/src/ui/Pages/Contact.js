import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export function Contact() {
  return (
    <>
      <Container className="section-title">
        <Row>
          <h4>For More Info</h4>
          <h1>CONTACT US</h1>
        </Row>
      </Container>
      <Container fluid className="d-flex justify-content-center">
        <Container id="contact-container">
          <Container id="contact-form-container">
            <Row>
              <Col md={4}>
                <h3> Store 01</h3>
                <br />
                <p>
                  Address <br /> 500 Terry Francois St. <br />
                  SF, CA 94158
                </p>
                <p>
                  Tel <br />
                  123-456-789
                </p>
                <br />
                <p>
                  Email <br /> info@my-domain.com
                </p>
              </Col>
              <Col md={4}>
                <h3>Store 02</h3>
                <br />
                <p>Bealeton, Virginia</p>
                <br />
                <br />
                <p>
                  Tel <br />
                  +1 (571) 376 - 3319
                </p>
                <br />
                <p>
                  Email <br /> samuelasiedu@hotmail.com
                </p>
              </Col>
              <Col md={4}>
                <h3>Customer Service</h3>
                <br />
                <p>
                  Tel <br /> 1-800-000-0000
                </p>
                <br />
                <br />
                <p>
                  Email <br /> info@my-domain.com
                </p>
                <br />
                <a href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook-f social-icons"></i>
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fa-brands fa-twitter social-icons"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram social-icons"></i>
                </a>
                <a href="https://www.pinterest.com/">
                  <i className="fa-brands fa-pinterest-p social-icons"></i>
                </a>
              </Col>
            </Row>
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <Row>
                <Col md={6}>
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="form-control rounded-0"
                    />
                    <label for="name" class=""></label>
                  </div>
                </Col>
                <Col md={6}>
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="form-control rounded-0"
                    />
                    <label for="email" class=""></label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      rows="2"
                      className="form-control md-textarea rounded-0"
                    ></textarea>
                    <label for="message"></label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Button
                  type="submit"
                  id="contact-form-button"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Submit
                </Button>
              </Row>
            </form>
          </Container>
        </Container>
      </Container>
    </>
  );
}
