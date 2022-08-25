import React from "react";
import { Col, Container, DropdownButton, Dropdown, Row } from "react-bootstrap";
import { Books } from "./Books";

export function Skills() {
  return (
    <>
      <Container fluid className="section-title">
        <Row>
          <h5>Our</h5>
          <h1>BOOKSTORE</h1>
        </Row>
      </Container>
      <Container fluid>
        <Row className="d-flex px-5">
          <Col md={3}>
            <h4>Filter by</h4>
            <hr />
          </Col>
          <Col md={9} className="d-flex justify-content-end">
            <DropdownButton title="Sort by" variant="rounded-0">
              <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Price (low to high)
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Price (high to low)
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Name A-Z</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Name Z-A</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="px-5">
          <Col md={3}>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Collection
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">Lorem ipsum</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Price
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">dolor sit amet</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={9}>
            <Container id="bookstore-container">
              <Row>
                <Books />
              </Row>
              <Row>
                <Books />
              </Row>
              <Row>
                <Books />
              </Row>
              <Row>
                <Books />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
