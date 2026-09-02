import dynamic from "next/dynamic";
import { CtaButton } from "@/components/CtaButton";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Marquee } from "@/components/Marquee";
import { AnchorScroll } from "@/components/AnchorScroll";
import {
  theme,
  offerBar,
  hero,
  materials,
  whySection,
  idealSection,
  offerSection,
  plansSection,
  guarantee,
  contact,
  testimonials,
  stepsSection,
  faq,
  faqTitle,
  footer,
  checkout,
} from "@/lib/content";

const StickyCta = dynamic(() =>
  import("@/components/StickyCta").then((m) => m.StickyCta),
);
const TestimonialCarousel = dynamic(() =>
  import("@/components/TestimonialCarousel").then((m) => m.TestimonialCarousel),
);
const PartsTimeline = dynamic(() =>
  import("@/components/PartsTimeline").then((m) => m.PartsTimeline),
);
/* ── palette ── */
const P = {
  paper:     "#ffffff",
  blush:     "#f2f2f3",
  mint:      "#e9e9eb",
  peacock:   "#1a1a1a",
  plum:      "#111111",
  raspberry: "#3a43e3",
  marigold:  "#3a43e3",
  card:      "#ffffff",
} as const;

const BELOW = "cv-auto contain-paint";
const SUB = "text-[18px] font-medium";

function LazyImg({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <ImagePlaceholder
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "low"}
      className={className}
    />
  );
}

/* ── shared atoms ── */

function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ backgroundColor: from }}>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 56 }}
        aria-hidden
      >
        <path d="M0,56 L0,28 C480,0 960,56 1440,28 L1440,56 Z" fill={to} />
      </svg>
    </div>
  );
}

function Check({ className = "", color = "#1a1a1a" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 18 13" fill="none" className={`w-4 shrink-0 ${className}`} aria-hidden>
      <path d="M17 1L6 12L1 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" className={`w-4 shrink-0 ${className}`} aria-hidden>
      <path d="M1 1L13 13M13 1L1 13" stroke="#3a43e3" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SecurePurchaseBadge() {
  const badge = plansSection.securePurchaseBadge;
  return (
    <LazyImg
      src={badge.src}
      alt={badge.alt}
      width={badge.width}
      height={badge.height}
      className="w-full max-w-[320px]"
    />
  );
}

function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`z-10 inline-block rounded-full bg-badge px-4 py-2 text-[13px] font-semibold text-white ${className}`}>
      {children}
    </span>
  );
}

