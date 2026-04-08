export default function Footer() {
  return (
    <footer
      className="mt-5 py-4"
      style={{
        background: "#FFF5ED",
        borderTop: "1px solid rgba(255,165,130,0.25)",
      }}
    >
      <div className="container text-center">

        {/* Name */}
        <h4 className="fw-bold" style={{ color: "#001E3C" }}>
          Sakshamm Vi<span style={{ color: "#FF6A3D" }}>pul Khanna</span>
        </h4>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-4 my-3">

          <a
            href="https://github.com/Saksham-Khanna"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/sakshamm-khanna29/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="mailto:khanna.saksham2918@gmail.com"
            className="footer-icon"
          >
            <i className="bi bi-envelope"></i>
          </a>

        </div>

        {/* Bottom Text */}
        <p className="mt-3 mb-0" style={{ color: "#003566", fontSize: "14px" }}>
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
