import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Mentorship", href: "/mentorship-programs" },
  { label: "Therapy", href: "/therapy-programs" },
  { label: "Workshops", href: "/workshops" },
  { label: "Contact", href: "/contact" }
];

export function Footer() {
  return (
    <footer className="bg-sanctuary">
      <div className="luxury-container flex flex-col gap-8 border-t border-ink/10 py-10 text-sm text-ink/58 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-serif text-2xl text-ink">
          Dr. Devanu
        </Link>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="transition duration-300 hover:text-plum"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p>© 2026 Dr. Devanu Sanctuary</p>
      </div>
    </footer>
  );
}
