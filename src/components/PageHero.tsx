import { SectionEyebrow } from "@/components/SectionEyebrow";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({ eyebrow, title, children, className }: PageHeroProps) {
  return (
    <section className={cn("bg-offwhite section-y", className)}>
      <div className="site-container max-w-4xl">
        {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
        <h1 className="mt-4 font-serif text-5xl leading-none text-navy md:text-7xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-8 max-w-2xl text-lg leading-8 text-td-muted">{children}</div>
        ) : null}
        <div className="rule mt-10 w-16" />
      </div>
    </section>
  );
}
