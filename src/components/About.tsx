import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#fff1e7]" id="about">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block">
              01 // About
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#241a0f] tracking-tight mt-1">
              About Me
            </h2>
          </div>
          <p className="text-[15px] text-[#47473f] max-w-md">
            Software Developer with experience building healthcare applications and web APIs.
          </p>
        </div>

        {/* Grid: 7 / 5 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Technical Narrative & Ethos (col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#f4dfce]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#241a0f] mb-3">
                A little about my work
              </h3>
              <p className="text-base text-[#47473f] mb-4 leading-relaxed">
                I have worked at TrioTree Technology Pvt. Ltd. on hospital management software, using C#, ASP.NET Core, Entity Framework Core, and SQL Server.
              </p>
              <p className="text-[15px] text-[#47473f] leading-relaxed mb-6">
                I also work with Angular and TypeScript to connect frontend applications with backend services.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#f4dfce]">
                <span className="px-3 py-1 bg-[#ffeada] text-[#241a0f] font-mono text-xs rounded-md">
                  ASP.NET Core Web API
                </span>
                <span className="px-3 py-1 bg-[#ffeada] text-[#241a0f] font-mono text-xs rounded-md">
                  C# Clean Architecture
                </span>
                <span className="px-3 py-1 bg-[#ffeada] text-[#241a0f] font-mono text-xs rounded-md">
                  Entity Framework Core
                </span>
                <span className="px-3 py-1 bg-[#ffeada] text-[#241a0f] font-mono text-xs rounded-md">
                  SQL Server Performance
                </span>
                <span className="px-3 py-1 bg-[#ffeada] text-[#241a0f] font-mono text-xs rounded-md">
                  Angular Integration
                </span>
              </div>
            </div>

            {/* Working principles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#ffeada] p-5 rounded-xl border border-[#f4dfce]">
                <div className="w-10 h-10 rounded-full bg-[#dde3ba] flex items-center justify-center text-[#606645] mb-3">
                  <span className="material-symbols-outlined text-[20px]">architecture</span>
                </div>
                <h4 className="text-base font-bold text-[#241a0f] mb-1">Maintainable Code</h4>
                <p className="text-[13px] text-[#47473f] leading-relaxed">
                  I aim to keep code organized and easy to maintain.
                </p>
              </div>

              <div className="bg-[#ffeada] p-5 rounded-xl border border-[#f4dfce]">
                <div className="w-10 h-10 rounded-full bg-[#dde3ba] flex items-center justify-center text-[#606645] mb-3">
                  <span className="material-symbols-outlined text-[20px]">sync_saved_locally</span>
                </div>
                <h4 className="text-base font-bold text-[#241a0f] mb-1">Resilient APIs</h4>
                <p className="text-[13px] text-[#47473f] leading-relaxed">
                  I build APIs with clear responses and validation.
                </p>
              </div>

              <div className="bg-[#ffeada] p-5 rounded-xl border border-[#f4dfce]">
                <div className="w-10 h-10 rounded-full bg-[#dde3ba] flex items-center justify-center text-[#606645] mb-3">
                  <span className="material-symbols-outlined text-[20px]">security</span>
                </div>
                <h4 className="text-base font-bold text-[#241a0f] mb-1">Data Governance</h4>
                <p className="text-[13px] text-[#47473f] leading-relaxed">
                  I handle healthcare data carefully and follow project privacy requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Career goals and technology stack (col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Career goals */}
            <div className="bg-[#151608] text-white p-7 sm:p-8 rounded-2xl shadow-md relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#5b6141]/30 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 text-[#e0e6bd] mb-3">
                <span className="material-symbols-outlined text-[20px]">flag</span>
                <span className="text-[11px] font-bold uppercase tracking-wider">What I’m looking for</span>
              </div>
              <blockquote className="text-lg sm:text-xl font-normal text-white italic leading-relaxed mb-6">
                “A software development role where I can contribute to useful products and continue growing as an engineer.”
              </blockquote>
              <div className="flex items-center gap-2 pt-2 text-[#91927d] font-mono text-xs border-t border-[#292b1b]">
                <span className="w-2 h-2 rounded-full bg-[#dde3ba] animate-pulse shrink-0" />
                <span>Open to .NET and full-stack opportunities</span>
              </div>
            </div>

            {/* Quick Architecture Metric Card */}
            <div className="bg-[#f9e4d4] p-6 rounded-2xl shadow-sm border border-[#f4dfce] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase text-[#5b6141]">
                  Technologies I work with
                </span>
                <span className="font-mono text-xs text-[#47473f]">Three-tier architecture</span>
              </div>

              {/* Architectural diagram snippet */}
              <div className="bg-white p-4 rounded-xl border border-[#f4dfce] flex items-center justify-between text-center gap-2">
                <div className="flex-1">
                  <span className="font-mono text-[10px] sm:text-[11px] block text-[#5b6141] font-semibold">
                    SPA LAYER
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#241a0f]">Angular</span>
                </div>
                <span className="material-symbols-outlined text-[#5b6141] text-[18px]">arrow_forward</span>
                <div className="flex-1">
                  <span className="font-mono text-[10px] sm:text-[11px] block text-[#5b6141] font-semibold">
                    SERVICE LAYER
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#241a0f]">.NET Core</span>
                </div>
                <span className="material-symbols-outlined text-[#5b6141] text-[18px]">arrow_forward</span>
                <div className="flex-1">
                  <span className="font-mono text-[10px] sm:text-[11px] block text-[#5b6141] font-semibold">
                    PERSISTENCE
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#241a0f]">SQL Server</span>
                </div>
              </div>

              <p className="text-[13px] text-[#47473f] leading-relaxed">
                Angular frontend, .NET services, and SQL Server data storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
