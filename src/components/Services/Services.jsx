import React, { useState } from "react";
import { services } from "../../data/siteData";
import "./Services.css";

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__head">
          <div>
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">Comprehensive Dental<br />Care Under One Roof</h2>
          </div>
          <p className="section-subtitle services__subtitle">
            From your child's first check-up to complex implant surgery — iDentist is equipped to handle every aspect of your family's dental health.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`svc-card ${hovered === s.id ? "svc-card--hovered" : ""}`}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {s.tag && <span className="svc-card__tag">{s.tag}</span>}
              <div className="svc-card__icon">{s.icon}</div>
              <h3 className="svc-card__title">{s.title}</h3>
              <p className="svc-card__desc">{s.desc}</p>
              <div className="svc-card__arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
