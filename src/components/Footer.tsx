import Link from "next/link";

const footerLinks = ["Privacy Policy", "Terms", "Disclaimer", "Contact"];

export function Footer() {
  return (
    <footer className="bg-sanctuary">
      <div className="luxury-container flex flex-col gap-8 border-t border-ink/10 py-10 text-sm text-ink/58 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-serif text-2xl text-ink">
          Devanu
        </Link>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((label) => (
            <Link
              href="/"
              key={label}
              className="transition duration-300 hover:text-plum"
            >
              {label}
            </Link>
          ))}
        </div>

        <p>© 2026 Dr. Devanu Sanctuary</p>
      </div>
    </footer>
  );
}
