import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { forwardRef } from "react";

export const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 flex flex-col justify-center">
      <h2 className="text-sm font-mono text-[var(--text-subtle)] uppercase mb-6 tracking-widest">About Me</h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed"
      >
        {PORTFOLIO_DATA.about.narrative.split("\n\n").map((para, i) => (
          <p key={i} className="mb-4 last:mb-0">
            {para}
          </p>
        ))}
      </motion.div>
    </section>
  );
});
