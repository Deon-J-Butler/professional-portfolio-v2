import React from "react";
import { Container } from "react-bootstrap";

export function Portfolio() {
  return (
    <>
      <Container className="section-title">
        <h5>Our</h5>
        <h1>STORY</h1>
      </Container>
      <Container fluid className="d-flex justify-content-center">
        <Container id="about-us-container">
          <div id="about-us-image">
            <img src="https://placehold.jp/725x600.png" alt="Placeholder" />
          </div>
          <div id="about-us-div-1">
            <p>
              Continual learning is the constancy in harboring knowledge in
              developing mind. To improve in all areas in life it is vital to
              incorporate continual education; it creates value, change
              lifestyle, and the economy in whole.
            </p>
            <p>
              At Globis Bookstore, we make it conveninet to achieve multiple
              goals at one place. More deals, low prices, and interesting genre.
            </p>
          </div>
          <div id="about-us-div-2">
            <p className="mb-0">
              <strong>Globis Bookstore</strong> was established in 2020 with an
              interest to sell diversity of books genre to our customers by
              allowing multi facet methods of receiving your purchased books.{" "}
            </p>
            <ul className="ps-0 mb-0">We offer:</ul>
            <li className="list-item-spacing">hard cover copies</li>
            <li className="list-item-spacing">soft cover copies</li>
            <li className="list-item-spacing">audio stream books</li>
            <li className="list-item-spacing">video stream books</li>
          </div>
        </Container>
      </Container>
    </>
  );
}
