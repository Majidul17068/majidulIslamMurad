import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Icons } from './ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-slate-900 pt-24 pb-8 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Main Contact Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12 mb-12 md:mb-20 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Heading & Context */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">Amazing</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                I love to contribute to the AI community, research, and high-performance edge computing.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available
              </div>
            </div>

            {/* Right: Interactive Action Grid */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* Email Card */}
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="group relative flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icons.Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono mb-0.5">Email Me</div>
                  <div className="text-sm text-white font-medium break-all">{SOCIAL_LINKS.email}</div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Icons.Linkedin size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono mb-0.5">Connect</div>
                  <div className="text-sm text-white font-medium">LinkedIn Profile</div>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-lg bg-slate-700/50 text-slate-300 group-hover:scale-110 transition-transform duration-300">
                  <Icons.Github size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono mb-0.5">Explore Code</div>
                  <div className="text-sm text-white font-medium">GitHub Profile</div>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-lg bg-blue-600/10 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  <Icons.Facebook size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono mb-0.5">Social</div>
                  <div className="text-sm text-white font-medium">Facebook</div>
                </div>
              </a>

              {/* Phone Card - Spanning Full Width on Mobile */}
              <a
                href={`tel:${SOCIAL_LINKS.phone}`}
                className="group relative flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-2"
              >
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <Icons.Phone size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono mb-0.5">Call / WhatsApp</div>
                  <div className="text-sm text-white font-medium">{SOCIAL_LINKS.phone}</div>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-bold text-lg">M</div>
            <span className="text-slate-400 text-sm">© {new Date().getFullYear()} Md. Majidul Islam. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};