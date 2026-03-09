import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Icons } from './Icons';

interface Props {
  type: 'RAG' | 'EDGE_PIPELINE' | 'DATA_PIPELINE' | 'AGENTIC' | 'OCR_PIPELINE';
}

const Node = ({ label, icon: Icon, color }: { label: string; icon: LucideIcon; color: string }) => (
  <div className={`flex flex-col items-center justify-center p-3 rounded-lg border bg-white shadow-sm w-24 h-24 text-center z-10 ${color}`}>
    <Icon size={24} className="mb-2 opacity-80" />
    <span className="text-[10px] font-bold uppercase tracking-wider leading-tight">{label}</span>
  </div>
);

const Arrow = () => (
  <div className="flex-1 h-[2px] bg-slate-300 mx-2 relative min-w-[20px]">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-slate-300 rotate-45 transform" />
  </div>
);

export const ArchitectureDiagram: React.FC<Props> = ({ type }) => {
  const renderDiagram = () => {
    switch (type) {
      case 'RAG':
        return (
          <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
            <div className="flex items-center justify-between">
              <Node label="User Query" icon={Icons.Terminal} color="border-slate-200 text-slate-700" />
              <Arrow />
              <Node label="Embedding" icon={Icons.Layers} color="border-blue-200 text-blue-600" />
              <Arrow />
              <Node label="Vector DB" icon={Icons.Database} color="border-indigo-200 text-indigo-600" />
            </div>
            <div className="flex justify-center h-8 border-r-2 border-dashed border-slate-300 w-1/2 mr-12 relative">
              <span className="absolute top-2 right-2 text-xs text-slate-400">Retrieval</span>
            </div>
            <div className="flex items-center justify-center">
              <Node label="LLM Context" icon={Icons.Brain} color="border-purple-200 text-purple-600" />
              <Arrow />
              <Node label="Response" icon={Icons.Bot} color="border-green-200 text-green-600" />
            </div>
          </div>
        );

      case 'EDGE_PIPELINE':
        return (
          <div className="flex items-center justify-between w-full max-w-lg mx-auto overflow-x-auto p-2">
            <Node label="Sensor / Cam" icon={Icons.Layers} color="border-slate-200 text-slate-700" />
            <Arrow />
            <div className="p-4 border-2 border-dashed border-orange-200 bg-orange-50/50 rounded-xl flex flex-col items-center gap-2">
              <span className="text-[10px] font-mono text-orange-600 mb-1">JETSON ORIN</span>
              <div className="flex gap-2">
                <Node label="Pre-process" icon={Icons.Cpu} color="border-orange-200 text-orange-600" />
                <Node label="TensorRT" icon={Icons.Cpu} color="border-red-200 text-red-600" />
              </div>
            </div>
            <Arrow />
            <Node label="Actuation" icon={Icons.Terminal} color="border-green-200 text-green-600" />
          </div>
        );

      case 'OCR_PIPELINE':
        return (
          <div className="flex flex-col items-center gap-3 w-full max-w-xs mx-auto">
            {/* Input Documents */}
            <Node label="Input Docs" icon={Icons.Database} color="border-slate-300 text-slate-700" />
            <div className="h-6 border-l-2 border-teal-400"></div>

            {/* Image Preprocessing */}
            <Node label="Preprocess" icon={Icons.Cpu} color="border-teal-200 text-teal-600" />
            <div className="h-6 border-l-2 border-teal-400"></div>

            {/* OCR Engine */}
            <Node label="OCR Engine" icon={Icons.Brain} color="border-teal-200 text-teal-600" />
            <div className="h-6 border-l-2 border-teal-400"></div>

            {/* Post-OCR Intelligence */}
            <Node label="Post-OCR AI" icon={Icons.Layers} color="border-teal-200 text-teal-600" />
            <div className="h-6 border-l-2 border-teal-400"></div>

            {/* Medical Validation */}
            <Node label="Validation" icon={Icons.Bot} color="border-green-200 text-green-600" />
            <div className="h-6 border-l-2 border-green-400"></div>

            {/* API / Downstream */}
            <Node label="API Output" icon={Icons.Server} color="border-blue-200 text-blue-600" />
          </div>
        );

      case 'AGENTIC':
        return (
          <div className="relative w-full max-w-md mx-auto h-64 flex items-center justify-center">
            {/* Central Orchestrator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <Node label="Orchestrator" icon={Icons.Brain} color="border-blue-500 bg-blue-50 text-blue-700 shadow-md scale-110" />
            </div>

            {/* Satellite Agents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <Node label="Planner" icon={Icons.Layers} color="border-slate-200 text-slate-600" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <Node label="Reviewer" icon={Icons.Bot} color="border-slate-200 text-slate-600" />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Node label="Tool Use" icon={Icons.Terminal} color="border-slate-200 text-slate-600" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Node label="Memory" icon={Icons.Database} color="border-slate-200 text-slate-600" />
            </div>

            {/* Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">
              <line x1="50%" y1="20%" x2="50%" y2="40%" stroke="currentColor" strokeWidth="2" />
              <line x1="50%" y1="80%" x2="50%" y2="60%" stroke="currentColor" strokeWidth="2" />
              <line x1="20%" y1="50%" x2="40%" y2="50%" stroke="currentColor" strokeWidth="2" />
              <line x1="80%" y1="50%" x2="60%" y2="50%" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        );

      default: // DATA_PIPELINE
        return (
          <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <div className="flex gap-4">
              <Node label="Raw Data" icon={Icons.Database} color="border-slate-200 text-slate-500" />
              <Node label="Stream" icon={Icons.Layers} color="border-slate-200 text-slate-500" />
            </div>
            <div className="h-8 border-l-2 border-slate-300 ml-12"></div>
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <Node label="Ingest" icon={Icons.Server} color="border-teal-200 text-teal-600" />
              <Arrow />
              <Node label="Transform" icon={Icons.Cpu} color="border-teal-200 text-teal-600" />
              <Arrow />
              <Node label="Model" icon={Icons.Brain} color="border-teal-200 text-teal-600" />
            </div>
            <div className="h-8 border-l-2 border-slate-300 ml-12"></div>
            <Node label="Analytics UI" icon={Icons.Terminal} color="border-blue-200 text-blue-600" />
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-slate-50 p-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="text-xs font-mono text-slate-400 mb-6 uppercase tracking-widest text-center">System Architecture View</div>
      {renderDiagram()}
    </div>
  );
};