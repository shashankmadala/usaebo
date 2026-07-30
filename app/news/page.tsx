import { AnnouncementList } from "@/components/AnnouncementList";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Section";

export const metadata = {
  title: "News",
  description: "Official announcements from the USA Economics and Business Olympiad.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        body="Official announcements from USAEBO, including results, registration windows, and released problems."
        title="Announcements"
        variant="compact"
      />
      <section className="bg-paper">
        <Container className="max-w-4xl py-14 sm:py-16">
          <Reveal>
            <AnnouncementList headingLevel="h2" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
