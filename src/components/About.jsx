import { motion } from "framer-motion";
import { User, Code2, BrainCircuit, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="container py-5" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="row align-items-center g-5">
        {/* LEFT IMAGE */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-lg-5 text-center"
        >
          <div className="position-relative d-inline-block">
             <div className="hero-glow" style={{ top: "0", left: "0", width: "100%", height: "100%", opacity: 0.2 }} />
             <div
              className="about-img-container shadow-2xl"
              style={{
                background: "var(--accent-glow)",
                padding: "12px",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                display: "inline-block",
                overflow: "hidden"
              }}
            >
              <img
                src="/contact.jpg"
                alt="about-profile"
                className="about-img"
                style={{
                  width: "min(320px, 70vw)",
                  height: "min(320px, 70vw)",
                  borderRadius: "inherit",
                  objectFit: "cover",
                  filter: "contrast(1.1)"
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="col-lg-7"
        >
          <div className="glass-panel p-5 rounded-4 position-relative overflow-hidden" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-mid)" }}>
             <div className="position-absolute top-0 end-0 p-4 opacity-10">
               <User size={120} />
             </div>
             
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="badge mb-3"
              style={{ background: "rgba(255, 106, 61, 0.1)", color: "var(--primary)", border: "1px solid rgba(255, 106, 61, 0.2)" }}
            >
              Summary
            </motion.span>

            <h3 className="fw-bold mb-4" style={{ fontSize: "32px" }}>
              I'm <span className="text-gradient">Sakshamm Khanna</span>
            </h3>

            <p className="lead mb-4" style={{ color: "var(--text-main)", fontSize: "18px", lineHeight: "1.8" }}>
              A <strong className="text-white">Full Stack Developer</strong> and 
              <strong className="text-white"> AI/ML enthusiast</strong> passionate about creating impactful digital experiences and intelligent applications. I combine modern web development with data-driven insights to build scalable, user-friendly solutions.
            </p>

            <div className="row g-4 mb-4">
              {[
                { icon: <Code2 size={20} />, text: "Full Stack Development" },
                { icon: <BrainCircuit size={20} />, text: "AI & Machine Learning" },
                { icon: <Rocket size={20} />, text: "Scalable Architecture" },
              ].map((item, i) => (
                <div key={i} className="col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ color: "var(--primary)", opacity: 0.9 }}>{item.icon}</div>
                    <span style={{ fontSize: "15px", color: "var(--text-sub)", fontWeight: 500 }}>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-gradient text-decoration-none px-5"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
