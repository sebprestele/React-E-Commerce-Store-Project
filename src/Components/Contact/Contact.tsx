import Footer from "Components/Footer/Footer";
import Navigation from "Components/Navigation/Navigation";

import "./contact.css";

//Contact form not functional yet

function Contact() {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="contact">
        <h1>Contact us</h1>
        <div className="contact-container">
          <form action="" className="contact-form">
            <input
              type="text"
              className="contact__name"
              name="firstname"
              placeholder="Your name firstname"
            />

            <input
              type="text"
              className="contact__name"
              name="lastname"
              placeholder="Your last name.."
            />

            <textarea
              name="subject"
              className="contact__textarea"
              placeholder="Your message for us.."
            ></textarea>

            <input type="submit" className="btn btn--primary" value="Submit" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
