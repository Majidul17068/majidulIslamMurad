import React, { useState, useEffect } from 'react';

const CODE_CONTENT = `from crewai import Agent, Task, Crew
import torch

# Initialize Agentic RAG System
class IntelligentSystem:
    def __init__(self):
        self.model = "llama-3-8b-instruct"
        self.device = "cuda:0"
        self.memory = VectorStore()

    def execute_pipeline(self, data):
        """Optimized for NVIDIA Jetson"""
        return self.model.infer(data, fp16=True)`;

interface Token {
      text: string;
      type: 'keyword' | 'string' | 'function' | 'class' | 'comment' | 'decorator' | 'builtin' | 'normal';
}

const tokenizeLine = (line: string): Token[] => {
      const tokens: Token[] = [];
      const keywords = ['from', 'import', 'class', 'def', 'return', 'self'];
      const builtins = ['True', 'False', 'None'];

      if (line.trim().startsWith('#')) {
            return [{ text: line, type: 'comment' }];
      }

      if (line.includes('"""')) {
            return [{ text: line, type: 'string' }];
      }

      const parts = line.split(/(\s+|"[^"]*"|'[^']*'|\(|\)|,|:|\.|=)/g).filter(Boolean);

      parts.forEach((part) => {
            if (keywords.includes(part)) {
                  tokens.push({ text: part, type: 'keyword' });
            } else if (builtins.includes(part)) {
                  tokens.push({ text: part, type: 'builtin' });
            } else if (part.startsWith('"') || part.startsWith("'")) {
                  tokens.push({ text: part, type: 'string' });
            } else if (/^[A-Z][a-zA-Z]*$/.test(part)) {
                  tokens.push({ text: part, type: 'class' });
            } else if (part === '__init__' || part === 'execute_pipeline') {
                  tokens.push({ text: part, type: 'function' });
            } else {
                  tokens.push({ text: part, type: 'normal' });
            }
      });

      return tokens;
};

const getTokenColor = (type: Token['type']): string => {
      switch (type) {
            case 'keyword': return 'text-purple-400';
            case 'string': return 'text-amber-300';
            case 'function': return 'text-sky-400';
            case 'class': return 'text-emerald-400';
            case 'comment': return 'text-slate-500';
            case 'decorator': return 'text-yellow-400';
            case 'builtin': return 'text-orange-400';
            default: return 'text-slate-300';
      }
};

export const CodePanel: React.FC = () => {
      const [displayedCode, setDisplayedCode] = useState('');
      const [isTyping, setIsTyping] = useState(true);

      useEffect(() => {
            let index = 0;
            const typeCode = () => {
                  if (index < CODE_CONTENT.length) {
                        setDisplayedCode(CODE_CONTENT.slice(0, index + 1));
                        index++;
                        const char = CODE_CONTENT[index - 1];
                        const delay = char === '\n' ? 120 : char === ' ' ? 25 : Math.random() * 35 + 20;
                        setTimeout(typeCode, delay);
                  } else {
                        setIsTyping(false);
                        setTimeout(() => {
                              setDisplayedCode('');
                              index = 0;
                              setIsTyping(true);
                              typeCode();
                        }, 3000);
                  }
            };

            const startDelay = setTimeout(typeCode, 600);
            return () => clearTimeout(startDelay);
      }, []);

      const renderCode = () => {
            const lines = displayedCode.split('\n');
            return lines.map((line, lineIndex) => {
                  const tokens = tokenizeLine(line);
                  return (
                        <div key={lineIndex} className="flex">
                              <span className="w-10 text-right pr-4 text-slate-600 select-none text-sm">
                                    {lineIndex + 1}
                              </span>
                              <span className="flex-1">
                                    {tokens.map((token, tokenIndex) => (
                                          <span key={tokenIndex} className={getTokenColor(token.type)}>
                                                {token.text}
                                          </span>
                                    ))}
                                    {lineIndex === lines.length - 1 && isTyping && (
                                          <span className="inline-block w-2.5 h-5 bg-amber-400 animate-pulse ml-0.5 align-middle rounded-sm" />
                                    )}
                              </span>
                        </div>
                  );
            });
      };

      return (
            <div className="relative">
                  {/* Outer glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl blur-2xl" />

                  {/* Main panel */}
                  <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/30">
                        {/* Header with extra height for photo overlap */}
                        <div className="flex items-center justify-end px-6 py-4 border-b border-slate-700/40 bg-slate-800/50 min-h-[60px]">
                              <span className="text-sm text-slate-400 font-mono tracking-wide">agent_orchestrator.py</span>
                        </div>

                        {/* Code Content - with top padding to avoid photo overlap */}
                        <div className="pt-16 pb-6 pl-6 pr-6 font-mono text-base leading-7 min-h-[380px]">
                              <pre className="whitespace-pre-wrap">{renderCode()}</pre>
                        </div>
                  </div>
            </div>
      );
};
