import React from 'react';
import { Icons } from './ui/Icons';
import { CodePanel } from './ui/CodePanel';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column: Content */}
          <div className="order-2 lg:order-1 space-y-6 animate-fade-in-up text-center lg:text-left">
            <div className="space-y-4">
              {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                AVAILABLE FOR OPPORTUNITIES
              </div> */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-slate-900 block mb-2">Hi, I'm Majid</span>
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent block">AI/ML Engineer</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                I have hands on experience building scalable AI solutions, production pipelines and real-world Agentic AI solutions. I’m passionate about converting research into reliable products that users love.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                View Projects <Icons.ChevronRight size={16} />
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                <Icons.Download size={16} /> Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image + Code Panel */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-12 md:mb-0">
            <div className="relative pt-0 md:pt-20 lg:pt-24">
              {/* Code Panel - positioned behind */}
              <div className="block transform scale-90 sm:scale-100 origin-center transition-transform duration-500">
                <CodePanel />
              </div>

              {/* Profile Photo - positioned to upper-left corner of code panel */}
              {/* FIXED: Removed negative margins on mobile to prevent overflow. Only apply offset on md+ screens. */}
              <div className="hidden md:block md:absolute md:top-0 md:left-0 lg:-left-20 z-20">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
                  {/* Multi-layer ambient glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/40 via-orange-500/30 to-amber-500/40 rounded-full blur-2xl scale-110 animate-pulse-slow" />
                  <div className="absolute inset-2 bg-gradient-to-tr from-rose-600/30 to-orange-500/20 rounded-full blur-xl" />

                  {/* Photo container with premium border */}
                  <div className="relative w-full h-full rounded-full border-4 border-white/90 shadow-2xl overflow-hidden bg-slate-900">
                    <img
                      src="/profile.png"
                      alt="Md. Majidul Islam - AI/ML Engineer"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>

                  {/* Floating Tech Badges - positioned around the photo */}
                  {/* Top-left: Code */}
                  <div className="absolute -top-2 -left-2 bg-white p-2 rounded-xl shadow-lg border border-slate-100/80 backdrop-blur-sm hover:scale-110 transition-transform">
                    <Icons.Code className="text-violet-500" size={18} />
                  </div>

                  {/* Top-right: Sparkles/AI */}
                  <div className="absolute -top-2 -right-2 bg-white p-2 rounded-xl shadow-lg border border-slate-100/80 backdrop-blur-sm hover:scale-110 transition-transform">
                    <Icons.Sparkles className="text-amber-500" size={18} />
                  </div>

                  {/* Bottom-left: CPU/Hardware */}
                  <div className="absolute -bottom-2 -left-2 bg-white p-2 rounded-xl shadow-lg border border-slate-100/80 backdrop-blur-sm hover:scale-110 transition-transform">
                    <Icons.Cpu className="text-emerald-500" size={18} />
                  </div>

                  {/* Bottom-right: Brain/ML */}
                  <div className="absolute -bottom-2 -right-2 bg-white p-2.5 rounded-xl shadow-lg border border-slate-100/80 backdrop-blur-sm hover:scale-110 transition-transform">
                    <Icons.Brain className="text-primary" size={20} />
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile-only: Rich Profile View - Centered & Balanced */}
            <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
              {/* Multi-layer ambient glow effect (Matching Desktop) */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/40 via-orange-500/30 to-amber-500/40 rounded-full blur-2xl scale-110 animate-pulse-slow" />
              <div className="absolute inset-2 bg-gradient-to-tr from-rose-600/30 to-orange-500/20 rounded-full blur-xl" />

              <div className="w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10 bg-slate-100">
                <img
                  src="/profile.png"
                  alt="Md. Majidul Islam - AI/ML Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Mobile Badges - All 4 Icons */}
              {/* Top-left: Code */}
              <div className="absolute top-0 -left-2 bg-white p-1.5 rounded-xl shadow-lg border border-slate-100">
                <Icons.Code className="text-violet-500" size={14} />
              </div>

              {/* Top-right: Sparkles/AI */}
              <div className="absolute top-0 -right-2 bg-white p-1.5 rounded-xl shadow-lg border border-slate-100">
                <Icons.Sparkles className="text-amber-500" size={14} />
              </div>

              {/* Bottom-left: CPU/Hardware */}
              <div className="absolute bottom-2 -left-2 bg-white p-1.5 rounded-xl shadow-lg border border-slate-100">
                <Icons.Cpu className="text-emerald-500" size={14} />
              </div>

              {/* Bottom-right: Brain/ML */}
              <div className="absolute bottom-2 -right-2 bg-white p-2 rounded-xl shadow-lg border border-slate-100">
                <Icons.Brain className="text-primary" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};