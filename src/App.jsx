import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
  const glowRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Mouse glow effect
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        const { clientX, clientY } = e;
        glowRef.current.style.transform = `translate(${clientX - 250}px, ${clientY - 250}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      {/* Premium Cursor Glow */}
      <div 
        ref={glowRef}
        className="cursor-glow"
        style={{
          position: "fixed",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255, 106, 61, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          filter: "blur(40px)",
          top: 0,
          left: 0,
          transition: "transform 0.1s ease-out"
        }}
      />

      {/* Progress Bar */}
      <motion.div 
        className="progress-bar"
        style={{ 
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "var(--primary)",
          transformOrigin: "0%",
          zIndex: 10001
        }} 
      />

      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </motion.main>
      
      <Footer />
    </div>
  );
}
