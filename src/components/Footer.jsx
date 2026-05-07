import { GitBranch, Link2, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-5"
      style={{
        background: "rgba(3, 3, 3, 0.5)",
        borderTop: "1px solid var(--border-light)",
        marginTop: "100px"
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
             <h4 className="fw-bold m-0" style={{ letterSpacing: "-0.02em" }}>
              Sakshamm <span className="text-gradient">Khanna</span>
            </h4>
            <p className="text-muted mt-2 mb-0" style={{ fontSize: "14px" }}>
              Crafting digital excellence through code and intelligence.
            </p>
          </div>

          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="d-flex justify-content-center gap-4">
              {[
                { icon: <GitBranch size={20} />, href: "https://github.com/Saksham-Khanna" },
                { icon: <Link2 size={20} />, href: "https://www.linkedin.com/in/sakshamm-khanna29/" },
                { icon: <Mail size={20} />, href: "mailto:khanna.saksham2918@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-white"
                  style={{ transition: "color 0.3s ease" }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
              © {new Date().getFullYear()} Made with <Heart size={12} className="text-danger d-inline" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
