import React, { useRef } from "react";
import "./join.css";
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_030olx4', 'template_ry9zpi2', form.current, {
        publicKey: 'XPJOHRqaleHL5K4Z0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      <div className="right-j">

        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" id="email_add" placeholder="Enter your Email address" />
          <button className="btn btn-j">Join Now</button>
        </form>

      </div>
    </div>
  );
};

export default Join;
