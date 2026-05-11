"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const [status, setStatus] = useState("INITIALIZING SYSTEM...");
  
  const statusMessages = [
    "INITIALIZING MARK LXXXV PROTOCOLS...",
    "CALIBRATING HUD TELEMETRY...",
    "ESTABLISHING NEURAL UPLINK...",
    "SYNCING BIOMETRIC DATA...",
    "ARC REACTOR STABILITY: 100%",
    "ALL SYSTEMS NOMINAL."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const messageIndex = Math.min(
      Math.floor((percent / 100) * statusMessages.length),
      statusMessages.length - 1
    );
    setStatus(statusMessages[messageIndex]);
  }, [percent]);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0b] overflow-hidden"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 hud-grid opacity-10" />
        
        {/* Circular HUD Elements */}
        <div className="relative h-64 w-64 md:h-80 md:w-80 flex items-center justify-center">
          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-accent/30 rounded-full"
          />
          
          {/* Inner Counter-Rotating Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-2 border-accent/20 rounded-full border-t-accent"
          />

          {/* Central Arc Reactor */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
              boxShadow: [
                "0 0 20px rgba(230,33,42,0.3)",
                "0 0 40px rgba(230,33,42,0.6)",
                "0 0 20px rgba(230,33,42,0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-accent/40 bg-accent/5 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="font-mono text-2xl md:text-3xl font-bold text-accent">
                {percent}%
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-accent/60">
                Pwr Level
              </span>
            </div>
            
            {/* Spinning Blades Effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-accent/20"
                  style={{ transform: `rotate(${i * 60}deg)` }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Scanning Lines */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-px bg-accent/40 shadow-[0_0_10px_rgba(230,33,42,0.5)] z-20 pointer-events-none"
          />
        </div>

        {/* Status Text */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-1 w-1 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-foreground animate-flicker">
              {status}
            </span>
          </motion.div>
          
          <div className="h-px w-48 md:w-64 bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-accent"
              style={{ width: `${percent}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-4">
            {["MARK LXXXV", "LOC: KATHMANDU", "ST: READY"].map((text, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">{text.split(": ")[0]}</span>
                <span className="font-mono text-[10px] text-accent/80 uppercase tracking-widest">{text.split(": ")[1] || text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Corner Telemetry */}
        <div className="absolute bottom-10 left-10 hidden md:flex flex-col gap-2 font-mono text-[8px] text-zinc-600 uppercase tracking-widest">
          <span>Neural Net: Active</span>
          <span>Buffer: Optimized</span>
          <span>Latency: 2ms</span>
        </div>
        <div className="absolute bottom-10 right-10 hidden md:flex flex-col gap-2 font-mono text-[8px] text-zinc-600 uppercase tracking-widest text-right">
          <span>Encryption: AES-256</span>
          <span>Security: Level 5</span>
          <span>Status: Secure</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
