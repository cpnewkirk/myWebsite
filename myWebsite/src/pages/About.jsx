import { Link } from "react-router-dom";
import ProcessStepper from "../components/ProcessStepper.jsx";

export default function About() {
  return (
    <div className="page container narrow">
      <h1 className="page-title">About</h1>

      <div className="prose">
        <p className="lead">
          I'm a software engineer who believes technology tells a story, through the problems
          it chooses to solve, the data it structures, and the experiences it creates.
        </p>
        <p>
          My background spans cloud architecture, full-stack development, and secure systems in
          regulated environments. Today I'm pairing that foundation with interaction design,
          as a graduate student in GW's M.A. in Interaction Design program and as founder of
          Living Archive Labs.
        </p>
        <p>
          I'm especially interested in museums and cultural spaces: building tools that help
          institutions make complex information more accessible and meaningful to the public. I
          also volunteer as a certified tour guide at the Smithsonian National Museum of the
          American Latino, which keeps me close to how real visitors experience a story.
        </p>
        <p>
          I lead community-driven initiatives too, including as president of SHPE's Washington,
          D.C. chapter, and I value work built on clarity, ownership, and purpose.
        </p>
      </div>

      <h2 className="section-title mt-5">How I work</h2>
      <ProcessStepper />

      <div className="tile mt-5">
        <h3>Strengths I lean on</h3>
        <div className="chips">
          {["Maximizer", "Strategic", "Achiever", "Positivity", "Learner"].map((s) => (
            <span className="chip" key={s}>{s}</span>
          ))}
        </div>
      </div>

      <div className="cta-row mt-4">
        <Link to="/cv" className="btn-pop btn-primary-pop">View my CV</Link>
        <Link to="/contact" className="btn-pop btn-ghost-pop">Get in touch</Link>
      </div>
    </div>
  );
}
