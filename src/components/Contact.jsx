import { motion } from "framer-motion";
import { Link2, Mail, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="container py-5" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="row align-items-center g-5">
        {/* LEFT — PROFILE IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-lg-5 text-center"
        >
          <div className="position-relative d-inline-block">
            <div className="hero-glow" style={{ top: "0", left: "0", width: "100%", height: "100%", opacity: 0.2 }} />
            <div className="contact-img-wrap" style={{ 
              borderRadius: "50%", 
              overflow: "hidden", 
              border: "1px solid var(--border-light)",
              padding: "10px",
              background: "var(--accent-glow)"
            }}>
              <img
                src="/profile.jpg"
                alt="Contact"
                className="contact-img"
                style={{ 
                  borderRadius: "50%", 
                  width: "min(300px, 60vw)", 
                  height: "min(300px, 60vw)", 
                  objectFit: "cover",
                  filter: "grayscale(10%) contrast(1.1)"
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT — CONTACT LINKS */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-lg-7"
        >
          <div className="glass-panel p-5 rounded-4" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-mid)" }}>
            <div className="d-flex align-items-center gap-3 mb-4">
               <div className="p-3 rounded-3" style={{ background: "rgba(255, 106, 61, 0.1)", color: "var(--primary)" }}>
                 <MessageSquare size={28} />
               </div>
               <div>
                 <h2 className="m-0 fw-bold" style={{ fontSize: "32px" }}>Let's <span className="text-gradient">Connect</span></h2>
                 <p style={{ color: "var(--text-sub)", margin: 0, fontSize: "15px", marginTop: "4px" }}>I'm always open to new opportunities and collaborations.</p>
               </div>
            </div>

            <div className="contact-links d-grid gap-3 mt-4">
              {[
                { 
                  name: "LinkedIn", 
                  icon: <Link2 size={22} />, 
                  href: "https://www.linkedin.com/in/sakshamm-khanna29/",
                  color: "#0077b5"
                },
                { 
                  name: "Email Me", 
                  icon: <Mail size={22} />, 
                  href: "mailto:khanna.saksham2918@gmail.com",
                  color: "var(--primary)"
                }
              ].map((link, i) => (
                <motion.a
                  key={i}
                  whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item d-flex align-items-center gap-4 p-4 rounded-3 text-decoration-none"
                  style={{ 
                    border: "1px solid rgba(255,255,255,0.12)", 
                    background: "rgba(255,255,255,0.04)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div className="contact-icon" style={{ color: link.color }}>
                    {link.icon}
                  </div>
                  <span className="fw-bold text-white" style={{ fontSize: "18px" }}>{link.name}</span>
                  <Send size={18} className="ms-auto text-muted opacity-50" />
                </motion.a>
              ))}
            </div>
            
            <div className="mt-5 text-center">
               <p style={{ fontSize: "14px", color: "var(--text-sub)", lineHeight: 1.7 }}>
                 Based in Chandigarh, India. <br />
                 Available for full-time roles &amp; freelance projects.
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
