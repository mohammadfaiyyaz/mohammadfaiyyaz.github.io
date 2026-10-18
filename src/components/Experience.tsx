import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#fff8f5]" id="experience">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block">
              02 // Industry Track Record
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#241a0f] tracking-tight mt-1">
              Professional Experience
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffeada] font-mono text-xs text-[#241a0f] border border-[#f4dfce]">
            <span className="material-symbols-outlined text-[16px] text-[#5b6141]">verified_user</span>
            <span>Verified Employment Records</span>
          </div>
        </div>

        {/* Timeline Main Card */}
        <div className="relative bg-[#fff1e7] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-[#f4dfce]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Company & Meta Column (col 4) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#5b6141]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5b6141]">
                  Primary Tenure
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#241a0f]">
                TrioTree Technology Pvt. Ltd.
              </h3>

              <div className="flex flex-col gap-2 text-[#47473f] text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#5b6141] shrink-0">location_on</span>
                  <span>Noida, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#5b6141] shrink-0">schedule</span>
                  <span className="font-semibold text-[#241a0f]">4 Years and 2 Months</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#5b6141] shrink-0">date_range</span>
                  <span className="font-mono text-xs text-[#5b6141]">
                    [Verified Employment: Continuous Tenure]
                  </span>
                </div>
              </div>

              <div className="mt-2 p-4 rounded-xl bg-[#ffeada] border border-[#f4dfce]">
                <span className="text-[11px] font-bold uppercase text-[#5b6141] block mb-1">
                  Position Held
                </span>
                <span className="text-lg font-bold text-[#241a0f] block">
                  Software Developer
                </span>
                <span className="text-xs text-[#47473f]">
                  Core Engineering &amp; Healthcare Systems Division
                </span>
              </div>

              <div className="pt-1">
                <span className="font-mono text-xs uppercase text-[#47473f] block mb-2">
                  Internal References:
                </span>
                <span className="inline-block px-3 py-1 bg-[#f9e4d4] text-[#241a0f] rounded font-mono text-xs border border-[#f4dfce]">
                  Enterprise Healthcare &amp; Clinical Systems
                </span>
              </div>
            </div>

            {/* Responsibilities & Verified Deliverables (col 8) */}
            <div className="lg:col-span-8 flex flex-col gap-5">
              <div className="bg-white p-6 sm:p-7 rounded-xl shadow-sm border border-[#f4dfce]">
                <h4 className="text-lg sm:text-xl text-[#241a0f] font-semibold mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#5b6141]">clinical_notes</span>
                  Enterprise Hospital Information Systems (HIS Platform)
                </h4>
                <p className="text-[15px] text-[#47473f] leading-relaxed mb-5">
                  Architected and maintained high-concurrency backend services orchestrating core clinical, administrative, and diagnostic workflows. Delivered zero-data-loss solutions adhering strictly to patient data protection guidelines and confidentiality standards.
                </p>

                {/* Accomplishment Checklist */}
                <div className="space-y-3.5 text-sm sm:text-[15px] text-[#241a0f]">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#5b6141] mt-0.5 text-[18px] shrink-0">check_circle</span>
                    <span>
                      <strong className="text-[#241a0f]">Healthcare Workflows &amp; Modules:</strong> Built and refined multi-departmental workflows (OPD, IPD, lab investigations, doctor consultations, and medical billing pipelines) reducing manual operational bottlenecks.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#5b6141] mt-0.5 text-[18px] shrink-0">check_circle</span>
                    <span>
                      <strong className="text-[#241a0f]">RESTful API Architecture:</strong> Engineered secure, performant ASP.NET Core Web API endpoints facilitating bi-directional data flow between relational stores and client frontend systems.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#5b6141] mt-0.5 text-[18px] shrink-0">check_circle</span>
                    <span>
                      <strong className="text-[#241a0f]">EF Core Query Optimization:</strong> Mitigated N+1 query execution bottlenecks, restructured Linq projections, and integrated optimized database stored procedures, drastically reducing latency on high-volume reports.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#5b6141] mt-0.5 text-[18px] shrink-0">check_circle</span>
                    <span>
                      <strong className="text-[#241a0f]">Frontend Cross-Collaboration:</strong> Integrated Angular components with backend contracts, guaranteeing deterministic response models, strict schema validation, and cohesive error presentation.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#5b6141] mt-0.5 text-[18px] shrink-0">check_circle</span>
                    <span>
                      <strong className="text-[#241a0f]">Code Review &amp; Quality Discipline:</strong> Conducted routine peer reviews, unit testing strategies, and Git feature-branch workflows to maintain enterprise code maintainability.
                    </span>
                  </div>
                </div>
              </div>

              {/* Confidentiality Safe Disclosure Notice */}
              <div className="p-4 rounded-xl bg-[#ffeada] border border-[#f4dfce] flex items-center gap-3 text-[#47473f] text-xs sm:text-[13px]">
                <span className="material-symbols-outlined text-[#5b6141] text-[22px] shrink-0">policy</span>
                <span>
                  <strong className="text-[#241a0f]">Confidentiality Assurance:</strong> Specific client identities, hospital identifiers, and proprietary clinical database schemas are safeguarded pursuant to non-disclosure agreements.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
