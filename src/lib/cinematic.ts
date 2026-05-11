export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n: number) =>
  `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — IT Stationary",
    quote: "Engineered robust IT infrastructure and cloud networking solutions for reliable business continuity.",
    speaker: "Ashish Shrestha",
    film: "INFRASTRUCTURE PROJECT",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — Cheque Tracker",
    quote: "Developed a comprehensive management system to streamline and verify financial transactions efficiently.",
    speaker: "Ashish Shrestha",
    film: "FINTECH SOLUTION",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Tapstik RMS",
    quote: "Architecting the future of restaurant management with real-time data and intuitive interfaces.",
    speaker: "Ashish Shrestha",
    film: "RMS SOFTWARE",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
