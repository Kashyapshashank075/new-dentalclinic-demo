import React, { useState } from "react";
import { reviews } from "../../data/siteData";
import "./Reviews.css";

function Stars({ n = 5 }) {
  return (
    <div className="rev-stars">
      {Array.from({ length: n }).map((_, i) => <span key={i}>★</span>)}
    </div>
  );
}

export default function Reviews() {
  const [active, setActive] = useState(0);

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        {/* Header */}
        <div className="reviews__head">
          <div>
            <span className="section-eyebrow">Patient Stories</span>
            <h2 className="section-title">Loved by Siliguri</h2>
          </div>
          <div className="reviews__overall">
            <span className="reviews__big-num">4.9</span>
            <div>
              <Stars />
              <p>1,400+ verified reviews</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <div
              key={r.id}
              className={`rev-card ${i === active ? "rev-card--active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="rev-card__top">
                <Stars />
                <span className="rev-card__source">{r.source}</span>
              </div>
              <p className="rev-card__text">"{r.text}"</p>
              <div className="rev-card__author">
                <div className="rev-card__avatar" style={{ background: r.color }}>
                  {r.initials}
                </div>
                <div>
                  <div className="rev-card__name">{r.name}</div>
                  <div className="rev-card__date">{r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform logos row */}
        <div className="reviews__platforms">
          {[
            { name: "Google Reviews", score: "4.9★", icon: "🌐" },
            { name: "Practo",         score: "4.8★", icon: "🏥" },
            { name: "JustDial",       score: "4.9★", icon: "📞" },
            { name: "Facebook",       score: "4.9★", icon: "📘" },
          ].map(p => (
            <div key={p.name} className="reviews__platform">
              <span className="reviews__platform-icon">{p.icon}</span>
              <span className="reviews__platform-name">{p.name}</span>
              <span className="reviews__platform-score">{p.score}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
