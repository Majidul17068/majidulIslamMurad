import React from 'react';
import { RESEARCH, CERTIFICATIONS } from '../constants';
import { Icons } from './ui/Icons';

// Color variants for rainbow effect
const COLOR_VARIANTS = [
  {
    border: 'border-l-emerald-500 hover:border-emerald-300',
    badge: 'bg-emerald-100 text-emerald-700',
    iconBg: 'bg-emerald-50 group-hover:bg-emerald-100',
    iconColor: 'text-emerald-600',
    hoverText: 'group-hover:text-emerald-600'
  },
  {
    border: 'border-l-blue-500 hover:border-blue-300',
    badge: 'bg-blue-100 text-blue-700',
    iconBg: 'bg-blue-50 group-hover:bg-blue-100',
    iconColor: 'text-blue-600',
    hoverText: 'group-hover:text-blue-600'
  },
  {
    border: 'border-l-purple-500 hover:border-purple-300',
    badge: 'bg-purple-100 text-purple-700',
    iconBg: 'bg-purple-50 group-hover:bg-purple-100',
    iconColor: 'text-purple-600',
    hoverText: 'group-hover:text-purple-600'
  },
  {
    border: 'border-l-amber-500 hover:border-amber-300',
    badge: 'bg-amber-100 text-amber-700',
    iconBg: 'bg-amber-50 group-hover:bg-amber-100',
    iconColor: 'text-amber-600',
    hoverText: 'group-hover:text-amber-600'
  },
  {
    border: 'border-l-cyan-500 hover:border-cyan-300',
    badge: 'bg-cyan-100 text-cyan-700',
    iconBg: 'bg-cyan-50 group-hover:bg-cyan-100',
    iconColor: 'text-cyan-600',
    hoverText: 'group-hover:text-cyan-600'
  }
];

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 bg-gradient-to-b from-slate-50/50 to-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Research & Education */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icons.Brain className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Research & Education</h2>
            </div>

            <div className="space-y-6">
              {RESEARCH.map((item, idx) => {
                const color = COLOR_VARIANTS[idx % COLOR_VARIANTS.length];
                return (
                  <div
                    key={idx}
                    className={`group bg-white p-6 rounded-xl border-l-4 ${color.border} border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`font-bold text-slate-900 ${color.hoverText} transition-colors`}>{item.title}</h3>
                      <span className={`text-xs font-mono px-3 py-1 rounded-full ${color.badge}`}>{item.date}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-700 mb-2">{item.venue}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}

              {/* Education Card */}
              {(() => {
                const eduColor = COLOR_VARIANTS[(RESEARCH.length) % COLOR_VARIANTS.length];
                return (
                  <div className={`group bg-white p-6 rounded-xl border-l-4 ${eduColor.border} border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg transition-colors ${eduColor.iconBg}`}>
                        <Icons.Award className={eduColor.iconColor} size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className={`font-bold text-slate-900 ${eduColor.hoverText} transition-colors`}>B.Sc. in Computer Science and Engineering</h3>
                            <p className="text-sm text-slate-600 mt-1">Southeast University, Bangladesh</p>
                          </div>
                          <div className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full ${eduColor.badge}`}>
                            <span>Oct 2018 - Oct 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icons.Award className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Certifications</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => {
                const color = COLOR_VARIANTS[(idx + 2) % COLOR_VARIANTS.length]; // Offset to vary colors
                return (
                  <div
                    key={idx}
                    className={`group bg-white p-5 rounded-xl border-l-4 ${color.border} border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${color.iconBg}`}>
                        <Icons.Award size={20} className={`${color.iconColor}`} />
                      </div>
                    </div>
                    <h3 className={`font-bold text-sm text-slate-900 leading-snug mb-3 min-h-[40px] ${color.hoverText} transition-colors`}>
                      {cert.url ? (
                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1 hover:underline">
                          {cert.title}
                          <Icons.ExternalLink size={12} className="mt-1 shrink-0 opacity-60" />
                        </a>
                      ) : (
                        cert.title
                      )}
                    </h3>
                    <div className="flex justify-between items-end">
                      <span className="text-xs text-slate-500">{cert.issuer}</span>
                      <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${color.badge}`}>{cert.year}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};