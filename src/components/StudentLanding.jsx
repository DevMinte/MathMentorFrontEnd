import React from 'react';
import { motion } from 'framer-motion';
import chair from "/images/studenthero.png";

const StudentLanding = () => {
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
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        Interactive lessons and practice designed for students.
                    </motion.p>

                    {/* Main Title */}
                    <motion.h1
                        className="text-center text-[48px] md:text-[68px] lg:text-[80px] font-extrabold leading-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        Learn Math{" "}
                        <span className="bg-gradient-to-r from-[#F5E04A] to-[#46DC7D] bg-clip-text text-transparent">
                            Smarter
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
                                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl p-7 md:p-8 max-w-7xl mx-auto lg:mx-0 lg:mr-[-350px] z-10"
                                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                whileHover={{ scale: 1.01 }}
                            >
                                <p className="text-white/90 leading-relaxed text-left">
                                    Access thousands of lessons and guided practice exercises with expert tutors tailored to your grade and skill level.
                                </p>

                                <div className="mt-7 flex flex-col gap-3 max-w-[200px]">
                                    <motion.button className="inline-flex items-center justify-between gap-3 rounded-md bg-[#FFD700] px-6 py-3 font-semibold text-black hover:bg-[#E6C200] transition-colors" whileTap={{ scale: 0.96 }} whileHover={{ x: 2 }}>
                                        <span>Start Learning →</span>
                                    </motion.button>
                                    <motion.button className="rounded-md border border-white/30 px-6 py-3 text-white hover:bg-white/15 transition-colors backdrop-blur-sm" whileTap={{ scale: 0.96 }}>
                                        Meet our Team
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Chair - positioned to create overlap */}
                            <motion.div className="flex justify-center lg:ml-[-50px] z-20" variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                                <motion.img
                                    src={chair}
                                    alt="Chair with backpack and books"
                                    className="w-[605px] md:w-[786px] lg:w-[907px] object-contain drop-shadow-lg animate-float"
                                    style={{
                                        animation: 'float 6s ease-in-out infinite'
                                    }}
                                    whileHover={{ rotate: 1.5 }}
                                    transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                                />
                            </motion.div>

                            {/* Right Content Box */}
                            <motion.div className="max-w-md mx-auto lg:mx-0 lg:ml-[-300px] z-20">
                                <motion.div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl p-7 md:p-8 mb-6" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }} whileHover={{ scale: 1.01 }}>
                                    <p className="text-white/90 leading-relaxed">
                                        Master core math concepts step by step with expert-designed study plans.
                                    </p>
                                </motion.div>

                                {/* Stats */}
                                <motion.div className="grid grid-cols-2 gap-6 ml-8">
                                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                                        <p className="text-[#FFD700] text-3xl font-bold mb-1">100+</p>
                                        <p className="text-white/80 text-sm">Interactive Challenges</p>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} viewport={{ once: true }}>
                                        <p className="text-[#FFD700] text-3xl font-bold mb-1">1M+</p>
                                        <p className="text-white/80 text-sm">Practice Questions Solved</p>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                                        <p className="text-[#FFD700] text-3xl font-bold mb-1">5,000+</p>
                                        <p className="text-white/80 text-sm">Lessons & Exercises</p>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Math Made Better Section */}
            <section className="relative w-full py-20 bg-[#011810] text-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header Section */}
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Math Made Better
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Enhance your learning with powerful tools and features:
                        </p>
                    </motion.div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Row 1 (3 cards) */}
                        <motion.div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.3 }} whileHover={{ y: -4 }}>
                            <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <img src="/images/1.png" alt="Quizzes" className="w-10 h-10 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">Quizzes & Practice Papers</h3>
                            <p className="text-white/80 leading-relaxed text-center mt-5">
                                Sharpen your skills with curated tests and instant results.
                            </p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }} viewport={{ once: true, amount: 0.3 }} whileHover={{ y: -4 }}>
                            <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <img src="/images/Video.png" alt="Video Lessons" className="w-10 h-10 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">Video Lessons</h3>
                            <p className="text-white/80 leading-relaxed text-center mt-5">
                                Learn from detailed, step-by-step tutorials.
                            </p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }} viewport={{ once: true, amount: 0.3 }} whileHover={{ y: -4 }}>
                            <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <img src="/images/Progress.png" alt="Progress Tracking" className="w-10 h-10 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">Progress Tracking</h3>
                            <p className="text-white/80 leading-relaxed text-center mt-5">
                                See your improvement over time with analytics.
                            </p>
                        </motion.div>
                    </div>

                    {/* Row 2 (centered 2 cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
                        <motion.div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.3 }} whileHover={{ y: -4 }}>
                            <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <img src="/images/247access.png" alt="24/7 Access" className="w-10 h-10 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">24/7 Access</h3>
                            <p className="text-white/80 leading-relaxed text-center mt-5">
                                Study anytime, from any device, anywhere in the world.
                            </p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }} viewport={{ once: true, amount: 0.3 }} whileHover={{ y: -4 }}>
                            <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <img src="/images/Community.png" alt="Community Support" className="w-10 h-10 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">Community Support</h3>
                            <p className="text-white/80 leading-relaxed text-center mt-5">
                                Connect with other learners for useful tips and helpful guidance.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Plans That Work for You Section */}
            <section className="relative w-full py-16 md:py-32 bg-[#002317] text-white">
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
                            Plans That Work for You
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto px-4">
                            No hidden fees, just clear and simple learning options.
                        </p>
                    </motion.div>

                    {/* Main Content Layout */}
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                        {/* Free Plan Card */}
                        <motion.div className="bg-[#002317] rounded-xl border border-white/20 p-6 shadow-lg text-center" initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileHover={{ y: -3 }}>
                            <h3 className="text-2xl font-bold text-white mb-2">Free Plan</h3>
                            <p className="text-[#00FF11] text-sm mb-4">Perfect for getting started</p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">$0</span>
                                <span className="text-white/70 text-lg">/month</span>
                            </div>
                            <p className="text-[#00FF11] text-sm mb-6">Forever free</p>

                            {/* Features */}
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">Up to 3 projects</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">Basic templates</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">Community support</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">1GB storage</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400 mr-3">✗</span>
                                    <span className="text-white/60 text-sm">Priority support</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400 mr-3">✗</span>
                                    <span className="text-white/60 text-sm">Advanced analytics</span>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-semibold py-3 px-4 rounded-lg hover:from-[#16A34A] hover:to-[#22C55E] transition-all duration-300 mb-3">
                                Get Started Free
                            </button>
                            <p className="text-center text-white/50 text-xs">No credit card required</p>
                        </motion.div>

                        {/* Silver Plan Card */}
                        <motion.div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/20 p-6 shadow-lg text-center" initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.05 }} viewport={{ once: true }} whileHover={{ y: -3 }}>
                            <h3 className="text-2xl font-bold text-white mb-2">Silver Plan</h3>
                            <p className="text-[#00FF11] text-sm mb-4">Perfect for getting started</p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">$0</span>
                                <span className="text-white/70 text-lg">/month</span>
                            </div>
                            <p className="text-[#00FF11] text-sm mb-6">Forever free</p>

                            {/* Features */}
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">Up to 3 projects</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">Basic templates</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">Community support</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">1GB storage</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400 mr-3">✗</span>
                                    <span className="text-white/60 text-sm">Priority-support</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400 mr-3">✗</span>
                                    <span className="text-white/60 text-sm">Advanced-analytics</span>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-semibold py-3 px-4 rounded-lg hover:from-[#16A34A] hover:to-[#22C55E] transition-all duration-300 mb-3">
                                Get Started Free
                            </button>
                            <p className="text-center text-white/50 text-xs">No credit card required</p>
                        </motion.div>

                        {/* Gold Plan Card */}
                        <motion.div className="bg-[#002317] rounded-xl border border-white/20 p-6 shadow-lg text-center" initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} whileHover={{ y: -3 }}>
                            <h3 className="text-2xl font-bold text-white mb-2">Gold Plan</h3>
                            <p className="text-[#00FF11] text-sm mb-4">Perfect for getting started</p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">$0</span>
                                <span className="text-white/70 text-lg">/month</span>
                            </div>
                            <p className="text-[#00FF11] text-sm mb-6">Forever free</p>

                            {/* Features */}
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">Up to 3 projects</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">Basic templates</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">Community support</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[#00FF11] mr-3">✓</span>
                                    <span className="text-white text-sm">1GB storage</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400 mr-3">✗</span>
                                    <span className="text-white/60 text-sm">Priority support</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400 mr-3">✗</span>
                                    <span className="text-white/60 text-sm">Advanced-analyties</span>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-semibold py-3 px-4 rounded-lg hover:from-[#16A34A] hover:to-[#22C55E] transition-all duration-300 mb-3">
                                Get Started Free
                            </button>
                            <p className="text-center text-white/50 text-xs">No credit card required</p>
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

export default StudentLanding;

