import { AnnouncementList } from "@/components/AnnouncementList";
import { AxisRule } from "@/components/AxisRule";
import { ButtonLink } from "@/components/ButtonLink";
import { InfoCard } from "@/components/InfoCard";
import { Parallax } from "@/components/Parallax";
import { Pathway } from "@/components/Pathway";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";
import { Container, SectionHeading } from "@/components/Section";
import { TeamMarquee } from "@/components/TeamMarquee";
import { TopicMarquee } from "@/components/TopicMarquee";
import { competition2027 } from "@/lib/content/competition";
import { latestAnnouncements } from "@/lib/content/news";
import { site } from "@/lib/content/site";
import { internationalResults2026 } from "@/lib/content/team";

const stats = [
  { value: "1 · 1 · 1", label: "Gold, Silver, and Bronze at the 2026 IEO" },
  { value: "6th of 52", label: "International Business Case Competition" },
  { value: "5", label: "Students selected for Team USA every cycle" },
  { value: "K-12", label: "Students across the US are eligible" },
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
    body: "Official dates, round formats, awards, and proctoring details for this year.",
    href: "/compete/2027",
  },
  {
    title: "Syllabus",
    body: "The official microeconomics, macroeconomics, business, and finance topics.",
    href: "/compete/syllabus",
  },
  {
    title: "Past Problems",
    body: "Official Round 1 and Round 2 problems from previous competition cycles.",
    href: "/results/past-problems",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="chart-grid pointer-events-none absolute inset-0" />
        <Container className="relative pt-16 sm:pt-24">
          <div className="grid gap-x-8 gap-y-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-sm text-ink/70">
                  Registration for the 2027 USAEBO is open.{" "}
                  <a
                    className="font-semibold text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4 transition-colors hover:text-gold-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-700"
                    href={site.registerUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Register
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </p>
              </Reveal>
              <WordReveal
                accentClassName="font-accent font-normal italic text-gold-600"
                accentWords={["economics", "business"]}
                className="mt-7 max-w-3xl font-heading text-5xl font-bold leading-[1.02] tracking-tight text-navy-900 sm:text-6xl lg:text-7xl"
                delay={120}
                step={80}
                text="The national olympiad for economics and business"
              />
              <Reveal delay={480}>
                <p className="mt-7 max-w-xl text-base leading-7 text-ink/60 sm:text-lg">
                  The USA Economics and Business Olympiad is the only pathway for K-12 students in the US
                  to represent Team USA at the International Economics Olympiad.
                </p>
              </Reveal>
              <Reveal delay={600}>
                <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <ButtonLink href={site.registerUrl}>Register for 2027</ButtonLink>
                  <ButtonLink href="/compete" variant="link">
                    How the olympiad works
                  </ButtonLink>
                </div>
                <p className="label mt-8 text-ink/45">
                  Round 1 · {competition2027.rounds[0].date} · Digital, from anywhere
                </p>
              </Reveal>
            </div>
            <Reveal className="self-end lg:col-span-4 lg:col-start-9" delay={300}>
              <dl>
                {stats.map((stat) => (
                  <div
                    className="flex flex-col-reverse border-t border-ink/10 py-4 last:border-b"
                    key={stat.label}
                  >
                    <dt className="label mt-1.5 text-ink/45">{stat.label}</dt>
                    <dd className="font-heading text-2xl font-bold tracking-tight text-navy-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <AxisRule className="mt-16 text-gold-500/40" />
        </Container>
      </section>

      <TopicMarquee />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              title="From Round 1 to the international stage"
              lead="One competition cycle takes students from an open national round to representing the United States abroad."
            />
          </Reveal>
          <div className="mt-12">
            <Pathway />
          </div>
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <AxisRule className="-mt-8 mb-14 text-ink/15 sm:-mt-10" />
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
              <div className="border-y border-ink/10">
                {keyDates.map((row, index) => (
                  <div className={index === 0 ? "py-6" : "border-t border-ink/10 py-6"} key={row.label}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="label text-ink/45">{row.label}</p>
                      <p className="text-right font-heading text-lg font-semibold tracking-tight text-navy-900 sm:text-xl">
                        {row.value}
                      </p>
                    </div>
                    <p className="mt-1.5 text-sm text-ink/60">{row.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-950">
        <Parallax className="pointer-events-none absolute inset-0" speed={-0.1}>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(52rem_26rem_at_88%_-4rem,var(--color-navy-800),transparent_70%)]"
          />
        </Parallax>
        <Container className="relative pt-20 sm:pt-24">
          <AxisRule className="-mt-8 mb-14 text-gold-300/25 sm:-mt-10" />
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <Reveal>
              <SectionHeading
                dark
                display
                eyebrow="Team USA at IEO 2026"
                title={
                  <>
                    A <em className="italic text-gold-300">medal-winning debut</em> on the world stage
                  </>
                }
                lead="In the first year the United States competed in person at the International Economics Olympiad, Team USA brought home one Gold, one Silver, and one Bronze medal in Shenzhen, China."
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="border-l border-gold-500/40 pl-6">
                <p className="font-accent text-5xl text-gold-300 sm:text-6xl">6th</p>
                <p className="label mt-2 text-paper/55">of 52 national teams</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-paper/60">
                  Led by team captain Shashank Madala, Team USA also placed 6th in the world in the
                  International Business Case Competition.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
        <Reveal className="relative mt-14" delay={160}>
          <TeamMarquee />
        </Reveal>
        <Container className="relative pb-20 sm:pb-24">
          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4">
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
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading title="Everything you need to prepare" />
          </Reveal>
          <div className="mt-10">
            {resourceLinks.map((item, index) => (
              <Reveal delay={index * 90} key={item.href}>
                <InfoCard body={item.body} href={item.href} index={index + 1} title={item.title} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="pb-20 sm:pb-24">
          <div className="pt-4">
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
                <AnnouncementList compact items={latestAnnouncements} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t-2 border-gold-500 bg-navy-950">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="max-w-xl font-accent text-4xl font-normal leading-[1.08] tracking-tight text-paper sm:text-5xl">
                Ready to <em className="italic text-gold-300">represent</em> the US?
              </h2>
              <div className="shrink-0">
                <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                  <ButtonLink href={site.registerUrl} variant="gold">
                    Register for Round 1
                  </ButtonLink>
                  <ButtonLink className="text-paper hover:text-gold-300" href="/contact" variant="link">
                    Questions? Contact us
                  </ButtonLink>
                </div>
                <p className="label mt-6 text-paper/40">
                  Registration closes {competition2027.deadline}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
