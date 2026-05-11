import { motion } from "motion/react";
import { ArrowUpRight, Github, Package } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { forwardRef } from "react";

export const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="h-full bg-[#0F0F0F] border border-[#222] rounded-3xl p-6 lg:p-8 flex flex-col">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-sm font-mono text-[#666] uppercase mb-2 tracking-widest">Featured Work</h2>
          <p className="text-[#AAA] text-sm max-w-md">
            High-impact engineering, from open-source libraries to enterprise automated workflows.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
        {PORTFOLIO_DATA.projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col p-5 rounded-2xl border border-[#222] relative overflow-hidden transition-colors md:col-span-2 bg-gradient-to-br from-[#111] to-[#0A0A0A] hover:border-[#333]"
            >
              <div className="flex justify-between items-start mb-4 gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-[10px] font-mono text-[#666] uppercase tracking-widest">{project.type}</div>
                    {(project.status as readonly string[] | undefined)?.includes("live") && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-widest font-bold rounded bg-[var(--accent-10)] border border-[var(--accent-30)] text-[var(--accent)]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
                        </span>
                        Live
                      </span>
                    )}
                    {(project.status as readonly string[] | undefined)?.includes("oss") && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-widest font-bold rounded bg-[#1A1A1A] border border-[#333] text-[#AAA]">
                        OSS
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#EDEDED] group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {project.pypiUrl && (
                    <a
                      href={project.pypiUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="PyPI package"
                      className="p-2 rounded-full text-[#AAA] hover:text-[var(--accent)] transition z-10"
                    >
                      <Package className="w-5 h-5" />
                    </a>
                  )}
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" title="GitHub" className="p-2 -mr-2 rounded-full text-[#AAA] hover:text-white transition z-10">
                      <Github className="w-5 h-5" />
                    </a>
                  ) : (
                    <div className="p-2 -mr-2 rounded-full text-[#555]">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-[#AAA] text-sm mb-4 max-w-xl">
                {project.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 mt-auto">
                <div className="bg-[#0F0F0F] p-3 rounded-xl border border-[#222]">
                  <div className="text-[var(--accent)] text-xs mb-1 font-mono">The Problem</div>
                  <div className="text-[11px] text-[#888] leading-tight">{project.problem}</div>
                </div>
                <div className="bg-[#0F0F0F] p-3 rounded-xl border border-[#222]">
                  <div className="text-[var(--accent)] text-xs mb-1 font-mono">The Solution</div>
                  <div className="text-[11px] text-[#888] leading-tight">{project.solution}</div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-[#222] flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
                <div className="text-[11px] font-medium text-[#888]">
                  <span className="text-[#555] font-mono mr-2">STACK</span>
                  {project.tech}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
});
