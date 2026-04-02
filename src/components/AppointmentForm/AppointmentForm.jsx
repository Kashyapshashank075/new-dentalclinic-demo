import React, { useState } from "react";
import { workingHours, CLINIC } from "../../data/siteData";
import "./AppointmentForm.css";

const SERVICES = [
  "General Check-up & Cleaning",
  "Teeth Whitening",
  "Orthodontics / Aligners",
  "Dental Implants",
  "Cosmetic Dentistry / Veneers",
  "Root Canal Treatment",
  "Paediatric Dentistry",
  "Emergency Dental Care",
  "Other / Not Sure",
];

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
];

const EMPTY = { name: "", phone: "", email: "", service: "", date: "", time: "", notes: "" };

export default function AppointmentForm() {
  const [form,   setForm]   = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [done,   setDone]   = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name    = "Please enter your name";
    if (!form.phone.trim()) e.phone   = "Please enter your phone number";
    if (!form.service)      e.service = "Please select a service";
    if (!form.date)         e.date    = "Please choose a date";
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: "" }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setDone(true);
  };

  const reset = () => { setDone(false); setForm(EMPTY); setErrors({}); };

  return (
    <section className="appt" id="appointment">
      <div className="container appt__inner">

        {/* ── Left info panel ── */}
        <div className="appt__info">
          <span className="section-eyebrow">Book a Visit</span>
          <h2 className="section-title">Schedule Your<br />Appointment</h2>
          <p className="section-subtitle">
            Fill in the form and we'll call to confirm within 2 hours. Same-day appointments often available.
          </p>

          {/* Hours */}
          <div className="hours">
            <h3 className="hours__title">🕐 Clinic Hours</h3>
            <ul className="hours__list">
              {workingHours.map((h, i) => (
                <li key={i} className="hours__item">
                  <span className="hours__day">{h.day}</span>
                  <span className={`hours__time ${!h.open ? "hours__time--off" : ""}`}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick contact */}
          <div className="appt__quick">
            <a href={`tel:${CLINIC.phone.replace(/\s/g,'')}`} className="appt__chip">
              <span>📞</span> {CLINIC.phone}
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="appt__chip appt__chip--wa"
            >
              <span>💬</span> WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── Right form card ── */}
        <div className="appt__card">
          {done ? (
            <div className="appt__success">
              <div className="appt__success-icon">🎉</div>
              <h3>Appointment Requested!</h3>
              <p>
                Thank you, <strong>{form.name}</strong>!<br />
                We'll call <strong>{form.phone}</strong> within 2 hours to confirm.
              </p>
              <button className="btn-blue" onClick={reset}>Book Another</button>
            </div>
          ) : (
            <>
              <div className="appt__card-head">
                <h3>Patient Details</h3>
                <p>All fields marked * are required.</p>
              </div>
              <form className="appt__form" onSubmit={onSubmit} noValidate>
                {/* Row 1 */}
                <div className="appt__row">
                  <div className="appt__field">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={onChange} placeholder="e.g. Riya Chatterjee" className={errors.name ? "err" : ""} />
                    {errors.name && <span className="appt__err">{errors.name}</span>}
                  </div>
                  <div className="appt__field">
                    <label>Phone Number *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+91 97330 12345" className={errors.phone ? "err" : ""} />
                    {errors.phone && <span className="appt__err">{errors.phone}</span>}
                  </div>
                </div>
                {/* Row 2 */}
                <div className="appt__row">
                  <div className="appt__field">
                    <label>Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} placeholder="you@email.com" />
                  </div>
                  <div className="appt__field">
                    <label>Service Required *</label>
                    <select name="service" value={form.service} onChange={onChange} className={errors.service ? "err" : ""}>
                      <option value="">Choose a service…</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <span className="appt__err">{errors.service}</span>}
                  </div>
                </div>
                {/* Row 3 */}
                <div className="appt__row">
                  <div className="appt__field">
                    <label>Preferred Date *</label>
                    <input name="date" type="date" value={form.date} onChange={onChange} min={new Date().toISOString().split("T")[0]} className={errors.date ? "err" : ""} />
                    {errors.date && <span className="appt__err">{errors.date}</span>}
                  </div>
                  <div className="appt__field">
                    <label>Preferred Time</label>
                    <select name="time" value={form.time} onChange={onChange}>
                      <option value="">Any time</option>
                      {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                {/* Notes */}
                <div className="appt__field">
                  <label>Additional Notes</label>
                  <textarea name="notes" value={form.notes} onChange={onChange} rows={3} placeholder="Describe your concern, special needs, or how you heard about us…" />
                </div>

                <button type="submit" className="btn-gold appt__submit">
                  📅 Confirm Appointment Request
                </button>

                <p className="appt__note">
                  ✅ We'll call to confirm within 2 hours &nbsp;·&nbsp; 🔒 Your data is private
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
