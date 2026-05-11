"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { Envelope, Phone, MapPin, ArrowRight } from "@phosphor-icons/react";
import { HudFrame } from "@/components/ui/HudFrame";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/5 bg-black py-24 md:py-32 overflow-hidden">
      {/* Background HUD elements */}
      <div className="absolute right-[-5%] top-[-5%] h-[400px] w-[400px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 border border-accent rounded-full animate-hud-rotate-cw" />
        <div className="absolute inset-10 border border-dashed border-accent/40 rounded-full animate-hud-rotate-ccw" />
      </div>

      <div className="absolute left-[-2%] bottom-[-5%] h-[300px] w-[300px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 border border-accent/30 rounded-full animate-hud-rotate-ccw" />
        <div className="absolute inset-8 border border-accent/20 rounded-full animate-hud-rotate-cw" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10">
        <AnimatedSection className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <EyebrowBadge>COMMUNICATION // LINK // ENCRYPTED</EyebrowBadge>
              <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
                Let's <span className="text-accent animate-flicker">Connect.</span>
              </h2>
              <p className="font-sans text-lg leading-relaxed text-zinc-400">
                Initiate a secure transmission. I'm available for **AI-driven** project consultations,
                full-stack architectural reviews, and innovative technical collaborations.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { icon: Envelope, label: "Transmission ID", value: "ashishshrestha913@gmail.com", href: "mailto:ashishshrestha913@gmail.com" },
                { icon: Phone, label: "Frequency // Call", value: "+977 9808629430", href: "tel:+9779808629430" },
                { icon: MapPin, label: "Coordinates", value: "Tahachal, Kathmandu, Nepal", href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group relative">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 h-8 w-1 bg-accent/0 transition-all group-hover:bg-accent/100 shadow-[0_0_10px_rgba(230,33,42,0.8)]" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-sm border border-white/10 bg-white/[0.03] text-zinc-500 transition-all group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_15px_rgba(230,33,42,0.2)]">
                    {/* Rotating micro-ring on hover */}
                    <div className="absolute inset-0 border border-accent/0 rounded-full group-hover:border-accent/40 group-hover:border-dashed animate-hud-rotate-cw transition-all" />
                    <item.icon size={28} />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-600 group-hover:text-accent/60 transition-colors">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="font-sans text-lg text-foreground hover:text-accent transition-colors tracking-tight font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-sans text-lg text-foreground tracking-tight font-medium">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Encryption Key Indicator */}
            <div className="mt-4 flex items-center gap-4 p-4 rounded-lg border border-accent/20 bg-accent/5 backdrop-blur-sm max-w-sm">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[8px] uppercase tracking-widest text-accent">Encryption: AES-256</span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-none">Security Protocol: Level 5 Active</span>
              </div>
            </div>
          </div>

          <AnimatedItem className="relative group">
            {/* Holographic Background Effect */}
            <div className="absolute -inset-4 bg-accent/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative border border-white/10 bg-white/[0.02] p-8 md:p-12 transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-accent/30 shadow-2xl backdrop-blur-xl">
              {/* Form Brackets */}
              <div className="absolute left-[-2px] top-[-2px] text-accent/30 transition-colors group-hover:text-accent">
                <HudFrame corner="tl" size={32} />
              </div>
              <div className="absolute right-[-2px] bottom-[-2px] text-accent/30 transition-colors group-hover:text-accent">
                <HudFrame corner="br" size={32} />
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
                      New Transmission Request
                    </h3>
                    <span className="font-mono text-[8px] text-zinc-600">ID: TX-9921</span>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-accent/40 via-accent/20 to-transparent" />
                </div>

                <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                  {[
                    { label: "Identity", placeholder: "Enter Name...", type: "text" },
                    { label: "Signal Source", placeholder: "your@email.com", type: "email" }
                  ].map((field, i) => (
                    <div key={i} className="flex flex-col gap-3 relative group/input">
                      <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 group-focus-within/input:text-accent transition-colors">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        className="border-b border-white/10 bg-transparent py-2 font-sans text-foreground outline-none transition-all focus:border-accent focus:pl-4"
                        placeholder={field.placeholder}
                      />
                      <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-500 group-focus-within/input:w-full shadow-[0_0_8px_rgba(230,33,42,0.6)]" />
                    </div>
                  ))}

                  <div className="flex flex-col gap-3 relative group/input">
                    <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 group-focus-within/input:text-accent transition-colors">Message Buffer</label>
                    <textarea
                      rows={3}
                      className="border-b border-white/10 bg-transparent py-2 font-sans text-foreground outline-none transition-all focus:border-accent focus:pl-4 resize-none"
                      placeholder="Describe the mission objective..."
                    />
                    <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-500 group-focus-within/input:w-full shadow-[0_0_8px_rgba(230,33,42,0.6)]" />
                  </div>

                  <button className="group mt-4 relative overflow-hidden bg-accent px-8 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(230,33,42,0.3)]">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Initialize Uplink <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1.5" />
                    </span>
                    {/* Scanning Glint Effect */}
                    <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                    {/* Pulsing Borders */}
                    <div className="absolute inset-0 border border-white/20 animate-pulse" />
                  </button>
                </form>

                <div className="flex justify-between items-center opacity-40">
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-1 w-3 bg-accent" />
                    ))}
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-widest">Ready for uplink</span>
                </div>
              </div>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
