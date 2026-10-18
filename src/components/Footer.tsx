import React from 'react';
import { LOGO_URL } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#ffeada] py-12 md:py-16 text-[#241a0f] border-t border-[#f4dfce]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#f4dfce]">
          {/* Col 1: Bio & Branding (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <img
                alt="MF Monogram Logo"
                className="h-7 w-auto object-contain"
                src={LOGO_URL}
              />
              <span className="text-xl font-bold text-[#241a0f]">
                Mohammad Faiyyaz
              </span>
            </div>
            <p className="text-sm text-[#47473f] max-w-sm leading-relaxed">
              Software Developer • .NET Engineer specializing in scalable enterprise architectures, clean API ecosystems, and mission-critical systems.
            </p>
            <div className="flex items-center gap-2 text-[#5b6141] text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span>Noida, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest">
              Navigation
            </span>
            <div className="flex flex-col gap-2 text-xs sm:text-[13px]">
              <a className="text-[#47473f] hover:text-[#241a0f] transition-colors" href="#hero">
                Home
              </a>
              <a className="text-[#47473f] hover:text-[#241a0f] transition-colors" href="#about">
                About Experience
              </a>
              <a className="text-[#47473f] hover:text-[#241a0f] transition-colors" href="#skills">
                Core Competencies
              </a>
              <a className="text-[#47473f] hover:text-[#241a0f] transition-colors" href="#projects">
                Enterprise Case Studies
              </a>
              <a className="text-[#47473f] hover:text-[#241a0f] transition-colors" href="#architecture">
                Architecture Blueprint
              </a>
              <a className="text-[#47473f] hover:text-[#241a0f] transition-colors" href="#contact">
                Direct Contact
              </a>
            </div>
          </div>

          {/* Col 3: Professional Channels (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest">
              Professional Channels
            </span>
            <p className="text-xs sm:text-[13px] text-[#47473f] leading-relaxed">
              Connect for enterprise consulting, high-impact .NET engineering roles, or full-stack architectural leadership.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                className="px-4 py-2 rounded-full bg-[#f9e4d4] hover:bg-[#5b6141] hover:text-white text-[#241a0f] transition-colors font-mono text-xs inline-flex items-center gap-1.5 border border-[#f4dfce]"
                href="https://www.linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">link</span>
                <span>LinkedIn</span>
              </a>
              <a
                className="px-4 py-2 rounded-full bg-[#f9e4d4] hover:bg-[#5b6141] hover:text-white text-[#241a0f] transition-colors font-mono text-xs inline-flex items-center gap-1.5 border border-[#f4dfce]"
                href="https://github.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#47473f] text-xs">
          <p>© {new Date().getFullYear()} Mohammad Faiyyaz. All rights reserved.</p>
          <p className="font-mono text-[#5b6141]">
            Enterprise .NET Core &amp; Angular Architecture
          </p>
        </div>
      </div>
    </footer>
  );
};
