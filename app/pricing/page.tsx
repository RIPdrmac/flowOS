import Link from "next/link";
import type { Metadata } from "next";
import { getProducts, getAllPricing } from "../lib/firebase";
import { transformProduct } from "../lib/transform";
import { products as fallbackProducts, bundles, superdash } from "../lib/products";

export const metadata: Metadata = {
  title: "Launch Pricing — 50% Off Everything | BRIX",
  description:
    "Launch pricing for the first 100 customers. 50% off every BRIX. Once these spots are gone, full price forever.",
};

const faqs = [
  {
    question: "Is this really 50% off?",
    answer:
      "Yes. Launch pricing for the first 100 customers. No gimmicks, no fake countdown timers. Once 100 spots are claimed, prices go to full retail. Period.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Full price. No exceptions. No \"oh we extended the sale\" nonsense. If you're customer #101, you pay full price. That's it.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Yes. Pay the difference between your current tier and the next one. If you bought Foundation at launch price, you can upgrade to Structure by paying the difference at whatever the current price is at that time.",
  },
  {
    question: "What's in a bundle?",
    answer:
      "Pick any 3 BRIX you want from our catalog. Mix and match industries. A DJ who also tutors and runs a cleaning business? That's 3 BRIX, one bundle price.",
  },
  {
    question: "Do I get SUPERDASH with bundles?",
    answer:
      "Only with The Empire Stack (Architect tier). The Starter Stack and Builder Stack do not include SUPERDASH, but you can add it for $297 at launch pricing.",
  },
];

function getBundleBorderColor(badge: string) {
  switch (badge) {
    case "BEST VALUE":
      return "border-green-500/40";
    case "MOST POPULAR":
      return "border-gold/40";
    case "EMPIRE BUILDER":
      return "border-red-500/40";
    default:
      return "border-border";
  }
}

function getBundleBadgeColor(badge: string) {
  switch (badge) {
    case "BEST VALUE":
      return "bg-green-500/10 text-green-400";
    case "MOST POPULAR":
      return "bg-gold/10 text-gold";
    case "EMPIRE BUILDER":
      return "bg-red-500/10 text-red-400";
    default:
      return "bg-muted/10 text-muted";
  }
}

