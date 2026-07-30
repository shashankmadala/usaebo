import { site } from "./site";
import { ieo2026, internationalResults2026 } from "./team";

export const announcements = [
  {
    date: "July 21, 2026",
    title: "Team USA earns medals at IEO 2026",
    body: [
      `Team USA brought home 1 Gold, 1 Silver, and 1 Bronze at the 2026 International Economics Olympiad held in ${ieo2026.location} during ${ieo2026.dates}.`,
      "Gold: Eli Orbach, Phillips Exeter Academy, Exeter, NH.",
      "Silver: Praneeth Annapureddy, BASIS Chandler, Chandler, AZ.",
      "Bronze: Jesse Zhang, Elite Preparatory Academy, Hopatcong, NJ.",
      "Honorable Mention, Best in Economics: Eli Orbach, Phillips Exeter Academy, Exeter, NH.",
      "Finalist in IEOx Youth Talks: Utsav Sunil Kumar, Heritage High School in Frisco, Texas.",
      internationalResults2026.businessCase,
    ],
    links: [
      {
        label: "Open press release",
        href: "https://drive.google.com/file/d/15I7tgxzxjMqACQY15ux1gRsrri5vtUIZ/view?usp=drive_link",
      },
      {
        label: "Open business case source",
        href: internationalResults2026.businessCaseSource,
      },
    ],
  },
  {
    date: "July 15, 2026",
    title: "Registration opens for the 2027 USAEBO",
    body: [
      "The registration for the 2027 USAEBO is open now.",
      "The details of the 2027 competition cycle are available on the 2027 USAEBO page.",
    ],
    links: [
      { label: "Register for Round 1", href: site.registerUrl },
      { label: "View 2027 details", href: "/compete/2027" },
    ],
  },
  {
    date: "June 14, 2026",
    title: "Round 2 awardee list and Team USA selection",
    body: [
      "The Round 2 awardee list has been posted.",
      "Team USA for the 2026 IEO has been selected.",
    ],
    links: [
      { label: "View Hall of Fame", href: "/results" },
      { label: "Meet Team USA", href: "/team-usa" },
    ],
  },
  {
    date: "May 31, 2026",
    title: "Round 2 problems posted",
    body: ["The 2026 USAEBO Round 2 problems have been posted."],
    links: [
      {
        label: "Open Round 2 problems",
        href: "https://drive.google.com/file/d/1VO1k8unevsXHT23enKLUWeFjEO5Ab3cs/view?usp=drive_link",
      },
    ],
  },
  {
    date: "May 21, 2026",
    title: "Round 1 problems posted",
    body: ["The 2026 USAEBO Round 1 problems have been posted."],
    links: [
      {
        label: "Open Round 1 problems",
        href: "https://drive.google.com/file/d/1VN_jJc6S1AH64pAaKya5DuseojfNlFKH/view",
      },
    ],
  },
] as const;

export const latestAnnouncements = announcements.slice(0, 3);
