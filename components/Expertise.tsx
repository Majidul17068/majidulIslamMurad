import React from 'react';
import { SKILLS } from '../constants';
import { Icons } from './ui/Icons';

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Expertise</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] || Icons.Terminal;

            return (
              <div key={category.title} className="group relative bg-white rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>

                {/* Main Card Content */}
                <div className="h-full p-8 bg-white rounded-2xl border-2 border-slate-200 relative z-10 transition-all duration-300 group-hover:border-primary/20">
                  {/* Icon Header */}
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-cyan-400 group-hover:text-white transition-all duration-300">
                    <IconComponent className="text-primary transition-colors duration-300" size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{category.title}</h3>

                  <ul className="space-y-3.5">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                        <Icons.CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};