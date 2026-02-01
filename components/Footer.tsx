import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Icons } from './ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s build intelligent systems together</h2>
          <p className="text-slate-400 max-w-xl mb-12">
            Open for opportunities in AI Engineering, MLOps, and Large Language Model optimization.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
              <div className="p-3 rounded-full bg-slate-800 group-hover:bg-primary transition-colors">
                <Icons.Mail size={20} />
              </div>
              <span className="hidden md:block">{SOCIAL_LINKS.email}</span>
            </a>

            <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
              <div className="p-3 rounded-full bg-slate-800 group-hover:bg-primary transition-colors">
                <Icons.Phone size={20} />
              </div>
              <span className="hidden md:block">{SOCIAL_LINKS.phone}</span>
            </a>

            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
              <div className="p-3 rounded-full bg-slate-800 group-hover:bg-primary transition-colors">
                <Icons.Linkedin size={20} />
              </div>
              <span className="hidden md:block">LinkedIn</span>
            </a>

            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
              <div className="p-3 rounded-full bg-slate-800 group-hover:bg-primary transition-colors">
                <Icons.Github size={20} />
              </div>
              <span className="hidden md:block">GitHub</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Majid Logo" className="h-5 w-auto grayscale opacity-40" />
            <span className="text-slate-500 text-sm">© {new Date().getFullYear()} Md. Majidul Islam</span>
          </div>
          <div className="text-xs text-slate-600 font-mono">
            Designed for Performance
          </div>
        </div>
      </div>
    </footer>
  );
};