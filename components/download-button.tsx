import Link from "next/link";
import { Download, MessageCircle } from "lucide-react";
import { hasDiscord, hasInstaller, klyp } from "@/src/config/klyp";

export function DownloadButton({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  const label = compact ? "Download" : "Download KLYP for Windows";
  return (
    <Link className={`button button-primary ${compact ? "button-compact" : ""} ${className}`} href={hasInstaller ? klyp.installerUrl : "/download"} download={hasInstaller ? klyp.installerFilename : undefined}>
      <Download aria-hidden="true" />{label}
    </Link>
  );
}

export function DiscordButton({ className = "" }: { className?: string }) {
  return (
    <a className={`button button-secondary ${!hasDiscord ? "button-placeholder" : ""} ${className}`} href={hasDiscord ? klyp.discordUrl : undefined} aria-disabled={!hasDiscord}>
      <MessageCircle aria-hidden="true" />Join Discord
    </a>
  );
}
