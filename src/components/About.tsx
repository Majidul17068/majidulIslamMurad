import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { forwardRef } from "react";

export const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="h-full bg-[#0F0F0F] border border-[#222] rounded-3xl p-8 flex flex-col justify-center">
      <h2 className="text-sm font-mono text-[#666] uppercase mb-6 tracking-widest">About Me</h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-[#AAA] text-sm sm:text-base leading-relaxed"
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
