import { cn } from "@/lib/utils";

const slices = [
  { width: 16, height: 74, delay: "0ms" },
  { width: 30, height: 100, delay: "100ms" },
  { width: 26, height: 88, delay: "180ms" },
  { width: 18, height: 64, delay: "260ms" },
];

type SlicedPortraitProps = {
  src: string;
  alt: string;
  className?: string;
};

export function SlicedPortrait({ src, alt, className }: SlicedPortraitProps) {
  const total = slices.reduce((sum, slice) => sum + slice.width, 0);

  return (
    <div
      className={cn(
        "relative mx-auto flex h-[440px] w-full max-w-[560px] items-end justify-end gap-2 sm:h-[540px] lg:h-[640px] lg:max-w-none",
        className,
      )}
    >
      <span className="sr-only">{alt}</span>
      {slices.map((slice, index) => {
        const offset = slices
          .slice(0, index)
          .reduce((sum, item) => sum + item.width, 0);
        return (
          <div
            key={`${slice.width}-${slice.height}`}
            className="slice relative overflow-hidden"
            style={{
              width: `${slice.width}%`,
              height: `${slice.height}%`,
              animationDelay: slice.delay,
            }}
          >
            <div
              className="photo-drift absolute bottom-0 h-full bg-cover bg-top"
              style={{
                width: `${(total / slice.width) * 100}%`,
                left: `${-(offset / slice.width) * 100}%`,
                backgroundImage: `url(${src})`,
              }}
              aria-hidden="true"
            />
          </div>
        );
      })}
    </div>
  );
}
