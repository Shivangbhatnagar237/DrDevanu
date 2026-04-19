"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Plus, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "./ButtonLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mentorship-programs", label: "Mentorship" },
  { href: "/therapy-programs", label: "Therapy" },
  { href: "/workshops", label: "Workshops" },
  { href: "/contact", label: "Contact" }
];

type NavbarProps = {
  theme?: "light" | "dark";
};

export function Navbar({ theme = "light" }: NavbarProps) {
  const [atTop, setAtTop] = useState(true);
  const [mobileMenuPathname, setMobileMenuPathname] = useState<string | null>(null);
  const pathname = usePathname();
  const isLight = theme === "light";
  const isMobileMenuOpen = mobileMenuPathname === pathname;

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav
        className={`mx-auto flex h-16 max-w-[1180px] items-center justify-between rounded-full px-3 transition-all duration-500 md:h-[72px] md:px-4 ${
          atTop ? "w-full" : "w-full md:max-w-[820px]"
        } ${
          atTop
            ? "border border-transparent bg-transparent shadow-none backdrop-blur-0"
            : isLight
              ? "border border-white/30 bg-white/20 text-white shadow-[0_18px_70px_rgba(26,26,26,0.10)] backdrop-blur-2xl"
              : "border border-white/55 bg-white/58 text-ink shadow-[0_18px_70px_rgba(26,26,26,0.10)] backdrop-blur-2xl"
        }`}
        aria-label="Global navigation"
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-full pr-3"
          aria-label="Dr. Devanu home"
        >
          <span
            className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full transition duration-500 ${
              atTop ? "bg-white/0" : "bg-white/80"
            }`}
          >
            <Image
              src="/gla.png"
              alt=""
              width={36}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </span>
          <span
            className={`whitespace-nowrap font-serif text-lg leading-none transition-all duration-500 sm:text-xl ${
              atTop ? "opacity-100" : "md:max-w-0 md:overflow-hidden md:opacity-0"
            }`}
          >
            Dr. Devanu
          </span>
        </Link>

        <div
          className={`hidden items-center overflow-hidden rounded-full border text-sm font-medium backdrop-blur-md transition-all duration-500 lg:flex ${
            atTop ? "max-w-[610px] gap-7 px-7 py-3" : "max-w-[128px] gap-2 px-5 py-3"
          } ${
            atTop
              ? "border-transparent bg-transparent text-ink/78 backdrop-blur-0"
              : isLight
                ? "border-white/22 bg-white/16 text-white/88"
                : "border-white/70 bg-white/66 text-ink/70"
          }`}
        >
          <Menu className="h-4 w-4 shrink-0 stroke-[1.6]" aria-hidden="true" />
          <span
            className={`whitespace-nowrap transition-all duration-500 ${
              atTop ? "w-0 opacity-0" : "w-12 opacity-100"
            }`}
          >
            Menu
          </span>
          <div
            className={`flex items-center gap-7 transition-all duration-500 ${
              atTop ? "max-w-[520px] opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition duration-300 ${
                  isLight ? "hover:text-white" : "hover:text-plum"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <ButtonLink
          href="/contact"
          variant="primary"
          className={`hidden min-h-11 px-6 text-sm transition-all duration-500 md:inline-flex ${
            atTop ? "" : "md:px-5"
          }`}
        >
          <span className="hidden lg:inline">Book Session</span>
          <Plus className="h-4 w-4 lg:hidden" aria-hidden="true" />
        </ButtonLink>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-plum text-white shadow-[0_16px_40px_rgba(107,91,149,0.22)] md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setMobileMenuPathname((current) =>
              current === pathname ? null : pathname
            )
          }
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 stroke-[1.6]" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5 stroke-[1.6]" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mx-auto mt-3 max-w-[1180px] overflow-hidden transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "max-h-[420px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-[2rem] border border-white/55 bg-[rgba(250,248,245,0.94)] p-3 shadow-[0_24px_80px_rgba(45,45,45,0.12)] backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[1.25rem] px-4 py-3 text-base font-medium text-ink/82 transition duration-200 hover:bg-white hover:text-plum"
                onClick={() => setMobileMenuPathname(null)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <ButtonLink href="/contact" className="mt-3 flex w-full justify-center">
            Book Session
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
