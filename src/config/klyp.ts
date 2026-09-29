export const klyp = {
  appName: "KLYP",
  currentVersion: "1.0.0",
  releaseDate: "September 29, 2026",

  installerUrl:
    "https://github.com/karimkhalid-design/KLYP-Releases/releases/latest/download/KLYP-Setup.exe",

  installerFilename: "KLYP-Setup.exe",
  installerSize: "268 MB",

  discordUrl: "",
  siteUrl: "",
} as const;

export const hasInstaller = Boolean(klyp.installerUrl);
export const hasDiscord = Boolean(klyp.discordUrl);
