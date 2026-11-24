import { Link } from "react-router-dom";
import { site } from "../data.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="mb-0">
          © {new Date().getFullYear()} {site.name} · {site.brand}
        </p>
        <nav aria-label="Footer" className="footer-links">
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/cv">CV</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
