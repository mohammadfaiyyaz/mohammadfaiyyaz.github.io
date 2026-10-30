import React from 'react';
import { ProjectData } from '../types';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#fff8f5] rounded-2xl shadow-2xl border border-[#f4dfce] p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#ffeada] text-[#241a0f] hover:bg-[#5b6141] hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close project modal"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#5b6141] text-white text-[11px] font-bold uppercase tracking-wider">
              {project.tag}
            </span>
            <span className="font-mono text-xs text-[#5b6141] font-semibold">
              {project.statusBadge}
            </span>
          </div>
          <h3 id="project-modal-title" className="text-2xl font-bold text-[#241a0f]">
            {project.title}
          </h3>
          <p className="text-sm text-[#47473f] mt-1">{project.shortDesc}</p>
        </div>

        {/* Core Modules Breakdown */}
        <div className="mb-6 bg-white p-5 rounded-xl border border-[#f4dfce]">
          <h4 className="text-xs font-bold uppercase text-[#5b6141] tracking-wider mb-3">
            {project.statusBadge === 'In progress' ? 'Planned Features' : 'Project Features'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#241a0f]">
            {project.modules.map((mod, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#5b6141] text-[16px] mt-0.5 shrink-0">
                  {project.statusBadge === 'In progress' ? 'lightbulb' : 'check_box'}
                </span>
                <span>{mod}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Topology */}
        <div className="mb-6 bg-[#ffeada] p-5 rounded-xl border border-[#f4dfce]">
          <h4 className="text-xs font-bold uppercase text-[#5b6141] tracking-wider mb-2">
            {project.statusBadge === 'In progress' ? 'Planned Technology Stack' : 'Technology Stack'}
          </h4>
          <p className="text-sm text-[#241a0f] font-mono leading-relaxed bg-white/70 p-3 rounded-lg border border-[#f4dfce]">
            {project.architectureSummary}
          </p>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#f4dfce]">
          <span className="text-xs text-[#78776e] font-mono">
            {project.repoNote || 'Project overview'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#5b6141] hover:bg-[#151608] text-white text-xs font-semibold rounded-full transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
