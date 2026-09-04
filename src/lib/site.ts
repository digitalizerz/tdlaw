export const site = {
  name: "T.D. Armstrong Law Firm, P.C.",
  legalName: "T. D. Armstrong Law Firm, P. C.",
  tagline: "The Strong Defense",
  url: "https://tdarmstronglaw.com",
  phone: "713.265.8834",
  phoneHref: "tel:+17132658834",
  email: "contact@tdarmstronglaw.com",
  emailHref: "mailto:contact@tdarmstronglaw.com",
  address: {
    line1: "6200 Savoy Drive, Suite 548",
    line2: "Houston, Texas 77036",
    city: "Houston, Texas",
  },
  hours: {
    weekday: "Mon–Fri: 8am – 6pm",
    saturday: "Sat: 10am – 4pm",
    note: "On call 24/7",
  },
  social: {
    facebook: "https://www.facebook.com/tdarmstronglaw/",
  },
} as const;

export const navLinks = [
  { href: "/about-us/", label: "The Firm" },
  { href: "/practice-areas/", label: "Practice Areas" },
  { href: "/testimonials/", label: "Testimonials" },
  { href: "/contact/", label: "Contact" },
] as const;

export const legalLinks = [
  { href: "/terms/", label: "Terms and Conditions" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/cookie-policy/", label: "Cookie Policy and Data Protection" },
  { href: "/complaints/", label: "Complaints Policy" },
  { href: "/faq/", label: "FAQ" },
] as const;
