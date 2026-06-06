import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const PnNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="pn-navbar">
      <div className="container">
        <div className="pn-navbar__inner">
          <Link to="/" className="pn-navbar__brand">
            <span className="pn-brand-mark">P</span>
            <span className="pn-brand-name">PhishNet.AI</span>
          </Link>

          <button
            type="button"
            className="pn-nav-toggler"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} fs-4`} />
          </button>

          <div className={`pn-navbar__links ${menuOpen ? "is-open" : ""}`}>
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `pn-nav-link ${isActive ? "pn-nav-link--active" : ""}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `pn-nav-link ${isActive ? "pn-nav-link--active" : ""}`}
            >
              Features
            </NavLink>
            <NavLink
              to="/threat-map"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `pn-nav-link ${isActive ? "pn-nav-link--active" : ""}`}
            >
              Cyberthreat Live Map
            </NavLink>

            {/* GitHub icon link – to the right of threat-map */}
            <a
              href="https://github.com/QMathsdude/phishing-url-detector"
              target="_blank"
              rel="noopener noreferrer"
              className="pn-nav-link pn-nav-link--icon"
              onClick={() => setMenuOpen(false)}
              aria-label="GitHub repository"
            >
              <i className="bi bi-github" style={{ fontSize: "1.25rem" }}></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PnNavbar;