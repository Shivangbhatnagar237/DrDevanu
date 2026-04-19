import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "light";
};

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary"
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-plum text-white shadow-[0_16px_40px_rgba(107,91,149,0.24)] hover:bg-plum-light",
    light: "bg-white text-ink shadow-[0_16px_44px_rgba(26,26,26,0.12)] hover:bg-mist"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
