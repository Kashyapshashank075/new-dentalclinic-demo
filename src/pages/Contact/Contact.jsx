import React, { useState } from "react";
import { CLINIC, faqs, workingHours } from "../../data/siteData";
import "./Contact.css";

const EMPTY_MSG = { name: "", email: "", phone: "", subject: "", message: "" };

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq ${open ? "faq--open" : ""}`} onClick={() => setOpen(o => !o)}>
      <div className="faq__q">
        <span>{q}</span>
        <span className="faq__chevron">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="faq__a">{a}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_MSG);
  const [sent, setSent] = useState(false);

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmit = e => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <main className="contact">
      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero__orb" />
        <div className="container contact-hero__inner">
          <span className="section-eyebrow">Get in Touch</span>
          <h1 className="section-title contact-hero__title">We're Always Here</h1>
          <p className="section-subtitle contact-hero__sub">
            Questions, emergencies, or just want to say hello — reach out and our friendly team will respond within a few hours.
          </p>
          <div className="contact-hero__chips">
            <a href={`tel:${CLINIC.phone.replace(/\s/g,"")}`} className="contact-chip">
              <span>📞</span> {CLINIC.phone}
            </a>
            <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noreferrer" className="contact-chip contact-chip--wa">
              <span>💬</span> WhatsApp Us
            </a>
            <a href={`mailto:${CLINIC.email}`} className="contact-chip">
              <span>✉️</span> {CLINIC.email}
            </a>
          </div>
        </div>
      </section>

      {/* ── Info + Form ── */}
      <section className="contact-body">
        <div className="container contact-body__grid">

          {/* Left — contact details + map */}
          <div className="contact-details">
            <h2 className="contact-details__title">Contact Details</h2>

            <ul className="contact-info-list">
              <li>
                <div className="contact-info-icon">📍</div>
                <div>
                  <strong>Visit Us</strong>
                  <a href={CLINIC.mapLink} target="_blank" rel="noreferrer">
                    {CLINIC.address}<br /><small>{CLINIC.addressNear}</small>
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-info-icon">📞</div>
                <div>
                  <strong>Call Us</strong>
                  <a href={`tel:${CLINIC.phone.replace(/\s/g,"")}`}>{CLINIC.phone}</a>
                  <a href={`tel:${CLINIC.phone2.replace(/\s/g,"")}`}>{CLINIC.phone2}</a>
                </div>
              </li>
              <li>
                <div className="contact-info-icon">✉️</div>
                <div>
                  <strong>Email Us</strong>
                  <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
                </div>
              </li>
              <li>
                <div className="contact-info-icon">💬</div>
                <div>
                  <strong>WhatsApp</strong>
                  <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noreferrer">
                    Chat on WhatsApp — quick responses
                  </a>
                </div>
              </li>
            </ul>

            {/* Hours */}
            <div className="contact-hours">
              <h3 className="contact-hours__title">🕐 Clinic Hours</h3>
              {workingHours.map((h, i) => (
                <div key={i} className="contact-hours__row">
                  <span>{h.day}</span>
                  <span className={`contact-hours__time ${!h.open ? "off" : ""}`}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="contact-map">
              <div className="contact-map__inner img-placeholder" style={{ height: 200 }}>
                {/*
                  EMBED REAL MAP:
                  Replace with an <iframe> from Google Maps embed URL
                  e.g.:
                  <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%" height="100%" style={{border:0}}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="iDentist Location"
                  />
                */}
                <span className="img-placeholder-icon">🗺️</span>
                <span>Embed Google Map here</span>
                <code style={{ fontSize: 11, color: "var(--blue-bright)", background: "var(--navy)", padding: "4px 10px", borderRadius: 6 }}>
                  Replace with &lt;iframe&gt; embed
                </code>
                <a href={CLINIC.mapLink} target="_blank" rel="noreferrer" className="btn-blue" style={{ marginTop: 12, fontSize: 13, padding: "10px 20px" }}>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right — message form */}
          <div className="contact-form-card">
            {sent ? (
              <div className="contact-sent">
                <div className="contact-sent__icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks <strong>{form.name}</strong>! We'll reply to <strong>{form.email}</strong> within 24 hours.</p>
                <button
                  className="btn-blue"
                  onClick={() => { setSent(false); setForm(EMPTY_MSG); }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact-form-card__title">Send a Message</h3>
                <p className="contact-form-card__sub">We reply to all messages within 24 hours.</p>
                <form className="contact-form" onSubmit={onSubmit} noValidate>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={onChange} placeholder="Your full name" required />
                    </div>
                    <div className="contact-form__field">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@email.com" required />
                    </div>
                  </div>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label>Phone Number</label>
                      <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+91 97330 12345" />
                    </div>
                    <div className="contact-form__field">
                      <label>Subject</label>
                      <input name="subject" value={form.subject} onChange={onChange} placeholder="How can we help?" />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label>Your Message *</label>
                    <textarea name="message" value={form.message} onChange={onChange} rows={6} placeholder="Tell us more about your question or concern…" required />
                  </div>
                  <button type="submit" className="btn-blue contact-form__submit">
                    <span>📤</span> Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="contact-faq">
        <div className="container">
          <div className="contact-faq__head">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title" style={{ marginTop: 8 }}>Common Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
