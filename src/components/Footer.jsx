import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-5"
      style={{
        background: "rgba(10, 10, 12, 0.8)",
        borderTop: "1px solid var(--border-light)",
        marginTop: "100px",
        backdropFilter: "blur(10px)"
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
             <h4 className="fw-bold m-0" style={{ letterSpacing: "-0.03em", fontSize: "28px" }}>
              <span className="text-gradient">Sakshamm Khanna</span>
            </h4>
            <p className="mt-2 mb-0" style={{ fontSize: "15px", color: "var(--text-sub)", opacity: 0.9 }}>
              Crafting digital excellence through code and intelligence.
            </p>
          </div>

          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="d-flex justify-content-center gap-4">
              {[
                { icon: <Github size={22} />, href: "https://github.com/Saksham-Khanna" },
                { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/sakshamm-khanna29/" },
                { icon: <Mail size={22} />, href: "mailto:khanna.saksham2918@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-footer"
                  style={{ 
                    color: "var(--text-sub)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <p className="mb-0" style={{ fontSize: "14px", color: "var(--text-sub)", opacity: 0.8 }}>
              © {new Date().getFullYear()} Made by <span className="text-white fw-medium">Sakshamm Khanna</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
