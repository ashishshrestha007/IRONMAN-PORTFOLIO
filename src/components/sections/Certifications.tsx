"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { Certificate, ShieldCheck, Cpu, Fingerprint } from "@phosphor-icons/react";
import Image from "next/image";
import { useRef } from "react";

export function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="certifications" className="relative border-t border-white/5 bg-background py-24 md:py-32 overflow-hidden">
      {/* Background HUD Decorative elements */}
      <div className="absolute left-[10%] top-[20%] h-64 w-64 opacity-5 pointer-events-none">
        <div className="absolute inset-0 border border-accent rounded-full animate-hud-rotate-cw" />
        <div className="absolute inset-8 border border-dashed border-accent/40 rounded-full animate-hud-rotate-ccw" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center text-center gap-6">
            <EyebrowBadge>ACADEMIC // VERIFICATION // SECURE</EyebrowBadge>
            <h2 className="font-sans text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
              Professional <span className="text-accent">Credentials.</span>
            </h2>
            <p className="max-w-[60ch] font-sans text-lg leading-relaxed text-zinc-400">
              Verified certifications from global technology partners and academic institutions. 
              Digital integrity maintained via blockchain-ready protocols.
            </p>
          </div>

          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative h-[400px] w-full max-w-[800px] perspective-1000"
          >
            {/* 3D Card Container */}
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative h-full w-full"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Main Certificate Card */}
              <div className="relative h-full w-full overflow-hidden border border-white/10 bg-white/[0.02] p-4 backdrop-blur-xl transition-all duration-500 group-hover:border-accent/40 group-hover:bg-white/[0.04]">
                
                {/* HUD Corners */}
                <div className="absolute left-0 top-0 text-accent/40 transition-colors group-hover:text-accent">
                  <HudFrame corner="tl" size={40} />
                </div>
                <div className="absolute right-0 bottom-0 text-accent/40 transition-colors group-hover:text-accent">
                  <HudFrame corner="br" size={40} />
                </div>

                <div className="relative h-full w-full overflow-hidden rounded-sm bg-black/40">
                  <Image 
                    src="/images/codeit_certificate.jpg"
                    alt="Professional Certificate"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                    className="object-contain opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.02]"
                  />
                  
                  {/* Scanning Line Animation */}
                  <motion.div 
                    animate={{ top: ["-10%", "110%", "-10%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-px bg-accent/60 shadow-[0_0_15px_rgba(230,33,42,0.8)] z-10"
                  />

                  {/* Holographic Glitch Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Meta Data Overlays */}
                <div className="absolute left-10 top-10 flex flex-col gap-2 pointer-events-none">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-accent/80">
                    <Fingerprint size={12} />
                    <span>Identity Verified</span>
                  </div>
                  <div className="h-px w-20 bg-accent/20" />
                </div>

                <div className="absolute right-10 bottom-10 flex flex-col items-end gap-2 pointer-events-none">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-accent/80">
                    <span>Protocol: SEC-99</span>
                    <ShieldCheck size={12} />
                  </div>
                  <div className="h-px w-24 bg-accent/20" />
                </div>
              </div>
            </motion.div>

            {/* Side Floating Tech Panels (only on desktop) */}
            <div className="hidden lg:block">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-20 top-1/4 card-surface p-4 border-accent/20 backdrop-blur-md"
              >
                <Cpu size={24} className="text-accent/60 mb-2" />
                <div className="flex flex-col gap-1">
                  <div className="h-1 w-8 bg-accent/40" />
                  <div className="h-1 w-12 bg-accent/20" />
                  <div className="h-1 w-6 bg-accent/60" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-20 bottom-1/4 card-surface p-4 border-accent/20 backdrop-blur-md"
              >
                <Certificate size={24} className="text-accent/60 mb-2" />
                <div className="flex flex-col gap-1 items-end">
                  <div className="h-1 w-12 bg-accent/40" />
                  <div className="h-1 w-8 bg-accent/20" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Verification Status Bar */}
          <div className="w-full max-w-sm flex flex-col gap-3">
            <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              <span>Integrity Check</span>
              <span className="text-accent animate-pulse">100% Secure</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-accent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
