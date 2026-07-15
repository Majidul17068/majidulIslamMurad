import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { forwardRef } from "react";

export const Expertise = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 lg:p-8 flex flex-col">
      <h2 className="text-sm font-mono text-[var(--text-subtle)] uppercase mb-6 tracking-widest">Core Architecture</h2>

      <div className="flex flex-col gap-3">
        {PORTFOLIO_DATA.expertise.slice(0, 4).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex justify-between items-center border-b border-[var(--border)] pb-3 last:border-0"
          >
            <span className="text-sm font-medium text-[var(--text)]">{item.title}</span>
            <span className="text-[10px] text-[var(--accent)] font-mono border border-[var(--accent-30)] bg-[var(--accent-10)] px-2 py-0.5 rounded">PRO</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-[var(--border)]">
        <h3 className="text-[11px] font-mono text-[var(--text-subtle)] mb-5 uppercase tracking-widest">Education</h3>
        <div className="space-y-5">
          {PORTFOLIO_DATA.education.map((edu, index) => {
            const isHighest = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative pl-5 border-l-2 border-[var(--border)]"
              >
                <div className={`absolute -left-[5px] top-1 w-2 h-2 rounded-full ${isHighest ? "bg-[var(--accent)]" : "bg-[var(--text-faint)]"}`} />
                <h4 className="text-xs font-semibold text-[var(--text)] leading-snug mb-1.5">{edu.degree}</h4>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-[11px] text-[var(--accent)] font-mono">{edu.grade}</span>
                  <span className="text-[10px] text-[var(--text-subtle)] font-mono uppercase tracking-widest">{edu.duration}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
