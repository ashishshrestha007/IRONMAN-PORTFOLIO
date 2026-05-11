export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Merging academic theory with professional full-stack development experience.",
    speaker: "Ashish Shrestha",
    film: "FULL STACK DEVELOPER",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "Passionate about creating innovative digital solutions that solve real-world problems.",
    speaker: "Ashish Shrestha",
    film: "IT OFFICER @ PIONEER",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Building scalable architecture with a focus on seamless user experiences.",
    speaker: "Ashish Shrestha",
    film: "CO-FOUNDER @ TAPSTIK",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
