import Image from "next/image";

type StudentCardProps = {
  name: string;
  school: string;
  location: string;
  image?: string;
};

export function StudentCard({ name, school, location, image }: StudentCardProps) {
  return (
    <article>
      {image ? (
        <Image
          alt={`${name}, ${school}`}
          className="aspect-square w-full rounded-2xl object-cover"
          height={420}
          src={image}
          width={420}
        />
      ) : (
        <div aria-hidden="true" className="aspect-square w-full rounded-2xl bg-salmon-tint" />
      )}
      <div className="mt-4">
        <h3 className="font-heading text-lg font-semibold text-indigo">{name}</h3>
        <p className="mt-1 text-sm leading-6 text-ink/65">{school}</p>
        <p className="mt-0.5 text-sm font-medium text-violet-deep">{location}</p>
      </div>
    </article>
  );
}
