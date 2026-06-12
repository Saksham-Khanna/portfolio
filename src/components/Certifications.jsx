import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2025",
      side: "left"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "AWS Training and Certification",
      date: "2026",
      side: "right"
    }
  ];

  return (
    <section id="certifications" className="container py-5" style={{ position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h2 className="section-title">
          Licenses & <span className="text-gradient">Certifications</span>
        </h2>
      </motion.div>

      <div className="position-relative mt-5 cert-timeline">
        {/* Animated Vertical Line */}
        <motion.div 
          className="cert-line" 
          style={{ 
            scaleY, 
            transformOrigin: "top",
            background: "linear-gradient(to bottom, var(--primary), transparent)" 
          }} 
        />

        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: cert.side === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`cert-item ${cert.side}`}
          >
            <motion.div 
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="cert-box glass-panel p-4 rounded-4"
            >
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="p-2 rounded-3" style={{ background: "rgba(255, 106, 61, 0.1)", color: "var(--primary)" }}>
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="cert-title m-0 text-white" style={{ fontSize: "20px" }}>{cert.title}</h4>
                  <p className="fw-semibold m-0 mt-1" style={{ color: "var(--primary)", fontSize: "14px" }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>
              
              <div className="cert-details border-top pt-3 mt-3" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
                <span className="cert-date-badge badge px-3 py-2" style={{
                  background: "rgba(255,106,61,0.12)",
                  border: "1px solid rgba(255,106,61,0.28)",
                  color: "#ff8c65",
                  fontSize: "12px",
                  fontWeight: 600,
                  borderRadius: "8px"
                }}>Issued {cert.date}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cert-timeline {
          padding: 20px 0;
        }
        .cert-line {
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          height: 100%;
          background: var(--primary);
          transform: translateX(-50%);
          z-index: 0;
        }
        .cert-item {
          width: 50%;
          margin-bottom: 50px;
          position: relative;
          z-index: 1;
        }
        .cert-item.left {
          padding-right: 50px;
          text-align: left;
        }
        .cert-item.right {
          padding-left: 50px;
          margin-left: 50%;
        }
        @media (max-width: 768px) {
          .cert-line {
            left: 20px;
          }
          .cert-item, .cert-item.left, .cert-item.right {
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
