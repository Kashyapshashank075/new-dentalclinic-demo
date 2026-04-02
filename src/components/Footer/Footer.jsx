import React from "react";
import { Link } from "react-router-dom";
import { CLINIC } from "../../data/siteData";
import "./Footer.css";

const scrollToAppt = (e) => {
  e.preventDefault();
  const el = document.getElementById("appointment");
  if (el) el.scrollIntoView({ behavior: "smooth" });
  else window.location.href = "/#appointment";
};

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Strip */}
      <div className="footer__strip">
        <div className="container footer__strip-inner">
          <div>
            <h3 className="footer__strip-title">Ready for a Healthier Smile?</h3>
            <p className="footer__strip-sub">Book your free first consultation today — no pressure, just great care.</p>
          </div>
          <a href="#appointment" className="btn-gold" onClick={scrollToAppt}>
            📅 Book Free Consultation
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand col */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-mark">i</div>
              <div>
                <span className="footer__logo-name">iDentist</span>
                <span className="footer__logo-tag">Dental Clinic</span>
              </div>
            </Link>
            <p className="footer__brand-desc">
              Siliguri's most advanced dental clinic. Combining cutting-edge technology with warm, personalised care since {CLINIC.founded}.
            </p>
            <div className="footer__socials">
              {[
                { label: "FB",  title: "Facebook"  },
                { label: "IG",  title: "Instagram" },
                { label: "YT",  title: "YouTube"   },
                { label: "TW",  title: "Twitter"   },
              ].map(s => (
                <a key={s.label} href="#" className="footer__social" aria-label={s.title} title={s.title}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__col-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#appointment" onClick={scrollToAppt}>Book Appointment</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#gallery">Clinic Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__col-list">
              {["General Dentistry","Teeth Whitening","Orthodontics","Dental Implants","Cosmetic Dentistry","Root Canal","Paediatric Dentistry","Emergency Care"].map(s => (
                <li key={s}><span>{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Find Us</h4>
            <ul className="footer__contact-list">
              <li>
                <span>📍</span>
                <a href={CLINIC.mapLink} target="_blank" rel="noreferrer">
                  {CLINIC.address}<br /><small>{CLINIC.addressNear}</small>
                </a>
              </li>
              <li>
                <span>📞</span>
                <a href={`tel:${CLINIC.phone.replace(/\s/g,"")}`}>{CLINIC.phone}</a>
              </li>
              <li>
                <span>📱</span>
                <a href={`tel:${CLINIC.phone2.replace(/\s/g,"")}`}>{CLINIC.phone2}</a>
              </li>
              <li>
                <span>✉️</span>
                <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
              </li>
              <li>
                <span>🕐</span>
                <span>Mon–Sat 9AM–8PM<br />Sun 10AM–4PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} iDentist Dental Clinic, Siliguri. All rights reserved.</p>
          <p>Crafted with ❤️ for better smiles in North Bengal.</p>
        </div>
      </div>
    </footer>
  );
}
