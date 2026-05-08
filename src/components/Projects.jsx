import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "EZ CHAT",
    repo: "https://github.com/Saksham-Khanna/ezchat",
    live: "https://ezzchat.onrender.com",
    tech: ["Reactjs", "Node.js", "Socket.io"],
    desc: "A modern real-time communication platform that features secure instant messaging, P2P voice and video calls, and innovative proximity-based user discovery.",
    img: "/projects/ezchat1.png",
    size: "large"
  },
  {
    title: "ResuMatch AI",
    repo: "https://github.com/Saksham-Khanna/ResuMatch",
    live: "https://resu-match.onrender.com/",
    tech: ["MERN", "AI", "Docker"],
    desc: "AI-powered platform that uses LLMs to provide precision ATS scoring and real-time skill-gap visualization.",
    img: "/projects/resumatch.png",
    size: "medium"
  },
  {
    title: "Cricket Player Prediction",
    repo: "https://github.com/Saksham-Khanna/Cricket-Pred-App",
    live: "",
    tech: ["Streamlit", "ML"],
    desc: "Interactive IPL player selection system powered by data-driven scoring.",
    img: "/projects/cricket.png",
    size: "small"
  }, 
  {
    title: "Learning Management",
    repo: "https://github.com/Saksham-Khanna/Learning-Management-Platform",
    live: "",
    tech: ["React", "MongoDB"],
    desc: "A complete LMS platform with authentication & course management.",
    img: "/projects/lms.png",
    size: "small"
  },
  {
    title: "Cancer Prediction",
    repo: "https://github.com/Saksham-Khanna/Breast-Cancer-pred",
    live: "",
    tech: ["Python", "Flask", "ML"],
    desc: "Machine learning model to diagnose breast cancer from cell data.",
    img: "/projects/breast_cancer.png",
    size: "medium"
  },
  {
    title: "Diabetes Prediction",
    repo: "https://github.com/Saksham-Khanna/diabetic-pred",
    live: "https://your-diabetes-app.vercel.app",
    tech: ["Python", "Streamlit"],
    desc: "Interactive web-based diabetes prediction using ML algorithms.",
    img: "/projects/diabetes.png",
    size: "small"
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`project-card-wrapper ${project.size}`}
    >
      <div className="project-card glass-panel h-100 d-flex flex-column">
        <div className="project-img-wrapper overflow-hidden position-relative">
          <div
            className="project-img"
            style={{
              backgroundImage: `url(${project.img || "/projects/default.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: project.size === "large" ? "300px" : "220px",
            }}
          />
          <div className="project-overlay glass-panel d-flex align-items-center justify-content-center gap-3">
             <motion.a 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               href={project.repo} 
               target="_blank" 
               className="btn btn-light rounded-circle p-2"
             >
               <GitBranch size={20} />
             </motion.a>
             {project.live && (
               <motion.a 
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 href={project.live} 
                 target="_blank" 
                 className="btn btn-light rounded-circle p-2"
               >
                 <ExternalLink size={20} />
               </motion.a>
             )}
          </div>
        </div>

        <div className="p-4 d-flex flex-column flex-grow-1">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h4 className="card-title m-0 text-gradient">{project.title}</h4>
            <ArrowUpRight size={18} style={{ color: "var(--primary)", opacity: 0.7, flexShrink: 0 }} />
          </div>
          
          <p className="card-text mb-4" style={{ fontSize: "14px", lineHeight: "1.65", color: "var(--text-sub)" }}>
            {project.desc}
          </p>

          <div className="mt-auto">
            <div className="d-flex flex-wrap gap-2 mb-3">
              {project.tech.map((t, i) => (
                <span key={i} className="badge">
                  {t}
                </span>
              ))}
            </div>
            
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white fw-bold d-flex align-items-center gap-2"
              style={{ fontSize: "14px" }}
            >
              Learn More <div style={{ width: "20px", height: "1px", background: "var(--primary)" }} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const visibleProjects = projects;

  return (
    <section id="work" className="container py-5" style={{ minHeight: "100vh" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h2 className="section-title">
          PROJECTS <span className="text-gradient">SHOWCASE</span>
        </h2>
        <p style={{ color: "var(--text-sub)", maxWidth: "600px", margin: "0 auto", fontSize: "16px", lineHeight: 1.7 }}>
          A collection of projects that push the boundaries of technology, from real-time communication to AI-driven diagnostics.
        </p>
      </motion.div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Section removed to show all projects by default */}

      <style dangerouslySetInnerHTML={{ __html: `
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          grid-auto-flow: dense;
        }
        @media (min-width: 992px) {
          .project-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          .project-card-wrapper.large {
            grid-column: span 2;
          }
          .project-card-wrapper.medium {
            grid-column: span 1;
          }
        }
        .project-img-wrapper {
          width: 100%;
          border-bottom: 1px solid var(--border-light);
        }
        .project-img {
          transition: transform 0.8s cubic-bezier(0.2, 0, 0, 1);
        }
        .project-card:hover .project-img {
          transform: scale(1.1);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 0.4s ease;
          backdrop-filter: blur(4px);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
      `}} />
    </section>
  );
}
