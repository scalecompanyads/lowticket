type Props = {
  href: string;
  label: string;
  /** Identificador da posição do CTA na página, enviado ao dataLayer e ao Pixel. */
  id: string;
  /** Nome do plano ("Unico"). */
  planName?: string;
  className?: string;
};

export function CtaButton({ href, label, id, planName, className = "" }: Props) {
  const isExternalCheckout = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      href={href}
      data-cta-id={id}
      data-cta-label={label}
      data-plan-name={planName}
      data-external={isExternalCheckout ? "1" : undefined}
      className={`cta-pulse flex min-h-[72px] w-full max-w-[365px] items-center justify-center rounded-full bg-cta px-5 py-3 text-center font-display text-[18px] font-semibold leading-tight text-white sm:text-[20px] ${className}`}
    >
      {label}
    </a>
  );
}
