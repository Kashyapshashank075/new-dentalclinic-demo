import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home",    to: "/" },
  { label: "About",   to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const scrollToAppt = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById("appointment");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else if (pathname !== "/") window.location.href = "/#appointment";
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        {/* Logo */}
        <Link to="/" className="nav__logo">
          <div className="nav__logo-mark">
            <span>i</span>
          </div>
          <div className="nav__logo-text">
            <span className="nav__logo-brand">iDentist</span>
            <span className="nav__logo-sub">Dental Clinic · Siliguri</span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="nav__links">
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav__link ${pathname === l.to ? "nav__link--active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a href="#appointment" className="btn-blue nav__cta" onClick={scrollToAppt}>
          Book Appointment
        </a>

        {/* Hamburger */}
        <button
          className={`nav__burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`nav__drawer ${menuOpen ? "nav__drawer--open" : ""}`}>
        {NAV_LINKS.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`nav__drawer-link ${pathname === l.to ? "active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
        <a href="#appointment" className="btn-gold nav__drawer-cta" onClick={scrollToAppt}>
          📅 Book Appointment
        </a>
        <div className="nav__drawer-contact">
          <a href="tel:+913532500100">📞 +91 353 250 0100</a>
        </div>
      </div>
    </header>
  );
}
