import React from "react";
import "../CSS/UI.css";
import { NavButtons } from "./NavButtons";

export function Navigation() {
  const buttons = [
    {
      link: "/skills",
      type: "Skills",
    },
    {
      link: "/portfolio",
      type: "Portfolio",
    },
    {
      link: "/contact-me",
      type: "Contact Me",
    },
  ];

  return (
    <>
      <div className="nav">
        <a href="/" className="unstyled-link">
          <i className="fa-solid fa-house home-button"></i>
        </a>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={() => this.class = "dropdown-toggle-active"}>
            <i class="fa-solid fa-bars"></i>
          </button>
          <div className="dropdown-content">
            {buttons.map((button) => (
              <NavButtons button={button} key={button.type} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
