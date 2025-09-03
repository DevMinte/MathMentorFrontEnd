import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import Header from "./components/Header";
import Lenis from "lenis";

function App() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    try {
      window.history.scrollRestoration = "manual";
    } catch {}

    // Prevent duplicate initialization and keep stable refs
    const lenisRef = { current: null };
    const frameRef = { current: 0 };

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    // Ensure we start at the top when (re)entering the home page
    try {
      window.scrollTo({ top: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch {}

    function raf(time) {
      if (!lenisRef.current) return;
      lenisRef.current.raf(time);
      frameRef.current = requestAnimationFrame(raf);
    }

    // Start RAF loop once
    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(raf);
    }

    // Pause/resume on tab visibility changes to prevent stale frames
    const handleVisibility = () => {
      if (!lenisRef.current) return;
      if (document.hidden) {
        try {
          lenisRef.current.stop();
        } catch {}
      } else {
        try {
          lenisRef.current.start();
        } catch {}
      }
    };
    document.addEventListener("visibilitychange", handleVisibility, {
      passive: true,
    });

    // Defensive: stop RAF on pagehide/unload
    const stopRaf = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }
    };
    window.addEventListener("pagehide", stopRaf, { passive: true });
    window.addEventListener("beforeunload", stopRaf, { passive: true });

    return () => {
      // Stop RAF first
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }
      // Destroy lenis
      try {
        lenisRef.current && lenisRef.current.destroy();
      } catch {}
      lenisRef.current = null;
      // Extra hard cleanup in case Lenis leaves artifacts on the DOM
      try {
        const htmlEl = document.documentElement;
        const bodyEl = document.body;
        htmlEl.classList.remove(
          "lenis",
          "lenis-smooth",
          "lenis-stopped",
          "lenis-scrolling"
        );
        bodyEl.classList.remove(
          "lenis",
          "lenis-smooth",
          "lenis-stopped",
          "lenis-scrolling"
        );
        htmlEl.style.scrollBehavior = "";
        bodyEl.style.scrollBehavior = "";
        bodyEl.style.overflow = "";
        htmlEl.style.overflow = "";
        htmlEl.style.removeProperty("--lenis-direction");
        htmlEl.style.removeProperty("--lenis-speed");
        htmlEl.style.removeProperty("--lenis-duration");
        htmlEl.style.removeProperty("--lenis-ease");
      } catch {}

      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pagehide", stopRaf);
      window.removeEventListener("beforeunload", stopRaf);

      try {
        window.history.scrollRestoration = previousScrollRestoration || "auto";
      } catch {}
    };
  }, []);

  return (
    <>
      <main
        ref={container}
        className="relative w-full h-[400vh] overflow-hidden"
      >
        <BookSection scrollYProgress={scrollYProgress} />
        <div className="relative h-screen">
          <SecondSection
            scrollYProgress={scrollYProgress}
            onAboutClick={() => {
              // Navigate to about page with hash routing
              window.location.hash = "#/about";
            }}
          />
        </div>
        <div className="relative h-screen">
          <ThirdSection
            scrollYProgress={scrollYProgress}
            onStudentClick={() => {
              // Navigate to student page with hash routing
              window.location.hash = "#/student";
            }}
          />
        </div>
        <div className="relative h-screen">
          <FourthSection
            scrollYProgress={scrollYProgress}
            onTutorClick={() => {
              // Navigate to tutor page with hash routing
              window.location.hash = "#/tutor";
            }}
          />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#010f0a] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          {/* Logo and Tagline */}
          <div className="space-y-3 -mt-4 text-center md:text-left">
            <img
              src="/images/MathMentorLogo .png"
              alt="MathMentor Logo"
              className="h-20 md:h-28 w-auto object-contain mx-auto md:mx-0"
            />
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-[280px] mx-auto md:mx-0">
              Empowering students <br /> to master mathematics
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4 text-center md:text-left">
            <a
              href="#"
              className="block text-white/90 text-lg md:text-xl hover:text-yellow-400"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-white/90 text-lg md:text-xl hover:text-yellow-400"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-white/90 text-base md:text-lg hover:text-yellow-400"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-white/90 text-lg md:text-xl hover:text-yellow-400"
            >
              Blog
            </a>
          </div>

          {/* Social and Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg md:text-xl font-medium">Follow us</h4>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a href="#" aria-label="Facebook">
                <img
                  src="/icon/facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="/icon/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </a>
              <a href="#" aria-label="X">
                <img
                  src="/icon/x.svg"
                  alt="X"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </a>
            </div>
            <p className="text-white/80 text-lg md:text-xl">
              hello@mathmentor.com
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 mx-8 md:mx-24"></div>

        {/* Bottom Bar */}
        <div className="text-center py-4 md:py-6 text-white/80 text-xs md:text-sm px-4">
          © 2025 Mathmentor. All rights reserved.{" "}
          <a href="#" className="hover:text-yellow-400">
            Privacy Policy
          </a>
          <span className="text-orange-500"> | </span>
          <a href="#" className="hover:text-yellow-400">
            Terms of Service
          </a>
        </div>
      </footer>
    </>
  );
}

const BookSection = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1 / 3], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1 / 3], [0, -5]);
  const y = useTransform(scrollYProgress, [0, 1 / 3], [0, -100]);

  return (
    <motion.div
      className="sticky top-0 left-0 w-full h-screen flex items-center justify-center relative"
      style={{
        scale,
        rotate,
        y,
        background: "radial-gradient(#22c55e, #232323 85%)",
      }}
    >
      <Header />
      <UI />
      <Loader />
      <Canvas
        shadows
        camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
          fov: 45,
        }}
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </motion.div>
  );
};

