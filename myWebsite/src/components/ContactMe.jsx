import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactMe() {
  return (
    <div className="social-container">
      <div className="card p-3">
        <h3>Contact Me</h3>
        <p>
          Reach out to me at any of my social media handles below or feel free
          to email me!
        </p>
      </div>
      <div className="my-5">
        <a
          href="mailto:cpnewkirk@gmail.com?&subject=New Friend&body=Hello Christian, I found your email on your website and am reaching out about..."
          target="_blank"
          rel="noreferrer"
          className="email social"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <h5>cpnewkirk@gmail.com</h5>
      </div>

      <div className="row justify-content-center">
        <div className="col-6 col-sm-4">
          <a
            href="https://www.facebook.com/christian.newkirk.77/"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <p>Christian Newkirk</p>
        </div>

        <div className="col-6 col-sm-4">
          <a href="https://twitter.com/cpnewkirk18" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <p>@CPNewkirk18</p>
        </div>

        <div className="col-6 col-sm-4">
          <a
            href="https://www.instagram.com/cpnewkirk"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <p>@cpnewkirk</p>
        </div>

        <div className="col-6 col-sm-4">
          <a
            href="https://www.linkedin.com/in/cpnewkirk/"
            className="linkedin social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <p>Christian Newkirk</p>
        </div>

        <div className="col-6 col-sm-4">
          <a href="https://github.com/cpnewkirk" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <p>cpnewkirk</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
