import { AlertTriangle } from "lucide-react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <main><SiteHeader /><section className="subhero simple-subhero legal-hero"><div className="shell"><span className="eyebrow">Legal</span><h1>{title}</h1><p>Last updated: Pending legal review</p></div></section>
    <section className="section legal"><div className="shell legal-shell"><aside><AlertTriangle /><strong>Draft placeholder</strong><p>This page is structured for final legal copy, but no legal claims have been invented.</p></aside><article>{children}</article></div></section><SiteFooter /></main>;
}
