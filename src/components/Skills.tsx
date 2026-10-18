import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() === '') {
      return true;
    }
    const q = searchQuery.toLowerCase();
    const matchesCategory = category.title.toLowerCase().includes(q) || category.description.toLowerCase().includes(q);
    const matchesSkill = category.skills.some((s) => s.toLowerCase().includes(q));
    return matchesCategory || matchesSkill;
  });

  return (
    <section className="w-full py-16 md:py-24 bg-[#fff1e7]" id="skills">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block">
              03 // Competency Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#241a0f] tracking-tight mt-1">
              Technical Skills Matrix
            </h2>
          </div>
          <p className="text-[15px] text-[#47473f] max-w-sm">
            A transparent representation of production-proven competencies without arbitrary percentage bars.
          </p>
        </div>

        {/* Interactive Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8 bg-white p-2.5 rounded-2xl border border-[#f4dfce] shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#5b6141] text-white shadow-sm'
                  : 'bg-[#ffeada] text-[#47473f] hover:text-[#241a0f]'
              }`}
            >
              All Domains
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#5b6141] text-white shadow-sm'
                    : 'bg-[#ffeada] text-[#47473f] hover:text-[#241a0f]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative sm:w-64">
            <span className="material-symbols-outlined absolute left-3 top-2 text-[#78776e] text-[18px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. C#, SQL, Angular)..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#fff8f5] text-xs font-mono text-[#241a0f] border border-[#f4dfce] focus:outline-none focus:ring-1 focus:ring-[#5b6141]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-xs text-[#78776e] hover:text-[#241a0f]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 4 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-[#f4dfce] flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffeada] flex items-center justify-center text-[#5b6141] mb-4 group-hover:bg-[#dde3ba] transition-colors">
                  <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#241a0f] mb-1">{cat.title}</h3>
                <p className="text-[13px] text-[#47473f] mb-4 leading-relaxed">{cat.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isMatched =
                      searchQuery.trim() !== '' &&
                      skill.toLowerCase().includes(searchQuery.toLowerCase());
                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                          isMatched
                            ? 'bg-[#5b6141] text-white font-bold ring-2 ring-[#dde3ba]'
                            : 'bg-[#ffeada] text-[#241a0f] hover:bg-[#f9e4d4]'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#f4dfce] flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest">
                  Production Ready
                </span>
                <span className="text-xs text-[#78776e] font-mono">
                  {cat.skills.length} skills
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
