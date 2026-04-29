import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  size = 48,
  withWordmark = true,
  className,
  asLink = true,
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
  asLink?: boolean;
}) {
  const wordmarkHeight = Math.round(size * 0.62);
  const wordmarkWidth = Math.round(wordmarkHeight * 4.5);

  const inner = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/logo.png"
        alt="BridgeLab AI logo"
        width={size}
        height={size}
        priority
        className="object-contain"
      />
      {withWordmark && (
        <Image
          src="/namelogo.png"
          alt="BridgeLab AI"
          width={wordmarkWidth}
          height={wordmarkHeight}
          priority
          className="h-auto object-contain"
          style={{ height: wordmarkHeight }}
        />
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
