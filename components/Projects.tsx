import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Icons } from './ui/Icons';
import { ArchitectureDiagram } from './ui/ArchitectureDiagram';
import { Project } from '../types';

// Project type labels for quick categorization
const PROJECT_TYPE_LABELS: Record<string, { label: string; color: string }> = {
  RAG: { label: 'RAG Pipeline', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  DATA_PIPELINE: { label: 'Big Data', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  EDGE_PIPELINE: { label: 'Edge AI', color: 'bg-orange-100 text-orange-700 border-orange-200' },
  AGENTIC: { label: 'Agentic AI', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  OCR_PIPELINE: { label: 'OCR Solution', color: 'bg-teal-100 text-teal-700 border-teal-200' },
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <p className="text-sm text-slate-500 max-w-xs">
            Real-world AI systems built for production environments
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project) => {
            const typeInfo = PROJECT_TYPE_LABELS[project.diagramType];

            return (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col h-full"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>

                {/* Main Card Content */}
                <div className="flex-1 flex flex-col p-6 sm:p-8 bg-white rounded-2xl border-2 border-slate-200 group-hover:border-primary/20 relative z-10 transition-all duration-300">
                  {/* Project Type Badge - Key for recruiter scanning */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${typeInfo.color}`}>
                      {typeInfo.label}
                    </span>
                    <a
                      href={project.githubUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:text-primary hover:border-primary/50 hover:bg-white hover:shadow-sm transition-all z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.buttonText === "Ask for Demo" ? (
                        <Icons.Mail size={12} />
                      ) : (
                        <Icons.Github size={12} />
                      )}
                      {project.buttonText || "Demo Github"}
                    </a>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-5 line-clamp-2">
                    {project.problem}
                  </p>

                  {/* Architecture Highlights - Scannable bullet points */}
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Key Implementations
                    </h4>
                    <ul className="space-y-2 mb-5">
                      {project.architectureHighlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                          <Icons.ChevronRight size={14} className="mt-0.5 text-primary shrink-0" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack - More prominent for recruiters */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-900 text-white text-[10px] font-mono rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-auto flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-primary transition-colors group-hover:shadow-lg group-hover:shadow-primary/25"
                    aria-label={`View ${project.title} architecture`}
                  >
                    <Icons.Layers size={16} /> View Architecture
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-20">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${PROJECT_TYPE_LABELS[selectedProject.diagramType].color}`}>
                      {PROJECT_TYPE_LABELS[selectedProject.diagramType].label}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <Icons.X size={24} className="text-slate-500" />
                </button>
              </div>

              <div className="p-4 sm:p-8 bg-slate-50/50">
                <ArchitectureDiagram type={selectedProject.diagramType} />
              </div>

              <div className="p-4 sm:p-8 grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Icons.Terminal size={18} /> Technical Problem
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.problem}</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Icons.Cpu size={18} /> Implementation Strategy
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.architectureHighlights.map((h, i) => (
                      <li key={i} className="text-sm text-slate-600 list-disc list-inside">{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};