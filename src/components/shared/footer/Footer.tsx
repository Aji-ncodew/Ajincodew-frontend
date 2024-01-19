import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import AJINCODEW_text from "../../../assets/AJINCODEW_text.png";
import AJINCODEW_logo_white from "../../../assets/ajincodew.jpg";
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid">
      <div className="footer-top row row-cols-1 row-cols-sm-2 row-cols-md-4 p-3 p-sm-5 text-light">
        <div className="col mb-3 d-flex flex-column align-items-center">
          <img src={AJINCODEW_logo_white} width="80" alt="AJINCODEW Logo" />
          <img src={AJINCODEW_text} width="126" alt="AJINCODEW Text" />
        </div>

        <div className="col mb-3 sm-6">
          <ul className="nav flex-column align-items-center">
            <li className="mb-2">
              <h5>Social media</h5>
            </li>
            <div>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="https://ajincodew.netlify.app/"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> Website
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="https://www.facebook.com/Ajincodew/"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/ajincodew/"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> LinkedIn
                </a>
              </li>
            
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="https://www.instagram.com/aji_ncodew_/"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> Instagram
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div className="col mb-3 sm-6">
          <ul className="nav flex-column align-items-center">
            <li className="mb-2">
              <h5>Useful links</h5>
            </li>
            <div>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="/about"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="/faq"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> FAQ
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="/blogs"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> Blogs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="/courses"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> Courses
                </a>
              </li>
            </div>
          </ul>
        </div>


        <div className="col mb-3 sm-6">
          <ul className="nav flex-column align-items-center">
            <li className="mb-2">
              <h5>Follow us</h5>
            </li>
            <li className="nav-item mb-3 d-flex justify-content-center align-items-center gap-2">
              <a
                target="_blank"
                href="https://www.instagram.com/aji_ncodew_/"
                className="nav-link p-0 text-light"
              >
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "40px" }} />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/Ajincodew/"
                className="nav-link p-0 text-light"
              >
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "40px" }} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ajincodew/"
                className="nav-link p-0 text-light"
              >
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "40px" }} />
              </a>
              <a
                target="_blank"
                href="https://github.com/Aji-ncodew"
                className="nav-link p-0 text-light"
              >
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "40px" }} />
              </a>
            </li>
            <li className="mb-2">
              <h5>Contact Details</h5>
            </li>
            <li className="nav-item mb-2">
              <a href="mailto:ajincodew@gmail.com">
                <i className="bi bi-envelope-at"></i> ajincodew@gmail.com
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="tel:+212684134782">
                <i className="bi bi-telephone"></i> +212 6 84 13 47 82
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom text-light">
        <div className="social-icons">
          {/* Add social media icons as needed */}
        </div>
        <div className="copyright d-flex justify-content-center align-items-center py-4 border-top border-dark">
          <p className="mt-2 text-center">
            &copy; {year} AJINCODEW <i className="bi bi-heart-fill"></i> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
