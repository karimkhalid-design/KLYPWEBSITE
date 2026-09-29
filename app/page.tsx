import Image from "next/image";
import { Activity, AudioLines, Bolt, Gamepad2, Gauge, Library, MonitorPlay, MousePointerClick, Save, ScanSearch, Sparkles, Zap } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DiscordButton, DownloadButton } from "@/components/download-button";
import { ProductShowcase } from "@/components/product-showcase";

const features = [
  { icon: MonitorPlay, title: "Instant Replay Capture", text: "Save recent gameplay without recording hours of footage.", className: "feature-wide" },
  { icon: Sparkles, title: "High Quality Recording", text: "Designed for sharp, smooth gameplay clips.", className: "" },
  { icon: Gauge, title: "Lightweight Performance", text: "Built to stay out of the way while you play.", className: "feature-tall" },
  { icon: Zap, title: "Global Save Hotkey", text: "Save your replay instantly from anywhere.", className: "" },
  { icon: ScanSearch, title: "Game Detection", text: "KLYP can detect supported games automatically.", className: "" },
  { icon: Library, title: "Clip Library", text: "Keep your saved moments organized in one place.", className: "feature-wide" },
  { icon: AudioLines, title: "Separate Audio Control", text: "Flexible handling for game and system audio.", className: "" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <Image className="hero-bg" src="/media/generated/hero-arena.webp" alt="" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-grid shell">
          <div className="hero-copy">
            <span className="eyebrow"><span className="live-dot" />Windows gaming capture, refined</span>
            <h1>Capture the moment.<br /><span>Keep the replay.</span></h1>
            <p>KLYP keeps recent gameplay ready in the background, so the clutch, comeback, and impossible shot are one hotkey away.</p>
            <div className="button-row"><DownloadButton /><DiscordButton /></div>
            <div className="hero-notes"><span>Windows 10 & 11</span><span>64-bit</span><span>Local clip library</span></div>
          </div>
          <div className="hero-product" aria-label="KLYP application preview">
            <div className="capture-toast"><span className="capture-icon"><Save /></span><span><strong>CLIP SAVED</strong><small>Your last replay is ready</small></span></div>
            <div className="window-shell">
              <div className="window-bar"><span className="mini-mark"><Image src="/brand/klyp-symbol.png" alt="" width={28} height={18} /></span><span>KLYP</span><i /><i /><i /></div>
              <Image src="/screenshots/klyp-home.webp" alt="KLYP home screen showing an active replay buffer and recent clips" width={1920} height={1080} priority sizes="(max-width: 900px) 94vw, 54vw" />
            </div>
            <div className="moment-strip"><span>LIVE GAMEPLAY</span><b /><b /><b className="moment-hot" /><b /><em>Saved to KLYP</em></div>
          </div>
        </div>
      </section>

      <section className="statement section"><div className="shell statement-inner"><span className="section-number">01 / THE IDEA</span><h2>Built for the moments<br />you don&apos;t want to lose.</h2><p>Play first. Decide what was worth keeping after.</p></div></section>

      <section id="how-it-works" className="section how"><div className="shell">
        <div className="section-heading"><div><span className="eyebrow">How KLYP works</span><h2>Play. Capture. Keep the moment.</h2></div><p>No marathon recordings. No digging through hours of footage. KLYP keeps the recent past within reach.</p></div>
        <div className="steps">
          <article><span className="step-index">01</span><Gamepad2 /><h3>Play</h3><p>Play your game normally. KLYP stays ready in the background.</p></article>
          <article><span className="step-index">02</span><Activity /><h3>Capture</h3><p>Your recent gameplay stays available inside a rolling replay buffer.</p></article>
          <article><span className="step-index">03</span><Save /><h3>Keep the moment</h3><p>Press your save hotkey when something worth keeping happens.</p></article>
        </div>
      </div></section>

      <section id="features" className="section features"><div className="shell">
        <div className="section-heading"><div><span className="eyebrow">Purpose-built</span><h2>Everything between the play<br />and the replay.</h2></div><p>A focused capture system, a clean clip library, and controls that stay close when you need them.</p></div>
        <div className="bento">{features.map(({ icon: Icon, title, text, className }) => <article key={title} className={className}><div className="feature-icon"><Icon /></div><h3>{title}</h3><p>{text}</p><span className="card-line" /></article>)}</div>
      </div></section>

      <section id="showcase" className="section showcase"><div className="shell"><ProductShowcase /></div></section>

      <section className="section performance"><div className="shell performance-grid">
        <div><span className="eyebrow">Performance by design</span><h2>Built to stay<br />out of your way.</h2><p>Recording software should capture your gameplay — not fight it.</p><ul><li>Low-overhead design</li><li>GPU-assisted capture architecture</li><li>Background replay capture</li><li>Fast clip saving</li><li>Optimized for gaming</li></ul></div>
        <div className="performance-panel">
          <div className="perf-orbit"><div className="perf-core"><Image src="/brand/klyp-symbol.png" alt="" width={130} height={90} /></div><span className="orbit orbit-one" /><span className="orbit orbit-two" /></div>
          <div className="meters"><div><span>CPU load</span><i><b style={{ width: "36%" }} /></i><em>Balanced</em></div><div><span>GPU capture path</span><i><b style={{ width: "72%" }} /></i><em>Assisted</em></div><div><span>Memory footprint</span><i><b style={{ width: "44%" }} /></i><em>Controlled</em></div></div>
        </div>
      </div></section>

      <section className="section replay"><div className="shell replay-shell">
        <div className="section-heading"><div><span className="eyebrow">Replay, visualized</span><h2>The moment already happened.<br />KLYP kept it close.</h2></div><p>The replay buffer moves with your game. When the moment hits, one action turns the recent past into a saved clip.</p></div>
        <div className="replay-visual">
          <div className="replay-labels"><span>LIVE GAMEPLAY</span><span>RECENT REPLAY BUFFER</span><span>SAVED KLYP CLIP</span></div>
          <div className="frame-track"><div /><div /><div /><div className="clutch-frame"><span>CLUTCH</span></div><div /><div /><div /></div>
          <div className="timeline"><span className="buffer-fill" /><span className="capture-pulse"><MousePointerClick /></span><span className="save-marker"><Save /> SAVE REPLAY</span></div>
        </div>
      </div></section>

      <section className="section community"><div className="shell community-grid">
        <div><span className="eyebrow">Community channel</span><h2>Join the KLYP<br />Community</h2><p>Share clips, report bugs, request features, follow development, and help shape KLYP.</p><DiscordButton /></div>
        <div className="chat-panel"><div className="chat-top"><span># klyp-community</span><span>Feedback welcome</span></div><div className="chat-message"><b>MK</b><p><strong>moment_keeper</strong><span>Saved that last-second round. Finally.</span></p></div><div className="chat-message"><b>RV</b><p><strong>replay_viewer</strong><span>The clip library makes finding it painless.</span></p></div><div className="chat-message accent-message"><b>KL</b><p><strong>KLYP</strong><span>Keep the moment.</span></p></div></div>
      </div></section>

      <section className="final-cta"><div className="final-glow" /><div className="shell"><Bolt /><h2>Ready to capture<br />your best plays?</h2><p>Download KLYP and keep the moments worth remembering.</p><div className="button-row centered"><DownloadButton /><DiscordButton /></div></div></section>
      <SiteFooter />
    </main>
  );
}
