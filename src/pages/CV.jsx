import Disclosure from "../components/Disclosure.jsx";
import { cv } from "../data.js";

export default function CV() {
  return (
    <div className="page container narrow">
      <h1 className="page-title">Curriculum Vitae</h1>
      <p className="section-sub">Open any section to dive in, or grab the full documents.</p>

      <div className="cta-row mb-4">
        <a className="btn-pop btn-primary-pop" href="./Newkirk_Resume.pdf" target="_blank" rel="noreferrer">
          Resume (PDF)
        </a>
        <a className="btn-pop btn-ghost-pop" href="./Newkirk_CV.docx" download>
          Full CV (Word)
        </a>
      </div>

      {cv.map((section, i) => (
        <Disclosure key={section.title} title={section.title} defaultOpen={i === 0}>
          {section.items.map((item) => (
            <div className="cv-item" key={item.head + (item.meta || "")}>
              <h3>{item.head}</h3>
              {item.meta && <p className="meta">{item.meta}</p>}
              {item.sub && <p className="cv-sub">{item.sub}</p>}
              {item.bullets && (
                <ul>
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Disclosure>
      ))}
    </div>
  );
}
