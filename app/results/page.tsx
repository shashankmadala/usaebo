import { HallOfFameExplorer } from "@/components/HallOfFameExplorer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Section";
import { SourceNote } from "@/components/SourceNote";
import { hallOfFameAwards, hallOfFameEntries, hallOfFameSource } from "@/lib/content/results";

export const metadata = {
  title: "Hall of Fame",
  description: "The USAEBO Hall of Fame: Team USA members and Gold, Silver, and Bronze awardees.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        body="Every student recognized in the 2026 USAEBO, from Team USA selections to Round 2 Gold, Silver, and Bronze awardees."
        eyebrow="Results"
        primaryHref="/results/past-problems"
        primaryLabel="Browse past problems"
        secondaryHref="/team-usa"
        secondaryLabel="Meet Team USA"
        title="Hall of Fame"
      />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <HallOfFameExplorer awards={[...hallOfFameAwards]} entries={hallOfFameEntries} />
          </Reveal>
          <SourceNote href={hallOfFameSource} label="Official Round 2 award ranking spreadsheet" />
        </Container>
      </section>
    </>
  );
}