export default async function PricingPage() {
  let products;
  try {
    const [rawProducts, rawPricing] = await Promise.all([getProducts(), getAllPricing()]);
    products = rawProducts.map((p) => {
      const pricing = rawPricing.find((pr) => pr.productId === p.id);
      return transformProduct(p, pricing);
    });
    if (products.length === 0) products = fallbackProducts;
  } catch {
    products = fallbackProducts;
  }

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 pt-24">
        {/* Background glow */}
        <div className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Pulsing launch badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-red-400">
              Launch Special
            </span>
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Launch Pricing —{" "}
            <span className="text-red-400">First 100 Only</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            50% off everything. Once these spots are gone,{" "}
            <span className="font-bold text-foreground">full price forever.</span>
          </p>
        </div>
      </section>

      {/* ===== INDIVIDUAL BRIX PRICING GRID ===== */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Individual BRIX
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Every <span className="text-[#eab308] font-bold">BRIX</span>. Half Price. Right Now.
            </h2>
          </div>

          {/* Product pricing grid */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-left text-sm font-bold uppercase tracking-widest text-muted">
                    BRIX
                  </th>
                  <th className="pb-4 text-center text-sm font-bold uppercase tracking-widest text-muted">
                    Foundation
                  </th>
                  <th className="pb-4 text-center text-sm font-bold uppercase tracking-widest text-gold">
                    Structure
                  </th>
                  <th className="pb-4 text-center text-sm font-bold uppercase tracking-widest text-muted">
                    Architect
                  </th>
                  <th className="pb-4 text-right text-sm font-bold uppercase tracking-widest text-muted">
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.slug}
                    className="border-b border-border/50 transition-colors hover:bg-surface"
                  >
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: product.color }}
                        />
                        <div>
                          <p className="text-sm font-bold">{product.name}</p>
                          <p
                            className="text-[10px] font-semibold uppercase tracking-widest"
                            style={{ color: product.color }}
                          >
                            {product.codename}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 text-center">
                      <span className="text-xs text-muted line-through">
                        ${product.launchPricing.foundation.regular}
                      </span>
                      <br />
                      <span className="text-lg font-extrabold">
                        ${product.launchPricing.foundation.launch}
                      </span>
                    </td>
                    <td className="py-5 text-center">
                      <span className="text-xs text-muted line-through">
                        ${product.launchPricing.structure.regular}
                      </span>
                      <br />
                      <span className="text-lg font-extrabold text-gold">
                        ${product.launchPricing.structure.launch}
                      </span>
                    </td>
                    <td className="py-5 text-center">
                      <span className="text-xs text-muted line-through">
                        ${product.launchPricing.architect.regular}
                      </span>
                      <br />
                      <span className="text-lg font-extrabold">
                        ${product.launchPricing.architect.launch}
                      </span>
                    </td>
                    <td className="py-5 text-right">
                      <Link
                        href={`/${product.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold transition-colors hover:text-foreground"
                        style={{ color: product.color }}
                      >
                        View BRIX
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== BUNDLES — THE MONEY PLAY ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              The Money Play
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Bundle &amp; Save Even More
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Pick any 3 <span className="text-[#eab308] font-bold">BRIX</span> you want. Mix and match industries. Stack your empire.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {bundles.map((bundle) => (
              <div
                key={bundle.name}
                className={`relative rounded-2xl border-2 p-8 ${getBundleBorderColor(
                  bundle.badge
                )} bg-background`}
              >
                {/* Badge */}
                <div
                  className={`mb-6 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${getBundleBadgeColor(
                    bundle.badge
                  )}`}
                >
                  {bundle.badge}
                </div>

                <h3 className="text-xl font-extrabold">{bundle.name}</h3>
                <p className="mt-1 text-sm text-muted">{bundle.description}</p>

                {/* Price */}
                <div className="my-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg text-muted line-through">
                      ${bundle.regularPrice}
                    </span>
                    <span className="text-5xl font-extrabold">
                      ${bundle.launchPrice}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">one-time payment</p>
                </div>

                {/* Savings callout */}
                <div className="mb-6 rounded-lg border border-green-500/20 bg-green-500/5 p-3 text-center">
                  <p className="text-lg font-extrabold text-green-400">
                    Save ${bundle.savings}
                  </p>
                </div>

                {/* What's included */}
                <ul className="mb-8 flex flex-col gap-2">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {bundle.quantity} {bundle.tier.charAt(0).toUpperCase() + bundle.tier.slice(1)} BRIX of your choice
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Mix and match any industries
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Lifetime updates on all 3
                  </li>
                  {('includesSuperdash' in bundle && bundle.includesSuperdash) && (
                    <li className="flex items-center gap-2 text-sm font-bold text-gold">
                      <svg className="h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      FREE SUPERDASH included ($497 value)
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <button className="w-full rounded-full bg-gold py-3 text-center text-sm font-bold text-background transition-all hover:scale-[1.02] hover:bg-gold-dark">
                  Get {bundle.name} &rarr;
                </button>

                <p className="mt-3 text-center text-[10px] text-muted">
                  First 100 customers only. Price doubles after launch.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUPERDASH UPSELL ===== */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-10 text-center sm:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              The Command Center
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              SUPERDASH
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              One dashboard for all your <span className="text-[#eab308] font-bold">BRIX</span>. Unified analytics. Combined financials. Instant persona switching.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="text-xl text-muted line-through">${superdash.price}</span>
              <span className="text-4xl font-extrabold text-gold">${superdash.launchPrice}</span>
              <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-bold text-green-400">
                Save ${superdash.savings}
              </span>
            </div>
            <p className="mt-3 text-lg font-bold text-gold">
              Or FREE with any Architect purchase
            </p>
            <div className="mt-8">
              <Link
                href="/superdash"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-lg font-bold text-background transition-all hover:scale-105 hover:bg-gold-dark"
              >
                Learn More About SUPERDASH
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Questions?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Pricing FAQ
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border bg-background"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 text-sm font-bold">
                  {faq.question}
                  <svg
                    className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </summary>
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-red-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">
              100 Spots. That&apos;s It.
            </span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Prices go up. Spots go down.{" "}
            <span className="text-red-400">Move now.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Every <span className="text-[#eab308] font-bold">BRIX</span> at 50% off. Every bundle at insane savings. This is the lowest these prices will ever be.
          </p>
          <div className="mt-10">
            <a
              href="/#products"
              className="inline-block rounded-full bg-gold px-10 py-5 text-lg font-bold text-background transition-all hover:scale-105 hover:bg-gold-dark"
            >
              Get Your <span className="font-bold">BRIX</span> Now &rarr;
            </a>
          </div>
          <p className="mt-6 text-xs text-muted">
            One-time purchase. No subscriptions. Lifetime updates. Price doubles after launch.
          </p>
        </div>
      </section>
    </main>
  );
}
