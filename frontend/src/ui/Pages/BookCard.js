import React from "react";
import { Col, Container, Image } from "react-bootstrap";

export function BookCard(props) {
  const { title, price } = props.book;

  return (
    <>
      <Col lg={2} md={4} sm={6}>
        <Container fluid>
          <Image
            fluid
            src="https://innovating.capital/wp-content/uploads/2021/05/vertical-placeholder-image.jpg"
            className="place-holder-image-1 bookstore-books"
            alt="Place-holder Book Cover"
          />
          <p className="text-center">
            {title}
            <br />
            {price}
          </p>
        </Container>
      </Col>
    </>
  );
}
