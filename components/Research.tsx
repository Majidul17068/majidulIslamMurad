import React from 'react';
import { RESEARCH, CERTIFICATIONS } from '../constants';
import { Icons } from './ui/Icons';

// Border color variants for certification cards
const CERT_COLORS = [
  'border-l-4 border-l-blue-500 hover:border-blue-300',
  'border-l-4 border-l-purple-500 hover:border-purple-300',
  'border-l-4 border-l-teal-500 hover:border-teal-300',
  'border-l-4 border-l-amber-500 hover:border-amber-300',
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
              {RESEARCH.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-xl border-l-4 border-l-emerald-500 border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                    <span className="text-xs font-mono bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">{item.date}</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">{item.venue}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}

              {/* Education Card */}
              <div className="group bg-white p-6 rounded-xl border-l-4 border-l-blue-500 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Icons.Award className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">B.Sc. in Computer Science and Engineering</h3>
                    <p className="text-sm text-slate-600 mt-1">Southeast University, Bangladesh</p>
                    <div className="mt-2 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      <span>Oct 2018 - Oct 2022</span>
                    </div>
                  </div>
                </div>
              </div>
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
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className={`group bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${CERT_COLORS[idx % CERT_COLORS.length]}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/20 transition-colors">
                      <Icons.Award size={20} className="text-slate-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 leading-snug mb-3 min-h-[40px] group-hover:text-primary transition-colors">{cert.title}</h3>
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-slate-500">{cert.issuer}</span>
                    <span className="text-xs font-mono font-bold bg-primary/10 text-primary px-2 py-1 rounded">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};