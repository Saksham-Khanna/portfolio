import { useEffect, useState } from "react";
import "../theme.css";
import profileImg from "../assets/profile.jpg";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActive(id);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container">
        {/* LEFT: BRAND */}
        <a href="#home" className="navbar-brand fw-bold fs-4">
          My Portfolio
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* RIGHT: LINKS + PROFILE */}
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav fw-semibold align-items-center gap-lg-3">
            {[
              "home",
              "about",
              "skills",
              "work",
              "experience",
              "education",
              "contact",
            ].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  href={`#${section}`}
                  className={`nav-link ${
                    active === section ? "active" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}

            {/* PROFILE AVATAR */}
            <li className="nav-item ms-lg-3">
              <img
                src={profileImg}
                alt="Profile"
                className="navbar-profile-avatar"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
