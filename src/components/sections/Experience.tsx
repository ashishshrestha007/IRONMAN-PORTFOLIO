"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";

const experiences = [
  {
    role: "IT Officer",
    company: "Pioneer Software Solution Pvt Ltd",
    period: "2023 - Present",
    description: "Dedicated expertise in building enterprise-grade applications. Focusing on scalable architecture and seamless user experiences.",
  },
  {
    role: "Co-Founder & Lead Developer",
    company: "Tapstik",
    period: "Current Endeavor",
    description: "Architecting and leading the development of specialized Restaurant Management Software with focus on efficiency.",
  },
  {
    role: "Content Moderator",
    company: "Finix Dev",
    period: "2021 - 2023",
    description: "Ensured platform integrity and content quality. Developed keen eye for detail and data-driven decision making.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/5 bg-black py-24 md:py-32">
      {/* HUD Grid Background */}
      <div className="hud-grid absolute inset-0 opacity-[0.03] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <AnimatedSection className="flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <EyebrowBadge>PROFESSIONAL // JOURNEY // DATA_SYNC</EyebrowBadge>
            <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
              Career <span className="text-accent animate-flicker">Milestones.</span>
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1.2fr]">
            {experiences.map((exp, i) => (
              <AnimatedItem key={i} className={`group relative ${i === 1 ? 'md:mt-20' : ''}`}>
                <div className="relative h-full border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-accent/40 hover:shadow-[0_0_30px_rgba(230,33,42,0.1)]">
                  {/* Decorative HUD corners */}
                  <div className="absolute -left-px -top-px text-accent/40 transition-colors group-hover:text-accent">
                    <HudFrame corner="tl" size={24} />
                  </div>
                  <div className="absolute -right-px -bottom-px text-accent/40 transition-colors group-hover:text-accent">
                    <HudFrame corner="br" size={24} />
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        [{String(i + 1).padStart(2, '0')}] // {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <h3 className="font-sans text-2xl font-semibold text-foreground tracking-tight">
                        {exp.role}
                      </h3>
                      <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">
                        {exp.company}
                      </h4>
                    </div>

                    <div className="h-px w-full bg-white/5" />
                    
                    <p className="font-sans text-sm leading-relaxed text-zinc-400">
                      {exp.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-600">
                      <span className="h-1 w-1 rounded-full bg-zinc-600" />
                      Status: Nominal
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
