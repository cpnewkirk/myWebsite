import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { site } from "../data.js";

// Optional: add src/assets/logos/brand-logo.(png|svg|jpg|webp) to replace the heart in the header.
const found = import.meta.glob("../assets/logos/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const brandKey = Object.keys(found).find((p) => p.split("/").pop().startsWith("brand-logo."));
const brandLogo = brandKey ? found[brandKey] : null;

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={close} aria-label={`${site.brand}, home`}>
          <span className="brand-mark" aria-hidden="true">
            {brandLogo ? (
              <img src={brandLogo} alt="" height="38" style={{ maxWidth: 120, objectFit: "contain" }} />
            ) : (
              <svg viewBox="0 0 64 64" width="34" height="34">
                <rect width="64" height="64" rx="18" fill="currentColor" />
                <path d="M32 49C18 39 14 31 14 25a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 6-4 14-18 24z" fill="#ffc857" />
              </svg>
            )}
          </span>
          <span className="brand-text">
            <strong>{site.brand}</strong>
            <small>{site.name}</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="visually-hidden">Menu</span>
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>

        <nav id="primary-nav" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={close} className="nav-pill">
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
