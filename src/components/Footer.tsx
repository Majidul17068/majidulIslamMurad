import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Footer() {
  return (
    <footer className="py-8 bg-[#050505] text-center text-[10px] sm:text-xs text-[#666] font-mono tracking-widest uppercase">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/Majidul17068" target="_blank" rel="noreferrer" className="hover:text-[#EDEDED] transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/majidulislammurad" target="_blank" rel="noreferrer" className="hover:text-[#EDEDED] transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