function FeatureItem({
  text,
  light = false,
  struck = false,
  greenCheck = false,
}: {
  text: string;
  light?: boolean;
  struck?: boolean;
  greenCheck?: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-3 py-[9px] ${SUB} leading-snug
        ${struck ? "opacity-40 line-through" : ""}
        ${light ? "text-white" : "text-ink"}`}
    >
      {struck ? (
        <CrossIcon className="mt-[2px]" />
      ) : (
        <Check className="mt-[2px]" color={greenCheck ? "#22c55e" : undefined} />
      )}
      <span>{text}</span>
    </li>
  );
}

/* ── page ── */

export const revalidate = 3600;

export default function Home() {
  const today = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
    <main
      className="flex w-full flex-col overflow-x-hidden"
      style={{
        "--color-brand": theme.brandColor,
        fontFamily: "var(--font-manrope), Manrope, sans-serif",
      } as React.CSSProperties}
    >
      {/* Offer bar */}
      <div className="flex items-center justify-center px-4 py-[10px]" style={{ backgroundColor: P.raspberry }}>
        <p className="text-center font-display text-[12px] font-semibold leading-snug text-white">
          {offerBar.text} {today}
        </p>
      </div>

      <StickyCta label={hero.ctaLabel} />
      <AnchorScroll />

      {/* ══ HERO ══ */}
      <section className="scrap-hero px-5 pb-1 pt-4 text-center">
        <div className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-5">
          {hero.secureSeal ? (
            <span className="inline-flex items-center rounded-full border border-brand/20 bg-blush px-4 py-2 text-[12px] font-semibold leading-snug text-ink shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              {hero.secureSeal}
            </span>
          ) : null}
          <div role="heading" aria-level={1} className="leading-[1.05]">
            <p className="block font-display text-[26px] font-semibold text-brand">
              {hero.titleHighlight}
            </p>
            {hero.title ? (
              <p className="mt-1 block font-display text-[22px] font-semibold text-ink/70">
                {hero.title}
              </p>
            ) : null}
          </div>

          <div className="relative mt-2 w-full max-w-[383px]">
            <LazyImg
              src={hero.poster.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              priority
              className="h-auto w-full rounded-[10px]"
            />
          </div>

          <p className={`max-w-[340px] ${SUB} leading-relaxed text-muted`}>
            {hero.subtitle}
          </p>

          <CtaButton
            href={checkout.hero}
            label={hero.ctaLabel}
            id="hero"
            className="w-full max-w-[382px]"
          />
          {hero.deliveryNote ? (
            <p className={`text-center ${SUB} leading-snug text-muted`}>
              {hero.deliveryNote}
            </p>
          ) : null}
        </div>
      </section>

      {/* Wave paper→mint */}
      <WaveDivider from={P.paper} to={P.mint} />

      {/* ══ MATERIAIS ══ */}
      <section style={{ backgroundColor: P.mint }} className={`${BELOW} pb-14 pt-4 text-center`}>
        <div className="mx-auto max-w-[640px] px-5">
          <h2 className="mb-7 font-display text-[36px] font-semibold leading-[0.9] text-ink">
            {materials.title}
          </h2>
        </div>
        <Marquee
          duration={22.4}
          itemWidth={260}
          containerClassName="max-w-[480px] lg:max-w-[560px] mx-auto"
          imageSize={materials.imageSize}
          items={materials.items}
        />
      </section>

      {whySection.cards.length > 0 ? (
        <>
          <WaveDivider from={P.mint} to={P.peacock} />
          <section
            style={{ backgroundColor: P.peacock }}
            className={`${BELOW} px-6 pb-16 pt-12 text-center`}
          >
            <h2 className="mb-9 font-display text-[36px] font-semibold leading-[0.9] text-white">
              {whySection.title}
            </h2>
            <div className="mx-auto grid w-full max-w-[720px] gap-4 sm:grid-cols-2">
              {whySection.cards.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 rounded-2xl scrap-card px-5 py-5 text-left"
                >
                  <span className="text-[30px] leading-none" aria-hidden>
                    {c.icon}
                  </span>
                  <div>
                    <p className="font-display text-[19px] font-semibold leading-snug text-ink">
                      {c.title}
                    </p>
                    <p className={`mt-1 ${SUB} leading-snug text-muted`}>
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <WaveDivider from={P.peacock} to={P.blush} />
        </>
      ) : (
        <WaveDivider from={P.mint} to={P.blush} />
      )}

      {/* ══ IDEAL PARA VOCÊ ══ */}
      <section
        style={{ backgroundColor: P.blush }}
        className={`${BELOW} px-5 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto max-w-[960px]">
          <h2 className="mb-9 font-display text-[36px] font-semibold leading-[0.9] text-ink">
            {idealSection.title}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {idealSection.items.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl scrap-card p-7 text-left"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
              >
                <span
                  className="font-display text-[52px] font-semibold leading-none select-none"
                  style={{ color: "color-mix(in srgb, var(--color-marigold) 55%, transparent)" }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-[16px] font-bold uppercase leading-tight text-ink">
                  {item.title}
                </p>
                {item.desc ? (
                  <p className={`${SUB} leading-relaxed text-muted`}>
                    {item.desc}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave blush→plum */}
      <WaveDivider from={P.blush} to={P.plum} />

      {/* ══ OFERTA PRINCIPAL ══ */}
      <section
        style={{ backgroundColor: P.plum }}
        className={`${BELOW} px-5 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-5">
          <Badge>{offerSection.pill}</Badge>
          <h2 className="font-display text-[36px] font-semibold leading-[0.9] text-white">
            {offerSection.title}
          </h2>
          <p className={`font-display ${SUB} text-white/60`}>
            {offerSection.cardTitle}
          </p>
          {offerSection.lead ? (
            <p className={`${SUB} text-white/70`}>{offerSection.lead}</p>
          ) : null}

          <LazyImg
            src={offerSection.image.src}
            alt={offerSection.image.alt}
            width={offerSection.image.width}
            height={offerSection.image.height}
            className="w-full rounded-[12px]"
          />

          <PartsTimeline steps={offerSection.howItWorks} />
        </div>
      </section>

      {/* Wave plum→paper */}
      <WaveDivider from={P.plum} to={P.paper} />

      {/* ══ DEPOIMENTOS ══ */}
      <section
        style={{ backgroundColor: P.paper }}
        className={`${BELOW} px-5 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto flex w-full max-w-[553px] flex-col items-center gap-7 lg:max-w-[960px]">
          <h2 className="max-w-[480px] font-display text-[32px] font-semibold leading-[0.95] text-ink">
            {testimonials.title}
          </h2>
          <TestimonialCarousel items={testimonials.items} />
        </div>
      </section>

      {/* Wave paper→mint */}
      <WaveDivider from={P.paper} to={P.mint} />

      {/* ══ PLANOS ══ */}
      <section
        id="planos"
        style={{ backgroundColor: P.mint }}
        className="px-5 pb-16 pt-12 text-center"
      >
        <div className="mx-auto max-w-[480px]">
          <Badge className="whitespace-nowrap px-3 py-1.5 text-[10px]">{plansSection.pill}</Badge>
          <h2 className="my-7 font-display text-[38px] font-semibold leading-[0.9] text-ink">
            {plansSection.title}
          </h2>

          <div id="plano" className="flex w-full scroll-mt-[88px] flex-col items-center lg:scroll-mt-8">
            {plansSection.plan.soldLabel ? (
              <Badge className="relative z-10 -mb-3">{plansSection.plan.soldLabel}</Badge>
            ) : null}
            <div
              className="flex w-full flex-col items-center gap-4 rounded-2xl px-6 pb-10 pt-6"
              style={{ backgroundColor: P.plum }}
            >
              <span
                className="mt-3 inline-block whitespace-nowrap rounded-full px-3 py-1.5 font-display text-[10px] font-bold text-white"
                style={{ backgroundColor: P.raspberry }}
              >
                {plansSection.plan.badge}
              </span>
              <p
                className="rounded-full px-6 py-2 font-display text-[22px] font-semibold text-white sm:text-[24px]"
                style={{ backgroundColor: P.peacock }}
              >
                {plansSection.plan.name}
              </p>
              <LazyImg
                src={plansSection.plan.image.src}
                alt={plansSection.plan.image.alt}
                width={plansSection.plan.image.width}
                height={plansSection.plan.image.height}
                className="w-full rounded-xl"
              />
              <Badge>{plansSection.plan.pill}</Badge>
              <p className={`font-display ${SUB} text-white`}>
                {plansSection.plan.receiveLabel}
              </p>
              <ul className="w-full max-w-[320px] text-left">
                {plansSection.plan.features.map((f) => (
                  <FeatureItem key={f} text={f} light greenCheck />
                ))}
              </ul>
              <p className="font-display text-[18px] text-alert line-through">
                de {plansSection.plan.oldPrice} por:
              </p>
              <p className="font-display text-[60px] font-semibold leading-none text-white">
                {plansSection.plan.price}
              </p>
              <p className={`font-display ${SUB} text-white`}>
                {plansSection.plan.installments}
              </p>
              <p className={`flex items-center gap-2 font-display ${SUB} text-white`}>
                <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: "#22c55e" }} aria-hidden />
                {plansSection.plan.savings}
              </p>
              <CtaButton
                href={checkout.plan}
                label={plansSection.plan.ctaLabel}
                id="plano"
                planName="Unico"
              />
              <p className={`font-display ${SUB} text-white/80`}>
                {guarantee.intro}
              </p>
              <SecurePurchaseBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Wave mint→peacock */}
      <WaveDivider from={P.mint} to={P.peacock} />

      {/* ══ GARANTIA ══ */}
      <section
        style={{ backgroundColor: P.peacock }}
        className={`${BELOW} px-10 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto flex max-w-[400px] flex-col items-center gap-5">
          <LazyImg
            src="/guarantee-seal.webp"
            alt={guarantee.seal.alt}
            width={guarantee.seal.width}
            height={guarantee.seal.height}
          />
          <h2 className="font-display text-[32px] font-semibold leading-snug text-white">
            {guarantee.title}
          </h2>
          <div className={`text-left ${SUB} leading-relaxed`} style={{ color: "rgba(255,255,255,0.82)" }}>
            <p className="mt-4">{guarantee.lead}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {guarantee.bullets.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span
                    className="mt-[7px] size-2 shrink-0 rounded-full bg-alert"
                    aria-hidden
                  />
                  {t}
                </li>
              ))}
            </ul>
            {guarantee.outro ? (
              <p className="mt-4">
                {guarantee.outro}{" "}
                {guarantee.outroStrong ? <strong>{guarantee.outroStrong}</strong> : null}
              </p>
            ) : null}
          </div>
          {guarantee.helpLabel && contact.email ? (
            <>
              <p className={SUB} style={{ color: "rgba(255,255,255,0.55)" }}>
                {guarantee.helpLabel}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="rounded-full bg-cta px-6 py-3 font-display text-[18px] font-semibold text-white transition hover:brightness-110"
              >
                {contact.email}
              </a>
            </>
          ) : null}
        </div>
      </section>

      {stepsSection.steps.length > 0 ? (
        <>
          <WaveDivider from={P.peacock} to={P.peacock} />
          <section
            style={{ backgroundColor: P.peacock }}
            className={`${BELOW} px-6 pb-16 pt-12 text-center`}
          >
            <h2 className="font-display text-[36px] font-semibold leading-[0.9] text-white">
              {stepsSection.title}
            </h2>
            {stepsSection.subtitle ? (
              <p className={`mt-2 font-display ${SUB} text-white/65`}>
                {stepsSection.subtitle}
              </p>
            ) : null}
            <div className="mx-auto mt-9 flex w-full max-w-[640px] flex-col gap-0">
              {stepsSection.steps.map((s, i) => (
                <div key={s.title} className="flex items-stretch gap-4 text-left">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-full font-display text-[17px] font-bold text-white"
                      style={{ backgroundColor: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.5)" }}
                    >
                      {i + 1}
                    </div>
                    {i < stepsSection.steps.length - 1 && (
                      <div
                        className="w-[2px] flex-1 my-1"
                        style={{ backgroundColor: "rgba(255,255,255,0.2)", minHeight: 24 }}
                        aria-hidden
                      />
                    )}
                  </div>
                  <div className="mb-4 flex flex-1 flex-col gap-1 rounded-2xl scrap-card p-5">
                    <p className="font-display text-[20px] font-semibold text-ink">{s.title}</p>
                    {s.desc ? (
                      <p className={`${SUB} text-muted`}>{s.desc}</p>
                    ) : null}
                    {s.items.length > 0 ? (
                      <ul className="mt-1 flex flex-col gap-1">
                        {s.items.map((t) => (
                          <li key={t} className={`flex items-center gap-2 ${SUB} text-ink`}>
                            <Check className="!w-[12px]" /> {t}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            {stepsSection.ctaLabel ? (
              <div className="mt-4 flex justify-center">
                <CtaButton
                  href={checkout.hero}
                  label={stepsSection.ctaLabel}
                  id="passo_a_passo"
                />
              </div>
            ) : null}
          </section>
          <WaveDivider from={P.peacock} to={P.blush} />
        </>
      ) : (
        <WaveDivider from={P.peacock} to={P.blush} />
      )}

      {/* ══ FAQ ══ */}
      <section
        style={{ backgroundColor: P.blush }}
        className={`${BELOW} px-5 pb-16 pt-12`}
      >
        <div className="mx-auto max-w-[640px]">
          <h2 className="mb-8 text-center font-display text-[36px] font-semibold leading-[0.9] text-ink">
            {faqTitle}
          </h2>
          <div className="flex flex-col gap-2">
            {faq.map(([q, a], i) => (
              <details
                key={q}
                className="scrap-faq-item rounded-xl"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display text-[15px] font-semibold text-ink">
                  {i + 1}. {q}
                  <svg
                    viewBox="0 0 13 7"
                    className="faq-chevron w-3 shrink-0 transition-transform duration-200"
                    aria-hidden
                  >
                    <path
                      d="M0.5 0.5L6.5 6.5L12.5 0.5"
                      stroke={P.plum}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </summary>
                <p className={`px-5 pb-5 ${SUB} leading-relaxed text-muted`}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RODAPÉ ══ */}
      <footer
        style={{ backgroundColor: P.paper }}
        className="px-6 py-10 text-center"
      >
        <p className={`${SUB} text-ink`}>
          ©️ {footer.copyright}
        </p>
        {contact.email ? (
          <p className={`mt-2 ${SUB}`}>
            Contato:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-semibold text-brand hover:underline"
            >
              {contact.email}
            </a>
          </p>
        ) : null}
        <p className={`mt-6 ${SUB} text-muted`}>{footer.legal}</p>
      </footer>
    </main>
    </>
  );
}
