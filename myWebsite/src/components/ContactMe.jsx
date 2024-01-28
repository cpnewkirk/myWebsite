import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function ContactMe() {
  return (
    <div className="social-container">
      <h3>Social Follow</h3>
      <p>Reach out to me at my social media below or email me at</p> <br />
      <p>cpnewkirk@gmail.com</p>
      <a
        href="https://www.facebook.com/christian.newkirk.77/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/cpnewkirk18" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/cpnewkirk"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/cpnewkirk/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/cpnewkirk" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}

export default ContactMe;
