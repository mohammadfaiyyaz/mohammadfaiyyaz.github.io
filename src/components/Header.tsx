import React, { useState, useEffect } from 'react';
import { LOGO_URL, RESUME_DOWNLOAD_URL } from '../data/portfolioData';

interface HeaderProps {
  onOpenTestRunner?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTestRunner }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'resume', 'contact', 'architecture'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
    { id: 'architecture', label: 'Architecture & Testing' }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fff8f5]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(41,43,27,0.08)]'
          : 'bg-[#fff8f5]/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(41,43,27,0.05)]'
      }`}
    >
      <div className="h-20 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <a href="#hero" className="flex items-center gap-2.5 group cursor-pointer focus:outline-none">
          <img
            alt="MF Monogram Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src={LOGO_URL}
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-[#241a0f] leading-none group-hover:text-[#5b6141] transition-colors">
              Mohammad Faiyyaz
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[#5b6141] font-bold leading-tight mt-1">
              .NET Engineer • Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-1 bg-[#f9e4d4]/80 p-1.5 rounded-full border border-[#f4dfce]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3.5 py-1.5 transition-all text-[13px] rounded-full whitespace-nowrap ${
                  isActive
                    ? 'bg-[#5b6141] text-white font-medium shadow-sm'
                    : 'text-[#47473f] hover:text-[#241a0f] hover:bg-[#fff1e7]/80'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions Bar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick API Playground Trigger */}
          <a
            href="#architecture"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#5b6141] hover:text-[#241a0f] px-3 py-1.5 rounded-full border border-[#c4caa2] hover:bg-[#dde3ba]/40 transition-colors"
            title="Inspect ASP.NET Core & Angular Blueprints"
          >
            <span className="material-symbols-outlined text-[15px]">code</span>
            <span>API Workbench</span>
          </a>

          {/* Download Resume Button */}
          <a
            className="inline-flex items-center gap-2 bg-[#151608] text-white hover:bg-[#5b6141] text-xs sm:text-[13px] font-medium px-4 sm:px-5 py-2 rounded-full transition-all duration-200 shadow-[0_2px_8px_rgba(21,22,8,0.12)] hover:-translate-y-0.5 active:translate-y-0"
            href={RESUME_DOWNLOAD_URL}
            rel="noopener noreferrer"
            target="_blank"
            download
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span className="hidden xs:inline sm:inline">Download Resume</span>
            <span className="xs:hidden sm:hidden">Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-full bg-[#f4dfce] hover:bg-[#ffeada] text-[#241a0f] flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Toggle mobile navigation"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#f4dfce] bg-[#fff8f5] px-5 py-4 shadow-xl">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-[#5b6141] text-white font-medium'
                      : 'text-[#47473f] hover:bg-[#fff1e7]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="material-symbols-outlined text-[16px]">chevron_right</span>}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#f4dfce] flex items-center justify-between">
              <span className="text-xs text-[#5b6141] font-mono">Noida, India • 4.2+ Yrs Exp</span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-[#151608] font-bold underline"
              >
                Get in touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
