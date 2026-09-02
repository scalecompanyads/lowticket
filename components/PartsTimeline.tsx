"use client";

import { useEffect, useRef } from "react";

type Step = { title: string; desc: string };

export function PartsTimeline({ steps }: { steps: readonly Step[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const isStep = (title: string) => /^(PARTE|GUIA)\s+\d/i.test(title);
  const parts = steps.filter((s) => isStep(s.title));
  const notes = steps.filter((s) => !isStep(s.title));

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reveal = () => root.classList.add("is-in");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        io.disconnect();
      },
      { threshold: 0.28, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="parts-timeline w-full max-w-[400px] text-left">
      <ol className="m-0 flex list-none flex-col p-0">
        {parts.map((step, i) => (
          <li
            key={step.title}
            className="parts-timeline__item flex items-stretch gap-4"
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className="flex w-10 shrink-0 flex-col items-center">
              <span className="parts-timeline__node">{i + 1}</span>
              {i < parts.length - 1 ? (
                <span className="parts-timeline__seg" aria-hidden>
                  <span className="parts-timeline__track" />
                  <span className="parts-timeline__fill" />
                  <span className="parts-timeline__drop-track">
                    <span className="parts-timeline__drop" />
                  </span>
                </span>
              ) : null}
            </div>
            <div className={`parts-timeline__body ${i < parts.length - 1 ? "pb-8" : "pb-1"}`}>
              <h3 className="font-display text-[22px] font-semibold leading-snug text-white">
                {step.title}
              </h3>
              <p className="mt-1 text-[18px] font-medium leading-relaxed text-white/70">
                {step.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
      {notes.map((note, i) => (
        <div
          key={note.title}
          className="parts-timeline__note mt-5 rounded-2xl px-4 py-4"
          style={{ "--i": parts.length + i } as React.CSSProperties}
        >
          <h3 className="font-display text-[18px] font-semibold leading-snug text-white">
            {note.title}
          </h3>
          <p className="mt-1 text-[16px] font-medium leading-relaxed text-white/70">
            {note.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
