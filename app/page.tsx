import Image from "next/image";
import { AnnouncementList } from "@/components/AnnouncementList";
import { ButtonLink } from "@/components/ButtonLink";
import { InfoCard } from "@/components/InfoCard";
import { Pathway } from "@/components/Pathway";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/Section";
import { competition2027 } from "@/lib/content/competition";
import { latestAnnouncements } from "@/lib/content/news";
import { site } from "@/lib/content/site";
import { internationalResults2026, teamUsa2026 } from "@/lib/content/team";

const stats = [
  { value: "1 / 1 / 1", label: "Gold, Silver, and Bronze medals at the 2026 IEO" },
  { value: "6th of 52", label: "national teams in the International Business Case Competition" },
  { value: "5", label: "students selected for Team USA every cycle" },
  { value: "K-12", label: "students across the US are eligible to compete" },
] as const;

const keyDates = [
  {
    label: "Registration deadline",
    value: competition2027.deadline,
    detail: "Free to register, open to all eligible students",
  },
  {
    label: "Round 1",
    value: `${competition2027.rounds[0].date}, ${competition2027.rounds[0].time}`,
    detail: competition2027.rounds[0].format,
  },
  {
    label: "Round 2",
    value: `${competition2027.rounds[1].date}, ${competition2027.rounds[1].time}`,
    detail: competition2027.rounds[1].format,
  },
] as const;

const resourceLinks = [
  {
    title: "2027 Cycle",
    eyebrow: "Current cycle",
    body: "Official dates, round formats, awards, and proctoring details for this year.",
    href: "/compete/2027",
  },
  {
    title: "Syllabus",
    eyebrow: "Preparation",
    body: "The official microeconomics, macroeconomics, business, and finance topics.",
    href: "/compete/syllabus",
  },
  {
    title: "Past Problems",
    eyebrow: "Archive",
    body: "Official Round 1 and Round 2 problems from previous competition cycles.",
    href: "/results/past-problems",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/8 bg-paper">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(60rem_28rem_at_50%_-8rem,var(--color-gold-100),transparent)]"
        />
        <Container className="relative pb-20 pt-20 text-center sm:pb-24 sm:pt-28">
          <Reveal>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-4 py-1.5 text-sm font-medium text-ink/70 transition-colors duration-200 hover:border-gold-500/60 hover:text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-700"
              href={site.registerUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span aria-hidden="true" className="size-1.5 rounded-full bg-gold-500" />
              Registration for the 2027 USAEBO is open
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mx-auto mt-8 max-w-4xl font-heading text-5xl font-bold leading-[1.02] tracking-tight text-navy-900 sm:text-6xl lg:text-7xl">
              The national olympiad for{" "}
              <span className="font-accent font-normal italic text-gold-600">economics</span> and{" "}
              <span className="font-accent font-normal italic text-gold-600">business</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-ink/60 sm:text-lg">
              The USA Economics and Business Olympiad is the only pathway for K-12 students in the US to
              represent Team USA at the International Economics Olympiad.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-x-7 gap-y-4 sm:flex-row">
              <ButtonLink href={site.registerUrl}>Register for 2027</ButtonLink>
              <ButtonLink href="/compete" variant="link">
                How the olympiad works
              </ButtonLink>
            </div>
            <p className="mt-7 text-sm text-ink/60">
              Round 1: {competition2027.rounds[0].date} · Digital, from anywhere · Individual competition
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-ink/8 bg-paper">
        <Container className="py-12">
          <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal
                className="flex flex-col-reverse border-l-2 border-gold-500 pl-5"
                delay={index * 80}
                key={stat.label}
              >
                <dt className="mt-2 text-sm leading-6 text-ink/60">{stat.label}</dt>
                <dd className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                  {stat.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="From Round 1 to the international stage"
              lead="One competition cycle takes students from an open national round to representing the United States abroad."
            />
          </Reveal>
          <div className="mt-12">
            <Pathway />
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/8 bg-mist">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="2027 cycle"
                  title="Key dates"
                  lead="Both rounds are digital and proctored, and can be taken from school, home, or a library."
                />
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <ButtonLink href={site.registerUrl}>Register</ButtonLink>
                  <ButtonLink href="/compete/2027" variant="link">
                    Full 2027 details
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-ink/8 bg-paper">
                {keyDates.map((row, index) => (
                  <div
                    className={index === 0 ? "p-6 sm:p-7" : "border-t border-ink/8 p-6 sm:p-7"}
                    key={row.label}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">{row.label}</p>
                    <p className="mt-2 font-heading text-xl font-semibold text-navy-900">{row.value}</p>
                    <p className="mt-1 text-sm text-ink/60">{row.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading
                  dark
                  eyebrow="Team USA at IEO 2026"
                  title="A medal-winning debut on the world stage"
                  lead="In the first year the United States competed in person at the International Economics Olympiad, Team USA brought home one Gold, one Silver, and one Bronze medal in Shenzhen, China."
                />
                <div className="mt-8 rounded-2xl border border-gold-500/25 bg-navy-900 p-6">
                  <p className="font-heading text-lg font-semibold text-gold-300">
                    6th out of 52 national teams
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-paper/60">
                    Team USA also placed 6th in the world in the International Business Case Competition.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <ButtonLink href="/team-usa" variant="gold">
                    Meet Team USA
                  </ButtonLink>
                  <ButtonLink
                    className="text-paper hover:text-gold-300"
                    href={internationalResults2026.pressRelease}
                    variant="link"
                  >
                    Read the press release
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-3 gap-3">
                {teamUsa2026.traveling.map((student) => (
                  <Image
                    alt={`${student.name}, Team USA 2026`}
                    className="aspect-square w-full rounded-2xl border border-paper/10 object-cover"
                    height={320}
                    key={student.name}
                    src={student.image}
                    width={320}
                  />
                ))}
                <div className="flex aspect-square w-full flex-col items-center justify-center rounded-2xl border border-gold-500/30 bg-navy-900 p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-gold-300 sm:text-3xl">IEO 2026</p>
                  <p className="mt-1 text-xs text-paper/55 sm:text-sm">Shenzhen, China</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Get ready"
              title="Everything you need to prepare"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {resourceLinks.map((item, index) => (
              <Reveal delay={index * 90} key={item.href}>
                <InfoCard body={item.body} eyebrow={item.eyebrow} href={item.href} title={item.title} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/8 bg-paper">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr]">
            <Reveal>
              <div>
                <SectionHeading eyebrow="News" title="Latest announcements" />
                <div className="mt-6">
                  <ButtonLink href="/news" variant="link">
                    View all announcements
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <AnnouncementList items={latestAnnouncements} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center sm:px-12 sm:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(40rem_16rem_at_50%_120%,var(--color-navy-700),transparent)]"
              />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                  Ready to represent the US?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-paper/60">
                  Registration for the 2027 USAEBO closes on {competition2027.deadline}.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-x-7 gap-y-4 sm:flex-row">
                  <ButtonLink href={site.registerUrl} variant="gold">
                    Register for Round 1
                  </ButtonLink>
                  <ButtonLink className="text-paper hover:text-gold-300" href="/contact" variant="link">
                    Questions? Contact us
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
