import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { navItems, site } from "@/lib/content/site";
import { ButtonLink } from "./ButtonLink";

type NavItem = (typeof navItems)[number];
type NavItemWithChildren = Extract<NavItem, { children: readonly { label: string; href: string }[] }>;

function hasChildren(item: NavItem): item is NavItemWithChildren {
  return "children" in item;
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-paper/90 backdrop-blur">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          className="flex min-w-0 items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-salmon"
          href="/"
        >
          <Image alt="" className="size-8 rounded-md" height={32} src={site.logoUrl} width={32} />
          <span className="font-accent text-xl italic leading-none text-indigo">{site.shortName.toLowerCase()}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            hasChildren(item) ? (
              <details className="group relative" key={item.label}>
                <summary className="flex min-h-10 cursor-pointer list-none items-center gap-1 rounded-full px-3 text-sm font-medium text-ink/70 transition-colors hover:text-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-salmon">
                  {item.label}
                  <ChevronDown aria-hidden="true" size={14} strokeWidth={2} />
                </summary>
                <div className="absolute left-0 top-12 min-w-48 rounded-xl bg-paper p-2 shadow-panel">
                  {item.children.map((child) => (
                    <Link
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-salmon-tint/60 hover:text-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-salmon"
                      href={child.href}
                      key={child.href}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                className="flex min-h-10 items-center rounded-full px-3 text-sm font-medium text-ink/70 transition-colors hover:text-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-salmon"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={site.registerUrl}>Register</ButtonLink>
        </div>

        <details className="relative lg:hidden">
          <summary
            aria-label="Open navigation"
            className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full text-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-salmon"
          >
            <Menu aria-hidden="true" size={20} strokeWidth={1.8} />
          </summary>
          <div className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2rem))] rounded-xl bg-paper p-3 shadow-panel">
            <nav aria-label="Mobile primary" className="grid gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-ink/75 hover:bg-salmon-tint/60 hover:text-indigo"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                  {hasChildren(item) ? (
                    <div className="grid gap-1 pl-3">
                      {item.children.map((child) => (
                        <Link
                          className="block rounded-lg px-3 py-2 text-sm text-ink/60 hover:bg-salmon-tint/60 hover:text-indigo"
                          href={child.href}
                          key={child.href}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <ButtonLink className="mt-2 w-full" href={site.registerUrl}>
                Register
              </ButtonLink>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
