import React, { useState } from 'react';
import {
  RESUME_DOWNLOAD_URL,
  RESUME_PREVIEW_EMBED,
  RESUME_VIEW_URL
} from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <section className="w-full py-16 md:py-24 bg-[#fff8f5]" id="resume">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block">
              06 // Official Documentation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#241a0f] tracking-tight mt-1">
              Resume Download &amp; Preview
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">

            <a
              className="inline-flex items-center gap-2 bg-[#151608] text-white hover:bg-[#5b6141] px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all shadow-sm hover:-translate-y-0.5"
              href={RESUME_DOWNLOAD_URL}
              download="Faiyyaz-Resume.pdf"
            >
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
              <span>Direct PDF Download</span>
            </a>


            <a
              className="inline-flex items-center gap-2 bg-[#f9e4d4] text-[#241a0f] hover:bg-[#5b6141] hover:text-white px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all"
              href={RESUME_VIEW_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">
                open_in_new
              </span>
              <span>View Resume</span>
            </a>

          </div>
        </div>

        {/* Resume Card Container */}
        <div className="bg-[#fff1e7] p-5 sm:p-8 rounded-2xl shadow-sm border border-[#f4dfce] flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-[#f4dfce]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#ffeada] flex items-center justify-center text-[#5b6141] shrink-0">
                <span className="material-symbols-outlined text-[20px]">description</span>
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-[#241a0f] block">
                  Mohammad Faiyyaz - Resume.pdf
                </span>
                <span className="font-mono text-xs text-[#47473f]">
                  Google Drive File ID: 1mGbstn5IvV9hf6RbYKoiUb9TBAQgzTvh
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 rounded bg-[#ffeada] text-xs font-mono text-[#5b6141] flex items-center gap-1.5 border border-[#f4dfce]">
                <span className="material-symbols-outlined text-[16px]">lock_open</span>
                <span>Permissions: Anyone with the link can view</span>
              </div>
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:inline-flex items-center gap-1 p-2 rounded bg-white hover:bg-[#f9e4d4] text-[#47473f] text-xs font-mono border border-[#f4dfce] transition-colors"
                title={isExpanded ? 'Collapse viewer' : 'Expand viewer'}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {isExpanded ? 'close_fullscreen' : 'open_in_full'}
                </span>
                <span>{isExpanded ? 'Compact' : 'Expand'}</span>
              </button>
            </div>
          </div>

          {/* Embedded PDF Preview Frame */}
          <div
            className={`w-full bg-white rounded-xl overflow-hidden shadow-inner border border-[#f4dfce] transition-all duration-300 relative ${
              isExpanded ? 'h-[850px]' : 'h-[520px] md:h-[650px]'
            }`}
          >
            <iframe
              className="w-full h-full border-0"
              loading="lazy"
              src={RESUME_PREVIEW_EMBED}
              title="Mohammad Faiyyaz Resume PDF Viewer"
              allow="autoplay"
            />
          </div>

          
          <p className="text-xs sm:text-[13px] text-[#47473f] text-center pt-1">
            Notice: If the resume preview does not load, use the{' '}
            <a
              className="text-[#5b6141] underline font-semibold hover:text-[#151608]"
              href={RESUME_VIEW_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Resume
            </a>{' '}
            or{' '}
            <a
              className="text-[#5b6141] underline font-semibold hover:text-[#151608]"
              href={RESUME_DOWNLOAD_URL}
              download="Faiyyaz-Resume.pdf"
            >
              Direct Download
            </a>{' '}
            buttons above.
          </p>

        </div>
      </div>
    </section>
  );
};
