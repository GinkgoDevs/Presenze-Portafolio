export function MenuIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

export function ArrowUpRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18 18"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13 13 5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 5h6v6" />
    </svg>
  );
}

export function PlusMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" d="M14 6v16M6 14h16" />
    </svg>
  );
}

export function ArrowDownRight({ className = "size-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M24 24 72 72" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M36 72h36V36" />
    </svg>
  );
}

export function PlayMark({ className = "size-16", filled = false }: { className?: string; filled?: boolean }) {
  return (
    <span
      className={`grid place-items-center rounded-full border ${filled ? "border-surface bg-ink text-surface" : "border-ink/70 text-ink"} ${className}`}
    >
      <svg viewBox="0 0 18 18" aria-hidden="true" className="size-4 translate-x-px" fill="currentColor">
        <path d="M6 4.2v9.6L14 9 6 4.2Z" />
      </svg>
    </span>
  );
}
