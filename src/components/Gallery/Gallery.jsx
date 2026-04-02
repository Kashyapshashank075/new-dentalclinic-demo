import React, { useState } from "react";
import { galleryImages } from "../../data/siteData";
import "./Gallery.css";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__head">
          <span className="section-eyebrow">Inside iDentist</span>
          <h2 className="section-title">Our Clinic & Facilities</h2>
          <p className="section-subtitle gallery__sub">
            State-of-the-art equipment in a calm, modern environment designed to make every visit comfortable.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className={`gallery__item gallery__item--${i === 0 ? "featured" : "regular"}`}
              onClick={() => setActive(img)}
            >
              {/* Image slot — replace src={null} with real path */}
              {img.src ? (
                <img src={img.src} alt={img.label} className="gallery__img" />
              ) : (
                <div className="gallery__placeholder">
                  <span className="gallery__placeholder-icon">📸</span>
                  <span className="gallery__placeholder-label">{img.label}</span>
                  <code className="gallery__placeholder-hint">
                    Set src in siteData.js
                  </code>
                </div>
              )}
              <div className="gallery__overlay">
                <span className="gallery__overlay-label">{img.label}</span>
                <span className="gallery__overlay-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {active && (
          <div className="gallery__lightbox" onClick={() => setActive(null)}>
            <button className="gallery__lb-close" onClick={() => setActive(null)}>✕</button>
            <div className="gallery__lb-content" onClick={e => e.stopPropagation()}>
              {active.src ? (
                <img src={active.src} alt={active.label} />
              ) : (
                <div className="gallery__lb-placeholder">
                  <span>📸</span>
                  <p>{active.label}</p>
                  <small>Add real image in siteData.js</small>
                </div>
              )}
              <p className="gallery__lb-caption">{active.label}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
