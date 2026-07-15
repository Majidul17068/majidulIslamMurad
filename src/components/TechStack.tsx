import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { forwardRef } from "react";

export const TechStack = forwardRef<HTMLElement>((props, ref) => {
  const { aiTools, frameworks, edge, mlops } = PORTFOLIO_DATA.techStack;

  const categories = [
    { label: "AI Tools", items: aiTools },
    { label: "Frameworks", items: frameworks },
    { label: "Edge AI", items: edge },
    { label: "MLOps", items: mlops },
  ];

  return (
    <section ref={ref} className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 lg:p-8 flex flex-col justify-center overflow-hidden">
      <h2 className="text-sm font-mono text-[var(--text-subtle)] uppercase mb-8 tracking-widest text-center sm:text-left">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-[10px] font-mono text-[var(--text-faint)] mb-4 uppercase tracking-widest text-center sm:text-left">{cat.label}</h3>
            
            <div className="relative h-32 overflow-hidden mask-fade-v">
              <motion.ul
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="space-y-4 pt-4"
              >
                {/* Double the items for seamless loop */}
                {[...cat.items, ...cat.items].map((item, iDx) => (
                  <li key={`${idx}-${iDx}`} className="text-[var(--text-muted)] text-xs font-medium text-center sm:text-left">
                    {item}
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});
