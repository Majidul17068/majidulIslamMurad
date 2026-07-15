import { motion } from "motion/react";
import { ArrowUpRight, Github, Package } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { forwardRef } from "react";

export const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 lg:p-8 flex flex-col">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-sm font-mono text-[var(--text-subtle)] uppercase mb-2 tracking-widest">Featured Work</h2>
          <p className="text-[var(--text-muted)] text-sm max-w-md">
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
              className="group flex flex-col p-5 rounded-2xl border border-[var(--border)] relative overflow-hidden transition-colors md:col-span-2 bg-gradient-to-br from-[var(--surface)] to-[var(--surface)] hover:border-[var(--border-strong)]"
            >
              <div className="flex justify-between items-start mb-4 gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-[10px] font-mono text-[var(--text-subtle)] uppercase tracking-widest">{project.type}</div>
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
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-widest font-bold rounded bg-[var(--surface-2)] border border-[var(--border-strong)] text-[var(--text-muted)]">
                        OSS
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--text)] transition-colors">
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
                      className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--accent)] transition z-10"
                    >
                      <Package className="w-5 h-5" />
                    </a>
                  )}
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" title="GitHub" className="p-2 -mr-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text)] transition z-10">
                      <Github className="w-5 h-5" />
                    </a>
                  ) : (
                    <div className="p-2 -mr-2 rounded-full text-[var(--text-faint)]">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-[var(--text-muted)] text-sm mb-4 max-w-xl">
                {project.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-[var(--surface)] p-3 rounded-xl border border-[var(--border)]">
                  <div className="text-[var(--accent)] text-xs mb-1 font-mono">The Problem</div>
                  <div className="text-[11px] text-[var(--text-muted)] leading-tight">{project.problem}</div>
                </div>
                <div className="bg-[var(--surface)] p-3 rounded-xl border border-[var(--border)]">
                  <div className="text-[var(--accent)] text-xs mb-1 font-mono">The Solution</div>
                  <div className="text-[11px] text-[var(--text-muted)] leading-tight">{project.solution}</div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
                <div className="text-[11px] font-medium text-[var(--text-muted)]">
                  <span className="text-[var(--text-faint)] font-mono mr-2">STACK</span>
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
