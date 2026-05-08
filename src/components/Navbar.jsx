import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../theme.css";
import profileImg from "../assets/profile.jpg";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.getAttribute("id"));
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    window.addEventListener("scroll", handleScroll);
    return () => {
      sections.forEach((s) => observer.unobserve(s));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home",       id: "home" },
    { name: "About",      id: "about" },
    { name: "Skills",     id: "skills" },
    { name: "Work",       id: "work" },
    { name: "Experience", id: "experience" },
    { name: "Education",  id: "education" },
    { name: "Contact",    id: "contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "py-2" : "py-3"}`}
      style={{
        background: scrolled
          ? "rgba(13, 13, 15, 0.90)"
          : "rgba(13, 13, 15, 0.60)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.10)"
          : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div className="container">
        {/* ── LOGO ── */}
        <a href="#home" className="navbar-brand d-flex align-items-center gap-2" style={{ textDecoration: "none" }}>
          <motion.span
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: "34px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              background: "linear-gradient(135deg, #ff6a3d, #ffb68e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1,
              cursor: "pointer",
              filter: "drop-shadow(0 0 16px rgba(255,106,61,0.55))",
            }}
          >
            SVK
          </motion.span>
        </a>

        {/* ── MOBILE TOGGLER ── */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ filter: "invert(1)", opacity: 0.8 }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* ── NAV LINKS ── */}
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav align-items-center gap-lg-1">
            {navLinks.map((link) => (
              <li className="nav-item position-relative" key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link px-3 ${active === link.id ? "active" : ""}`}
                  style={{
                    fontSize: "14px",
                    fontWeight: active === link.id ? 600 : 500,
                    letterSpacing: "0.3px",
                    color: active === link.id
                      ? "var(--text-main)"
                      : "var(--text-sub)",
                    transition: "color 0.25s ease",
                  }}
                >
                  {link.name}
                  {active === link.id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="position-absolute start-50 translate-middle-x"
                      style={{
                        bottom: "2px",
                        width: "20px",
                        height: "2px",
                        borderRadius: "2px",
                        background: "var(--primary)",
                      }}
                    />
                  )}
                </a>
              </li>
            ))}

            {/* ── PROFILE AVATAR ── */}
            <li className="nav-item ms-lg-3 d-none d-lg-block">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                style={{ position: "relative" }}
              >
                {/* Glowing ring */}
                <div style={{
                  position: "absolute",
                  inset: "-3px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--primary), transparent)",
                  padding: "2px",
                  opacity: 0.3,
                }} />
                <img
                  src={profileImg}
                  alt="Profile"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "1px solid rgba(255,106,61,0.2)",
                    display: "block",
                  }}
                />
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
