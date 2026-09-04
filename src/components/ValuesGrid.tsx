import { LineIcon } from "@/components/icons";
import { credibilityItems } from "@/lib/content";

export function ValuesGrid() {
  return (
    <section className="bg-offwhite" aria-label="Approach">
      <div className="site-container grid gap-10 section-y sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {credibilityItems.map((item) => (
          <div key={item.title} className="max-w-sm">
            <span className="flex size-10 items-center justify-center text-bronze">
              <LineIcon name={item.icon} />
            </span>
            <h3 className="mt-5 font-serif text-xl text-navy md:text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-td-muted md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
