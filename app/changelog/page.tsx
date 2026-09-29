import { CheckCircle2, Plus, Sparkles, Wrench } from "lucide-react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { releases } from "@/src/data/changelog";

export const metadata: Metadata = { title: "Changelog", description: "Follow KLYP releases, improvements, and fixes." };

export default function ChangelogPage() {
  return <main><SiteHeader />
    <section className="subhero simple-subhero"><div className="shell"><span className="eyebrow">Release history</span><h1>What&apos;s new in KLYP</h1><p>New capture features, workflow improvements, and fixes — release by release.</p></div></section>
    <section className="section changelog"><div className="shell release-list">{releases.map((release) => <article className="release" key={release.version}>
      <div className="release-meta"><span className="release-version">KLYP {release.version}</span><time>{release.date}</time><p>{release.summary}</p></div>
      <div className="release-content"><ChangeGroup icon={<Plus />} title="Added" items={release.added} /><ChangeGroup icon={<Sparkles />} title="Improved" items={release.improved} /><ChangeGroup icon={<Wrench />} title="Fixed" items={release.fixed} /></div>
    </article>)}</div></section><SiteFooter /></main>;
}

function ChangeGroup({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return <div className="change-group"><h2>{icon}{title}</h2><ul>{items.map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul></div>;
}
