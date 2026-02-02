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
              <div key={category.title} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <IconComponent className="text-slate-700 group-hover:text-primary transition-colors" size={24} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>

                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};