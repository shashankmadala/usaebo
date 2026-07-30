import { site } from "./site";

export const pathwayStages = [
  {
    label: "Round 1",
    detail: "Open online round with 40 multiple-choice problems.",
  },
  {
    label: "Round 2",
    detail: "Qualifier round with free-response problems and reasoning.",
  },
  {
    label: "Team USA",
    detail: "Five students are selected from Round 2 for Team USA.",
  },
  {
    label: "IEO",
    detail: "Team USA represents the US at the International Economics Olympiad.",
  },
] as const;

export const competition2027 = {
  title: "2027 USAEBO",
  registrationStatus: "Registration is open",
  registrationAnnounced: "July 15, 2026",
  registrationUrl: site.registerUrl,
  deadline: "February 27, 2027, 11:59pm ET",
  eligibility: [
    "Students may participate with any citizenship.",
    "Students must be 20 years old or under on the first day of the international competition in the competition year.",
    "To be eligible for Team USA, a student must be a U.S. citizen, a U.S. permanent resident, or a full-time middle or high school student studying in the U.S.",
  ],
  structure: [
    "Two rounds: Round 1 is open to everyone, and Round 2 is for students who qualify through Round 1.",
    "Five students will be selected from Round 2 to represent the U.S. at the International Economics Olympiad.",
    "The competition is individual-based.",
  ],
  rounds: [
    {
      name: "Round 1",
      date: "March 13, 2027",
      time: "8-9pm ET",
      format: "40 multiple-choice problems",
      awards: "Distinguished Honor rolls, High Honor rolls, Honor rolls",
      delivery: "Digital",
      location: "Anywhere, such as school, home, library",
    },
    {
      name: "Round 2",
      date: "March 27, 2027",
      time: "8-10pm ET",
      format: "Open free-response problems with reasoning",
      awards: "Gold, Silver, Bronze, Honorable Mention",
      delivery: "Digital",
      location: "Anywhere, such as school, home, library",
    },
  ],
  proctors: ["Each round must be proctored by using the required technology."],
  disqualification: [
    "USAEBO has a one-cheating, permanent ban policy.",
    "If a student is identified as cheating, the student is permanently disqualified from the current and all future competition cycles.",
    "If an educational program requests information about a disqualified student's USAEBO history, USAEBO will truthfully disclose the cheating behavior and disqualification decision.",
    "All decisions are final.",
  ],
} as const;
