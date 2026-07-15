import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
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
        className="bg-[var(--surface)] backdrop-blur-md border border-[var(--border)] rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <img
            src="/m-logo.png"
            alt="Md. Majidul Islam"
            width={32}
            height={32}
            className="w-8 h-8 object-contain rounded-lg shrink-0"
          />
          <span className="font-medium tracking-tight text-[var(--text)] hidden sm:block">
            Md. Majidul Islam <span className="text-[var(--text-subtle)] px-2">/</span> AI/ML Engineer
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-5 text-sm text-[var(--text-muted)]">
          <a href="https://github.com/Majidul17068" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="hover:text-[var(--text)] transition-colors duration-200">
            <Github className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href="https://linkedin.com/in/majidulislammurad" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="hover:text-[var(--text)] transition-colors duration-200">
            <Linkedin className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href="mailto:contact.majidul.islam@gmail.com" aria-label="Email Majidul" className="hover:text-[var(--text)] transition-colors duration-200">
            <Mail className="w-5 h-5" aria-hidden="true" />
          </a>

          {/* Theme toggle — a color swatch showing the active theme (Matrix green / Gemini aurora). */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "matrix" ? "Switch to Gemini aurora theme" : "Switch to Matrix theme"}
            aria-pressed={theme === "gemini"}
            title={theme === "matrix" ? "Switch to Gemini aurora theme" : "Switch to Matrix theme"}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--border-strong)] hover:border-[var(--accent-50)] hover:scale-105 active:scale-95 transition-all"
          >
            <span
              className="w-4 h-4 rounded-full ring-1 ring-black/10 shadow-sm"
              style={{ background: "var(--accent-panel-bg)" }}
            />
          </button>

          <a
            href={PORTFOLIO_DATA.personal.cvLink}
            download
            aria-label="Download CV"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-[var(--text)] text-[var(--bg)] font-semibold rounded-full text-xs hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4 sm:hidden" aria-hidden="true" />
            <span className="hidden sm:inline">Download CV</span>
          </a>
        </div>
      </motion.header>
      </div>
    </div>
  );
}
