import { useState, useRef } from "react";
import { process } from "../data.js";

export default function ProcessStepper() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  const step = process[active];

  const onKeyDown = (e) => {
    let next = null;
    if (e.key === "ArrowRight") next = (active + 1) % process.length;
    if (e.key === "ArrowLeft") next = (active - 1 + process.length) % process.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = process.length - 1;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      refs.current[next]?.focus();
    }
  };

  return (
    <div className="stepper">
      <div className="stepper-track" role="tablist" aria-label="How I work" onKeyDown={onKeyDown}>
        {process.map((s, i) => (
          <button
            key={s.key}
            ref={(el) => (refs.current[i] = el)}
            role="tab"
            id={`tab-${s.key}`}
            aria-selected={i === active}
            aria-controls={`panel-${s.key}`}
            tabIndex={i === active ? 0 : -1}
            className={`stepper-btn ${i <= active ? "is-done" : ""} ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="stepper-dot" aria-hidden="true">{s.emoji}</span>
            <span className="stepper-label">{s.label}</span>
          </button>
        ))}
      </div>

      <div
        key={step.key}
        role="tabpanel"
        id={`panel-${step.key}`}
        aria-labelledby={`tab-${step.key}`}
        className="stepper-panel"
      >
        <h3>{step.title}</h3>
        <p>{step.text}</p>
        <p className="proof">
          <span aria-hidden="true">✨</span> <strong>In practice:</strong> {step.proof}
        </p>
      </div>
    </div>
  );
}
