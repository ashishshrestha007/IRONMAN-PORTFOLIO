"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/5 bg-black py-24 md:py-32">
      {/* Background HUD elements */}
      <div className="absolute left-[-5%] top-[10%] h-[300px] w-[300px] opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 border border-accent rounded-full animate-hud-rotate-cw" />
        <div className="absolute inset-10 border border-dashed border-accent/40 rounded-full animate-hud-rotate-ccw" />
      </div>

      {/* Scanning Line Animation */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent shadow-[0_0_15px_rgba(230,33,42,0.5)] animate-scan" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10">
        <AnimatedSection className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <AnimatedItem className="flex flex-col gap-6">
            <EyebrowBadge>MISSION // OBJECTIVE</EyebrowBadge>
            <div className="relative">
              <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
                Engineering <span className="text-accent">Intelligence</span> into Code.
              </h2>
              {/* Profile ID Badge */}
              <div className="mt-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-accent/60">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>Subject ID: ASHISH_S-85</span>
                <span className="text-zinc-700">|</span>
                <span>Type: Full Stack / AI</span>
              </div>
            </div>
          </AnimatedItem>
          
          <AnimatedItem className="flex flex-col gap-6 relative">
            {/* HUD Corner Accents for the text block */}
            <div className="absolute -left-6 -top-6 text-accent/20">
              <HudFrame corner="tl" size={20} />
            </div>
            
            <p className="font-sans text-lg leading-relaxed text-zinc-400">
              I am Ashish Shrestha, an **AI-Powered Full Stack Engineer** based in Kathmandu, Nepal. 
              I specialize in bridging the gap between advanced AI capabilities and robust web architectures, 
              creating applications that aren't just functional, but intelligent.
            </p>
            <p className="font-sans text-lg leading-relaxed text-zinc-400">
              With over 4 years of experience, my work at **Pioneer** and **Tapstik** involves architecting 
              systems that leverage AI to automate workflows, analyze data, and enhance user interaction 
              to an unprecedented level.
            </p>
            
            <div className="mt-4 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              <div className="flex flex-col gap-2 group/stat">
                <span className="flex items-center gap-2 text-accent transition-colors group-hover/stat:text-white">
                  <span className="h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_rgba(230,33,42,0.8)]" />
                  Location
                </span>
                <span className="text-foreground">Kathmandu, Nepal</span>
                <div className="h-px w-0 bg-accent/40 transition-all group-hover/stat:w-full" />
              </div>
              <div className="flex flex-col gap-2 group/stat">
                <span className="flex items-center gap-2 text-accent transition-colors group-hover/stat:text-white">
                  <span className="h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_rgba(230,33,42,0.8)]" />
                  Capability
                </span>
                <span className="text-foreground">AI Integration / Full Stack</span>
                <div className="h-px w-0 bg-accent/40 transition-all group-hover/stat:w-full" />
              </div>
            </div>
            
            {/* Micro Telemetry */}
            <div className="absolute right-0 bottom-[-40px] opacity-20 font-mono text-[7px] flex gap-4 text-zinc-500">
              <span>SCAN_VER: 1.0.4</span>
              <span>BIO_SYNC: 100%</span>
              <span>LAT: 0.02ms</span>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
