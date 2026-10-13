export function LogoMark({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#050505" stroke="rgba(255,255,255,0.15)" />
      <path
        d="M18 18h28a4 4 0 0 1 4 4v6a4 4 0 0 0 0 8v6a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4v-6a4 4 0 0 0 0-8v-6a4 4 0 0 1 4-4z"
        fill="#E6FF00"
      />
      <path d="M35.5 20.5 24.5 35h6.4l-2.9 10.5L39.5 30h-6.4z" fill="#050505" />
    </svg>
  );
}
