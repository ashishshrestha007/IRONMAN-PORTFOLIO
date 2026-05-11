import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/5 bg-background px-6 py-14 md:px-10 md:py-16"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(230,33,42,0.9)]"
              />
              Ashish / Shrestha
            </div>
            <p className="max-w-[38ch] font-sans text-sm leading-relaxed text-zinc-400">
              &copy; 2026 Ashish Shrestha &mdash; Full Stack Developer.
              Tahachal, Kathmandu, Nepal. <br />
              Email: ashishshrestha913@gmail.com
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-3">
            {[
              ["IT Stationary", "Infrastructure"],
              ["Rosa Parlour", "Booking App"],
              ["Cheque Tracker", "FinTech"],
              ["Tapstik", "RMS Software"],
              ["Pioneer", "IT Officer"],
              ["GitHub", "@ashishshrestha007"],
            ].map(([name, note]) => (
              <a
                key={name}
                href="#"
                className="group flex flex-col gap-1"
              >
                <span className="font-sans text-[13px] font-medium text-foreground transition-colors group-hover:text-accent">
                  {name}
                  <ArrowUpRight
                    size={11}
                    weight="bold"
                    className="ml-1 inline-block align-baseline opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                  {note}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>Build 2026.05.10 &nbsp;&middot;&nbsp; Ashish Shrestha &nbsp;&middot;&nbsp; Systems Online</span>
          <span>Portfolio of Ashish Shrestha &mdash; Full Stack Developer</span>
        </div>
      </div>
    </footer>
  );
}
