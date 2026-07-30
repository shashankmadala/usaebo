"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./ButtonLink";

type NavItem = (typeof navItems)[number];
type NavChild = { label: string; href: string };

function getChildren(item: NavItem): readonly NavChild[] | null {
  return "children" in item ? item.children : null;
}

function isActive(pathname: string, item: NavItem): boolean {
  const children = getChildren(item);
  if (children) {
    return children.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const closeMenus = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-paper/85 backdrop-blur-xl transition-shadow duration-300",
        scrolled || mobileOpen ? "shadow-header" : "shadow-none",
      )}
    >
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-gold-600 via-gold-500 to-gold-300"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          className="flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-700"
          href="/"
          onClick={closeMenus}
        >
          <Image alt="" className="size-8" height={32} priority src={site.logoUrl} width={32} />
          <span className="font-heading text-lg font-bold tracking-tight text-navy-900">{site.shortName}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const children = getChildren(item);
            const active = isActive(pathname, item);
            const itemClasses = cn(
              "flex min-h-9 items-center gap-1 rounded-full px-3.5 text-sm font-medium transition-colors duration-200",
              active ? "text-navy-900" : "text-ink/60 hover:text-navy-900",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-700",
            );

            if (!children) {
              return (
                <Link className={itemClasses} href={item.href} key={item.label} onClick={closeMenus}>
                  {item.label}
                </Link>
              );
            }

            const open = openMenu === item.label;
            return (
              <div
                className="relative"
                key={item.label}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setOpenMenu((current) => (current === item.label ? null : current));
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape" && open) {
                    event.stopPropagation();
                    setOpenMenu(null);
                  }
                }}
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu((current) => (current === item.label ? null : current))}
              >
                <Link
                  aria-expanded={open}
                  className={itemClasses}
                  href={item.href}
                  onClick={() => setOpenMenu(null)}
                  onFocus={() => setOpenMenu(item.label)}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn("text-ink/35 transition-transform duration-200", open && "rotate-180")}
                    size={13}
                    strokeWidth={2.2}
                  />
                </Link>
                <div
                  className={cn(
                    "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200",
                    open ? "visible opacity-100" : "invisible opacity-0",
                  )}
                >
                  <div
                    className={cn(
                      "min-w-44 rounded-xl border border-ink/8 bg-paper p-1.5 shadow-panel transition-transform duration-200",
                      open ? "translate-y-0" : "translate-y-1",
                    )}
                  >
                    {children.map((child) => (
                      <Link
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150",
                          pathname === child.href
                            ? "bg-mist text-navy-900"
                            : "text-ink/65 hover:bg-mist hover:text-navy-900",
                          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-gold-700",
                        )}
                        href={child.href}
                        key={child.href}
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={site.registerUrl} size="sm">
            Register
          </ButtonLink>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          className="flex size-10 items-center justify-center rounded-full text-navy-900 transition-colors hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-700 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          type="button"
        >
          {mobileOpen ? (
            <X aria-hidden="true" size={20} strokeWidth={1.8} />
          ) : (
            <Menu aria-hidden="true" size={20} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-ink/8 bg-paper lg:hidden">
          <nav aria-label="Mobile primary" className="mx-auto max-w-content space-y-1 px-5 py-4 sm:px-8">
            {navItems.map((item) => {
              const children = getChildren(item);
              return (
                <div key={item.label}>
                  <Link
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-navy-900 hover:bg-mist"
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {children ? (
                    <div className="mb-1 grid gap-0.5 pl-3">
                      {children.map((child) => (
                        <Link
                          className="block rounded-lg px-3 py-2 text-sm text-ink/65 hover:bg-mist hover:text-navy-900"
                          href={child.href}
                          key={child.href}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <div className="px-3 pb-2 pt-3">
              <ButtonLink className="w-full" href={site.registerUrl}>
                Register for 2027
              </ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
