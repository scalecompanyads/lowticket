"use client";

import { useEffect, useState } from "react";

/**
 * CTA fixo no rodapé do mobile: aparece depois que o hero sai da tela
 * e some enquanto o primeiro plano está visível (para não cobrir o botão real).
 */
export function StickyCta({
  label = "QUERO COMEÇAR AGORA",
}: {
  label?: string;
}) {
  const [pastHero, setPastHero] = useState(false);
  const [planVisible, setPlanVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("main > section");
    const plan = document.getElementById("plano");
    if (!hero || !plan) return;

    let heroVisible = true;
    let planInView = false;

    const sync = () => {
      setPastHero(!heroVisible);
      setPlanVisible(planInView);
    };

    const heroIo = new IntersectionObserver(([e]) => {
      heroVisible = e.isIntersecting;
      requestAnimationFrame(sync);
    });
    const planIo = new IntersectionObserver(
      ([e]) => {
        planInView = e.isIntersecting;
        requestAnimationFrame(sync);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    heroIo.observe(hero);
    planIo.observe(plan);
    return () => {
      heroIo.disconnect();
      planIo.disconnect();
    };
  }, []);

  const show = pastHero && !planVisible;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 p-[10px] pb-[max(10px,env(safe-area-inset-bottom))] transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!show}
    >
      <a
        href="#plano"
        tabIndex={show ? 0 : -1}
        data-cta-id="sticky_mobile"
        data-cta-label={label}
        className="mx-auto flex min-h-[56px] w-full max-w-[420px] items-center justify-center rounded-full bg-cta px-4 py-2 text-center font-display text-[15px] font-semibold leading-tight text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] active:scale-[0.98]"
      >
        {label}
      </a>
    </div>
  );
}
