import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faTwitch, faLinktree } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { site, social } from "../data.js";

const icons = {
  linkedin: faLinkedin,
  github: faGithub,
  instagram: faInstagram,
  twitch: faTwitch,
  linktree: faLinktree,
};

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("New Friend")}&body=${encodeURIComponent(
  "Hello Christian, I found your website and am reaching out about..."
)}`;

export default function Contact() {
  return (
    <div className="page container narrow">
      <h1 className="page-title">Contact</h1>
      <p className="section-sub">
        Museum tech, digital storytelling, community projects, or just a good conversation. I'd love to hear from you.
      </p>

      <a className="mail-card" href={mailto}>
        <span className="mail-icon" aria-hidden="true">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </span>
        <span>
          <strong>Email me</strong>
          <small>{site.email}</small>
        </span>
      </a>

      <ul className="social-grid">
        {social.map((s) => (
          <li key={s.key}>
            <a href={s.href} target="_blank" rel="noreferrer" className="social-card">
              <FontAwesomeIcon icon={icons[s.key]} size="lg" aria-hidden="true" />
              <span>
                <strong>{s.label}</strong>
                <small>{s.handle}</small>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
