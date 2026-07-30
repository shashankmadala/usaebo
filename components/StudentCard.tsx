import Image from "next/image";

type StudentCardProps = {
  name: string;
  school: string;
  location: string;
  image?: string;
  badge?: string;
};

export function StudentCard({ name, school, location, image, badge }: StudentCardProps) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-2xl border border-ink/8">
        {image ? (
          <Image
            alt={`${name}, ${school}`}
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            height={480}
            src={image}
            width={480}
          />
        ) : (
          <div aria-hidden="true" className="aspect-square w-full bg-mist" />
        )}
        {badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-navy-900/90 px-2.5 py-1 text-xs font-semibold text-gold-300 backdrop-blur">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="mt-4">
        <h3 className="font-heading text-lg font-semibold text-navy-900">{name}</h3>
        <p className="mt-1 text-sm leading-5 text-ink/60">{school}</p>
        <p className="mt-0.5 text-sm text-ink/60">{location}</p>
      </div>
    </article>
  );
}
