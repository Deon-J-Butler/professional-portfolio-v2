import React from "react";
import "../CSS/UI.css";

export function NavButtons(props) {
  const { link, type } = props.button;

  return (
    <>
      <a href={link} className="unstyled-link">
        <p className="nav-button">{type}</p>
      </a>
    </>
  );
}
