import React, { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#241a0f] flex flex-col font-sans selection:bg-[#5b6141] selection:text-white">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <ResumeSection />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#151608] hover:bg-[#5b6141] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:translate-y-0 border border-[#c4caa2]"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
        </button>
      )}
    </div>
  );
}
