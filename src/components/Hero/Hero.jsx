import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const scrollToAppt = () => {
    document
      .getElementById("appointment")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      {/* Decorative bg */}
      <div className="hero__grid-bg" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="container hero__inner">
        {/* ── Left content ── */}
        <div className="hero__content">
          <div className="hero__eyebrow anim-up">
            <span className="hero__eyebrow-dot" />
            Siliguri's Premier Dental Care
          </div>

          <h1 className="hero__title anim-up anim-d1">
            Precision Smiles,
            <br />
            <span className="hero__title-gradient">Gentle Hands.</span>
          </h1>

          <p className="hero__desc anim-up anim-d2">
            iDentist combines cutting-edge dental technology with compassionate
            care — giving Siliguri something truly worth smiling about.
          </p>

          <div className="hero__actions anim-up anim-d3">
            <button className="btn-gold" onClick={scrollToAppt}>
              📅 Book Free Consultation
            </button>
            <Link to="/about" className="btn-ghost">
              Meet Our Doctors →
            </Link>
          </div>

          {/* Micro stats */}
          <div className="hero__micro anim-up anim-d4">
            <div className="hero__micro-item">
              <span className="hero__micro-num">10k+</span>
              <span className="hero__micro-label">Patients Treated</span>
            </div>
            <div className="hero__micro-sep" />
            <div className="hero__micro-item">
              <span className="hero__micro-num">4.9★</span>
              <span className="hero__micro-label">Google Rating</span>
            </div>
            <div className="hero__micro-sep" />
            <div className="hero__micro-item">
              <span className="hero__micro-num">13yr</span>
              <span className="hero__micro-label">Of Excellence</span>
            </div>
          </div>
        </div>

        {/* ── Right visual ── */}
        <div className="hero__visual anim-in anim-d2">
          {/* Main clinic image */}
          <div className="hero__img-main img-placeholder" style={{ height: 400 }}>
            
             
              {/* <img src="/images/doctor.png" alt="iDentist Clinic" /> */}
           
            {/* <span className="img-placeholder-icon">🏥</span>
            <span>Add clinic / doctor image<br />(1200 × 800px recommended)</span>
            <code className="hero__img-hint">src="/assets/images/clinic-hero.jpg"</code> */}
          </div>
         

          {/* Floating badge — live indicator */}
          <div className="hero__badge hero__badge--live">
            <span className="hero__badge-pulse" />
            Open Now · Closes 8 PM
          </div>

          {/* Floating badge — rating */}
          <div className="hero__badge hero__badge--rating">
            <span>⭐</span>
            <div>
              <strong>4.9 / 5</strong>
              <small>1,400+ Reviews</small>
            </div>
          </div>

          {/* Floating badge — cert */}
          <div className="hero__badge hero__badge--cert">
            <span>🏆</span>
            <span>ISO Certified Clinic</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue">
        <span className="hero__scroll-dot" />
      </div>
    </section>
  );
}
