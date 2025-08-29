import React from "react";
import tutorImage from "/images/tutor-3d-image.png";

const TutorLanding = () => {
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
}`}</style>
      <section className="relative w-full min-h-screen overflow-hidden text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-[#011810]" />
        <div className="absolute inset-0 bg-[radial-gradient(110%_90%_at_85%_0%,#1C3D27_0%,#12321F_35%,#0B2417_70%,#08180F_100%)] opacity-95" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 pb-28">
          {/* Header Text */}
          <p className="text-center text-[#FFD700] tracking-[0.12em] mb-3 text-[16px] md:text-[18px] font-light">
            Share knowledge. Make impact. Get rewarded.
          </p>

          {/* Main Title */}
          <h1 className="text-center text-[48px] md:text-[68px] lg:text-[80px] font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#F5E04A] via-[#46DC7D] to-[#46DC7D] bg-clip-text text-transparent">
              Teach. Inspire. Earn
            </span>
          </h1>

          {/* Main content layout */}
          <div className="max-w-6xl mx-auto px-6 lg:-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_auto_1fr] items-center gap-10 lg:gap-16">
              {/* Left Content Box - Call to Action */}
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl p-6 md:p-7 max-w-sm mx-auto lg:mx-0 lg:mr-[-100000px] lg:mt-56 z-20 lg:ml-[50px]">
                <p className="text-white/90 leading-relaxed text-left mb-6">
                  Empower students with your knowledge while building your
                  tutoring career online.
                </p>

                <div className="flex flex-col gap-3">
                  <button className="inline-flex items-center justify-between gap-3 rounded-md bg-[#FFD700] px-6 py-3 font-semibold text-black hover:bg-[#E6C200] transition-colors">
                    <span>Become a Tutor →</span>
                  </button>
                  <button className="rounded-md border border-white/30 px-6 py-3 text-white hover:bg-white/15 transition-colors backdrop-blur-sm">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Central 3D Tutor Illustration */}
              <div className="flex justify-center lg:ml-[-50px] z-10">
                <img
                  src={tutorImage}
                  alt="3D Tutor Character"
                  className="w-[400px] md:w-[500px] lg:w-[600px] object-contain drop-shadow-lg animate-float"
                  style={{
                    animation: "float 6s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Right Content Box - Statistics */}
              <div className="max-w-md mx-auto lg:mx-0 lg:ml-[-100px] z-20">
                <div className="grid grid-cols-2 gap-12">
                  {/* First Row - 2 statistics */}
                  <div className="text-center lg:text-left">
                    <p className="text-[#FFD700] text-3xl font-bold mb-2">
                      5,000+
                    </p>
                    <p className="text-white/80 text-base">Number of reviews</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-[#FFD700] text-3xl font-bold mb-2">
                      1M+
                    </p>
                    <p className="text-white/80 text-base">
                      Student booking trend
                    </p>
                  </div>
                  {/* Second Row - 1 statistic (spans 2 columns) */}
                  <div className="text-center lg:text-left col-span-2">
                    <p className="text-[#FFD700] text-3xl font-bold mb-2">
                      100+
                    </p>
                    <p className="text-white/80 text-base">
                      Number of sessions booked
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Provided Points Expanded Section */}
      <section className="relative w-full py-20 bg-[#011810] text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Your Provided Points Expanded
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Powerful Tools for Tutors
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Row 1 (3 cards) */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <img
                  src="/images/Quizzes.png"
                  alt="Create & Check Quizzes"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Create & Check Quizzes
              </h3>
              <p className="text-white/80 leading-relaxed text-center mt-5">
                Manage and grade quizzes with ease. Save time with automated
                results and provide detailed feedback instantly.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <img
                  src="/images/Video.png"
                  alt="Host Online Classes"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Host Online Classes
              </h3>
              <p className="text-white/80 leading-relaxed text-center mt-5">
                Use interactive whiteboard and screen-sharing tools to make
                classes engaging and effective.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <img
                  src="/images/Progress.png"
                  alt="Progress Tracking"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Progress Tracking
              </h3>
              <p className="text-white/80 leading-relaxed text-center mt-5">
                See your improvement over time with analytics.
              </p>
            </div>
          </div>

          {/* Row 2 (centered 2 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <img
                  src="/images/247access.png"
                  alt="Earn by Teaching"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Earn by Teaching
              </h3>
              <p className="text-white/80 leading-relaxed text-center mt-5">
                Enjoy flexible tutoring options with competitive payouts, on
                your schedule.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <img
                  src="/images/Community.png"
                  alt="Messaging & Chat Support"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Messaging & Chat Support
              </h3>
              <p className="text-white/80 leading-relaxed text-center mt-5">
                Stay connected with students through built-in chat for guidance
                and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutor Plans Section */}
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
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 mt-4 md:mt-8">
              Tutor Opportunities
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto px-4">
              Choose the tutoring plan that fits your expertise and
              availability.
            </p>
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Part-Time Plan Card */}
            <div className="bg-[#002317] rounded-xl border border-white/20 p-6 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Part-Time</h3>
              <p className="text-[#00FF11] text-sm mb-4">
                Perfect for getting started
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$25</span>
                <span className="text-white/70 text-lg">/hour</span>
              </div>
              <p className="text-[#00FF11] text-sm mb-6">Flexible hours</p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">
                    Up to 10 hours/week
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">Basic resources</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">Community support</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">Student matching</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-3">✗</span>
                  <span className="text-white/60 text-sm">
                    Priority scheduling
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-3">✗</span>
                  <span className="text-white/60 text-sm">
                    Advanced analytics
                  </span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-semibold py-3 px-4 rounded-lg hover:from-[#16A34A] hover:to-[#22C55E] transition-all duration-300 mb-3">
                Start Part-Time
              </button>
              <p className="text-center text-white/50 text-xs">
                Flexible commitment
              </p>
            </div>

            {/* Full-Time Plan Card */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/20 p-6 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Full-Time</h3>
              <p className="text-[#00FF11] text-sm mb-4">
                Professional tutoring career
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$35</span>
                <span className="text-white/70 text-lg">/hour</span>
              </div>
              <p className="text-[#00FF11] text-sm mb-6">Guaranteed hours</p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">20+ hours/week</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">Premium resources</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">Priority support</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">Advanced tools</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">
                    Priority scheduling
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">
                    Performance bonuses
                  </span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-semibold py-3 px-4 rounded-lg hover:from-[#16A34A] hover:to-[#22C55E] transition-all duration-300 mb-3">
                Go Full-Time
              </button>
              <p className="text-center text-white/50 text-xs">
                Professional path
              </p>
            </div>

            {/* Expert Plan Card */}
            <div className="bg-[#002317] rounded-xl border border-white/20 p-6 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Expert</h3>
              <p className="text-[#00FF11] text-sm mb-4">Master tutor level</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$50</span>
                <span className="text-white/70 text-lg">/hour</span>
              </div>
              <p className="text-[#00FF11] text-sm mb-6">Premium rates</p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">Unlimited hours</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">All resources</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">VIP support</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">Custom tools</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">
                    Priority scheduling
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#00FF11] mr-3">✓</span>
                  <span className="text-white text-sm">
                    Leadership opportunities
                  </span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-semibold py-3 px-4 rounded-lg hover:from-[#16A34A] hover:to-[#22C55E] transition-all duration-300 mb-3">
                Become Expert
              </button>
              <p className="text-center text-white/50 text-xs">Elite status</p>
            </div>
          </div>
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
              Empowering tutors <br /> to inspire students
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
              Tutoring
            </a>
            <a
              href="#"
              className="block text-white/90 text-base md:text-lg hover:text-yellow-400"
            >
              Resources
            </a>
            <a
              href="#"
              className="block text-white/90 text-lg md:text-xl hover:text-yellow-400"
            >
              Support
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
              tutors@mathmentor.com
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
};

export default TutorLanding;
