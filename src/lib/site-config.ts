// Central site configuration. Edit these to repoint contact endpoints.
export const SITE = {
  brand: "Axisora Forge",
  // Numbers in international format, digits only (no +, spaces, or dashes).
  whatsappNumber: "916304024159",
  phoneNumber: "+916304024159",
  email: "hello@axisoraforge.com",
  defaultWhatsAppMessage: "Hi, I would like to know more about your courses.",
  // Paste your deployed Google Apps Script Web App /exec URL here.
  // (See README in chat for the Apps Script code.)
  sheetsWebhookUrl: "",
  domain: "https://apex-acumen-nexus.lovable.app",
};

export const COURSE_OPTIONS = [
  "Java Full Stack Engineer — Angular",
  "AI-Enabled Java Backend Engineering",
  "Angular Front End Engineer",
  "Flutter App Development",
  "Java Android Development",
  "Digital Marketing Course",
  "Java Placement Program",
  "Python Placement Program",
];

export const PROJECT_TYPES = [
  "Web Application",
  "Mobile Application",
  "AI Project",
  "Java Project",
  "Python Project",
  "Academic Project",
  "Freelancing Project",
];

export function buildWhatsAppUrl(message: string, number = SITE.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
