"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections";
import { cn } from "@/lib/cn";

export default function Nav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-hairline bg-substrate/95 backdrop-blur-sm">
      <nav
        aria-label="Section navigation"
        className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 md:px-10"
      >
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-ink hover:text-trace"
        >
          O.ELEBIARY
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 font-mono text-[13px] uppercase tracking-wide md:flex">
          {SECTIONS.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative pb-1 transition-colors duration-150",
                    isActive ? "text-trace" : "text-slate hover:text-ink"
                  )}
                >
                  {section.navLabel}
                  <span
                    className={cn(
                      "absolute -bottom-[1px] left-0 h-[2px] w-full origin-left bg-trace transition-transform duration-150 ease-out",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="font-mono text-[13px] uppercase tracking-wide text-ink md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-hairline px-6 py-3 font-mono text-sm uppercase tracking-wide md:hidden"
        >
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block py-2",
                  active === section.id ? "text-trace" : "text-slate"
                )}
              >
                {section.navLabel}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
