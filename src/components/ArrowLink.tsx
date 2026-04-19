import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export function ArrowLink({
  href,
  children,
  className = "",
  light = false
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm font-medium transition duration-300 ${
        light
          ? "text-white/88 hover:text-white"
          : "text-plum hover:text-plum-light"
      } ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 stroke-[1.5]" aria-hidden="true" />
    </Link>
  );
}
