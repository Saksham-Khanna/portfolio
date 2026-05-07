import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "ReactJS",     img: "/skills/react.png" },
      { name: "JavaScript",  img: "/skills/js.png" },
      { name: "HTML5",       img: "/skills/html.png" },
      { name: "CSS3",        img: "/skills/css.png" },
      { name: "TailwindCSS", img: "/skills/tailwind.png" },
    ]
  },
  {
    label: "Backend & DB",
    skills: [
      { name: "NodeJS",   img: "/skills/node.png" },
      { name: "Spring",   img: "/skills/spring.png" },
      { name: "MongoDB",  img: "/skills/mongodb.png" },
      { name: "MySQL",    img: "/skills/mysql.png" },
      { name: "Firebase", img: "/skills/firebase.png" },
    ]
  },
  {
    label: "Languages",
    skills: [
      { name: "Python",     img: "/skills/python.png" },
      { name: "Java",       img: "/skills/java.png" },
      { name: "C++",        img: "/skills/cpp.png" },
      { name: "Streamlit",  img: "/skills/streamlit.png" },
    ]
  },
  {
    label: "Tools & Cloud",
    skills: [
      { name: "Git",     img: "/skills/git.png" },
      { name: "GitHub",  img: "/skills/github.png" },
      { name: "AWS",     img: "/skills/aws.png" },
      { name: "VS Code", img: "/skills/vscode.png" },
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="container py-5" style={{ position: "relative", overflow: "hidden" }}>
      {/* subtle bg glow — clipped so it can't overflow */}
      <div
        style={{
          position: "absolute",
          top: "40%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(255,106,61,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
        style={{ position: "relative", zIndex: 1 }}
      >
        <h2 className="section-title">
          SKILLS <span className="text-gradient">&amp; TECHNOLOGIES</span>
        </h2>
        <p style={{ maxWidth: "560px", fontSize: "16px", color: "var(--text-sub)", margin: "0 auto", lineHeight: 1.7 }}>
          A diverse toolkit — from polished frontends to intelligent ML-powered systems.
        </p>
      </motion.div>

      {/* Category groups */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            className="mb-5"
          >
            {/* Category label */}
            <div className="d-flex align-items-center gap-3 mb-3">
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  opacity: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {cat.label}
              </span>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.18)" }} />
            </div>

            {/* Skills row */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="d-flex flex-wrap gap-3"
            >
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "default",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    minWidth: "130px",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(255,106,61,0.35)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,106,61,0.08)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    style={{
                      width: "36px",
                      height: "36px",
                      objectFit: "contain",
                      flexShrink: 0,
                      filter: "drop-shadow(0 0 6px rgba(255,106,61,0.15))",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--text-main)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
