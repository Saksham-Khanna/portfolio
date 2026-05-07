import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const roles = [
    "Web Developer",
    "Data Analyst",
    "Full Stack Developer",
    "AI & ML Developer",
    "Software Developer",
    "Tech Explorer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="container py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between min-vh-100"
      style={{ position: "relative", zIndex: 1 }}
    >
      {/* Cinematic Background Elements */}
      <div className="hero-glow" style={{ top: "-10%", left: "-10%", opacity: 0.4 }} />
      <div className="hero-glow" style={{ bottom: "-10%", right: "-10%", opacity: 0.3, background: "radial-gradient(circle, var(--secondary) 0%, transparent 70%)" }} />

      {/* LEFT TEXT SECTION */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="col-lg-7 text-center text-lg-start"
      >
        <motion.div variants={itemVariants} className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-3">
          <motion.span
            animate={{ boxShadow: ["0 0 0px rgba(255,106,61,0.3)", "0 0 16px rgba(255,106,61,0.5)", "0 0 0px rgba(255,106,61,0.3)"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "100px",
              background: "rgba(255, 106, 61, 0.12)",
              border: "1px solid rgba(255, 106, 61, 0.35)",
              fontSize: "14px",
              fontWeight: 600,
              color: "#ffb68e",
              letterSpacing: "0.3px",
            }}
          >
            {/* Pulsing green live dot */}
            <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <motion.span
                animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  width: "8px", height: "8px",
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "block" }} />
            </span>
            Open for opportunities
          </motion.span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "var(--primary)",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Hey there! 👋
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="fw-bold"
          style={{ fontSize: "clamp(44px, 7.5vw, 72px)", lineHeight: "1.1", letterSpacing: "-0.03em" }}
        >
          <span style={{ color: "var(--text-main)" }}>I'm </span>
          <span className="text-gradient">Sakshamm</span>
          <br />
          <div style={{ height: "1.2em", display: "inline-flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
            <span style={{ color: "var(--text-sub)", fontSize: "0.78em", fontWeight: 500 }}>a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="text-gradient"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4"
          style={{
            fontSize: "19px",
            maxWidth: "600px",
            color: "var(--text-muted)",
            lineHeight: "1.7",
          }}
        >
          I craft efficient and scalable digital experiences spanning web
          development, data-driven applications, full stack systems, and
          intelligent ML-powered solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-5 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="btn-gradient text-decoration-none"
          >
            View Projects <ArrowRight size={18} className="ms-2" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="btn glass-panel text-white text-decoration-none"
            style={{ padding: "14px 36px", borderRadius: "12px", fontWeight: "600" }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE SECTION */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="col-lg-5 mt-5 mt-lg-0 d-flex justify-content-center"
      >
        <div
          className="about-img-container"
          style={{
            position: "relative",
            padding: "15px",
            borderRadius: "40px",
            background: "rgba(255, 106, 61, 0.1)",
            border: "1px solid rgba(255, 106, 61, 0.2)",
          }}
        >
          {/* Animated decorative ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              inset: "-5px",
              borderRadius: "45px",
              border: "2px dashed rgba(255, 106, 61, 0.3)",
              zIndex: -1,
            }}
          />
          
          <img
            src="/profile.jpg"
            className="about-img shadow-2xl"
            alt="profile"
            style={{
              width: "min(350px, 80vw)",
              height: "min(350px, 80vw)",
              objectFit: "cover",
              borderRadius: "32px",
              filter: "grayscale(10%) contrast(1.1)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
