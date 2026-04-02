import React from "react";
import { team, stats, CLINIC } from "../../data/siteData";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import "./About.css";

const MILESTONES = [
  { year: "2011", title: "iDentist Founded",      desc: "Dr.Prabhat Gupta opened iDentist on Sevoke Road with a vision to bring metro-level dental care to Siliguri." },
  { year: "2014", title: "Expanded Services",      desc: "Added orthodontics, cosmetic dentistry, and a dedicated paediatric wing — growing to a 5-specialist team." },
  { year: "2017", title: "Digital Upgrade",        desc: "Invested in 3D CBCT scanner, intraoral cameras, and CAD/CAM same-day crowns." },
  { year: "2020", title: "Safety Excellence",      desc: "Achieved ISO 9001 certification; introduced hospital-grade sterilisation and air purification systems." },
  { year: "2023", title: "10,000 Patients",        desc: "Crossed 10,000 treated patients and launched a dedicated implant surgery suite." },
  { year: "2024", title: "Best Clinic — N. Bengal", desc: "Recognised by the North Bengal Health Excellence Awards as the region's leading private dental clinic." },
];

const VALUES = [
  { icon: "❤️",  title: "Compassion First",   desc: "Every decision starts with the patient. We listen before we treat." },
  { icon: "🔬",  title: "Clinical Excellence", desc: "Continuous training, latest protocols, and evidence-based dentistry." },
  { icon: "🤝",  title: "Honest Transparency", desc: "Written cost breakdowns, no upselling, no surprises." },
  { icon: "🌱",  title: "Community Rooted",    desc: "Proudly serving Siliguri and the Dooars region since 2011." },
];

export default function About() {
  return (
    <main className="about">
      {/* ── Hero banner ── */}
      <section className="about-hero">
        <div className="about-hero__orb about-hero__orb--1" />
        <div className="about-hero__orb about-hero__orb--2" />
        <div className="container about-hero__inner">
          <div className="about-hero__content">
            <span className="section-eyebrow">Our Story</span>
            <h1 className="section-title about-hero__title">
              Siliguri's Dental<br />Clinic of Choice
            </h1>
            <p className="section-subtitle">
              Founded in {CLINIC.founded} with a single mission — to make world-class dental care accessible to every family in Siliguri and North Bengal.
            </p>
          </div>

          {/* Clinic image slot */}
          <div className="about-hero__img">
            {/* Replace with real image: <img src="/assets/images/clinic-building.jpg" alt="iDentist Clinic" /> */}
            <div className="img-placeholder" style={{ height: "100%", minHeight: 320 }}>
              <span className="img-placeholder-icon">🏥</span>
              {/* <span>Clinic exterior / team photo<br />(1200×800px)</span> */}
              <code style={{ fontSize: 11, color: "var(--blue-bright)", background: "var(--navy)", padding: "4px 10px", borderRadius: 6, marginTop: 4 }}>
                {/* /assets/images/clinic-building.jpg */}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="about-stats-row">
        <div className="container about-stats-grid">
          {stats.map(s => (
            <div key={s.label} className="about-stat">
              <span className="about-stat__val">{s.value}</span>
              <span className="about-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mission & Values ── */}
      <section className="about-mission">
        <div className="container about-mission__inner">
          <div className="about-mission__left">
            <span className="section-eyebrow">Our Mission</span>
            <h2 className="section-title" style={{ marginTop: 8 }}>
              More Than Just<br />Teeth
            </h2>
            <p className="section-subtitle" style={{ marginTop: 14 }}>
              We believe dentistry is deeply personal. Behind every tooth is a person who deserves to smile with confidence. At iDentist, we combine clinical precision with genuine human warmth — because great dental care is about the whole person, not just the procedure.
            </p>
            {/* Founder quote */}
            <div className="about-quote">
              <div className="about-quote__mark">"</div>
              <p className="about-quote__text">
                I started iDentist because I wanted my neighbours in Siliguri to have access to the same quality of dental care available in Kolkata or Delhi — without leaving home.
              </p>
              <div className="about-quote__author">
                <div className="about-quote__avatar" style={{ background: "#2196f3" }}>PG</div>
                <div>
                  <strong>Dr.Prabhat Gupta</strong>
                  <span>Founder & Lead Dentist</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-values">
            {VALUES.map(v => (
              <div className="about-value" key={v.title}>
                <div className="about-value__icon">{v.icon}</div>
                <div>
                  <h4 className="about-value__title">{v.title}</h4>
                  <p className="about-value__desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="about-timeline">
        <div className="container">
          <div className="about-timeline__head">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title" style={{ marginTop: 8 }}>13 Years of Smiles</h2>
          </div>
          <div className="timeline">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`tl-item ${i % 2 === 0 ? "tl-item--left" : "tl-item--right"}`}>
                <div className="tl-dot">
                  <span>{m.year}</span>
                </div>
                <div className="tl-card">
                  <h4 className="tl-card__title">{m.title}</h4>
                  <p className="tl-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
            <div className="tl-line" />
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-team">
        <div className="container">
          <div className="about-team__head">
            <span className="section-eyebrow">The People Behind Your Smile</span>
            <h2 className="section-title" style={{ marginTop: 8 }}>Meet Our Doctors</h2>
            <p className="section-subtitle" style={{ marginTop: 14 }}>
              Specialists trained at India's top dental colleges, united by a passion for exceptional patient care.
            </p>
          </div>
          <div className="team-grid">
            {team.map(doc => (
              <div className="team-card" key={doc.id}>
                {/* Photo slot */}
                <div className="team-card__photo">
                  {doc.imageSrc ? (
                    <img src={doc.imageSrc} alt={doc.name} />
                  ) : (
                    <div className="team-card__photo-placeholder">
                      <div className="team-card__initials" style={{ background: doc.color }}>
                        {doc.initials}
                      </div>
                      <span className="team-card__photo-hint">
                        Add photo: imageSrc in siteData.js
                      </span>
                    </div>
                  )}
                </div>
                <div className="team-card__info">
                  <h3 className="team-card__name">{doc.name}</h3>
                  <div className="team-card__role" style={{ color: doc.color }}>{doc.role}</div>
                  <div className="team-card__tags">
                    <span>🎓 {doc.exp}</span>
                    <span>🔬 {doc.spec}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Appointment CTA ── */}
      <AppointmentForm />
    </main>
  );
}
