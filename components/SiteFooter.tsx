import Image from "next/image";
import Link from "next/link";
import { footerColumns, site } from "@/lib/content/site";
import { ButtonLink } from "./ButtonLink";
import { WaveDivider } from "./WaveDivider";

export function SiteFooter() {
  return (
    <footer className="text-paper">
      <WaveDivider className="bg-paper text-navy-950" variant="curve" />
      <div className="bg-navy-950">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image alt="" className="size-8" height={32} src={site.logoUrl} width={32} />
              <span className="font-heading text-lg font-bold tracking-tight text-paper">{site.shortName}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-paper/55">{site.description}</p>
            <div className="mt-7">
              <ButtonLink href={site.registerUrl} variant="gold">
                Register for 2027
              </ButtonLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">{column.title}</p>
                <ul className="mt-4 grid gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="text-sm text-paper/60 transition-colors duration-200 hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-700"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-7 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright USA Economics and Business Olympiad (USAEBO). All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {site.socials.map((social) => (
              <a
                className="transition-colors duration-200 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-700"
                href={social.href}
                key={social.href}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
            <a
              className="transition-colors duration-200 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-700"
              href={`mailto:${site.contactEmail}`}
            >
              {site.contactEmail}
            </a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
