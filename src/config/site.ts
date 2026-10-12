export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Aftergods Wiki",
  shortName: "Aftergods",
  logoText: "A",
  tagline: "Builds, Guides & Survival Tips",
  description: "Explore Aftergods Wiki for builds, guides, classes, crafting, survival tips and updates. Discover Godborn gameplay, co-op features, resources and strategies for this mythic action RPG.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aftergods.top",
  supportEmail: "support@aftergods.top",
  gameUrl: "https://store.steampowered.com/app/2375790",
  heroVideoId: "kATH2cBM3V0",
  social: {
    discord: "https://discord.com/invite/aftergods",
    youtube: "https://www.youtube.com/@aftergodsgame",
  },
  locales: ["en", "de", "ja", "es"],
  defaultLocale: "en",
};
