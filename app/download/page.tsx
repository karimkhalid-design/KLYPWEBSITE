import Image from "next/image";
import type { Metadata } from "next";
import { Check, CircleHelp, Download, HardDrive, Monitor, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DiscordButton } from "@/components/download-button";
import { hasInstaller, klyp } from "@/src/config/klyp";
import { releases } from "@/src/data/changelog";

export const metadata: Metadata = { title: "Download", description: "Download KLYP for Windows and start saving the gaming moments worth keeping." };

export default function DownloadPage() {
  const latest = releases[0];
  return (
    <main><SiteHeader />
      <section className="subhero download-hero">
        <Image src="/media/klyp-atmosphere.webp" alt="" fill priority sizes="100vw" />
        <div className="subhero-shade" />
        <div className="shell download-grid">
          <div><span className="eyebrow">Latest release · {klyp.currentVersion}</span><h1>KLYP for Windows</h1><p>Capture your gameplay. Keep the moments that matter.</p>
            <a className={`button button-primary button-large ${!hasInstaller ? "button-placeholder" : ""}`} href={hasInstaller ? klyp.installerUrl : undefined} download={hasInstaller ? klyp.installerFilename : undefined} aria-disabled={!hasInstaller}><Download />Download KLYP for Windows</a>
            {!hasInstaller && <p className="config-note">Installer link pending. Add it once in the release configuration to activate every download button.</p>}
            <div className="compat"><span><Monitor />Windows 10 / 11</span><span><HardDrive />64-bit</span></div>
          </div>
          <div className="download-mark"><Image src="/brand/klyp-symbol.png" alt="KLYP symbol" width={760} height={510} /></div>
        </div>
      </section>
      <section className="section"><div className="shell info-grid">
        <article className="info-card"><Monitor /><h2>System requirements</h2><ul><li>Windows 10 or Windows 11</li><li>64-bit processor and operating system</li><li>DirectX-compatible GPU</li><li>Available storage for your clip library</li></ul><small>Final hardware recommendations require validation before launch.</small></article>
        <article className="info-card"><ShieldCheck /><h2>Release details</h2><dl><div><dt>Version</dt><dd>{klyp.currentVersion}</dd></div><div><dt>Released</dt><dd>{klyp.releaseDate}</dd></div><div><dt>Installer</dt><dd>{klyp.installerFilename}</dd></div><div><dt>Size</dt><dd>{klyp.installerSize}</dd></div></dl></article>
        <article className="info-card"><CircleHelp /><h2>Need help?</h2><p>Join the KLYP community for setup help, bug reports, and release updates.</p><DiscordButton /></article>
      </div></section>
      <section className="section latest"><div className="shell latest-grid"><div><span className="eyebrow">Latest changes</span><h2>KLYP {latest.version}</h2><p>{latest.summary}</p></div><ul>{latest.added.slice(0, 4).map((item) => <li key={item}><Check />{item}</li>)}</ul></div></section>
      <SiteFooter />
    </main>
  );
}
