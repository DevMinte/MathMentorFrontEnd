import React from "react";
import { motion } from "framer-motion";
import chair from "/images/chair.png";

const AboutLanding = () => {
  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
}

      `}</style>
      <section className="relative w-full min-h-screen overflow-hidden text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-[#011810]" />
        <div className="absolute inset-0 bg-[radial-gradient(110%_90%_at_85%_0%,#1C3D27_0%,#12321F_35%,#0B2417_70%,#08180F_100%)] opacity-95" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 pb-28">
          {/* Tagline */}
          <motion.p
            className="text-center text-[#FFD700] tracking-[0.12em] mb-3 text-[16px] md:text-[18px] font-light"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Empowering Future Mathematicians
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="text-center text-[48px] md:text-[68px] lg:text-[80px] font-extrabold leading-tight mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-[#F5E04A] to-[#46DC7D] bg-clip-text text-transparent">
              Math Mentor
            </span>
          </motion.h1>

          {/* Main content layout */}
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-[2fr_auto_1fr] items-center gap-10 lg:gap-16"
              initial="hidden"
              whileInView="show"
              transition={{ staggerChildren: 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Left Content Box */}
              <motion.div
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl p-7 md:p-8 max-w-2xl mx-auto lg:mx-0 lg:mr-[-150px] z-10"
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-white/90 leading-relaxed text-left">
                  Empowering students to master mathematics through personalized
                  learning experiences and expert guidance
                </p>

                <div className="mt-7 flex flex-col gap-3 max-w-[200px]">
                  <motion.button
                    className="inline-flex items-center justify-between gap-3 rounded-md bg-[#FFD700] px-6 py-3 font-semibold text-black hover:bg-[#E6C200] transition-colors"
                    whileTap={{ scale: 0.96 }}
                    whileHover={{ x: 2 }}
                  >
                    <span>Start Learning →</span>

                  </motion.button>
                  <motion.button
                    className="rounded-md border border-white/30 px-6 py-3 text-white hover:bg-white/15 transition-colors backdrop-blur-sm"
                    whileTap={{ scale: 0.96 }}
                  >
                    Meet our Team
                  </motion.button>
                </div>
              </motion.div>

              {/* Chair - positioned to create overlap */}
              <motion.div
                className="flex justify-center lg:ml-12 z-20"
                variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.img
                  src={chair}
                  alt="Chair with backpack and books"
                  className="w-[400px] md:w-[520px] lg:w-[600px] object-contain drop-shadow-lg animate-float"
                  style={{
                    animation: 'float 6s ease-in-out infinite'
                  }}
                  whileHover={{ rotate: 1.5 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                />
              </motion.div>

              {/* Right Content Box */}
              <motion.div className="max-w-sm mx-auto lg:mx-0 lg:ml-[-250px] z-20">
                <motion.div
                  className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl p-7 md:p-8 mb-6"
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <p className="text-white/90 leading-relaxed">
                    Empowering students to master mathematics through personalized
                    learning experiences
                  </p>
                </motion.div>

                {/* Stats */}
                <motion.div className="grid grid-cols-2 gap-6 ml-8">
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <p className="text-[#FFD700] text-3xl font-bold mb-1">98%</p>
                    <p className="text-white/80 text-sm">Success Rate</p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} viewport={{ once: true }}>
                    <p className="text-[#FFD700] text-3xl font-bold mb-1">10K+</p>
                    <p className="text-white/80 text-sm">Student</p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                    <p className="text-[#FFD700] text-3xl font-bold mb-1">50+</p>
                    <p className="text-white/80 text-sm">Experts</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Math Mentor Section */}
      <section className="relative w-full py-20 bg-[#011810] text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why Choose Math Mentor?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the advantages that make our platform the perfect choice for your mathematical journey
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <img src="/images/1.png" alt="Lightbulb with gear" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Personalized Learning Paths</h3>
              <p className="text-white/80 leading-relaxed text-center mt-5">
                Customized curriculum that adapts to your unique learning style, pace and goals for optimal understanding
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <img src="/images/2.png" alt="Two gears" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Rapid Skill Development</h3>
              <p className="text-white/80 leading-relaxed text-center mt-5">
                Accelerate your learning with focused practice modules designed to build skills efficiently
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <img src="/images/3.png" alt="Checkmark in shield" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Comprehensive Concept Mastery</h3>
              <p className="text-white/80 leading-relaxed text-center mt-5">
                Master fundamental concepts through structured learning paths and comprehensive assessments
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <img src="/images/4.png" alt="Padlock in shield" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Secure Learning Environment</h3>
              <p className="text-white/80 leading-relaxed text-center mt-5">
                Learn in a safe, protected environment with secure access to all your educational resources
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <img src="/images/5.png" alt="Bar chart" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Progress Tracking</h3>
              <p className="text-white/80 leading-relaxed text-center mt-5">
                Monitor your learning progress with detailed analytics and performance insights
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <img src="/images/6.png" alt="Lightbulb with gear" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Innovative Learning Methods</h3>
              <p className="text-white/80 leading-relaxed text-center mt-5">
                Experience cutting-edge learning techniques that make mathematics engaging and accessible
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Foundation Section */}
      <section className="relative w-full pt-10 pb-0 bg-[#002317] text-white">
        {/* Background with specified gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15, 75, 47, 0.3) 0%, rgba(157, 223, 102, 0.3) 100%)",
          }}
        />
        {/* Darker edges overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(0, 35, 23, 0.9) 75%, rgba(0, 35, 23, 1) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          {/* Header Section */}
          <motion.div className="text-center mb-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 mt-4 md:mt-8">
              Our Foundation
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto px-4">
              Built on principles that drive excellence in mathematical education
            </p>
          </motion.div>

          {/* Main Content Layout */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-center" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {/* Left Side - Person on Bean Bag */}
            <motion.div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <motion.div className="relative" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>
                <img
                  src="/images/ourfoundation.png"
                  alt="Person on bean bag with laptop"
                  className="w-full max-w-[600px] lg:w-[1200px] h-auto object-contain drop-shadow-2xl"
                  style={{ transform: "scaleX(-1)" }}
                />
              </motion.div>
            </motion.div>

            {/* Right Side - Information Cards */}
            <motion.div className="flex flex-col space-y-6 lg:space-y-8 order-1 lg:order-2">
              {/* Top Card - Our Vision */}
              <motion.div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 px-6 md:px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15 lg:-ml-16 max-w-md mx-auto lg:mx-0" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-center lg:text-left">
                  Our Vision
                </h3>
                <p className="text-white/80 leading-relaxed text-center lg:text-left text-sm md:text-base">
                  Customized curriculum that adapts to your unique learning style,
                  pace and goals for optimal understanding
                </p>
              </motion.div>

              {/* Bottom Card - Our Mission */}
              <motion.div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 px-6 md:px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15 max-w-md mx-auto lg:mx-0 lg:ml-32" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} viewport={{ once: true }}>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-center lg:text-left">
                  Our Mission
                </h3>
                <p className="text-white/80 leading-relaxed text-center lg:text-left text-sm md:text-base">
                  Customized curriculum that adapts to your unique learning style,
                  pace and goals for optimal understanding
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* About Image Section */}
      <section className="relative w-full">
        <div className="relative">
          <motion.img
            src="/images/about.jpg"
            alt="About our educational foundation"
            className="w-full h-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Overlay Content on Right Side */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full flex items-start justify-center pt-8 md:pt-20">
            <motion.div className="p-4 md:p-8 max-w-md text-white" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-center">
                Master Math with our Free Package
              </h2>
              <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 text-center leading-relaxed text-white/70">
                Customized curriculum that adapts to your unique learning style, pace and goal for optimal understanding
              </p>
              <div className="text-center">
                <motion.button className="border-2 border-white text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-300 hover:bg-white hover:text-black text-sm md:text-base" whileTap={{ scale: 0.96 }}>
                  Start with free trial
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* What our Students Say Section */}
      <section className="relative w-full py-16 md:py-32 bg-[#011810] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left Side */}
          <motion.div className="lg:w-1/3 space-y-4 md:space-y-6 text-center lg:text-left" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              What Our <br /> Students Say
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Empowering students to master mathematics through personalized learning experiences and expert guidance
            </p>
          </motion.div>

          {/* Vertical Separator */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-px h-40 bg-white/40"></div>
          </div>

          {/* Testimonials Section */}
          <motion.div className="lg:w-2/3 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            {/* Testimonial 1 */}
            <motion.div className="flex items-start gap-4 max-w-xs" initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
              <img
                src="/images/student.jpg"
                alt="Sarah"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-white mb-1">Sarah</h4>
                <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We went from 3 to 47 orders a day after Adwello rebuilt our website. It was a complete game changer for our small business.
                </p>
              </div>
            </motion.div>

            {/* Vertical Yellow Separator */}
            <div className="hidden md:block w-px h-24 bg-yellow-400"></div>

            {/* Testimonial 2 */}
            <motion.div className="flex items-start gap-4 max-w-xs" initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }} viewport={{ once: true }}>
              <img
                src="/images/student.jpg"
                alt="Sarah"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-white mb-1">Sarah</h4>
                <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We went from 3 to 47 orders a day after Adwello rebuilt our website. It was a complete game changer for our small business.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
            <a href="#" className="block text-white/90 text-lg md:text-xl hover:text-yellow-400">Home</a>
            <a href="#" className="block text-white/90 text-lg md:text-xl hover:text-yellow-400">Services</a>
            <a href="#" className="block text-white/90 text-base md:text-lg hover:text-yellow-400">About Us</a>
            <a href="#" className="block text-white/90 text-lg md:text-xl hover:text-yellow-400">Blog</a>
          </div>

          {/* Social and Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg md:text-xl font-medium">Follow us</h4>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a href="#" aria-label="Facebook">
                <img src="/icon/facebook.svg" alt="Facebook" className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="/icon/instagram.svg" alt="Instagram" className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a href="#" aria-label="X">
                <img src="/icon/x.svg" alt="X" className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            </div>
            <p className="text-white/80 text-lg md:text-xl">hello@mathmentor.com</p>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 mx-8 md:mx-24"></div>

        {/* Bottom Bar */}
        <div className="text-center py-4 md:py-6 text-white/80 text-xs md:text-sm px-4">
          © 2025 Mathmentor. All rights reserved.{" "}
          <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
          <span className="text-orange-500"> | </span>
          <a href="#" className="hover:text-yellow-400">Terms of Service</a>
        </div>
      </footer>


    </>
  );
};

export default AboutLanding;