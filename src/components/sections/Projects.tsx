"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

const projects = [
  {
    title: "Tapstik",
    category: "RESTAURANT MANAGEMENT // 01",
    description: "Specialized software for modern restaurants. Streamlining operations with real-time data processing and intuitive management tools.",
    image: "/images/Tapstik.png",
    link: "https://tapstik.net/",
  },
  {
    title: "CheqMate",
    category: "FINANCIAL TRACKING // 02",
    description: "Advanced financial tracking system for secure cheque management. Implementing integrity protocols and transaction monitoring.",
    image: "/images/Chequetracker.png",
    link: "https://chequetrackerr.netlify.app/",
  },
  {
    title: "IT Stationary",
    category: "NETWORKING SOLUTIONS // 03",
    description: "Comprehensive IT infrastructure and networking solutions. Engineered for scalability, security, and high-performance environments.",
    image: "/images/itstationaryfulllogo.png",
    link: "https://itstationary.com.np/",
  },
  {
    title: "Brain Play Arena",
    category: "EDUCATIONAL GAME // 04",
    description: "An interactive brain-training platform designed for young students. Sharpening cognitive skills through gamified challenges.",
    image: "/images/brainplayarena.png",
    link: "https://brainplayarena.netlify.app/",
  },
  {
    title: "Rosa Beauty Parlour",
    category: "BEAUTY SERVICES // 05",
    description: "Elegant digital presence for beauty services. Integrating smart appointment systems with a premium visual design.",
    image: "/images/Rosabeautyparlour.png",
    link: "https://rosaparlour.netlify.app/",
  },
];

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal movement based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Section Title */}
        <div className="absolute left-6 top-24 z-20 md:left-12 md:top-28">
          <EyebrowBadge>OPERATIONAL // LOGS // VISUALIZER</EyebrowBadge>
          <h2 className="mt-4 font-sans text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
            Recent <span className="text-accent animate-scan">Operations.</span>
          </h2>
        </div>

        {/* Flat Horizontal Track */}
        <motion.div style={{ x }} className="flex gap-10 px-12">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative flex h-[65vh] w-[85vw] shrink-0 flex-col overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-accent/40 md:h-[75vh] md:w-[60vw] lg:w-[45vw]"
            >
              {/* Image Section - Large and Curved */}
              <div className="relative h-2/3 w-full overflow-hidden bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* HUD Scanning Line */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-x-0 h-px bg-accent/40 shadow-[0_0_15px_rgba(230,33,42,0.8)] z-10"
                />
              </div>

              {/* Info Section */}
              <div className="flex flex-1 flex-col justify-between border-t border-white/5 bg-black/40 p-8 md:p-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.4em] text-accent">
                    <span>{project.category}</span>
                    <span className="text-zinc-600">ID: P-00{i + 1}</span>
                  </div>
                  <h3 className="font-sans text-3xl font-bold tracking-tighter text-foreground md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="max-w-[45ch] font-sans text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 self-start rounded-full border border-accent/20 bg-accent/5 px-8 py-3.5 font-mono text-[10px] uppercase tracking-[0.3em] text-accent transition-all hover:bg-accent hover:text-black hover:scale-105"
                >
                  Initiate Uplink <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
          
          {/* End of Log Card */}
          <div className="flex h-[65vh] w-[40vw] shrink-0 items-center justify-center rounded-[40px] border border-dashed border-white/10 font-mono text-zinc-600 md:h-[75vh]">
            <div className="flex flex-col items-center gap-4 text-center uppercase tracking-[0.4em]">
              <div className="h-2 w-2 rounded-full bg-zinc-800 animate-pulse" />
              <span>End of Records</span>
            </div>
          </div>
        </motion.div>

        {/* Progress Bar (Bottom) */}
        <div className="absolute inset-x-0 bottom-12 z-20 px-12">
          <div className="h-px w-full bg-white/10">
            <motion.div 
              className="h-full bg-accent origin-left"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
