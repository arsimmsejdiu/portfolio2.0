import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Message = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lzkgmwg",
        "template_dlckpv5",
        form.current,
        "user_xbFWpXGeohdx2okl6BH7y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact container">
      <div className="featured-title stagger1">
        <p>Send a DM for Collaboration</p>
      </div>
      <form className="stagger1" ref={form} onSubmit={sendEmail}>
        <label className="subtitle">Your Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="Your name.."
          required
        />

        <label className="subtitle">Last Name</label>
        <input
          type="text"
          name="user_lastname"
          placeholder="Your last name.."
          required
        />

        <label className="subtitle">Your Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Your email.."
          required
        />

        <label className="subtitle">Subject</label>
        <input
          type="text"
          name="user_subject"
          placeholder="Your subject.."
          required
        />

        <labe className="subtitle" for="message">
          Your Message
        </labe>
        <textarea
          name="message"
          placeholder="Write something.."
          style={{ height: "200px" }}
        ></textarea>

        <button className="button" type="submit" value="Send">
          {" "}
          Hire Me{" "}
        </button>
      </form>
    </div>
  );
};

export default Message;
