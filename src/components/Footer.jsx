import { Mail, Heart } from "lucide-react";

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
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89c.15-.38.65-1.84-.15-3.84 0 0-1.2-.38-3.9 1.45a13.3 13.3 0 0 0-7 0c-2.7-1.83-3.9-1.45-3.9-1.45-.8 2-.3 3.46-.15 3.84A5.5 5.5 0 0 0 3 8.16c0 5.22 3 6.42 6 6.76-.8.8-1.1 2.1-1.3 2.92-1.2.5-4.2 1.5-6.2-1.8 0 0-1.1-2-3.2-2.1 0 0-2.1-.1-.1 1.3 0 0 1.2.6 2.3 2.7 0 0 1.2 3.6 6.9 2.5v3.5"></path></svg>, href: "https://github.com/Saksham-Khanna" },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>, href: "https://www.linkedin.com/in/sakshamm-khanna29/" },
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
