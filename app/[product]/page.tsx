import { notFound } from "next/navigation";
import Link from "next/link";
import { getProducts, getProduct as getFirestoreProduct, getPricing } from "../lib/firebase";
import { transformProduct } from "../lib/transform";
import { products as fallbackProducts, getProduct as getStaticProduct } from "../lib/products";
import type { Metadata } from "next";

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    if (products.length > 0) return products.map((p) => ({ product: p.id }));
  } catch {}
  return fallbackProducts.map((p) => ({ product: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product: slug } = await params;

  let product;
  try {
    const [raw, pricing] = await Promise.all([getFirestoreProduct(slug), getPricing(slug)]);
    if (raw) product = transformProduct(raw, pricing);
  } catch {}
  if (!product) product = getStaticProduct(slug);
  if (!product) return { title: "Not Found" };

  return {
    title: `${product.name} — ${product.codename} | BRIX`,
    description: product.description,
    openGraph: {
      title: `${product.name} — ${product.codename} | BRIX`,
      description: product.description,
    },
  };
}

function BlockIcon({
  icon,
  className = "",
}: {
  icon: string;
  className?: string;
}) {
  const cls = `h-6 w-6 ${className}`;
  switch (icon) {
    case "calendar":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      );
    case "users":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    case "dollar":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "brain":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case "message":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      );
    case "star":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      );
    case "shield":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case "calculator":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
        </svg>
      );
    case "music":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
        </svg>
      );
    case "speaker":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      );
    case "clipboard":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      );
    case "box":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      );
    default:
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      );
  }
}

