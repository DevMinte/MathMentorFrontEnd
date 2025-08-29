import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import Header from "./components/Header";
import Lenis from 'lenis';

function App() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="relative w-full h-[400vh] overflow-hidden">
      <BookSection scrollYProgress={scrollYProgress} />
      <div className="relative h-screen">
        <SecondSection 
          scrollYProgress={scrollYProgress} 
          onAboutClick={() => {
            // Navigate to about page with hash routing
            window.location.hash = '#/about';
          }}
        />
      </div>
      <div className="relative h-screen">
        <ThirdSection 
          scrollYProgress={scrollYProgress} 
          onStudentClick={() => {
            // Navigate to student page with hash routing
            window.location.hash = '#/student';
          }}
        />
      </div>
      <div className="relative h-screen">
        <FourthSection 
          scrollYProgress={scrollYProgress} 
          onTutorClick={() => {
            // Navigate to tutor page with hash routing
            window.location.hash = '#/tutor';
          }}
        />
      </div>
    </main>
  );
}

const BookSection = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1/3], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1/3], [0, -5]);
  const y = useTransform(scrollYProgress, [0, 1/3], [0, -100]);

  return (
    <motion.div 
      className="sticky top-0 left-0 w-full h-screen flex items-center justify-center relative"
      style={{
        scale, 
        rotate, 
        y,
        background: 'radial-gradient(#22c55e, #232323 85%)'
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
  const scale = useTransform(scrollYProgress, [0, 1/3, 2/3], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1/3, 2/3], [5, 0, -5]);
  const y = useTransform(scrollYProgress, [0, 1/3, 2/3], [100, 0, -100]);

  return (
    <motion.div 
      className="absolute inset-0 w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        scale, 
        rotate, 
        y
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
          damping: 20
        }
      }}
    >
      {/* Full Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/01.jpg')"
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: "easeOut"
          }
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
            ease: "easeOut"
          }
        }}
      />
      
      {/* Centered Text with Letter Animation */}
      <div className="relative z-10 text-center text-white cursor-pointer" onClick={onAboutClick}>
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
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }
          }}
        >
          {/* About */}
        </motion.div>
        
        <motion.div
          className="text-9xl font-bold mb-8 tracking-wider relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from("ABOUT").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block relative"
              style={{
                fontFamily: letter === 'A' ? 'BerkshireSwash, cursive' : 'inherit',
                fontSize: letter === 'A' ? '1.2em' : '1em',
                fontWeight: letter === 'A' ? '900' : 'bold'
              }}
              initial={{ 
                opacity: 0, 
                y: 100,
                rotateX: -90,
                scale: 0.5
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              }}
              transition={{
                duration: 1,
                delay: index * 0.08,
                ease: "easeOut",
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                scale: 1.2,
                y: -10,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
            >
              {letter === " " ? "\u00A0" : letter}
              {/* Glow effect for each letter */}
              {/* <motion.div
                className="absolute inset-0 bg-yellow-400/20 blur-sm rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1,
                  transition: { delay: index * 0.08 + 0.5 }
                }}
              /> */}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.p 
          className="text-3xl font-light tracking-wide relative"
          style={{ fontFamily: 'Arial, sans-serif' }}
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
              stiffness: 80
            }
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
  const scale = useTransform(scrollYProgress, [1/3, 2/3, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [1/3, 2/3, 1], [5, 0, -5]);
  const y = useTransform(scrollYProgress, [1/3, 2/3, 1], [100, 0, -100]);

  return (
    <motion.div 
      className="absolute inset-0 w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        scale, 
        rotate, 
        y
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
          damping: 20
        }
      }}
    >
      {/* Full Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/backgrund2.jpg')"
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: "easeOut"
          }
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
            ease: "easeOut"
          }
        }}
      />
      
      {/* Centered Text with Letter Animation */}
      <div className="relative z-10 text-center text-white cursor-pointer" onClick={onStudentClick}>
        <motion.div
          className="text-6xl font-black mb-8 tracking-tight"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }
          }}
        >
          {/* Student */}
        </motion.div>
        
        <motion.div
          className="text-9xl font-bold mb-8 tracking-wider relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from("STUDENT").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block relative"
              style={{
                fontFamily: letter === 'S' ? 'BerkshireSwash, cursive' : 'inherit',
                fontSize: letter === 'S' ? '1.2em' : '1em',
                fontWeight: letter === 'S' ? '900' : 'bold'
              }}
              initial={{ 
                opacity: 0, 
                y: 100,
                rotateX: -90,
                scale: 0.5
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              }}
              transition={{
                duration: 1,
                delay: index * 0.08,
                ease: "easeOut",
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                scale: 1.2,
                y: -10,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.p 
          className="text-3xl font-light tracking-wide relative"
          style={{ fontFamily: 'Arial, sans-serif' }}
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
              stiffness: 80
            }
          }}
        >
          {/* Empowering Future Leaders */}
        </motion.p>
      </div>
    </motion.div>
  );
};

const FourthSection = ({ scrollYProgress, onTutorClick }) => {
  const scale = useTransform(scrollYProgress, [2/3, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [2/3, 1], [5, 0]);
  const y = useTransform(scrollYProgress, [2/3, 1], [100, 0]);

  return (
    <motion.div 
      className="absolute inset-0 w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        scale, 
        rotate, 
        y
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
          damping: 20
        }
      }}
    >
      {/* Full Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/backgrund2.jpg')"
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: "easeOut"
          }
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
            ease: "easeOut"
          }
        }}
      />
      
      {/* Centered Text with Letter Animation */}
      <div className="relative z-10 text-center text-white cursor-pointer" onClick={onTutorClick}>
        <motion.div
          className="text-6xl font-black mb-8 tracking-tight"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }
          }}
        >
          {/* Tutor */}
        </motion.div>
        
        <motion.div
          className="text-9xl font-bold mb-8 tracking-wider relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from("TUTOR").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block relative"
              style={{
                fontFamily: letter === 'T' ? 'BerkshireSwash, cursive' : 'inherit',
                fontSize: letter === 'T' ? '1.2em' : '1em',
                fontWeight: letter === 'T' ? '900' : 'bold'
              }}
              initial={{ 
                opacity: 0, 
                y: 100,
                rotateX: -90,
                scale: 0.5
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              }}
              transition={{
                duration: 1,
                delay: index * 0.08,
                ease: "easeOut",
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                scale: 1.2,
                y: -10,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.p 
          className="text-3xl font-light tracking-wide relative"
          style={{ fontFamily: 'Arial, sans-serif' }}
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
              stiffness: 80
            }
          }}
        >
          {/* Empowering Future Leaders */}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default App;