import { PageHero } from "@/components/PageHero";
import { PathwayRail } from "@/components/PathwayRail";
import { SectionHeader } from "@/components/SectionHeader";
import { SourceNote } from "@/components/SourceNote";
import { site } from "@/lib/content/site";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero body={site.description} eyebrow="About" title="About USAEBO" />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeader
            eyebrow="Identity"
            title="A national selection pathway"
            body="USAEBO organizes the USA Economics and Business Olympiad. Its competition cycle selects the students who represent Team USA at the International Economics Olympiad."
          />
          <div>
            <PathwayRail />
            <SourceNote href="https://www.usaebo.org/" label="Official USAEBO home" />
          </div>
        </div>
      </section>
    </>
  );
}
