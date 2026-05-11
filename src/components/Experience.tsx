import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { forwardRef } from "react";

export const Experience = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="h-full bg-[#0F0F0F] border border-[#222] rounded-3xl p-6 lg:p-8 flex flex-col">
      <h2 className="text-sm font-mono text-[#666] uppercase mb-8 tracking-widest">Production Experience</h2>

      <div className="space-y-6">
        {PORTFOLIO_DATA.experience.map((job, index) => {
          const isCurrent = index === 0;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-5 border-l border-[#333]"
            >
              <div className={`absolute -left-[5px] top-0.5 w-2 h-2 rounded-full ${isCurrent ? 'bg-[var(--accent)]' : 'bg-[#666]'}`} />
              
              <div className="text-sm font-semibold text-[#EDEDED]">{job.company}</div>
              <div className="text-[10px] text-[#666] mb-1 font-mono uppercase tracking-wider">
                {job.role} &bull; {job.duration.split('–')[0].trim()} {job.duration.includes('Present') ? '– Present' : `– ${job.duration.split('–')[1]?.trim() || ''}`}
              </div>
              
              <ul className="mt-2 space-y-1.5">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs text-[#AAA] leading-snug">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      <h2 className="text-sm font-mono text-[#666] uppercase mb-8 mt-12 tracking-widest">Other Experiences</h2>

      <div className="space-y-6">
        {PORTFOLIO_DATA.otherExperience.map((job, index) => {
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-5 border-l border-[#333]"
            >
              <div className="absolute -left-[5px] top-0.5 w-2 h-2 rounded-full bg-[#333]" />
              
              <div className="text-sm font-semibold text-[#EDEDED]">{job.company}</div>
              <div className="text-[10px] text-[#666] mb-1 font-mono uppercase tracking-wider">
                {job.role} &bull; {job.duration}
              </div>
              
              <ul className="mt-2 space-y-1.5">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs text-[#AAA] leading-snug">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
});
