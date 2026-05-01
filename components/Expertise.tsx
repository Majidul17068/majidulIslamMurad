import React, { useEffect, useRef, useState } from 'react';
import { SKILLS } from '../constants';
import { Icons } from './ui/Icons';
import { ScrollReveal } from './ui/ScrollReveal';
import { SkillCategory } from '../types';

const SkillCard: React.FC<{ category: SkillCategory; ariaHidden?: boolean }> = ({ category, ariaHidden }) => {
  const IconComponent = Icons[category.icon as keyof typeof Icons] || Icons.Terminal;

  return (
    <div
      aria-hidden={ariaHidden}
      className="group relative shrink-0 w-[280px] sm:w-[300px] h-[380px] bg-white rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-cyan-300 opacity-20 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm pointer-events-none"></div>

      <div className="h-full p-7 bg-white rounded-2xl border-2 border-slate-100 group-hover:border-primary/20 relative z-10 transition-all duration-300 flex flex-col">
        <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-cyan-400 transition-all duration-300 shrink-0">
          <IconComponent className="text-primary group-hover:text-white transition-colors duration-300" size={22} />
        </div>

        <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {category.title}
        </h3>

        <ul className="space-y-2 flex-1">
          {category.skills.slice(0, 6).map((skill) => (
            <li key={skill} className="flex items-start gap-2 text-sm font-medium text-slate-600">
              <Icons.CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-primary/60 shrink-0" />
              <span className="leading-snug line-clamp-1">{skill}</span>
            </li>
          ))}
        </ul>
        {category.skills.length > 6 && (
          <p className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-100">
            +{category.skills.length - 6} more
          </p>
        )}
      </div>
    </div>
  );
};

export const Expertise: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const justDraggedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll loop using requestAnimationFrame; pauses while user interacts.
  useEffect(() => {
    if (isPaused) return;
    const track = trackRef.current;
    if (!track) return;

    // Respect users who opted into reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - lastTime;
      lastTime = now;

      // Move ~45px per second — slow enough to read
      track.scrollLeft += (elapsed / 1000) * 45;

      // Loop seamlessly when we've scrolled past the first copy
      const half = track.scrollWidth / 2;
      if (track.scrollLeft >= half) {
        track.scrollLeft -= half;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  // Mouse drag handlers (desktop)
  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDraggingRef.current = true;
    setIsPaused(true);
    dragStartXRef.current = e.pageX;
    dragStartScrollRef.current = track.scrollLeft;
    justDraggedRef.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    e.preventDefault();
    const dx = e.pageX - dragStartXRef.current;
    if (Math.abs(dx) > 4) justDraggedRef.current = true;
    track.scrollLeft = dragStartScrollRef.current - dx;
  };

  const stopDrag = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsPaused(false);
  };

  // Suppress link clicks that fire after a drag (prevents accidental navigation)
  const onClickCapture = (e: React.MouseEvent) => {
    if (justDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      justDraggedRef.current = false;
    }
  };

  // Touch handlers — let native scroll handle the gesture, just pause auto-scroll
  const onTouchStart = () => setIsPaused(true);
  const onTouchEnd = () => setIsPaused(false);

  return (
    <section id="expertise" className="py-20 sm:py-24 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Core Expertise</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-4"></div>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl">
              Languages, ML/LLM systems, agents, RAG, edge AI, MLOps, cloud — drag or swipe to browse.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Drag-and-scroll track — full-bleed */}
      <div className="relative">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50/50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50/50 to-transparent z-10" />

        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClickCapture={onClickCapture}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none touch-pan-x"
          aria-label="Core expertise — drag to browse"
        >
          <div className="flex w-max gap-6 py-4 px-4 sm:px-6">
            {/* First copy */}
            {SKILLS.map((category) => (
              <SkillCard key={`a-${category.title}`} category={category} />
            ))}
            {/* Second copy for seamless loop */}
            {SKILLS.map((category) => (
              <SkillCard key={`b-${category.title}`} category={category} ariaHidden />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