const SecondSection = ({ scrollYProgress, onAboutClick }) => {
  const scale = useTransform(scrollYProgress, [0, 1 / 3, 2 / 3], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1 / 3, 2 / 3], [5, 0, -5]);
  const y = useTransform(scrollYProgress, [0, 1 / 3, 2 / 3], [100, 0, -100]);

  return (
    <motion.div
      className="absolute inset-0 w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        scale,
        rotate,
        y,
      }}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      }}
    >
      {/* Full Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/01.jpg')",
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: "easeOut",
          },
        }}
      />

      {/* Overlay for better text readability */}
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.4,
            ease: "easeOut",
          },
        }}
      />

      {/* Centered Text with Letter Animation */}
      <div
        className="relative z-10 text-center text-white cursor-pointer"
        onClick={onAboutClick}
      >
        {/* Decorative Line Above */}
        {/* <motion.div
          className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ 
            scaleX: 1, 
            opacity: 1,
            transition: {
              duration: 1.2,
              delay: 0.5,
              ease: "easeOut"
            }
          }}
        /> */}

        <motion.div
          className="text-6xl font-black mb-8 tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            },
          }}
        >
          {/* About */}
        </motion.div>

        <div className="text-9xl font-bold mb-8 tracking-wider relative">
          <span
            className="inline-block relative"
            style={{
              fontFamily: "BerkshireSwash, cursive",
              fontSize: "1.2em",
              fontWeight: "900",
            }}
          >
            A
          </span>
          <span className="inline-block relative">BOUT</span>
        </div>

        <motion.p
          className="text-3xl font-light tracking-wide relative"
          style={{ fontFamily: "Arial, sans-serif" }}
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 1.2,
              delay: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            },
          }}
        >
          {/* Empowering Minds Through Mathematics */}
        </motion.p>

        {/* Decorative Line Below */}
        {/* <motion.div
          className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-8"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ 
            scaleX: 1, 
            opacity: 1,
            transition: {
              duration: 1.2,
              delay: 1.2,
              ease: "easeOut"
            }
          }}
        /> */}
      </div>
    </motion.div>
  );
};

const ThirdSection = ({ scrollYProgress, onStudentClick }) => {
  const scale = useTransform(scrollYProgress, [1 / 3, 2 / 3, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [1 / 3, 2 / 3, 1], [5, 0, -5]);
  const y = useTransform(scrollYProgress, [1 / 3, 2 / 3, 1], [100, 0, -100]);

  return (
    <motion.div
      className="absolute inset-0 w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        scale,
        rotate,
        y,
      }}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      }}
    >
      {/* Full Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/backgrund2.jpg')",
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: "easeOut",
          },
        }}
      />

      {/* Overlay for better text readability */}
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.4,
            ease: "easeOut",
          },
        }}
      />

      {/* Centered Text with Letter Animation */}
      <div
        className="relative z-10 text-center text-white cursor-pointer"
        onClick={onStudentClick}
      >
        <motion.div
          className="text-6xl font-black mb-8 tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            },
          }}
        >
          {/* Student */}
        </motion.div>

        <div className="text-9xl font-bold mb-8 tracking-wider relative">
          <span
            className="inline-block relative"
            style={{
              fontFamily: "BerkshireSwash, cursive",
              fontSize: "1.2em",
              fontWeight: "900",
            }}
          >
            S
          </span>
          <span className="inline-block relative">TUDENT</span>
        </div>

        <motion.p
          className="text-3xl font-light tracking-wide relative"
          style={{ fontFamily: "Arial, sans-serif" }}
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 1.2,
              delay: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            },
          }}
        >
          {/* Empowering Future Leaders */}
        </motion.p>
      </div>
    </motion.div>
  );
};

const FourthSection = ({ scrollYProgress, onTutorClick }) => {
  const scale = useTransform(scrollYProgress, [2 / 3, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [2 / 3, 1], [5, 0]);
  const y = useTransform(scrollYProgress, [2 / 3, 1], [100, 0]);

  return (
    <motion.div
      className="absolute inset-0 w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        scale,
        rotate,
        y,
      }}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      }}
    >
      {/* Full Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/backgrund2.jpg')",
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: "easeOut",
          },
        }}
      />

      {/* Overlay for better text readability */}
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.4,
            ease: "easeOut",
          },
        }}
      />

      {/* Centered Text with Letter Animation */}
      <div
        className="relative z-10 text-center text-white cursor-pointer"
        onClick={onTutorClick}
      >
        <motion.div
          className="text-6xl font-black mb-8 tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            },
          }}
        >
          {/* Tutor */}
        </motion.div>

        <div className="text-9xl font-bold mb-8 tracking-wider relative">
          <span
            className="inline-block relative"
            style={{
              fontFamily: "BerkshireSwash, cursive",
              fontSize: "1.2em",
              fontWeight: "900",
            }}
          >
            T
          </span>
          <span className="inline-block relative">UTOR</span>
        </div>

        <motion.p
          className="text-3xl font-light tracking-wide relative"
          style={{ fontFamily: "Arial, sans-serif" }}
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 1.2,
              delay: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            },
          }}
        >
          {/* Empowering Future Leaders */}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default App;
