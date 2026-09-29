export type Release = {
  version: string;
  date: string;
  summary: string;
  added: string[];
  improved: string[];
  fixed: string[];
};

export const releases: Release[] = [
  {
    version: "1.0.0",
    date: "September 29, 2026",
    summary: "Initial public release.",
    added: [
      "Instant replay capture for supported Windows games",
      "A searchable local library for saved clips",
      "Global save and quick-panel hotkeys",
      "Separate handling for game and system audio",
    ],
    improved: [
      "Lightweight capture architecture designed for background use",
      "Clear replay status and storage visibility throughout the app",
    ],
    fixed: ["Release candidate stability fixes and interface polish"],
  },
];
