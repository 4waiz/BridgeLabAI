import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  size = 32,
  withWordmark = true,
  className,
  asLink = true,
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
  asLink?: boolean;
}) {
  const inner = (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className="relative inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-white p-1 ring-1 ring-brand-100"
        style={{ width: size + 8, height: size + 8 }}
      >
        <Image
          src="/logo.png"
          alt="BridgeLab AI logo"
          width={size}
          height={size}
          priority
          className="object-contain"
        />
      </span>
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-sm font-semibold tracking-tight text-slate-900">
            BridgeLab AI
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-brand-600">
            Lab coach
          </span>
        </span>
      )}
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link
      href="/"
      className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
    >
      {inner}
    </Link>
  );
}
