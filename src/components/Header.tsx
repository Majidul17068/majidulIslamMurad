import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Header() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#0F0F0F]/90 backdrop-blur-md border border-[#222] rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00FF41] to-[#008F11] flex items-center justify-center font-bold text-black text-xs italic">MI</div>
          <span className="font-medium tracking-tight text-[#EDEDED] hidden sm:block">
            Md. Majidul Islam <span className="text-[#666] px-2">/</span> AI/ML Engineer
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-[#888]">
          <a href="https://github.com/Majidul17068" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/majidulislammurad" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:contact.majidul.islam@gmail.com" className="hover:text-white transition-colors duration-200">
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href={PORTFOLIO_DATA.personal.cvLink}
            download
            className="hidden sm:inline-flex px-4 py-1.5 bg-[#EDEDED] text-black font-semibold rounded-full text-xs hover:bg-white transition-colors"
          >
            Download CV
          </a>
        </div>
      </motion.header>
      </div>
    </div>
  );
}
