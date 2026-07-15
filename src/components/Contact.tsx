import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { forwardRef } from "react";

export const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="contact" className="accent-panel h-full rounded-3xl p-8 lg:p-12 flex flex-col sm:flex-row justify-between items-center mb-8 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col mb-6 sm:mb-0 text-center sm:text-left"
      >
        <h2 className="font-bold text-3xl sm:text-4xl mb-2 tracking-tight">Let's scale your AI.</h2>
        <p className="text-sm font-semibold opacity-70">Open to research & production roles.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a 
          href={`mailto:${PORTFOLIO_DATA.personal.email}`}
          className="flex items-center justify-center h-16 w-16 bg-black rounded-full text-white hover:bg-[var(--surface-2)] transition-colors hover:scale-105 active:scale-95 group"
          aria-label="Send Email"
        >
          <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
});
