import { LogoMark } from "./LogoMark";

export function LogoFull({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} data-testid="logo-jastipsy">
      <LogoMark className="h-8 w-8" />
      <span className="font-display text-2xl leading-none tracking-wide">
        JASTIP<span className="text-cyber">SY</span>
      </span>
    </span>
  );
}
