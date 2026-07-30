export const site = {
  name: "USA Economics and Business Olympiad",
  shortName: "USAEBO",
  url: "https://www.usaebo.org",
  description:
    "USAEBO is the only pathway for K-12 students in the US to be on Team USA for the International Economics Olympiad.",
  registerUrl: "https://portal.beaver-edge.ai/i/2027-usaebo-round1-registration",
  contactEmail: "info@usaebo.org",
  logoUrl: "/images/logo.png",
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/usaebo_official/",
    },
    {
      label: "X",
      href: "https://x.com/EconBiz83711",
    },
    {
      label: "Discord",
      href: "https://discord.gg/XZ6axrTZ9n",
    },
  ],
} as const;

export const navItems = [
  {
    label: "Compete",
    href: "/compete",
    children: [
      { label: "Overview", href: "/compete" },
      { label: "2027 Cycle", href: "/compete/2027" },
      { label: "Syllabus", href: "/compete/syllabus" },
      { label: "Rules", href: "/compete/rules" },
    ],
  },
  {
    label: "Results",
    href: "/results",
    children: [
      { label: "Hall of Fame", href: "/results" },
      { label: "Past Problems", href: "/results/past-problems" },
    ],
  },
  { label: "Team USA", href: "/team-usa" },
  { label: "News", href: "/news" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About & Leadership", href: "/about" },
      { label: "Sponsors", href: "/sponsors" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

export const footerColumns = [
  {
    title: "Compete",
    links: [
      { label: "Overview", href: "/compete" },
      { label: "2027 Cycle", href: "/compete/2027" },
      { label: "Syllabus", href: "/compete/syllabus" },
      { label: "Rules", href: "/compete/rules" },
    ],
  },
  {
    title: "Results",
    links: [
      { label: "Hall of Fame", href: "/results" },
      { label: "Past Problems", href: "/results/past-problems" },
      { label: "Team USA", href: "/team-usa" },
    ],
  },
  {
    title: "Organization",
    links: [
      { label: "About & Leadership", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Sponsors", href: "/sponsors" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

export const internalRoutes = [
  "/",
  "/compete",
  "/compete/2027",
  "/compete/syllabus",
  "/compete/rules",
  "/results",
  "/results/past-problems",
  "/team-usa",
  "/about",
  "/news",
  "/sponsors",
  "/contact",
] as const;
