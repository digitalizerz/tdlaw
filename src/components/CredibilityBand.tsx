import { LineIcon } from "@/components/icons";
import { credibilityItems } from "@/lib/content";

export function CredibilityBand() {
  return (
    <section className="bg-navy" aria-label="Approach">
      <div className="grid md:grid-cols-4">
        {credibilityItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-4 border-b border-bronze/40 px-6 py-10 text-center last:border-b-0 md:border-b-0 md:border-r md:border-bronze/40 md:py-14 md:last:border-r-0"
          >
            <span className="flex size-10 items-center justify-center text-bronze">
              <LineIcon name={item.icon} />
            </span>
            <p className="eyebrow text-white">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
