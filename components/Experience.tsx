import React from 'react';
import { EXPERIENCE } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-900 mb-16">Professional Experience</h2>
        </ScrollReveal>

        <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-16">
          {EXPERIENCE.map((job, idx) => (
            <ScrollReveal key={job.id} delay={idx * 100}>
            <div className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-sm" />
              
              <div className="grid md:grid-cols-[250px_1fr] gap-4 md:gap-12">
                <div className="md:text-right">
                  <h3 className="font-bold text-lg text-slate-900">{job.company}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{job.role}</p>
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-wide">{job.period}</p>
                  <p className="text-xs text-slate-400 mt-1">{job.location}</p>
                </div>
                
                <div>
                  <ul className="space-y-3">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="text-slate-600 text-sm leading-relaxed flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 bg-slate-300 rounded-full shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};