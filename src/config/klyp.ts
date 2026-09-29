export const klyp = {
  appName: "KLYP",
  currentVersion: "1.0.0",
  releaseDate: "September 29, 2026",
  installerUrl: "",
  installerFilename: "KLYP-Setup-1.0.0.exe",
  installerSize: "Pending final build",
  discordUrl: "",
  siteUrl: "",
} as const;

export const hasInstaller = Boolean(klyp.installerUrl);
export const hasDiscord = Boolean(klyp.discordUrl);
