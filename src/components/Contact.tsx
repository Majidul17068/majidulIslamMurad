import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { forwardRef } from "react";

export const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="contact" className="h-full bg-[#00FF41] rounded-3xl p-8 lg:p-12 flex flex-col sm:flex-row justify-between items-center text-black col-span-full mb-8 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col mb-6 sm:mb-0 text-center sm:text-left"
      >
        <h4 className="font-bold text-3xl sm:text-4xl mb-2 tracking-tight">Let's scale your AI.</h4>
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
          className="flex items-center justify-center h-16 w-16 bg-black rounded-full text-white hover:bg-[#1A1A1A] transition-colors hover:scale-105 active:scale-95 group"
          aria-label="Send Email"
        >
          <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
});
