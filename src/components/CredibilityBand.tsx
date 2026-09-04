import { LineIcon } from "@/components/icons";
import { credibilityItems } from "@/lib/content";

export function CredibilityBand() {
  return (
    <section className="bg-navy" aria-label="Approach">
      <div className="site-container grid md:grid-cols-4">
        {credibilityItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-3 border-b border-white/10 px-5 py-10 text-center last:border-b-0 md:border-b-0 md:border-r md:border-white/10 md:py-12 md:last:border-r-0"
          >
            <span className="flex size-10 items-center justify-center text-bronze">
              <LineIcon name={item.icon} />
            </span>
            <p className="eyebrow text-bronze">{item.title}</p>
            <p className="max-w-[16rem] text-sm leading-6 text-white/80">{item.teaser}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
