import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Reach Out to Me</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">

            <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>

                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">rajeshmm5321@gmail.com</span>

                <a href="mailto:rajeshmm5321@gmail.com" className="contact__button">
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>{" "}
                </a>
            </div>


            <div className="contact__card">
                <i className="bx bxl-whatsapp contact__card-icon"></i>

                <h3 className="contact__card-title">Phone</h3>
                <span className="contact__card-data">8431157174</span>
            </div>  

        </div>
    </section>
  );
};

export default Contact;
