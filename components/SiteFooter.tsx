import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/lib/content/site";
import { NewsletterForm } from "./Forms";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8 bg-paper">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Image alt="" className="size-8 rounded-md" height={32} src={site.logoUrl} width={32} />
            <span className="font-accent text-xl italic leading-none text-indigo">{site.shortName.toLowerCase()}</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-ink/60">{site.description}</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {site.socials.map((social) => (
              <a
                className="font-medium text-ink/55 transition-colors hover:text-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-salmon"
                href={social.href}
                key={social.href}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-indigo">Get updates</p>
          <div className="mt-3">
            <NewsletterForm />
          </div>
          <nav aria-label="Footer" className="mt-8 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
            {navItems.map((item) => (
              <Link className="text-ink/55 hover:text-indigo" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-ink/8">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-4 py-5 text-sm text-ink/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright USA Economics and Business Olympiad (USAEBO). All rights reserved.</p>
          <a className="hover:text-indigo" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
