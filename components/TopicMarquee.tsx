import { syllabus } from "@/lib/content/syllabus";

function TopicList({ hidden }: { hidden?: boolean }) {
  const topics = syllabus.flatMap((group) => group.topics);
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {topics.map((topic) => (
        <span className="flex items-center whitespace-nowrap text-sm font-medium text-ink/50" key={topic}>
          <span aria-hidden="true" className="mx-5 size-1 rounded-full bg-gold-500" />
          {topic}
        </span>
      ))}
    </div>
  );
}

export function TopicMarquee() {
  return (
    <section aria-label="Topics on the USAEBO syllabus" className="bg-paper py-4">
      <div className="marquee">
        <div className="marquee-track marquee-half">
          <TopicList />
          <TopicList hidden />
        </div>
      </div>
    </section>
  );
}
