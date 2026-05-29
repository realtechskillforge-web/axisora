import type { FreelanceData } from "@/components/site/FreelanceTemplate";

export const PROJECTS = [
  { name: "junkyardnear.me", url: "junkyardnear.me", note: "Junkyard discovery platform with location-based listings." },
  { name: "jaskautoparts.com", url: "jaskautoparts.com", note: "Auto parts catalog and ordering portal for B2B clients." },
  { name: "stylehueapparels.com", url: "stylehueapparels.com", note: "Apparel commerce storefront with full inventory management." },
  { name: "gandikotafirecamping.fun", url: "gandikotafirecamping.fun", note: "Camping experience booking site with rich landing pages." },
  { name: "nextkeymedia.com", url: "nextkeymedia.com", note: "Media agency website with portfolio and lead capture." },
  { name: "villagenaturalsorganic.store", url: "villagenaturalsorganic.store", note: "Organic store with product catalog and online ordering." },
];

export const FREELANCING: Record<string, FreelanceData> = {
  "full-stack": {
    category: "Full Stack Applications",
    title: "Full Stack Web Applications — digital shops, shop management, and digital institutions",
    tagline:
      "We build end-to-end web platforms: online shops, shop management systems, and digital institution portals — designed for real operations, not just demos.",
    color: "#10b981",
    colorTo: "#34d399",
    services: [
      "Online / digital shop platforms",
      "Shop & inventory management dashboards",
      "Digital institution / academy portals",
      "Custom admin panels and CRMs",
      "Authentication, payments, and roles",
      "API design and integrations",
    ],
    stack: ["React", "Next.js", "TanStack Start", "Node.js", "Supabase", "Postgres", "Stripe", "Cloudflare"],
    projects: [
      PROJECTS[0],
      PROJECTS[1],
      PROJECTS[2],
      PROJECTS[5],
    ],
  },
  frontend: {
    category: "Frontend Development",
    title: "Pixel-perfect frontend builds and SPA development",
    tagline:
      "Marketing sites, dashboards, and product UIs built with modern React, Angular, and Tailwind — fast, accessible, and on-brand.",
    color: "#dc2626",
    colorTo: "#f87171",
    services: [
      "Landing pages & marketing sites",
      "Dashboards and admin UIs",
      "Design-to-code (Figma → React/Angular)",
      "Component libraries and design systems",
      "Animation and motion design",
      "Performance + accessibility audits",
    ],
    stack: ["React", "Angular", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
    projects: [PROJECTS[3], PROJECTS[4], PROJECTS[0]],
  },
  "wordpress-shopify": {
    category: "WordPress / Shopify",
    title: "WordPress & Shopify stores with serious polish",
    tagline:
      "We design and ship Shopify storefronts and WordPress sites that load fast, convert well, and are easy for clients to maintain.",
    color: "#7c3aed",
    colorTo: "#c4b5fd",
    services: [
      "Shopify theme customization & app integration",
      "WooCommerce stores",
      "WordPress sites with custom themes",
      "Migrations (WordPress ↔ Shopify)",
      "Speed and Core Web Vitals tuning",
      "Maintenance retainers",
    ],
    stack: ["Shopify", "Liquid", "WordPress", "WooCommerce", "PHP", "ACF"],
    projects: [PROJECTS[2], PROJECTS[5], PROJECTS[1]],
  },
  "static-sites": {
    category: "Static HTML / CSS / JS",
    title: "Lean, fast static sites — pure HTML, CSS, JS",
    tagline:
      "Sometimes you don't need a framework. We build crisp, hand-crafted static sites that load instantly and host for cents.",
    color: "#f59e0b",
    colorTo: "#fcd34d",
    services: [
      "Marketing one-pagers",
      "Brochure & campaign microsites",
      "Event landing pages",
      "Lightweight portfolios",
      "Cloudflare Pages / Netlify deploys",
      "Form integrations",
    ],
    stack: ["HTML5", "CSS3", "Vanilla JS", "Alpine.js", "Cloudflare Pages"],
    projects: [PROJECTS[3], PROJECTS[4]],
  },
  "digital-marketing": {
    category: "Digital Marketing",
    title: "Digital marketing that actually moves the needle",
    tagline:
      "Performance marketing, social, and content strategy — run for the same clients whose sites we build, so results connect end-to-end.",
    color: "#ec4899",
    colorTo: "#f9a8d4",
    services: [
      "Meta & Google Ads campaigns",
      "Social media management",
      "Lead funnels and landing pages",
      "Email marketing & automations",
      "Influencer & creator outreach",
      "Analytics dashboards",
    ],
    stack: ["Meta Ads", "Google Ads", "GA4", "Mailchimp", "HubSpot", "Looker Studio"],
    projects: [PROJECTS[2], PROJECTS[5], PROJECTS[4]],
  },
  seo: {
    category: "SEO & Content",
    title: "SEO and content writing for real organic growth",
    tagline:
      "Technical SEO, content strategy, and long-form writing that ranks — across all the sites we deliver and beyond.",
    color: "#0ea5e9",
    colorTo: "#7dd3fc",
    services: [
      "Technical SEO audits",
      "On-page optimization",
      "Keyword research and clustering",
      "Long-form content writing",
      "Schema / structured data",
      "Backlink and outreach campaigns",
    ],
    stack: ["Ahrefs", "SEMrush", "Screaming Frog", "GSC", "Surfer"],
    projects: [PROJECTS[1], PROJECTS[2], PROJECTS[5]],
  },
};
