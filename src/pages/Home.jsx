import { Link } from "react-router-dom";
import LogoSlot from "../components/LogoSlot.jsx";
import ProcessStepper from "../components/ProcessStepper.jsx";
import { site, logos, focusAreas, projects } from "../data.js";

export default function Home() {
  const featured = projects.find((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <span className="blob blob-a" aria-hidden="true" />
        <span className="blob blob-b" aria-hidden="true" />
        <span className="blob blob-c" aria-hidden="true" />
        <div className="container hero-inner">
          <p className="eyebrow">Hi, I'm Christian 👋</p>
          <h1>
            Making complex stories <span className="hl">easy to explore.</span>
          </h1>
          <p className="lead">
            I'm a software engineer and interaction design grad student building
            welcoming digital experiences for museums, archives, and community
            storytelling.
          </p>
          <div className="cta-row">
            <Link to="/work" className="btn-pop btn-primary-pop">See my work</Link>
            <Link to="/contact" className="btn-pop btn-ghost-pop">Say hello</Link>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What I care about</h2>
          <div className="grid-3">
            {focusAreas.map((f) => (
              <div className="tile" key={f.title}>
                <span className="tile-icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT — logo slot #1 */}
      <section className="section section-tint">
        <div className="container">
          <h2 className="section-title">Featured project</h2>
          <div className="feature">
            <LogoSlot logo={logos.project} size="lg" />
            <div className="feature-copy">
              <p className="kicker">{featured.kicker}</p>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
              <ul className="stats" aria-label="Key numbers">
                {featured.stats.map((s) => (
                  <li key={s.label}>
                    <strong>{s.n}</strong>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
              <Link to="/work" className="text-link">Explore the project →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          {/* <h2 className="section-title">How I work</h2> */}
          {/* <p className="section-sub">Tap through my process. Each step links to something I've actually made.</p> */}
          <ProcessStepper />
        </div>
      </section>

      {/* PARTNER — logo slot #2 */}
      <section className="section section-tint">
        <div className="container">
          <div className="partner">
            <LogoSlot logo={logos.terentia} size="md" />
            <div>
              <p className="kicker">Community partner</p>
              <h2 className="partner-title">Proud to partner with {logos.terentia.name}</h2>
              <p className="mb-0">
                {site.brand} is part of {logos.terentia.name}'s Community Partner Program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Working on something for the public?</h2>
          <p className="section-sub mx-auto">
            I'd love to hear about your museum, archive, or community project.
          </p>
          <Link to="/contact" className="btn-pop btn-primary-pop">Let's talk</Link>
        </div>
      </section>
    </>
  );
}
