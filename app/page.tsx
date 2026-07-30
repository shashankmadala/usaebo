import Image from "next/image";
import { AnnouncementList } from "@/components/AnnouncementList";
import { ButtonLink } from "@/components/ButtonLink";
import { NewsletterForm } from "@/components/Forms";
import { InfoCard } from "@/components/InfoCard";
import { PathwayRail } from "@/components/PathwayRail";
import { SectionHeader } from "@/components/SectionHeader";
import { competition2027 } from "@/lib/content/competition";
import { latestAnnouncements } from "@/lib/content/news";
import { pastProblems } from "@/lib/content/results";
import { site } from "@/lib/content/site";
import { ieo2026, teamUsa2026 } from "@/lib/content/team";

const currentCycleRows = [
  ["Registration deadline", competition2027.deadline],
  ["Round 1", `${competition2027.rounds[0].date}, ${competition2027.rounds[0].time}`],
  ["Round 1 format", competition2027.rounds[0].format],
  ["Round 2", `${competition2027.rounds[1].date}, ${competition2027.rounds[1].time}`],
  ["Round 2 format", competition2027.rounds[1].format],
] as const;

const resourceLinks = [
  {
    title: "Compete",
    eyebrow: "Overview",
    body: "Start with the structure, eligibility, schedule, and registration details for the competition cycle.",
    href: "/compete",
  },
  {
    title: "2027 USAEBO",
    eyebrow: "Current cycle",
    body: "Review the official dates, round formats, award systems, and proctoring notes.",
    href: "/compete/2027",
  },
  {
    title: "Syllabus",
    eyebrow: "Preparation",
    body: "See the official microeconomics, macroeconomics, business, and finance topics.",
    href: "/compete/syllabus",
  },
  {
    title: "Rules",
    eyebrow: "Competition policy",
    body: "Read the eligibility, structure, proctoring, and disqualification policies.",
    href: "/compete/rules",
  },
  {
    title: "Results",
    eyebrow: "Hall of fame",
    body: "Browse the 2026 Round 2 award ranking list from the official spreadsheet.",
    href: "/results",
  },
  {
    title: "Past problems",
    eyebrow: "Archive",
    body: `Access the official ${pastProblems[0].year} Round 1 and Round 2 problem links.`,
    href: "/results/past-problems",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-content px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">
          <p className="text-sm font-semibold text-violet-deep">{competition2027.registrationStatus}</p>
          <h1 className="mx-auto mt-6 max-w-4xl font-heading text-5xl font-bold leading-[0.98] tracking-tight text-indigo sm:text-6xl lg:text-7xl">
            USA Economics and{" "}
            <span className="font-accent font-normal italic text-violet-deep">Business Olympiad</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-ink/65 sm:text-lg">
            The only pathway for K-12 students in the US to represent Team USA at the International
            Economics Olympiad.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-x-8 gap-y-4 sm:flex-row">
            <ButtonLink href={site.registerUrl}>Register</ButtonLink>
            <ButtonLink href="/compete" variant="link">
              How it works
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-ink/45">
            Round 1: {competition2027.rounds[0].date} · Digital, from anywhere · Free to enter
          </p>
        </div>
        <div className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-8">
          <PathwayRail compact />
        </div>
      </section>

      <section className="border-t border-ink/8 bg-paper">
        <div className="mx-auto grid max-w-content gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <article>
            <p className="text-sm font-semibold text-violet-deep">Current cycle</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-indigo">2027 USAEBO</h2>
            <dl className="mt-6 divide-y divide-ink/8 border-y border-ink/8">
              {currentCycleRows.map(([label, value]) => (
                <div className="grid gap-2 py-4 text-sm sm:grid-cols-[11rem_1fr]" key={label}>
                  <dt className="font-semibold text-indigo">{label}</dt>
                  <dd className="text-ink/65">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href={site.registerUrl}>Register</ButtonLink>
              <ButtonLink href="/compete/2027" variant="link">
                View schedule
              </ButtonLink>
            </div>
          </article>

          <article>
            <p className="text-sm font-semibold text-violet-deep">International stage</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-indigo">Team USA and IEO</h2>
            <div className="mt-6 overflow-hidden rounded-2xl">
              <Image
                alt="Team USA delegation at the International Economics Olympiad"
                className="aspect-[16/9] w-full object-cover"
                height={360}
                src="/images/team-usa-ieo-2026.jpg"
                width={640}
              />
            </div>
            <dl className="mt-6 divide-y divide-ink/8 border-y border-ink/8">
              <div className="grid gap-2 py-4 text-sm sm:grid-cols-[11rem_1fr]">
                <dt className="font-semibold text-indigo">Team USA</dt>
                <dd className="text-ink/65">
                  {teamUsa2026.traveling.length} traveling members and {teamUsa2026.alternatives.length} alternative
                  members are listed for the 2026 IEO.
                </dd>
              </div>
              <div className="grid gap-2 py-4 text-sm sm:grid-cols-[11rem_1fr]">
                <dt className="font-semibold text-indigo">IEO 2026</dt>
                <dd className="text-ink/65">
                  {ieo2026.location}, {ieo2026.dates}
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href="/team-usa" variant="link">
                Meet Team USA
              </ButtonLink>
              <ButtonLink href={site.forumUrl} variant="link">
                Open forum
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-ink/8 bg-paper">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Information"
            title="Competition pages"
            body="The site is organized around the pages students, parents, and teachers need most often."
          />
          <div className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
            {resourceLinks.map((item) => (
              <InfoCard body={item.body} eyebrow={item.eyebrow} href={item.href} key={item.href} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/8 bg-paper">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <SectionHeader
            eyebrow="News"
            title="Latest announcements"
            body="Updates are carried over from the official USAEBO announcements page."
          />
          <AnnouncementList items={latestAnnouncements} />
        </div>
      </section>

      <section className="border-t border-ink/8 bg-indigo">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold text-salmon">2027 USAEBO</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-paper">Register for Round 1</h2>
            <p className="mt-4 text-sm leading-6 text-paper/70">
              Registration closes on February 27, 2027 at 11:59pm ET.
            </p>
            <div className="mt-6">
              <ButtonLink href={site.registerUrl} variant="invert">
                Register
              </ButtonLink>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-paper">Newsletter</p>
            <NewsletterForm dark />
          </div>
        </div>
      </section>
    </>
  );
}
