import React from "react";

function Contact() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Contact Us</h1>

      <p>Email: info@laxmidiamond.com</p>
      <p>Phone: +91 9876543210</p>

      <form>
        <input type="text" placeholder="Your Name" /><br /><br />
        <input type="email" placeholder="Your Email" /><br /><br />
        <textarea placeholder="Message"></textarea><br /><br />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;