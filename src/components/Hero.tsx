import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { forwardRef } from "react";

export const Hero = forwardRef<HTMLElement>((props, ref) => {
  const { name, role, intro, photo } = PORTFOLIO_DATA.personal;

  return (
    <section ref={ref} className="h-full bg-[#0F0F0F] border border-[#222] rounded-3xl p-8 lg:p-10 flex flex-col justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-8 flex flex-col justify-between h-full"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#333] text-xs font-mono text-[#AAA] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              {role}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter text-[#EDEDED] mb-6 leading-none">
              Architecting <span className="accent-text">Agentic</span> Intelligence.
            </h1>
            
            <p className="text-[#AAA] text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              {intro}
            </p>
          </div>
          
          <div>
            <a
              href="#contact"
              className="accent-panel inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-200 w-fit"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Agentic AI", "Edge AI", "RAG", "MLOps"].map((highlight, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-3 py-1.5 bg-[#1A1A1A] border border-[#333] rounded-md text-[10px] sm:text-xs uppercase tracking-widest font-bold text-[#EDEDED]"
                >
                  {highlight}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 flex justify-center lg:justify-end shrink-0"
        >
          <div className="relative w-full aspect-square max-w-[300px] rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#333] p-1">
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="pointer-events-none absolute inset-1 rounded-xl ring-1 ring-[var(--accent-20)]" />
            <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-[var(--accent-10)] blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
});