// Feature lists per tier
function getFeatures(tier: "foundation" | "structure" | "architect", productName: string) {
  const base = [
    "Core business management modules",
    "Client/customer portal",
    "Booking & scheduling system",
    "Mobile-responsive dashboard",
    "Custom branding",
    "Lifetime updates",
  ];
  const mid = [
    ...base,
    "Invoicing & payment tracking",
    "Analytics dashboard",
    "AI-powered assistant (Claude)",
    "SMS & email notifications",
    "Calendar sync",
    "Priority support",
  ];
  const top = [
    ...mid,
    "White-label capability",
    "Multi-location / multi-user",
    "API access",
    "Custom integrations",
    `Resell ${productName} to others`,
    "Dedicated onboarding call",
  ];

  switch (tier) {
    case "foundation":
      return base;
    case "structure":
      return mid;
    case "architect":
      return top;
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: slug } = await params;

  let product;
  try {
    const [raw, pricing] = await Promise.all([getFirestoreProduct(slug), getPricing(slug)]);
    if (raw) product = transformProduct(raw, pricing);
  } catch {}
  if (!product) product = getStaticProduct(slug);

  if (!product) {
    notFound();
  }

  const tiers = [
    {
      key: "foundation" as const,
      name: "Foundation",
      badge: "GET STARTED",
      price: product.pricing.foundation,
      launchPrice: product.launchPricing.foundation.launch,
      savings: product.launchPricing.foundation.savings,
      popular: false,
    },
    {
      key: "structure" as const,
      name: "Structure",
      badge: "MOST POPULAR",
      price: product.pricing.structure,
      launchPrice: product.launchPricing.structure.launch,
      savings: product.launchPricing.structure.savings,
      popular: true,
    },
    {
      key: "architect" as const,
      name: "Architect",
      badge: "WHITE-LABEL PLATFORM",
      price: product.pricing.architect,
      launchPrice: product.launchPricing.architect.launch,
      savings: product.launchPricing.architect.savings,
      popular: false,
    },
  ];

  return (
    <main>
      {/* ===== LAUNCH BANNER ===== */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-red-600 px-4 py-2 text-center">
        <p className="text-sm font-bold text-white">
          LAUNCH SPECIAL — 50% OFF EVERYTHING — First 100 customers only —{" "}
          <span className="underline">{product.launchSpotsLeft} spots left</span>
        </p>
      </div>

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 pt-28">
        {/* Background glow in product color */}
        <div
          className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: `rgba(${product.colorRgb}, 0.08)` }}
        />

        {/* Geometric accents */}
        <div
          className="pointer-events-none absolute top-24 left-12 h-20 w-20 rotate-12 rounded border"
          style={{ borderColor: `rgba(${product.colorRgb}, 0.15)` }}
        />
        <div
          className="pointer-events-none absolute right-16 bottom-40 h-16 w-16 -rotate-6 rounded"
          style={{ backgroundColor: `rgba(${product.colorRgb}, 0.05)` }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Codename badge */}
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2" style={{ borderColor: `rgba(${product.colorRgb}, 0.3)`, backgroundColor: `rgba(${product.colorRgb}, 0.05)` }}>
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: product.color }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: product.color }}>
              {product.codename}
            </span>
          </div>

          <h1 className="animate-fade-up text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl" style={{ color: product.color }}>
            {product.name}
          </h1>

          <p className="animate-fade-up-delay-1 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {product.description}
          </p>

          <p className="animate-fade-up-delay-2 mt-6 text-sm font-bold text-foreground">
            Got <span className="text-[#eab308] font-bold">BRIX</span>?{" "}
            <span style={{ color: product.color }}>{product.hook}</span>
          </p>

          {/* Launch price teaser */}
          <div className="animate-fade-up-delay-2 mt-6 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-3">
            <span className="text-sm text-red-400 line-through">${product.pricing.foundation}</span>
            <span className="text-2xl font-extrabold text-white">${product.launchPricing.foundation.launch}</span>
            <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">LAUNCH PRICE</span>
          </div>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pricing"
              className="inline-block rounded-full px-8 py-4 text-lg font-bold text-background transition-all hover:scale-105"
              style={{ backgroundColor: product.color }}
            >
              Lock In Launch Price
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-foreground"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              All <span className="text-[#eab308] font-bold">BRIX</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="border-y border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em]" style={{ color: product.color }}>
            The Problem
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            You&apos;re running your {product.businessType} from a notebook and texts.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {product.painPoint}
          </p>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em]" style={{ color: product.color }}>
              The Solution
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {product.outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-surface p-6">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-background"
                  style={{ backgroundColor: product.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm font-semibold leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOCKS INCLUDED ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em]" style={{ color: product.color }}>
              What&apos;s Inside
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              8 <span className="text-[#eab308]">blocks</span> Built For Your {product.industry.charAt(0).toUpperCase() + product.industry.slice(1)} Business
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Everything you need to run your {product.industry} business. Each <span className="text-[#eab308]">block</span> is purpose-built for your industry.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.blocks.map((block) => (
              <div
                key={block.name}
                className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-opacity-50"
                style={{
                  ["--hover-border" as string]: product.color,
                }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: `rgba(${product.colorRgb}, 0.1)`,
                    color: product.color,
                  }}
                >
                  <BlockIcon icon={block.icon} />
                </div>
                <h3 className="text-sm font-bold">{block.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-red-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">Launch Pricing — {product.launchSpotsLeft} of {product.launchSpotsTotal} Spots Left</span>
            </div>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              50% Off. First 100 Only.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              {product.competitor} charges {product.competitorPrice}/year.{" "}
              <span className="font-bold" style={{ color: product.color }}>
                {product.name} launch price: ${product.launchPricing.foundation.launch} once. This won&apos;t last.
              </span>
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.key}
                className={`relative rounded-2xl border p-8 ${
                  tier.popular
                    ? "border-2 scale-[1.02]"
                    : "border-border"
                }`}
                style={{
                  borderColor: tier.popular ? product.color : undefined,
                  backgroundColor: tier.popular
                    ? `rgba(${product.colorRgb}, 0.03)`
                    : "#0a0a0f",
                }}
              >
                {/* LAUNCH PRICE Badge */}
                <div className="mb-4 inline-block rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  LAUNCH PRICE
                </div>

                {/* Tier badge */}
                <div
                  className="mb-6 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    backgroundColor: `rgba(${product.colorRgb}, 0.1)`,
                    color: product.color,
                  }}
                >
                  {tier.badge}
                </div>

                {/* Product name + tier */}
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm font-bold" style={{ color: product.color }}>
                  {tier.name}
                </p>

                {/* Price */}
                <div className="my-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl text-muted line-through">${tier.price}</span>
                    <span className="text-5xl font-extrabold">${tier.launchPrice}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">one-time payment</p>
                  <p className="mt-2 inline-block rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                    Save ${tier.savings}
                  </p>
                </div>

                {/* Urgency */}
                <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/5 p-3">
                  <p className="text-xs font-bold text-red-400">
                    First 100 customers only — {product.launchSpotsLeft} spots left
                  </p>
                  <p className="mt-1 text-[10px] text-red-400/70">
                    Price doubles after launch. This is not a drill.
                  </p>
                </div>

                {/* Competitor callout */}
                <div className="mb-6 rounded-lg border border-border bg-background p-3">
                  <p className="text-xs text-muted">
                    <span className="line-through">{product.competitor}: {product.competitorPrice}/yr</span>
                    {" "}
                    <span className="font-bold" style={{ color: product.color }}>
                      BRIX launch: ${tier.launchPrice} once.
                    </span>
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-8 flex flex-col gap-3">
                  {getFeatures(tier.key, product.name).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={product.color}
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                  {tier.key === "architect" && (
                    <li className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#eab308"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm font-bold text-gold">FREE SUPERDASH included</span>
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <button
                  className="w-full rounded-full py-3 text-center text-sm font-bold transition-all hover:scale-[1.02]"
                  style={{
                    background: tier.popular
                      ? `linear-gradient(135deg, ${product.color}, ${product.color}cc)`
                      : "transparent",
                    color: tier.popular ? "#050507" : product.color,
                    border: tier.popular ? "none" : `1px solid ${product.color}`,
                  }}
                >
                  Lock In Launch Price &rarr;
                </button>

                {/* Footer text */}
                <p className="mt-4 text-center text-[10px] leading-relaxed text-muted">
                  AI-Powered webOS &middot; Claude Intelligence* &middot; Deploy
                  in 60 seconds &middot; Lifetime updates
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em]" style={{ color: product.color }}>
              Questions?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Frequently Asked
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {product.faqs.map((faq, i) => (
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
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

      {/* ===== AI FOOTNOTE ===== */}
      <div className="border-t border-border/30 px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] text-white/30 leading-relaxed">
            <span className="text-[#eab308]/60">*</span> <strong className="text-white/40">Claude Intelligence</strong> — AI features are powered by Anthropic&apos;s Claude API.
            Foundation tier: bring your own API key (free tier available at anthropic.com).
            <span className="text-white/50">Structure tier: 30-day AI trial included.</span>{" "}
            <span className="text-[#eab308]/60">Architect tier: 60-day AI trial included</span> — full AI functionality, no setup required.
          </p>
        </div>
      </div>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden px-6 py-32">
        <div
          className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
          style={{ backgroundColor: `rgba(${product.colorRgb}, 0.06)` }}
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-red-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">{product.launchSpotsLeft} Launch Spots Remaining</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Prices go up. Spots go down.
          </h2>
          <p className="mt-4 text-2xl font-extrabold" style={{ color: product.color }}>
            {product.name} from <span className="line-through text-muted">${product.pricing.foundation}</span>{" "}
            <span className="text-white">${product.launchPricing.foundation.launch}</span>
          </p>
          <div className="mt-10">
            <a
              href="#pricing"
              className="inline-block rounded-full px-10 py-5 text-lg font-bold text-background transition-all hover:scale-105"
              style={{ backgroundColor: product.color }}
            >
              Lock In Launch Price &rarr;
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
