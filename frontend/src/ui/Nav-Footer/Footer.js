import React from "react";
import "../CSS/UI.css";

export function Footer() {
  return (
    <div className="perma-footer">
      <div className="footer-content">
        <span>Let's Connect!</span>
      </div>
      <div className="footer-content">
        <a
          href="https://github.com/Deon-J-Butler"
          class="text-decoration-none text-light"
        >
          <span class="fas">
            <i class="fa-brands fa-github"></i>
          </span>
        </a>
      </div>
      <div className="footer-content">
        <a
          href="https://www.linkedin.com/in/deon-j-butler/"
          class="text-decoration-none text-light"
        >
          <span class="fas">
            <i class="fa-brands fa-linkedin"></i>
          </span>
        </a>
      </div>
    </div>
  );
}
