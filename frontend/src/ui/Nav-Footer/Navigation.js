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

  function showDropdown() {
    const target = document.getElementById("dropdown-content");
    if (target.className === "dropdown-content") {
      target.className = "show.dropdown-content";
    } else {
      target.className = "dropdown-content";
    }
  }

  return (
    <>
      <div className="nav">
        <a href="/" className="unstyled-link">
          <i className="fa-solid fa-house home-button"></i>
        </a>
        <button className="dropdown-toggle" onClick={showDropdown}>
          <i class="fa-solid fa-bars"></i>
        </button>
        <div className="dropdown">
          <div id="dropdown-content" className="dropdown-content">
            {buttons.map((button) => (
              <NavButtons button={button} key={button.type} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
