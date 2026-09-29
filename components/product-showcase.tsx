"use client";

import Image from "next/image";
import { useState } from "react";

const screens = [
  { id: "home", label: "Home", src: "/screenshots/klyp-home.webp", detail: "See capture status, save a replay, and jump straight into recent clips." },
  { id: "clips", label: "Clips Library", src: "/screenshots/klyp-clips.webp", detail: "Browse every saved moment and inspect clips without leaving your library." },
  { id: "settings", label: "Settings", src: "/screenshots/klyp-settings.webp", detail: "Tune replay length, hotkeys, startup behavior, storage, and audio." },
];

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const screen = screens[active];
  return (
    <div className="showcase-grid">
      <div className="showcase-copy">
        <span className="eyebrow">Inside KLYP</span>
        <h2>Every clip. One focused workflow.</h2>
        <p>{screen.detail}</p>
        <div className="screen-tabs" role="tablist" aria-label="KLYP application screens">
          {screens.map((item, index) => (
            <button key={item.id} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
              <span>0{index + 1}</span>{item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="app-stage">
        <div className="app-glow" />
        <div className="app-window" key={screen.id}>
          <Image src={screen.src} alt={`KLYP ${screen.label} screen`} width={1920} height={1080} sizes="(max-width: 800px) 94vw, 64vw" />
        </div>
      </div>
    </div>
  );
}
