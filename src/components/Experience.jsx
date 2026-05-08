import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "HashedBit Innovations",
      date: "Aug 2025 - Oct 2025",
      side: "left",
      points: [
        "Developed dynamic React front-end interfaces.",
        "Built REST APIs using Node.js & Express.",
        "Integrated MongoDB/MySQL for backend services.",
        "Optimized applications for performance & usability."
      ]
    },
    {
      title: "Web Development Intern",
      company: "CodeAlpha",
      date: "Jun 2025 – Jul 2025",
      side: "right",
      points: [
        "Built dynamic web applications with user auth.",
        "Implemented secure CRUD functionality.",
        "Worked with Node.js, Express.js, MySQL, JavaScript.",
        "Maintained robust backend services and APIs."
      ]
    }
  ];

  return (
    <section id="experience" className="container py-5" style={{ position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h2 className="section-title">
          Professional <span className="text-gradient">Experience</span>
        </h2>
      </motion.div>

      <div className="position-relative mt-5 exp-timeline">
        {/* Animated Vertical Line */}
        <motion.div 
          className="exp-line" 
          style={{ 
            scaleY, 
            transformOrigin: "top",
            background: "linear-gradient(to bottom, var(--primary), transparent)" 
          }} 
        />

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`exp-item ${exp.side}`}
          >
            <motion.div 
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="exp-box glass-panel p-4 rounded-4"
            >
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="p-2 rounded-3" style={{ background: "rgba(255, 106, 61, 0.1)", color: "var(--primary)" }}>
                  <Briefcase size={24} />
                </div>
                  <div className="flex-grow-1">
                    <h4 className="exp-title m-0" style={{ fontSize: "19px", color: "var(--text-main)", fontWeight: 700 }}>{exp.title}</h4>
                    <div className="d-flex justify-content-between align-items-center mt-1 flex-wrap gap-2">
                      <span className="fw-semibold" style={{ color: "var(--primary)", fontSize: "13px" }}>{exp.company}</span>
                      <span style={{ fontSize: "12px", color: "var(--text-sub)", background: "rgba(255,106,61,0.10)", border: "1px solid rgba(255,106,61,0.25)", padding: "2px 10px", borderRadius: "6px", fontWeight: 500 }}>{exp.date}</span>
                    </div>
                  </div>
              </div>
              
              <ul className="exp-points pt-3 mt-3 list-unstyled" style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
                {exp.points.map((point, i) => (
                  <li key={i} className="mb-2 d-flex gap-2 align-items-start" style={{ fontSize: "14px", lineHeight: "1.65", color: "var(--text-sub)" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)", marginTop: "8px", flexShrink: 0, opacity: 0.8 }} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .exp-timeline {
          padding: 20px 0;
        }
        .exp-line {
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          height: 100%;
          background: var(--primary);
          transform: translateX(-50%);
          z-index: 0;
        }
        .exp-item {
          width: 50%;
          margin-bottom: 50px;
          position: relative;
          z-index: 1;
        }
        .exp-item.left {
          padding-right: 50px;
          text-align: left;
        }
        .exp-item.right {
          padding-left: 50px;
          margin-left: 50%;
        }
        .exp-item.left .exp-points li {
          justify-content: flex-start;
          text-align: left;
        }
        .exp-item.left .exp-points li div {
          order: -1;
        }
        @media (max-width: 768px) {
          .exp-line {
            left: 20px;
          }
          .exp-item, .exp-item.left, .exp-item.right {
            width: 100%;
            margin-left: 0 !important;
            padding-left: 50px !important;
            padding-right: 0 !important;
            text-align: left !important;
          }
          .exp-item.left .exp-points li {
            justify-content: flex-start;
            text-align: left;
          }
          .exp-item.left .exp-points li div {
            order: -1;
          }
        }
      `}} />
    </section>
  );
}
