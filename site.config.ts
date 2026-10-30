export const siteConfig = {
  language: "en",
  locale: "en_US",
  siteUrl: undefined as string | undefined,
  siteMode: "local" as "local" | "production",
  contentStatus: "ready" as "demo" | "draft" | "ready",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products/" },
    { label: "Manufacturing", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
};
