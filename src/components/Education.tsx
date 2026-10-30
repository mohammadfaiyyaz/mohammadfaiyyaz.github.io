import React from 'react';

export const Education: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#fff1e7]" id="education">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block">
              05 // Academic Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#241a0f] tracking-tight mt-1">
              Education &amp; Credentials
            </h2>
          </div>
          <p className="text-[15px] text-[#47473f] max-w-sm">
            Academic background and areas of professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Degree Card */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm border border-[#f4dfce] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#dde3ba] flex items-center justify-center text-[#606645] mb-5">
                <span className="material-symbols-outlined text-[20px]">school</span>
              </div>
              <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block mb-1">
                Academic Degree
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#241a0f] mb-2">
                Bachelor of Computer Application (BCA) in Computer Science
              </h3>
              <p className="text-base text-[#47473f] mb-3">
                Makhanlal Chaturvedi National University of Journalism and Communication
              </p>
              <div className="flex items-center gap-2 text-[#47473f] font-mono text-xs">
                <span className="material-symbols-outlined text-[16px] text-[#5b6141]">calendar_month</span>
                <span>Computer Applications</span>
              </div>
            </div>

            <div>
              {/* <div className="w-10 h-10 rounded-full bg-[#dde3ba] flex items-center justify-center text-[#606645] mb-5">
                <span className="material-symbols-outlined text-[20px]">school</span>
              </div> */}
              <br></br>
              <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block mb-1">
                Academic Degree
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#241a0f] mb-2">
                Master of Computer Application (MCA) in Computer Science
              </h3>
              <p className="text-base text-[#47473f] mb-3">
                Integral University, Lucknow
              </p>
              <div className="flex items-center gap-2 text-[#47473f] font-mono text-xs">
                <span className="material-symbols-outlined text-[16px] text-[#5b6141]">calendar_month</span>
                <span>Computer Applications</span>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#f4dfce]">
              <span className="font-mono text-xs text-[#5b6141] font-semibold">
                Formal Software Engineering &amp; Computer Science Curriculum
              </span>
            </div>
          </div>

          {/* Technical focus */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm border border-[#f4dfce] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#dde3ba] flex items-center justify-center text-[#606645] mb-5">
                <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
              </div>
              <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block mb-1">
                Technical Focus
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#241a0f] mb-2">
                Areas of Professional Development
              </h3>
              <p className="text-[15px] text-[#47473f] mb-5 leading-relaxed">
                Ongoing learning across .NET development, web APIs, Angular, and SQL Server.
              </p>
              <div className="space-y-2.5 font-mono text-xs sm:text-[13px] text-[#241a0f]">
                <span>ASP.NET Core and REST APIs</span>
                <span>SQL Server and Entity Framework Core</span>
                <span>Angular and TypeScript</span>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#f4dfce]">
              <span className="font-mono text-xs text-[#5b6141] font-semibold">
                Current areas of focus
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
