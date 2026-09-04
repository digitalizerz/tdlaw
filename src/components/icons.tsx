import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

function iconClass(className?: string) {
  return cn("size-7 shrink-0 stroke-[1.25]", className);
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M12 3.5 19 6.2v5.4c0 4.4-2.9 7.6-7 8.9-4.1-1.3-7-4.5-7-8.9V6.2L12 3.5Z" stroke="currentColor" />
      <path d="M9.2 12.1 11.1 14l3.8-4.2" stroke="currentColor" />
    </svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
      <path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6" stroke="currentColor" />
    </svg>
  );
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <circle cx="9" cy="8.5" r="2.4" stroke="currentColor" />
      <circle cx="15.4" cy="9.1" r="2" stroke="currentColor" />
      <path d="M4.8 17.8c.5-2.6 2.5-4 4.3-4s3.8 1.4 4.3 4" stroke="currentColor" />
      <path d="M13.6 15.2c.8-1.2 2.1-1.8 3.4-1.8 1.4 0 2.7.8 3.2 2.6" stroke="currentColor" />
    </svg>
  );
}

export function ScalesIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M12 4v14.5M8 19h8M12 6.5 6.2 9.2 7.6 14c1.6-.9 3.2-.9 4.4 0M12 6.5l5.8 2.7-1.4 4.8c-1.6-.9-3.2-.9-4.4 0" stroke="currentColor" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M7.4 4.8h2.2l1 3.1-1.6 1.2a11.4 11.4 0 0 0 5.7 5.7l1.2-1.6 3.1 1v2.2c0 .8-.6 1.5-1.4 1.6-7.3.8-13.4-5.3-12.6-12.6.1-.8.8-1.4 1.6-1.4Z" stroke="currentColor" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <rect x="3.5" y="6" width="17" height="12" stroke="currentColor" />
      <path d="m4.2 7.2 7.8 6 7.8-6" stroke="currentColor" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M12 20.5s6-5.1 6-9.4A6 6 0 0 0 6 11.1c0 4.3 6 9.4 6 9.4Z" stroke="currentColor" />
      <circle cx="12" cy="11" r="1.8" stroke="currentColor" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" />
      <path d="M12 8v4.2L15 14" stroke="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="currentColor"
      className={cn("size-4 shrink-0", className)}
      aria-hidden="true"
    >
      <path d="M14.2 8.4h1.8V6h-1.8C12.2 6 11 7.3 11 9.1v1.4H9.4v2.4H11V18h2.5v-5.1h1.9l.4-2.4h-2.3V9.2c0-.5.3-.8.7-.8Z" />
    </svg>
  );
}

export function ColumnsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M4 20h16M6 8h12M7.5 8v12M12 8v12M16.5 8v12M5.5 5.5 12 3.5l6.5 2" stroke="currentColor" />
    </svg>
  );
}

export function GavelIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="m13.2 4.8 6 6M8.5 9.5l6 6M4.8 19.2h7.4M9.2 8.8 6.4 6a1.4 1.4 0 0 1 2-2l2.8 2.8" stroke="currentColor" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M7 4.5h7.2L19 9.3V19.5H7V4.5Z" stroke="currentColor" />
      <path d="M14.2 4.5V9.3H19M9.2 12.5h5.6M9.2 15.5h5.6" stroke="currentColor" />
    </svg>
  );
}

export function CarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M4 14.5h16l-1.2-4.2c-.2-.7-.8-1.2-1.5-1.2H6.7c-.7 0-1.3.5-1.5 1.2L4 14.5Z" stroke="currentColor" />
      <path d="M4 14.5v3h2.2V19a1.2 1.2 0 0 0 2.4 0v-1.5h6.8V19a1.2 1.2 0 0 0 2.4 0v-1.5H20v-3" stroke="currentColor" />
    </svg>
  );
}

const icons = {
  shield: ShieldIcon,
  target: TargetIcon,
  people: PeopleIcon,
  scales: ScalesIcon,
  columns: ColumnsIcon,
  gavel: GavelIcon,
  document: DocumentIcon,
  car: CarIcon,
};

export function LineIcon({
  name,
  className,
}: {
  name: keyof typeof icons;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} />;
}
