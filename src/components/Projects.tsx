import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectData } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [zamzamActiveTab, setZamzamActiveTab] = useState<string>('zamzam-overview');
  const [jobsActiveTab, setJobsActiveTab] = useState<string>('jobs-arch');
  const [inspectingProject, setInspectingProject] = useState<ProjectData | null>(null);

  const hisProject = PROJECTS.find((p) => p.id === 'his-platform')!;
  const zamzamProject = PROJECTS.find((p) => p.id === 'zamzam-ecommerce')!;
  const jobsProject = PROJECTS.find((p) => p.id === 'tech-portal')!;

  return (
    <section className="w-full py-16 md:py-24 bg-[#fff8f5]" id="projects">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block">
              04 // Case Studies &amp; Engineering
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#241a0f] tracking-tight mt-1">
              Featured Projects
            </h2>
          </div>
          <p className="text-[15px] text-[#47473f] max-w-sm">
            Enterprise healthcare systems, commercial commerce backends, and community talent portals.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-10">
          {/* PROJECT 1: Healthcare Management Software (HIS Platform) */}
          <article className="bg-[#fff1e7] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-[#f4dfce] flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-[#f4dfce]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-3 py-1 rounded-full bg-[#5b6141] text-white text-[11px] font-bold uppercase">
                    Enterprise Solution
                  </span>
                  <span className="font-mono text-xs text-[#5b6141] font-semibold">Professional experience</span>
                </div>
                <h3 className="text-2xl font-bold text-[#241a0f]">
                  Healthcare Management Software (HIS Platform)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setInspectingProject(hisProject)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#5b6141] hover:text-white text-[#241a0f] text-xs font-semibold border border-[#f4dfce] shadow-sm transition-all"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>Project Details</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left: Problem / Solution Description (col 7) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="bg-white p-5 rounded-xl border border-[#f4dfce]">
                  <h4 className="text-[11px] font-bold uppercase text-[#5b6141] tracking-wider mb-1">
                    The Engineering Problem
                  </h4>
                  <p className="text-[15px] text-[#47473f] leading-relaxed">
                    {hisProject.problem}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#f4dfce]">
                  <h4 className="text-[11px] font-bold uppercase text-[#5b6141] tracking-wider mb-1">
                    The Technical Solution
                  </h4>
                  <p className="text-[15px] text-[#47473f] leading-relaxed">
                    {hisProject.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {hisProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded bg-[#ffeada] text-[#241a0f] font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Architectural Breakdown / Workbench (col 5) */}
              <div className="lg:col-span-5 bg-white p-5 rounded-xl shadow-sm border border-[#f4dfce] flex flex-col gap-3">
                <span className="text-[11px] font-bold uppercase text-[#5b6141]">
                  Key Architectural Outcomes
                </span>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#241a0f]">
                  {hisProject.keyOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#5b6141] text-[16px] mt-0.5 shrink-0">
                        verified
                      </span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 p-3 bg-[#ffeada] rounded-lg text-xs font-mono text-[#47473f] border border-[#f4dfce]">
                  <span className="font-bold text-[#241a0f]">Repository Access:</span>{' '}
                  <em>{hisProject.repoNote}</em>
                </div>
              </div>
            </div>
          </article>

          {/* PROJECT 2: Zamzam Enterprises E-commerce Platform */}
          <article className="bg-[#fff1e7] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-[#f4dfce] flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-[#f4dfce]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-3 py-1 rounded-full bg-[#5b6141] text-white text-[11px] font-bold uppercase">
                    Full-Stack Application
                  </span>
                  <span className="font-mono text-xs text-[#5b6141] font-semibold">E-commerce project</span>
                </div>
                <h3 className="text-2xl font-bold text-[#241a0f]">
                  Zamzam Enterprises E-commerce Platform
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setInspectingProject(zamzamProject)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#5b6141] hover:text-white text-[#241a0f] text-xs font-semibold border border-[#f4dfce] transition-all"
                >
                  <span className="material-symbols-outlined text-[15px]">code</span>
                  <span>Project Details</span>
                </button>
              </div>
            </div>

            {/* Project Interactive Tabs */}
            <div className="w-full">
              <div className="flex items-center gap-2 border-b border-[#f4dfce] pb-3 mb-5">
                <button
                  type="button"
                  onClick={() => setZamzamActiveTab('zamzam-overview')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    zamzamActiveTab === 'zamzam-overview'
                      ? 'bg-[#5b6141] text-white shadow-sm'
                      : 'bg-[#ffeada] text-[#47473f] hover:text-[#241a0f]'
                  }`}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setZamzamActiveTab('zamzam-arch')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    zamzamActiveTab === 'zamzam-arch'
                      ? 'bg-[#5b6141] text-white shadow-sm'
                      : 'bg-[#ffeada] text-[#47473f] hover:text-[#241a0f]'
                  }`}
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setZamzamActiveTab('zamzam-stack')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    zamzamActiveTab === 'zamzam-stack'
                      ? 'bg-[#5b6141] text-white shadow-sm'
                      : 'bg-[#ffeada] text-[#47473f] hover:text-[#241a0f]'
                  }`}
                >
                  Tech Stack
                </button>
              </div>

              {/* Tab Content 1: Overview */}
              {zamzamActiveTab === 'zamzam-overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 flex flex-col gap-3">
                    <h4 className="text-lg font-bold text-[#241a0f]">
                      Scalable Product Catalog &amp; Order Pipeline
                    </h4>
                    <p className="text-[15px] text-[#47473f] leading-relaxed">
                      Engineered with ASP.NET Core MVC, Zamzam Enterprises features full inventory synchronization, category filtering, cart state management, and secure order processing. Optimized for commercial speed and structured relational checkout records.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 rounded bg-white text-[#241a0f] font-mono text-xs border border-[#f4dfce]">
                        ASP.NET Core MVC
                      </span>
                      <span className="px-3 py-1 rounded bg-white text-[#241a0f] font-mono text-xs border border-[#f4dfce]">
                        Entity Framework Core
                      </span>
                      <span className="px-3 py-1 rounded bg-white text-[#241a0f] font-mono text-xs border border-[#f4dfce]">
                        SQL Server
                      </span>
                      <span className="px-3 py-1 rounded bg-white text-[#241a0f] font-mono text-xs border border-[#f4dfce]">
                        Bootstrap 5
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-[#f4dfce]">
                    <span className="text-[11px] font-bold uppercase text-[#5b6141] block mb-3">
                      Commerce Core Modules
                    </span>
                    <div className="space-y-2 font-mono text-xs text-[#47473f]">
                      <div>• Dynamic Product Matrix &amp; SKU Filters</div>
                      <div>• Cart Session State &amp; Inventory Lock</div>
                      <div>• Transactional Checkout with SQL Server</div>
                      <div>• Administrative Inventory Management Dashboard</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content 2: Architecture */}
              {zamzamActiveTab === 'zamzam-arch' && (
                <div className="bg-white p-6 rounded-xl border border-[#f4dfce]">
                  <h4 className="text-lg font-bold text-[#241a0f] mb-2">Architectural Blueprint</h4>
                  <p className="text-[15px] text-[#47473f] mb-4 leading-relaxed">
                    Layered MVC pattern separating Presentation (Views &amp; ViewModels), Domain Business Logic (Services), and Data Access (Repository pattern over EF Core DbContext).
                  </p>
                  <div className="p-3 bg-[#f9e4d4] rounded-lg font-mono text-xs text-[#241a0f] border border-[#f4dfce]">
                    Controllers → Domain Services → EF Core Repositories → SQL Server (Relational Schemas)
                  </div>
                </div>
              )}

              {/* Tab Content 3: Tech Stack */}
              {zamzamActiveTab === 'zamzam-stack' && (
                <div className="bg-white p-6 rounded-xl border border-[#f4dfce]">
                  <h4 className="text-lg font-bold text-[#241a0f] mb-3">Stack Specification</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
                    <div className="p-3 bg-[#ffeada] rounded-lg border border-[#f4dfce]">Runtime: .NET Core 8.0</div>
                    <div className="p-3 bg-[#ffeada] rounded-lg border border-[#f4dfce]">Language: C# 12</div>
                    <div className="p-3 bg-[#ffeada] rounded-lg border border-[#f4dfce]">ORM: EF Core 8.x</div>
                    <div className="p-3 bg-[#ffeada] rounded-lg border border-[#f4dfce]">Styling: Bootstrap 5</div>
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* PROJECT 3: Tech Articles & IT Jobs Portal */}
          <article className="bg-[#fff1e7] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-[#f4dfce] flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-[#f4dfce]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-3 py-1 rounded-full bg-[#5b6141] text-white text-[11px] font-bold uppercase">
                    Community &amp; Recruitment Platform
                  </span>
                  <span className="font-mono text-xs text-[#5b6141] font-semibold">
                    In Progress
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#241a0f]">
                  Tech Articles &amp; IT Jobs Portal
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setInspectingProject(jobsProject)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#5b6141] hover:text-white text-[#241a0f] text-xs font-semibold border border-[#f4dfce] transition-all"
                >
                  <span className="material-symbols-outlined text-[15px]">code</span>
                  <span>Project Details</span>
                </button>
              </div>
            </div>

            {/* Interactive Tabs for Project 3 */}
            <div className="w-full">
              <div className="flex items-center gap-2 border-b border-[#f4dfce] pb-3 mb-5">
                <button
                  type="button"
                  onClick={() => setJobsActiveTab('jobs-arch')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    jobsActiveTab === 'jobs-arch'
                      ? 'bg-[#5b6141] text-white shadow-sm'
                      : 'bg-[#ffeada] text-[#47473f] hover:text-[#241a0f]'
                  }`}
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setJobsActiveTab('jobs-workflow')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    jobsActiveTab === 'jobs-workflow'
                      ? 'bg-[#5b6141] text-white shadow-sm'
                      : 'bg-[#ffeada] text-[#47473f] hover:text-[#241a0f]'
                  }`}
                >
                  Publishing Workflow
                </button>
                <button
                  type="button"
                  onClick={() => setJobsActiveTab('jobs-stack')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    jobsActiveTab === 'jobs-stack'
                      ? 'bg-[#5b6141] text-white shadow-sm'
                      : 'bg-[#ffeada] text-[#47473f] hover:text-[#241a0f]'
                  }`}
                >
                  Tech Specification
                </button>
              </div>

              {/* Tab 1: Jobs Arch */}
              {jobsActiveTab === 'jobs-arch' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 flex flex-col gap-3">
                    <h4 className="text-lg font-bold text-[#241a0f]">
                      Dual Engine: Knowledge Base + Career Board
                    </h4>
                    <p className="text-[15px] text-[#47473f] leading-relaxed">
                      The planned platform brings together technical articles and IT job listings, with search and filtering across topics and roles.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 rounded bg-white text-[#241a0f] font-mono text-xs border border-[#f4dfce]">
                        Angular Reactive UI
                      </span>
                      <span className="px-3 py-1 rounded bg-white text-[#241a0f] font-mono text-xs border border-[#f4dfce]">
                        ASP.NET Core REST API
                      </span>
                      <span className="px-3 py-1 rounded bg-white text-[#241a0f] font-mono text-xs border border-[#f4dfce]">
                        SQL Server Full-Text
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-[#f4dfce]">
                    <span className="text-[11px] font-bold uppercase text-[#5b6141] block mb-3">
                      Planned Features
                    </span>
                    <div className="space-y-2 font-mono text-xs text-[#47473f]">
                      <div>• Markdown Article Engine with Syntax Highlighting</div>
                      <div>• Recruiter Job Posting &amp; Applicant Pipeline</div>
                      <div>• Filter by Tech Stack (C#, Angular, Azure)</div>
                      <div>• Real-time Application Status Updates</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Jobs Workflow */}
              {jobsActiveTab === 'jobs-workflow' && (
                <div className="bg-white p-6 rounded-xl border border-[#f4dfce]">
                  <h4 className="text-lg font-bold text-[#241a0f] mb-2">Publishing &amp; Application Lifecycle</h4>
                  <p className="text-[15px] text-[#47473f] mb-3 leading-relaxed">
                    The proposed workflow covers article submission and review, publication, and job discovery for readers.
                  </p>
                </div>
              )}

              {/* Tab 3: Jobs Stack */}
              {jobsActiveTab === 'jobs-stack' && (
                <div className="bg-white p-6 rounded-xl border border-[#f4dfce]">
                  <h4 className="text-lg font-bold text-[#241a0f] mb-3">Technologies Employed</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
                    <div className="p-3 bg-[#ffeada] rounded-lg border border-[#f4dfce]">Angular 17 Standalone</div>
                    <div className="p-3 bg-[#ffeada] rounded-lg border border-[#f4dfce]">ASP.NET Core Web API</div>
                    <div className="p-3 bg-[#ffeada] rounded-lg border border-[#f4dfce]">SQL Server 2022</div>
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>

      {/* Project Inspector Modal */}
      <ProjectModal
        project={inspectingProject}
        onClose={() => setInspectingProject(null)}
      />
    </section>
  );
};
