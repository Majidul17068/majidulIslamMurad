import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { useEffect, useState } from "react";

type Theme = "matrix" | "gemini";

export function Header() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "matrix";
    const stored = window.localStorage.getItem("portfolio-theme");
    return stored === "gemini" ? "gemini" : "matrix";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("theme-gemini", theme === "gemini");
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch { /* ignore quota errors */ }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "matrix" ? "gemini" : "matrix"));

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
          <div className="w-8 h-8 rounded-lg accent-brand flex items-center justify-center font-bold text-black text-xs italic">MI</div>
          <span className="font-medium tracking-tight text-[#EDEDED] hidden sm:block">
            Md. Majidul Islam <span className="text-[#666] px-2">/</span> AI/ML Engineer
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-5 text-sm text-[#888]">
          <a href="https://github.com/Majidul17068" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/majidulislammurad" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:contact.majidul.islam@gmail.com" className="hover:text-white transition-colors duration-200">
            <Mail className="w-5 h-5" />
          </a>

          {/* Theme toggle — Matrix green ↔ Gemini gradient. Uses AI logo. */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "matrix" ? "Switch to Gemini AI theme" : "Switch to Matrix theme"}
            title={theme === "matrix" ? "Switch to Gemini AI theme" : "Switch to Matrix theme"}
            className="relative flex items-center justify-center w-9 h-9 rounded-lg hover:scale-110 active:scale-95 transition-transform"
          >
            <img
              src="/ai-logo.png"
              alt="Theme toggle"
              className="w-full h-full object-contain"
            />
            {theme === "gemini" && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/80" aria-hidden />
            )}
          </button>

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
