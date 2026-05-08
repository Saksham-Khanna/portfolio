import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const items = [
    {
      title: "Chandigarh University",
      subtitle: "B.E. Computer Science Engineering",
      desc: "Specialization: AI & ML | 7.15 CGPA",
      date: "2023 - 2027",
      side: "right"
    },
    {
      title: "Intermediate",
      subtitle: "Bharat Mata Saraswati Mandir, Narela",
      desc: "CBSE Board | 72%",
      date: "2022 - 2023",
      side: "left"
    },
    {
      title: "Matriculation",
      subtitle: "Bhartiyam International School",
      desc: "Rudrapur, Uttarakhand | 96%",
      date: "2019 - 2021",
      side: "right"
    }
  ];

  return (
    <section id="education" className="container py-5" style={{ position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h2 className="section-title">
          Education <span className="text-gradient">Timeline</span>
        </h2>
      </motion.div>

      <div className="position-relative mt-5 edu-timeline">
        {/* Animated Vertical Line */}
        <motion.div 
          className="edu-line" 
          style={{ 
            scaleY, 
            transformOrigin: "top",
            background: "linear-gradient(to bottom, var(--primary), transparent)" 
          }} 
        />

        {items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`edu-item ${item.side}`}
          >
            <motion.div 
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="edu-box glass-panel p-4 rounded-4"
            >
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="p-2 rounded-3" style={{ background: "rgba(255, 106, 61, 0.1)", color: "var(--primary)" }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="edu-title m-0 text-white" style={{ fontSize: "20px" }}>{item.title}</h4>
                  <p className="fw-semibold m-0 mt-1" style={{ color: "var(--primary)", fontSize: "14px" }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
              
              <div className="edu-details border-top pt-3 mt-3" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
                <p className="mb-3" style={{ fontSize: "14px", color: "var(--text-sub)", lineHeight: 1.6 }}>{item.desc}</p>
                <span className="edu-date-badge badge px-3 py-2" style={{
                  background: "rgba(255,106,61,0.12)",
                  border: "1px solid rgba(255,106,61,0.28)",
                  color: "#ff8c65",
                  fontSize: "12px",
                  fontWeight: 600,
                  borderRadius: "8px"
                }}>{item.date}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .edu-timeline {
          padding: 20px 0;
        }
        .edu-line {
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          height: 100%;
          background: var(--primary);
          transform: translateX(-50%);
          z-index: 0;
        }
        .edu-item {
          width: 50%;
          margin-bottom: 50px;
          position: relative;
          z-index: 1;
        }
        .edu-item.left {
          padding-right: 50px;
          text-align: left;
        }
        .edu-item.right {
          padding-left: 50px;
          margin-left: 50%;
        }
        @media (max-width: 768px) {
          .edu-line {
            left: 20px;
          }
          .edu-item, .edu-item.left, .edu-item.right {
            width: 100%;
            margin-left: 0 !important;
            padding-left: 50px !important;
            padding-right: 0 !important;
            text-align: left !important;
          }
        }
      `}} />
    </section>
  );
}
