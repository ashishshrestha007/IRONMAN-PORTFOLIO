"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";

export function Education() {
  return (
    <section id="education" className="relative border-t border-white/5 bg-black py-24 md:py-32">
      {/* Background Data Stream Effect */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <AnimatedSection className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <EyebrowBadge>ACADEMIC // BACKGROUND // UPLOAD</EyebrowBadge>
              <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
                Knowledge <span className="text-accent">Protocol.</span>
              </h2>
              <p className="font-sans text-lg leading-relaxed text-zinc-400">
                Merging academic theory with professional **AI-Powered** development experience. 
                Deepening expertise in Advanced Algorithms and System Architecture.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 border-l border-accent/30 pl-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">Academic Load</span>
                <span className="font-sans text-xl font-bold text-foreground">62.5%</span>
              </div>
              <div className="flex flex-col gap-2 border-l border-accent/30 pl-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">Sync Status</span>
                <span className="font-sans text-xl font-bold text-accent animate-pulse">ACTIVE</span>
              </div>
            </div>
          </div>

          <AnimatedItem className="relative group">
            <div className="relative border border-white/10 bg-white/[0.02] p-8 md:p-12 transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-accent/30">
              {/* HUD Brackets */}
              <div className="absolute left-4 top-4 text-accent/20 transition-colors group-hover:text-accent/50">
                <HudFrame corner="tl" size={20} />
              </div>
              <div className="absolute right-4 bottom-4 text-accent/20 transition-colors group-hover:text-accent/50">
                <HudFrame corner="br" size={20} />
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    Diagnostic Report // BCA
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className={`h-1.5 w-1.5 rounded-full ${s <= 5 ? 'bg-accent shadow-[0_0_8px_rgba(230,33,42,0.8)]' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h3 className="font-sans text-3xl font-bold text-foreground md:text-4xl leading-none">
                    Bachelor of Computer Application
                  </h3>
                  <span className="font-mono text-sm uppercase tracking-[0.1em] text-zinc-400">
                    Tribhuvan University &mdash; Nepal
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
                    <span className="text-zinc-500">Learning Progress</span>
                    <span className="text-foreground">5th Semester // In Progress</span>
                  </div>
                  <div className="relative h-1.5 w-full bg-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-accent/10" />
                    <div className="relative h-full w-[62.5%] bg-accent shadow-[0_0_15px_rgba(230,33,42,0.7)] transition-all duration-1000" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                  {['JAVA', 'DBMS', 'OS'].map(sub => (
                    <div key={sub} className="flex flex-col gap-1">
                      <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">{sub}</span>
                      <span className="font-mono text-[10px] text-zinc-400">NOMINAL</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
