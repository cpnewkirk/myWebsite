
import { useState, useId } from "react";

export default function ProjectCard({ project, children }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <article className={`project-card ${project.featured ? "is-featured" : ""}`}>
      {children && (
        <div className="project-card-media">
          {children}
        </div>
      )}

      <p className="kicker">{project.kicker}</p>
      <h3>{project.title}</h3>
      <p className="meta">
        {[project.role, project.dates].filter(Boolean).join(" · ")}
      </p>
      <p>{project.summary}</p>

      {project.stats && (
        <ul className="stats" aria-label="Key numbers">
          {project.stats.map((s) => (
            <li key={s.label}>
              <strong>{s.n}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      )}

      {project.link && (
        <p className="card-link">
          <a
            className="text-link"
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link.label} <span aria-hidden="true">↗</span>
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </p>
      )}

      <div className="chips">
        {project.tags.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      <button
        className="more-btn"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {open ? "Show less" : "What I did"}{" "}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>

      <div id={id} className={`more ${open ? "is-open" : ""}`}>
        <div>
          <ul>
            {project.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
