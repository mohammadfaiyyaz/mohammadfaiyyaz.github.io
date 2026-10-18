import React from 'react';
import { DUBAI_SKYLINE_HERO, RESUME_DOWNLOAD_URL } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden" id="hero">
      {/* Panoramic Banner with Dubai Skyline Image & Architectural Dark-Olive Scrim */}
      <div className="relative w-full min-h-[580px] md:min-h-[660px] lg:min-h-[720px] flex items-center justify-center pt-8 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform transition-transform duration-1000 ease-out"
          style={{ backgroundImage: `url('${DUBAI_SKYLINE_HERO}')` }}
          role="img"
          aria-label="Architectural panoramic skyline view representing high-availability engineering"
        />

        {/* Architectural Tonal Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fff8f5] via-[#fff8f5]/85 to-[#292b1b]/60 backdrop-blur-[2px]" />

        {/* Geometric Accent Grid Background (Subtle lines) */}
        <div className="absolute inset-0 bg-[radial-gradient(#5b6141_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 md:px-10 lg:px-12 py-10 flex flex-col items-center text-center">
          {/* Experience Tenure Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5b6141] text-white shadow-md mb-6 max-w-full">
            <span className="material-symbols-outlined text-[16px] text-[#dde3ba] shrink-0">
              verified
            </span>
            <span className="text-[11px] font-bold tracking-wider uppercase truncate">
              4 Years 2 Months of Professional Experience • TrioTree Technology Pvt. Ltd. • Noida, India
            </span>
          </div>

          {/* Role & Title Line */}
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#5b6141]" />
            <span className="text-[11px] uppercase tracking-widest text-[#5b6141] font-bold">
              Software Developer | .NET Engineer
            </span>
            <span className="h-[1px] w-8 bg-[#5b6141]" />
          </div>

          {/* Primary Display Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#241a0f] max-w-4xl tracking-tight leading-[1.15] mb-5">
            Building Reliable Software.<br />
            <span className="text-[#5b6141] italic font-normal">Solving Real-World Problems.</span>
          </h1>

          {/* Executive Summary Bio */}
          <p className="text-base sm:text-lg text-[#47473f] max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            I'm <strong className="text-[#241a0f] font-semibold">Mohammad Faiyyaz</strong>, a Software Developer with 4 years and 2 months of professional experience at TrioTree Technology Pvt. Ltd. I build maintainable, user-focused enterprise solutions utilizing .NET technologies and modern web development architectures.
          </p>

          {/* 3 Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Primary: View Projects */}
            <a
              className="inline-flex items-center gap-2 bg-[#151608] text-white hover:bg-[#5b6141] hover:text-white text-sm sm:text-[15px] font-semibold px-7 py-3 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
              href="#projects"
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              <span>View My Projects</span>
            </a>

            {/* Direct Resume Download */}
            <a
              className="inline-flex items-center gap-2 bg-[#f9e4d4] text-[#241a0f] hover:bg-[#5b6141] hover:text-white text-sm sm:text-[15px] font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:-translate-y-0.5"
              href={RESUME_DOWNLOAD_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
              <span>Download Resume</span>
            </a>

            {/* Contact Anchor */}
            <a
              className="inline-flex items-center gap-2 bg-transparent text-[#5b6141] hover:text-[#241a0f] hover:bg-[#ffeada]/50 text-sm sm:text-[15px] font-semibold px-6 py-3 rounded-full transition-all duration-200"
              href="#contact"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Metatags Bar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-sm border border-[#f4dfce] text-center hover:border-[#c4caa2] transition-colors">
              <span className="text-2xl sm:text-3xl text-[#151608] font-bold block mb-1">4.2+</span>
              <span className="text-[11px] uppercase text-[#5b6141] tracking-wider font-bold">Years Experience</span>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-sm border border-[#f4dfce] text-center hover:border-[#c4caa2] transition-colors">
              <span className="text-2xl sm:text-3xl text-[#151608] font-bold block mb-1">Enterprise</span>
              <span className="text-[11px] uppercase text-[#5b6141] tracking-wider font-bold">Healthcare Systems</span>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-sm border border-[#f4dfce] text-center hover:border-[#c4caa2] transition-colors">
              <span className="text-2xl sm:text-3xl text-[#151608] font-bold block mb-1">.NET Core</span>
              <span className="text-[11px] uppercase text-[#5b6141] tracking-wider font-bold">C# • EF Core • APIs</span>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-sm border border-[#f4dfce] text-center hover:border-[#c4caa2] transition-colors">
              <span className="text-2xl sm:text-3xl text-[#151608] font-bold block mb-1">Full-Stack</span>
              <span className="text-[11px] uppercase text-[#5b6141] tracking-wider font-bold">Angular Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
