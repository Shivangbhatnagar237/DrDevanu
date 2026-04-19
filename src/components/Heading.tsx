type HeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
};

export function Heading({
  eyebrow,
  title,
  align = "left",
  className = "",
  children
}: HeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase text-plum">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-[1.08] text-ink md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children ? (
        <div className="copy-justify mt-6 text-base leading-8 text-ink/68 md:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
