import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="absolute top-0 left-0 right-0 z-50 px-8 py-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut"
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Math Mentor Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            delay: 0.2, 
            duration: 0.6
          }}
        >
          <img 
            className="h-20" 
            src="/images/MathMentorLogo .png" 
            alt="Math Mentor Logo" 
          />
        </motion.div>

        {/* Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.a 
            href="#/" 
            className="text-white/80 hover:text-white transition-colors duration-300 relative group"
            whileHover={{ y: -2 }}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a 
            href="#/about" 
            className="text-white/80 hover:text-white transition-colors duration-300 relative group"
            whileHover={{ y: -2 }}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a 
            href="#/student" 
            className="text-white/80 hover:text-white transition-colors duration-300 relative group"
            whileHover={{ y: -2 }}
          >
            Student
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a 
            href="#/tutor" 
            className="text-white/80 hover:text-white transition-colors duration-300 relative group"
            whileHover={{ y: -2 }}
          >
            Tutor
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        </motion.nav>

        {/* CTA Button */}
        <motion.button 
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          whileHover={{ 
            scale: 1.1, 
            y: -3,
            boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            delay: 0.4, 
            duration: 0.6
          }}
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          
          {/* Floating particles */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
            <span className="w-4 h-0.5 bg-white rounded-full"></span>
            <span className="w-4 h-0.5 bg-white rounded-full"></span>
            <span className="w-4 h-0.5 bg-white rounded-full"></span>
          </div>
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </motion.header>
  );
};

export default Header; 