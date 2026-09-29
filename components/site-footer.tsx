import Link from "next/link";
import Image from "next/image";
import { hasDiscord, klyp } from "@/src/config/klyp";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><Image src="/brand/klyp-wordmark.png" alt="KLYP" width={142} height={48} /><p>Keep the moments worth remembering.</p></div>
        <div><strong>Product</strong><Link href="/download">Download</Link><Link href="/changelog">Changelog</Link></div>
        <div><strong>Community</strong><a href={hasDiscord ? klyp.discordUrl : undefined} aria-disabled={!hasDiscord}>Discord</a></div>
        <div><strong>Legal</strong><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
      <div className="shell copyright"><span>© 2026 KLYP</span><span>Made for the moment.</span></div>
    </footer>
  );
}
