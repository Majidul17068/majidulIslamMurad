import React from 'react';
import { MENTORSHIP } from '../constants';
import { Icons } from './ui/Icons';

export const Mentorship: React.FC = () => {
  return (
    <section id="mentorship" className="py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50/40 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Mentorship & Community</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <p className="text-sm text-slate-500 max-w-xs">
            Giving back to the AI/ML practitioner community
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Left: Photo gallery (2/5 cols) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 lg:gap-5">
            {MENTORSHIP.photos.map((src, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Gradient ring on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-cyan-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10" />

                <img
                  src={src}
                  alt={`Mentor session ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay badge */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-semibold text-slate-800 shadow-sm">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    Mentoring
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Content (3/5 cols) */}
          <div className="lg:col-span-3 space-y-6">

            {/* Role card */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <Icons.Brain className="text-primary" size={26} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{MENTORSHIP.role}</h3>
                    <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                      Active
                    </span>
                  </div>
                  <a
                    href={MENTORSHIP.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-primary transition-colors"
                  >
                    {MENTORSHIP.organization}
                    <Icons.ExternalLink size={13} />
                  </a>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {MENTORSHIP.description}
              </p>

              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Topics I Mentor On
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {MENTORSHIP.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <Icons.ChevronRight size={14} className="mt-0.5 text-primary shrink-0" />
                    <span className="leading-snug">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PMI Member card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative flex items-start gap-4">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl shrink-0">
                  <Icons.Award className="text-amber-300" size={26} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg sm:text-xl font-bold">PMI Member</h3>
                    <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-amber-300 text-slate-900">
                      2026
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mb-4">
                    Project Management Institute (PMI) — Global
                  </p>
                  <a
                    href="/pmi-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-amber-300 transition-colors"
                  >
                    <Icons.Download size={14} /> View Certificate
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
