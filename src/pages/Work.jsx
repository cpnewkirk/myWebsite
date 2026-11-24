import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import LogoSlot from "../components/LogoSlot.jsx";
import { projects, filters, logos, site } from "../data.js";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <div className="page container">
      <h1 className="page-title">Work</h1>
      <p className="section-sub">
        Stories, interactive experiences, research, and systems. Filter by what you're curious about.
      </p>

      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-chip ${filter === f ? "is-active" : ""}`}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="visually-hidden" role="status" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
      </p>

      <div className="project-grid">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p}>
            {p.featured && <LogoSlot logo={logos.project} size="lg" className="card-logo" />}
          </ProjectCard>
        ))}
      </div>

      <div className="partner partner-compact">
        <LogoSlot logo={logos.terentia} size="sm" />
        <p className="mb-0">
          <strong>{site.brand}</strong> is a community partner of {logos.terentia.name}.
        </p>
      </div>
    </div>
  );
}
