"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", level: "85%" },
      { name: "JavaScript", level: "80%" },
      { name: "Django", level: "85%" },
      { name: "React", level: "75%" },
    ],
  },
  {
    title: "Frontend & Design",
    skills: [
      { name: "HTML5", level: "95%" },
      { name: "CSS3 / Tailwind", level: "90%" },
      { name: "TypeScript", level: "70%" },
      { name: "Canva", level: "75%" },
    ],
  },
  {
    title: "Tools & Backend",
    skills: [
      { name: "MySQL", level: "80%" },
      { name: "GitHub", level: "85%" },
      { name: "Vim", level: "70%" },
      { name: "API Integration", level: "85%" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/5 bg-black py-24 md:py-32 overflow-hidden">
      {/* Background HUD elements */}
      <div className="absolute inset-0 hud-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] border border-accent/5 rounded-full animate-hud-rotate-cw pointer-events-none" />
      
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10">
        <AnimatedSection className="flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <EyebrowBadge>TECH STACK // CAPABILITIES // OPTIMIZED</EyebrowBadge>
            <div className="flex items-center gap-6">
              <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
                Arsenal of <span className="text-accent">Tools.</span>
              </h2>
              <div className="hidden md:flex flex-col gap-1 font-mono text-[8px] text-zinc-600 uppercase tracking-widest mt-2">
                <span>System Status: Optimal</span>
                <span>Power: Stable</span>
              </div>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {skillCategories.map((cat, i) => (
              <AnimatedItem key={i} className="flex flex-col gap-8 p-6 border border-white/5 bg-white/[0.01] backdrop-blur-sm relative group">
                {/* Corner Accents */}
                <div className="absolute left-0 top-0 text-accent/20 group-hover:text-accent transition-colors">
                  <HudFrame corner="tl" size={16} />
                </div>
                <div className="absolute right-0 bottom-0 text-accent/20 group-hover:text-accent transition-colors">
                  <HudFrame corner="br" size={16} />
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-accent/40" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                    {cat.title}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-8">
                  {cat.skills.map((skill, j) => (
                    <div key={j} className="flex flex-col gap-3 group/skill">
                      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em]">
                        <span className="text-foreground group-hover/skill:text-accent transition-colors">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-accent/60 font-bold">{skill.level}</span>
                          <span className="h-1 w-1 rounded-full bg-accent animate-pulse" />
                        </div>
                      </div>
                      
                      <div className="relative h-[4px] w-full bg-white/5 overflow-hidden">
                        {/* Static Segments */}
                        <div className="absolute inset-0 flex justify-between px-1">
                          {[...Array(10)].map((_, k) => (
                            <div key={k} className="w-[1px] h-full bg-white/10" />
                          ))}
                        </div>
                        
                        <div 
                          className="absolute inset-0 bg-accent/20 blur-[2px] transition-all duration-1000" 
                          style={{ width: skill.level }}
                        />
                        <div 
                          className="relative h-full bg-accent shadow-[0_0_12px_rgba(230,33,42,0.8)] transition-all duration-1000" 
                          style={{ width: skill.level }}
                        />
                        
                        {/* Scanning glint for the bar */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-20 animate-shimmer" style={{ animationDuration: '2s' }} />
                      </div>
                      
                      <div className="flex justify-between font-mono text-[7px] text-zinc-700 tracking-widest">
                        <span>SYS_ID_{i}{j}</span>
                        <span>BOOT_SEQ_00{j}</span>
                        <span>STATUS_OK</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Section Footer Micro-Telemetry */}
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-30 group-hover:opacity-60 transition-opacity">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, k) => (
                      <div key={k} className="h-2 w-1 bg-accent" />
                    ))}
                  </div>
                  <span className="font-mono text-[8px] uppercase">Telemetry Link_0{i}</span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
