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
      <div className="relative overflow-hidden rounded-xl">
        {image ? (
          <>
            <Image
              alt={`${name}, ${school}`}
              className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              height={600}
              src={image}
              width={480}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-navy-900 opacity-40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"
            />
          </>
        ) : (
          <div aria-hidden="true" className="aspect-[4/5] w-full bg-mist" />
        )}
      </div>
      <div className="mt-4">
        <h3 className="font-heading text-lg font-semibold text-navy-900">{name}</h3>
        <p className="mt-1 text-sm leading-5 text-ink/60">{school}</p>
        <p className="mt-0.5 text-sm text-ink/60">{location}</p>
        {badge ? <p className="label mt-2 text-gold-700">{badge}</p> : null}
      </div>
    </article>
  );
}
