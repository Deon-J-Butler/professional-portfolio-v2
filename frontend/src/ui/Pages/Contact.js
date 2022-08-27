import React from "react";

export function Contact() {
  return (
    <section className="page">
      <div className="contact-container">
        <h1>Want to Work Together? Contact Me Now!</h1>
        <form id="contact-form" action="./apis/" method="POST">
          <div className="form-section">
            <div className="inline-label">
              <div className="label">
                <label for="firstName">First Name</label>
              </div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="inline-label">
              <div className="label">
                <label for="lastName">Last Name</label>
              </div>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="form-section">
            <div className="inline-label">
              <div className="label">
                <label for="email">Email Address</label>
              </div>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="inline-label">
              <div className="label">
                <label for="subject">Subject</label>
              </div>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="How Can I Help You?"
              />
            </div>
          </div>

          <div className="form-section">
            <textarea
              name="message"
              id="message"
              className="textarea"
              rows="10"
              maxlength="1501"
              placeholder="1500 characters max"
            ></textarea>
          </div>

          <button type="reset">Reset</button>
          <button type="submit">Send</button>

          {/* <div
            class="g-recaptcha"
            data-sitekey="6LedmvQfAAAAAAyPPDilzDWKM492hGHKADhWCGuM"
          ></div> */}
        </form>
      </div>
    </section>
  );
}
