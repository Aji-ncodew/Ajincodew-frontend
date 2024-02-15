import { useState ,  ChangeEvent } from "react";
import "./Contact.css";
import * as emailjs from 'emailjs-com';
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  /*const handleSubmit = (e: any) => {
    setSubmitted(true);
    e.preventDefault();
    const name = e.target.name.value;
    e.target.name.value = "";
    const email = e.target.email.value;
    e.target.email.value = "";
    const message = e.target.message.value;
    e.target.message.value = "";
    const data = {
      name,
      email,
      message,
    };
  };*/
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { name, email, message } = formData;
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      name: name,
      email: email,
      to_name: '/*YOUR NAME OR COMPANY*/',
      message: message
    };
   

    emailjs.send(
        "service_o8zj5mg",
        "template_suzxx8i",
        templateParams,
        "9Xv2J4N48aW9CUDLK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setSubmitted(true);
          setFailure(true);
          setTimeout(() => {
            setFailure(false);
          }, 3000);
        }
      );

    resetForm()
  };
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };


  return (
    <>
    <section className="section contact" aria-label="contact" id="contact">
        <div className="container">
          <div className="title-wrapper">
            <h2
              className="headline-md section-title text-center"
              id="collection-label"
            >
              Contact Us
            </h2>
          </div>
          <div className="row px-lg-5 py-3">
            <div className="col-md-6">
              <div className="contact-info p-5 mb-2">
                <div className="contact-info-item mb-5">
                  <h5>
                    <i className="bi bi-envelope-at"></i> Email
                  </h5>
                  <a href="mailto:ajincodew@gmail.com">
                    ajincodew@gmail.com
                  </a>
                </div>
                <div className="contact-info-item mb-5">
                  <h5>
                    <i className="bi bi-telephone"></i> Phone
                  </h5>
                  <a href="tel:+212684134782">+212 6 84 13 47 82</a>
                </div>
                <div className="contact-info-item">
                  <h5>
                    <i className="bi bi-geo-alt"></i> Address
                  </h5>
                  <a
                    href="https://maps.app.goo.gl/"
                    target="_blank"
                  >
                    Morocco, Everywhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="contact-form text-center p-5">
                <h5 className="mb-4">Send us a message</h5>
                <form
                  className="form-wrapper"
                  name="contact-form"
                  method="POST"
                  onSubmit={handleSubmit}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <div className="form-group mb-2">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={name}
                      onChange={handleChange}

                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      //defaultValue={""}
                      value={message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className={
                        submitted
                          ? "btn btn-round disabled px-3"
                          : "btn btn-round px-3"
                      }
                      type="submit"
                      name="submit"
                      id="submit"
                      value="Submit"
                    >
                      {submitted ? (
                        <span>
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>{" "}
                          Sending ...
                        </span>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            className={
              success
                ? "toast show align-items-center text-bg-success border-0"
                : "d-none"
            }
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">Message sent successfully</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            className={
              failure
                ? "toast show align-items-center text-bg-danger border-0"
                : "d-none"
            }
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">Something goes wrong</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </section>
    </>
    
    
      
  );
}

export default Contact;
