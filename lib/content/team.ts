export const ieo2026 = {
  location: "Shenzhen, China",
  dates: "July 12-19, 2026",
  source: "https://files.ieo-official.org/2026/AR_2026.pdf",
} as const;

export const internationalResults2026 = {
  businessCase:
    "Team USA placed 6th out of 52 national teams in the International Business Case Competition.",
  medals: [
    { medal: "Gold", name: "Eli Orbach", school: "Phillips Exeter Academy", location: "Exeter, NH" },
    { medal: "Silver", name: "Praneeth Annapureddy", school: "BASIS Chandler", location: "Chandler, AZ" },
    { medal: "Bronze", name: "Jesse Zhang", school: "Elite Preparatory Academy", location: "Hopatcong, NJ" },
  ],
  honors: [
    { title: "Best in Economics", detail: "Honorable Mention for Eli Orbach, Phillips Exeter Academy" },
    { title: "IEOx Youth Talks", detail: "Finalist recognition for Utsav Sunil Kumar, Heritage High School" },
  ],
  pressRelease:
    "https://drive.google.com/file/d/15I7tgxzxjMqACQY15ux1gRsrri5vtUIZ/view?usp=drive_link",
  businessCaseSource:
    "https://www.newjerseystage.com/articles2/2026/07/23/two-new-jersey-students-among-five-to-represent-usa-at-2026-international-economics-olympiad-in-china/",
} as const;

export const teamUsa2026 = {
  traveling: [
    {
      name: "Praneeth Annapureddy",
      school: "BASIS Chandler",
      location: "Chandler, AZ",
      image: "/images/praneeth-annapureddy.jpg",
    },
    {
      name: "Eli Orbach",
      school: "Phillips Exeter Academy",
      location: "Exeter, NH",
      image: "/images/eli-orbach.jpg",
    },
    {
      name: "Jesse Zhang",
      school: "Elite Preparatory Academy",
      location: "Hopatcong, NJ",
      image: "/images/jesse-zhang.jpg",
    },
    {
      name: "Shashank Madala",
      school: "Robbinsville High School",
      location: "Robbinsville, NJ",
      image: "/images/shashank-madala.jpg",
    },
    {
      name: "Utsav Sunil Kumar",
      school: "Heritage High School",
      location: "Frisco, TX",
      image: "/images/utsav-sunil-kumar.jpg",
    },
  ],
  alternatives: [
    {
      name: "Lincoln Marine",
      school: "Langley High School",
      location: "McLean, VA",
    },
    {
      name: "Nithin Vargese",
      school: "Thomas Jefferson High School for Science and Technology",
      location: "Alexandria, VA",
    },
  ],
} as const;

export const leadership = [
  {
    name: "Steven Chen",
    role: "Director",
    bio: "Directs the USAEBO competition cycle, from national rounds to Team USA selection.",
  },
  {
    name: "Sofia Ong",
    role: "Director",
    bio: "Directs USAEBO operations and the programs that prepare Team USA for the international stage.",
  },
] as const;

export const studentAmbassadors = {
  intro:
    "The five members of the 2026 Team USA also serve as USAEBO Student Ambassadors, representing the olympiad to students and schools across the country.",
  members: teamUsa2026.traveling,
} as const;
