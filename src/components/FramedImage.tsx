import Image from "next/image";
import { cn } from "@/lib/utils";

type FramedImageProps = {
  src: string;
  alt: string;
  className?: string;
  offset?: "bottom-right" | "top-left";
  objectPosition?: string;
};

export function FramedImage({
  src,
  alt,
  className,
  offset = "bottom-right",
  objectPosition = "center",
}: FramedImageProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "pointer-events-none absolute border border-bronze",
          offset === "bottom-right"
            ? "top-4 right-0 bottom-0 left-4"
            : "top-0 right-4 bottom-4 left-0",
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative overflow-hidden",
          offset === "bottom-right" ? "mb-4 mr-4" : "ml-4 mt-4",
        )}
        style={{ minHeight: "inherit" }}
      >
        <div className="group relative aspect-[4/5] w-full min-h-[280px]">
          <Image
            src={src}
            alt={alt}
            fill
            className="photo object-cover"
            style={{ objectPosition }}
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
