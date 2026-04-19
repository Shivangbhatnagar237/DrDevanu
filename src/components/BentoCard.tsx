type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "div";
};

export function BentoCard({
  children,
  className = "",
  as: Component = "article"
}: BentoCardProps) {
  return (
    <Component
      className={`overflow-hidden rounded-[2rem] border border-black/[0.04] bg-white soft-shadow ${className}`}
    >
      {children}
    </Component>
  );
}
