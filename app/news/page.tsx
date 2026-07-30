import { AnnouncementList } from "@/components/AnnouncementList";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";

export const metadata = {
  title: "News",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        body="Announcements are carried over from the official USAEBO home page."
        eyebrow="News"
        title="Announcements"
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <AnnouncementList />
          <SourceNote href="https://www.usaebo.org/" label="Official USAEBO announcements" />
        </div>
      </section>
    </>
  );
}
