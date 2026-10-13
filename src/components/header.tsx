"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/icons";
import { instagramUrl, nav } from "@/lib/site";

function Wordmark({ className = "h-12 md:h-16" }: { className?: string }) {
  return (
    <Image
      src="/brand/nav-logo.png"
      alt="PRESENZE — Comunicación digital"
      width={892}
      height={272}
      priority
      className={`w-auto ${className}`}
    />
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const menu = menuRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const menuButton = buttonRef.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () =>
      Array.from(
        menu?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !menu) return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      (previouslyFocused ?? menuButton)?.focus();
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 bg-surface">
      <div className="mx-auto flex h-[88px] w-full max-w-[1512px] items-center justify-between px-6 md:h-24 md:px-8 lg:h-[104px] lg:px-16">
        <a href="#inicio" className="rounded-sm" onClick={close}>
          <Wordmark />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex h-11 items-center text-[15px] font-semibold text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-1 text-[15px] font-semibold text-ink"
          >
            Instagram
            <ArrowUpRight />
          </a>
          <a href="#contacto" className="inline-flex h-11 items-center gap-1 text-[15px] font-semibold text-ink">
            Hablemos
            <ArrowUpRight />
          </a>
        </nav>

        <div className="flex items-center gap-8 lg:hidden">
          <a
            href="#contacto"
            className="hidden h-14 items-center gap-2 rounded-lg bg-ink px-5 text-[17px] font-semibold text-surface transition-colors duration-300 hover:bg-black active:bg-support md:inline-flex"
          >
            Hablemos
            <ArrowUpRight className="size-[18px]" />
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center text-ink"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {open ? (
        <div
          ref={menuRef}
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-50 flex flex-col bg-surface"
        >
          <div className="mx-auto flex h-[88px] w-full max-w-[1512px] items-center justify-between px-6 md:h-24 md:px-8">
            <a href="#inicio" onClick={close}>
              <Wordmark />
            </a>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex size-11 items-center justify-center text-ink"
              aria-label="Cerrar menú"
              onClick={close}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-[1512px] flex-1 flex-col px-6 pb-12 md:px-8">
            <p id={titleId} className="eyebrow text-muted">
              Vamos a conocernos
            </p>
            <nav aria-label="Secciones" className="mt-8 flex flex-col">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="border-t border-support py-4 text-[clamp(2rem,6vw,3rem)] font-medium leading-none tracking-[-0.03em] text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contacto"
              onClick={close}
              className="mt-8 inline-flex h-14 w-fit items-center gap-2 rounded-lg bg-ink px-6 text-[17px] font-semibold text-surface transition-colors duration-300 hover:bg-black active:bg-support"
            >
              Hablemos
              <ArrowUpRight className="size-[18px]" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 text-[17px] font-medium text-ink"
            >
              Instagram · @somos_presenze
              <ArrowUpRight />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
