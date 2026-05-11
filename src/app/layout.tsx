import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Shrestha | AI FULL STACK DEVELOPER",
  description:
    "Portfolio of Ashish Shrestha, AI-Powered Full Stack Engineer.",
  metadataBase: new URL("http://localhost:3000"),
};

import { Preloader } from "@/components/ui/Preloader";
import { AIAssistant } from "@/components/ui/AIAssistant";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground grain overflow-x-hidden">
        <Preloader />
        <AIAssistant />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        
        {/* Permanent Dev Overlay Killer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const killDevOverlay = () => {
                const selectors = ['nextjs-portal', '#next-dev-indicator', '[data-nextjs-portal]'];
                selectors.forEach(s => {
                  document.querySelectorAll(s).forEach(n => n.remove());
                });
                // Target the shadow host if exists
                const portal = document.querySelector('nextjs-portal');
                if (portal && portal.shadowRoot) {
                  portal.remove();
                }
              };
              
              // Run on start
              killDevOverlay();
              
              // Monitor for re-injections
              const observer = new MutationObserver(killDevOverlay);
              observer.observe(document.documentElement, { childList: true, subtree: true });
              
              // Interval as ultimate fail-safe
              setInterval(killDevOverlay, 1000);
            `,
          }}
        />
      </body>
    </html>
  );
}
