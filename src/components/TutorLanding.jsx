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

                <div className="flex flex-col gap-3 items-start">
                  <button className="inline-flex items-center justify-between gap-3 rounded-md bg-[#FFD700] px-4 py-3 font-semibold text-black hover:bg-[#E6C200] transition-colors w-48">
                    <span>Become a Tutor →</span>
                  </button>
                  <button className="rounded-md border border-white/30 px-4 py-3 text-white hover:bg-white/15 transition-colors w-48 text-left">
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

      {/* Plans That Work for You Section */}
      <section className="relative w-full py-20 bg-[#011810] text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Plans That Work for You
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              No hidden fees, just clear and simple learning options.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 items-start">
            {/* Step 1: Sign Up */}
            <div className="flex flex-col items-center text-center">
              <p className="text-[#FFD700] text-7xl font-extrabold mb-4">1</p>
              <h3 className="text-3xl font-bold mb-4">Sign Up</h3>
              <p className="text-white/80 leading-relaxed">
                Join our community in minutes by creating your free tutor
                profile. Highlight your skills, set your subjects and
                availability, and let students discover you easily.
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex items-center justify-center h-full">
              <svg
                className="w-12 h-12 text-[#FFD700]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            {/* Step 2: Teach Online */}
            <div className="flex flex-col items-center text-center">
              <p className="text-[#46DC7D] text-7xl font-extrabold mb-4">2</p>
              <h3 className="text-3xl font-bold mb-4">Teach Online</h3>
              <p className="text-white/80 leading-relaxed">
                Engage students with interactive online classes, quizzes, and
                assignments. Customize your lessons, track progress, and make
                learning fun and effective from anywhere.
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex items-center justify-center h-full">
              <svg
                className="w-12 h-12 text-[#FFD700]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            {/* Step 3: Get Paid */}
            <div className="flex flex-col items-center text-center">
              <p className="text-[#46DC7D] text-7xl font-extrabold mb-4">3</p>
              <h3 className="text-3xl font-bold mb-4">Get Paid</h3>
              <p className="text-white/80 leading-relaxed">
                Earn confidently with our secure, hassle-free payout system. Get
                paid promptly for every session you conduct, with full
                transparency and easy tracking of your earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Tutors Say Section */}
      <section className="relative w-full py-20 bg-[#011810] text-white overflow-hidden">
        {/* Background Gradient Image */}
        <div className="absolute inset-0">
          <img
            src="/images/bg_gradient.png"
            alt="Background Gradient"
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              What Tutors Say
            </h2>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Testimonial Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">K</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">KaiB</p>
                  <p className="text-gray-500 text-sm">· 22 Jul</p>
                </div>
                <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                  You
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                KaiB was phenomenal with our dog, Max! We were first-time users
                of a pet-sitting service and were quite nervous. Kai's
                professionalism and warmth immediately put us at ease. She
                visited twice a day for...
              </p>
              <a
                href="#"
                className="text-green-600 text-sm font-medium hover:text-green-700"
              >
                Read More
              </a>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">K</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">KaiB</p>
                  <p className="text-gray-500 text-sm">· 22 Jul</p>
                </div>
                <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                  You
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                KaiB was phenomenal with our dog, Max! We were first-time users
                of a pet-sitting service and were quite nervous. Kai's
                professionalism and warmth immediately put us at ease. She
                visited twice a day for...
              </p>
              <a
                href="#"
                className="text-green-600 text-sm font-medium hover:text-green-700"
              >
                Read More
              </a>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">K</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">KaiB</p>
                  <p className="text-gray-500 text-sm">· 22 Jul</p>
                </div>
                <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                  You
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                KaiB was phenomenal with our dog, Max! We were first-time users
                of a pet-sitting service and were quite nervous. Kai's
                professionalism and warmth immediately put us at ease. She
                visited twice a day for...
              </p>
              <a
                href="#"
                className="text-green-600 text-sm font-medium hover:text-green-700"
              >
                Read More
              </a>
            </div>

            {/* Testimonial Card 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">K</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">KaiB</p>
                  <p className="text-gray-500 text-sm">· 22 Jul</p>
                </div>
                <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                  You
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                KaiB was phenomenal with our dog, Max! We were first-time users
                of a pet-sitting service and were quite nervous. Kai's
                professionalism and warmth immediately put us at ease. She
                visited twice a day for...
              </p>
              <a
                href="#"
                className="text-green-600 text-sm font-medium hover:text-green-700"
              >
                Read More
              </a>
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
