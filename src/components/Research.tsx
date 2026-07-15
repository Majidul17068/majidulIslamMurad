import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { forwardRef } from "react";

export const Research = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 lg:p-8 flex flex-col justify-start">
      <h2 className="text-sm font-mono text-[var(--text-subtle)] uppercase mb-8 tracking-widest text-center sm:text-left">Research & Credentials</h2>

      <div className="space-y-10 flex-1 overflow-y-auto pr-2 scrollbar-hide">
        {/* Publications */}
        <div>
          <h3 className="text-[11px] font-mono text-[var(--text-subtle)] mb-5 uppercase tracking-widest">Publications</h3>
          <div className="space-y-5">
            {PORTFOLIO_DATA.research.map((item, index) => (
              <motion.div
                key={`res-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="mt-0.5 flex-shrink-0 p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border-strong)] text-[var(--accent)]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-[var(--text)] mb-1 leading-snug">{item.title}</h4>
                  <div className="text-[10px] text-[var(--accent)] font-mono uppercase tracking-widest mb-2 italic">
                    {item.publication}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training */}
        <div>
          <h3 className="text-[11px] font-mono text-[var(--text-subtle)] mb-5 uppercase tracking-widest">Training</h3>
          <div className="space-y-4">
            {PORTFOLIO_DATA.training.map((item, index) => (
              <motion.div
                key={`tr-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="mt-0.5 flex-shrink-0 p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border-strong)] text-[var(--text-muted)]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-[var(--text)] leading-snug mb-1">{item.name}</h4>
                  <div className="text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-widest leading-tight">
                    {item.org} &bull; {item.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Courses and Practice */}
        <div>
          <h3 className="text-[11px] font-mono text-[var(--text-subtle)] mb-5 uppercase tracking-widest">Courses and Practice</h3>
          <div className="space-y-3">
            {PORTFOLIO_DATA.coursesAndPractice.map((course, index) => (
              <motion.div
                key={`course-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="mt-0.5 flex-shrink-0 p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border-strong)] text-[var(--accent-70)]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="text-xs text-[var(--text)] font-medium leading-snug flex-1 min-w-0">
                  <div>{course.name}</div>
                  {course.org && (
                    <div className="text-[10px] text-[var(--text-subtle)] font-mono uppercase tracking-widest mt-1">
                      {course.org}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing accent — open source / community */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-gradient-to-br from-[var(--accent-5)] to-transparent border border-[var(--accent-20)] p-5"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[var(--accent-10)] text-[var(--accent)] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-semibold text-[var(--text)] mb-1">Open Source & Mentorship</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Author and maintainer of <span className="text-[var(--accent)] font-medium">personakit</span> on PyPI. Active mentor in the AI/ML practitioner community on LinkedIn — guiding peers on production LLM systems, RAG and multi-agent architectures.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
