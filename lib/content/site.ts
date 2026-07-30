export const site = {
  name: "USA Economics and Business Olympiad",
  shortName: "USAEBO",
  url: "https://www.usaebo.org",
  description:
    "USAEBO is the only pathway for K-12 students in the US to be on Team USA for the International Economics Olympiad.",
  registerUrl: "https://portal.beaver-edge.ai/i/2027-usaebo-round1-registration",
  forumUrl: "https://www.usaebo.org/forum",
  contactEmail: "info@usaebo.org",
  logoUrl:
    "https://static.wixstatic.com/media/87b792_8deb25e61ca8409485e29c3baa8070fc%7Emv2.webp/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/87b792_8deb25e61ca8409485e29c3baa8070fc%7Emv2.webp",
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
  { label: "Home", href: "/" },
  {
    label: "Compete",
    href: "/compete",
    children: [
      { label: "Overview", href: "/compete" },
      { label: "2027", href: "/compete/2027" },
      { label: "Syllabus", href: "/compete/syllabus" },
      { label: "Rules", href: "/compete/rules" },
    ],
  },
  {
    label: "Results",
    href: "/results",
    children: [
      { label: "Hall of fame", href: "/results" },
      { label: "Past problems", href: "/results/past-problems" },
    ],
  },
  { label: "Team USA", href: "/team-usa" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
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
  "/dev/kit",
] as const;

export const sourceLinks = [
  { label: "Official USAEBO home", href: "https://www.usaebo.org/" },
  { label: "Official 2027 USAEBO page", href: "https://www.usaebo.org/2027-usaebo" },
  { label: "Official syllabus", href: "https://www.usaebo.org/syllabus" },
  { label: "Official Hall of Fame", href: "https://www.usaebo.org/hall-of-fame" },
  { label: "Official past problems", href: "https://www.usaebo.org/past-problems" },
  { label: "Official Team USA page", href: "https://www.usaebo.org/2026-team-usa" },
  { label: "IEO 2026 regulations", href: "https://files.ieo-official.org/2026/AR_2026.pdf" },
] as const;
