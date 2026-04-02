import React from "react";
import "./WhyUs.css";

const REASONS = [
  { icon: "🔬", title: "Advanced Technology", desc: "Digital X-rays, 3D CBCT scan, intraoral cameras, CAD/CAM crowns, and laser dentistry — all under one roof in Siliguri." },
  { icon: "💉", title: "Truly Painless", desc: "Our gentle injection techniques and sedation options mean even needle-phobic patients leave relaxed and comfortable." },
  { icon: "⏱️", title: "Same-Day Appointments", desc: "Emergency and next-day bookings available. We respect your time — our average wait is under 10 minutes." },
  { icon: "💰", title: "Transparent Pricing", desc: "Written treatment plans with exact costs before we start. No hidden charges, ever." },
  { icon: "🧼", title: "Hospital-Grade Hygiene", desc: "Autoclave sterilisation, single-use needles and gloves, air purification in every treatment room." },
  { icon: "🌍", title: "Multilingual Team", desc: "Our team speaks Bengali, Hindi, Nepali, and English — so every patient feels truly at home." },
];

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="container whyus__inner">
        {/* Left text */}
        <div className="whyus__left">
          <span className="section-eyebrow">Why iDentist</span>
          <h2 className="section-title">
            A Different Kind<br />of Dental Clinic
          </h2>
          <p className="section-subtitle">
            We built iDentist because Siliguri deserves world-class dental care — without having to travel to a metro. Here's what sets us apart.
          </p>

          <div className="whyus__cta-row">
            <a
              href="#appointment"
              className="btn-blue"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start with a Free Check-up
            </a>
          </div>

          {/* Accreditation badges */}
          <div className="whyus__badges">
            {["IDA Member", "ISO 9001", "BDA Certified"].map(b => (
              <div key={b} className="whyus__badge">✓ {b}</div>
            ))}
          </div>
        </div>

        {/* Right grid */}
        <div className="whyus__grid">
          {REASONS.map((r, i) => (
            <div className="whyus__item" key={r.title} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="whyus__item-icon">{r.icon}</div>
              <div>
                <h4 className="whyus__item-title">{r.title}</h4>
                <p className="whyus__item-desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
