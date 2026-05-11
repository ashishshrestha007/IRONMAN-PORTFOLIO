"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatTeardropDots, X, PaperPlaneTilt, Robot, User, ShieldCheck } from "@phosphor-icons/react";
import { HudFrame } from "@/components/ui/HudFrame";

type Message = {
  id: string;
  type: "ai" | "user";
  text: string;
  timestamp: Date;
};

type UserData = {
  name: string;
  email: string;
  phone: string;
};

const ASHISH_INFO = {
  who: "Ashish Shrestha is an AI-Powered Full Stack Engineer and the Co-Founder of Tapstik. He specializes in building scalable, intelligent systems that bridge the gap between complex backend architectures and intuitive user experiences.",
  what: "He develops advanced web applications, AI-integrated solutions, and robust enterprise software. His mission is to empower businesses through technology that feels like the future.",
  skills: "His core arsenal includes Python, Django, Next.js, React, Tailwind CSS, and AI model integration. He is also proficient in DevOps and cloud infrastructure.",
  education: "Ashish holds a degree in Computer Science and Information Technology. He is a continuous learner, constantly updating his protocols with the latest industry standards.",
  projects: "Notable operations include: Tapstik (Restaurant Management), CheqMate (Financial Tracking), and IT Stationary (Networking Solutions).",
  contact: "You can reach Ashish via email at ashishshrestha913@gmail.com or call his direct frequency at +977 9808629430.",
};

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"name" | "email" | "phone" | "chat">("name");
  const [userData, setUserData] = useState<UserData>({ name: "", email: "", phone: "" });
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      text: "Greetings. I am J.A.R.V.I.S., Ashish's AI assistant. To initiate the inquiry protocol, may I have your name?",
      timestamp: new Date(),
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\+?[0-9\s-]{7,15}$/.test(phone);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    const input = inputValue.trim();
    setInputValue("");

    // Validation & Onboarding Logic
    if (step === "name") {
      setMessages((prev) => [...prev, userMsg]);
      setUserData((prev) => ({ ...prev, name: input }));
      setStep("email");
      setTimeout(() => {
        addAIMessage(`Acknowledged, ${input}. Please provide your email address for secure logging.`);
      }, 600);
    } else if (step === "email") {
      if (!validateEmail(input)) {
        setMessages((prev) => [...prev, userMsg]);
        setTimeout(() => {
          addAIMessage("Invalid transmission ID detected. Please provide a valid email address (e.g., user@domain.com).");
        }, 600);
        return;
      }
      setMessages((prev) => [...prev, userMsg]);
      setUserData((prev) => ({ ...prev, email: input }));
      setStep("phone");
      setTimeout(() => {
        addAIMessage("Frequency source identified. Finally, what is your contact number?");
      }, 600);
    } else if (step === "phone") {
      if (!validatePhone(input)) {
        setMessages((prev) => [...prev, userMsg]);
        setTimeout(() => {
          addAIMessage("Neural link failure: Contact number invalid. Please provide a valid numerical frequency.");
        }, 600);
        return;
      }
      setMessages((prev) => [...prev, userMsg]);
      setUserData((prev) => ({ ...prev, phone: input }));
      setStep("chat");
      setTimeout(() => {
        addAIMessage(`Protocol complete. Data encrypted and stored. How can I assist you today, ${userData.name}? You can ask about Ashish's skills, education, projects, or contact info.`);
      }, 600);
    } else {
      setMessages((prev) => [...prev, userMsg]);
      // Chat Logic
      setTimeout(() => {
        const query = input.toLowerCase();
        let response = "I'm sorry, that query is outside my current parameters. You can ask about Ashish's skills, education, projects, or contact details.";
        
        if (query.includes("who") || query.includes("about") || query.includes("ashish")) {
          response = ASHISH_INFO.who;
        } else if (query.includes("do") || query.includes("work")) {
          response = ASHISH_INFO.what;
        } else if (query.includes("skill") || query.includes("know") || query.includes("aauxa") || query.includes("language")) {
          response = ASHISH_INFO.skills;
        } else if (query.includes("education") || query.includes("study") || query.includes("college")) {
          response = ASHISH_INFO.education;
        } else if (query.includes("project") || query.includes("work") || query.includes("portfolio")) {
          response = ASHISH_INFO.projects;
        } else if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("number")) {
          response = ASHISH_INFO.contact;
        }

        addAIMessage(response);
      }, 800);
    }
  };

  const addAIMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: "ai",
        text,
        timestamp: new Date(),
      },
    ]);
  };

  const ArcReactor = ({ scale = 1 }: { scale?: number }) => (
    <div 
      className="relative flex items-center justify-center" 
      style={{ width: 48 * scale, height: 48 * scale }}
    >
      <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 bg-cyan-900/20 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
      <div className="absolute inset-2 rounded-full border-2 border-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
      <div className="absolute h-4 w-4 rounded-full bg-white shadow-[0_0_10px_#fff,0_0_20px_#22d3ee]" style={{ width: 16 * scale, height: 16 * scale }} />
      <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-hud-rotate-cw" />
    </div>
  );


  return (
    <div className="fixed bottom-6 right-6 z-[60] md:bottom-10 md:right-10">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden border border-white/10 bg-black/80 shadow-2xl backdrop-blur-2xl md:w-[400px]"
          >
            {/* Chat Header */}
            <div className="relative border-b border-white/5 bg-cyan-500/5 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center">
                    <ArcReactor scale={0.7} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">J.A.R.V.I.S.</span>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-cyan-500/60">Neural Network // Online</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-zinc-500 hover:bg-white/5 hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-cyan-500" />
            </div>

            {/* Chat Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-white/10"
            >
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.type === "ai" ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={msg.id}
                  className={`flex ${msg.type === "ai" ? "justify-start" : "justify-end"}`}
                >
                  <div className={`flex max-w-[85%] gap-3 ${msg.type === "ai" ? "flex-row" : "flex-row-reverse"}`}>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                      {msg.type === "ai" ? <ArcReactor scale={0.6} /> : <div className="h-8 w-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400"><User size={16} /></div>}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className={`rounded-sm p-3 font-sans text-sm leading-relaxed ${msg.type === "ai" ? "bg-white/[0.03] text-foreground border-l-2 border-cyan-500/50" : "bg-cyan-500/10 text-foreground border-r-2 border-cyan-500/50"}`}>
                        {msg.text}
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-600">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white/[0.02] border-t border-white/5">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder={step === "chat" ? "Ask something..." : "Type your answer..."}
                  className="flex-1 rounded-sm border border-white/10 bg-black/40 px-4 py-3 font-sans text-sm text-foreground outline-none transition-all focus:border-cyan-500/40 focus:bg-black/60"
                />
                <button
                  onClick={handleSend}
                  className="flex h-11 w-11 items-center justify-center rounded-sm bg-cyan-600 text-black transition-all hover:scale-105 active:scale-95"
                >
                  <PaperPlaneTilt size={20} weight="bold" />
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                <ShieldCheck size={12} className="text-cyan-500/60" />
                <span>Encrypted Neural Link // Secure</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-black/80 text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)] border border-cyan-400/20 transition-all hover:scale-110 active:scale-95 overflow-hidden"
      >
        <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-pulse" />
        
        {isOpen ? <X size={28} weight="bold" className="text-white relative z-10" /> : <ArcReactor />}

        
        {!isOpen && (
          <div className="absolute -top-12 right-0 whitespace-nowrap rounded-sm bg-cyan-500 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-black shadow-[0_0_15px_rgba(34,211,238,0.6)]">
            System Online
            <div className="absolute -bottom-1 right-8 h-2 w-2 rotate-45 bg-cyan-500" />
          </div>
        )}
      </button>
    </div>
  );
}
