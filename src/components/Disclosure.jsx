import { useState, useId } from "react";

// Replacement for your CollapseContainer: accessible, animated, no extra dependency.
export default function Disclosure({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <section className={`disclosure ${open ? "is-open" : ""}`}>
      <h2>
        <button aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
          <span>{title}</span>
          <span className="disclosure-icon" aria-hidden="true">+</span>
        </button>
      </h2>
      <div id={id} className={`more ${open ? "is-open" : ""}`} role="region" aria-label={title}>
        <div>
          <div className="disclosure-body">{children}</div>
        </div>
      </div>
    </section>
  );
}
