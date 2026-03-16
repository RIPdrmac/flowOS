import Link from "next/link";
import { getProducts, getAllPricing } from "./lib/firebase";
import { transformProduct } from "./lib/transform";
import { products as fallbackProducts } from "./lib/products";
import { WaitlistForm } from "./components/WaitlistForm";

const blocks = [
  { name: "Booking System", icon: "calendar" },
  { name: "Client Portal", icon: "users" },
  { name: "Invoicing", icon: "dollar" },
  { name: "Analytics", icon: "chart" },
  { name: "AI Assistant", icon: "brain" },
  { name: "SMS / Email", icon: "message" },
  { name: "Calendar Sync", icon: "calendar" },
  { name: "Custom Branding", icon: "star" },
];

function BlockIcon({ icon, className = "" }: { icon: string; className?: string }) {
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
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

const testimonials = [
  {
    quote: "I was paying $89/month for three different tools. DJBook replaced all of them for a one-time payment. Best investment I've made for my DJ business.",
    name: "Marcus T.",
    role: "Full-time DJ, Atlanta",
  },
  {
    quote: "The fact that I own this forever blew my mind. No more worrying about price hikes or features getting locked behind a higher tier.",
    name: "Priya S.",
    role: "Freelance Designer, NYC",
  },
  {
    quote: "Switched from Jobber to CleaningBiz and saved $600 in the first year alone. The AI route optimizer is a game changer.",
    name: "Devon R.",
    role: "Cleaning Business Owner, Houston",
  },
];

export default async function Home() {
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
      {/* ===== LAUNCH BANNER (fixed below nav) ===== */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-red-600 px-4 py-2 text-center">
        <p className="text-sm font-bold text-white">
          LAUNCH SPECIAL — 50% OFF EVERYTHING — First 100 customers only —{" "}
          <Link href="/pricing" className="underline">See Launch Pricing</Link>
        </p>
      </div>

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
        {/* Background glow */}
        <div className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

        {/* Geometric accents */}
        <div className="pointer-events-none absolute top-20 left-10 h-16 w-16 rotate-12 rounded border border-gold/10 md:h-24 md:w-24" />
        <div className="pointer-events-none absolute right-16 bottom-32 h-12 w-12 -rotate-6 rounded bg-gold/5 md:h-20 md:w-20" />
        <div className="pointer-events-none absolute top-40 right-24 h-8 w-8 rotate-45 border border-gold/10" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="animate-fade-up">
            <h1 className="text-gold-gradient text-7xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
              Got <span className="text-[#eab308] font-bold">BRIX</span>?
            </h1>
          </div>
          <p className="animate-fade-up-delay-1 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            The building <span className="text-[#eab308]">blocks</span> for your business. One-time purchase. Own it
            forever.
          </p>
          <p className="animate-fade-up-delay-2 mt-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
            Stack. Build. Own.
          </p>

          {/* Launch pricing teaser */}
          <div className="animate-fade-up-delay-2 mt-6 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-3">
            <span className="text-sm text-red-400 line-through">from $197</span>
            <span className="text-2xl font-extrabold text-white">from $77</span>
            <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">50% OFF LAUNCH</span>
          </div>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#products"
              className="inline-block rounded-full bg-gold px-8 py-4 text-lg font-bold text-background transition-all hover:scale-105 hover:bg-gold-dark"
            >
              See All <span className="font-bold">BRIX</span>
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-4 text-sm font-bold text-red-400 transition-all hover:scale-105 hover:bg-red-500/20"
            >
              View Launch Pricing &rarr;
            </Link>
          </div>

          {/* Waitlist email capture */}
          <div className="animate-fade-up-delay-3">
            <WaitlistForm buttonText="Join the Waitlist" variant="hero" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-10 w-6 rounded-full border-2 border-muted/30 p-1">
            <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-gold" />
          </div>
        </div>
      </section>

      {/* ===== ANTI-SAAS BANNER ===== */}
      <section className="border-y border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Stop renting your tools.{" "}
            <span className="text-gold">Own your <span className="text-[#eab308] font-bold">BRIX</span>.</span>
          </h2>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-6 md:flex-row md:gap-4">
            {/* SaaS cost */}
            <div className="flex-1 rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-red-400">
                Typical SaaS
              </p>
              <p className="mt-4 text-4xl font-extrabold text-red-400">
                $39/mo
              </p>
              <p className="mt-1 text-sm text-muted">
                &times; 12 months = <span className="font-bold text-red-400">$468/year</span>
              </p>
              <p className="mt-3 text-xs text-muted">
                And they can raise prices anytime.
              </p>
            </div>

            {/* VS */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-light text-sm font-bold text-muted">
              vs
            </div>

            {/* BRIX cost */}
            <div className="flex-1 rounded-2xl border border-gold/20 bg-gold/5 p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-gold">
                <span className="text-[#eab308] font-bold">BRIX</span> Launch Price
              </p>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-xl text-muted line-through">$197</span>
                <span className="text-4xl font-extrabold text-gold">$97</span>
              </div>
              <p className="mt-1 text-sm text-muted">
                One-time. <span className="font-bold text-gold">Forever.</span>
              </p>
              <p className="mt-2 inline-block rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                Save $100+ at launch
              </p>
              <p className="mt-3 text-xs text-muted">
                Lifetime updates included. First 100 only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section id="products" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-red-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">Launch Special — First 100 Only</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Choose Your Industry
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              8 <span className="text-[#eab308] font-bold">BRIX</span>. 8 Industries.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Each <span className="text-[#eab308] font-bold">BRIX</span> is a complete business operating system built for your
              specific industry. Pick yours. <span className="font-bold text-red-400">All 50% off at launch.</span>
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" id="pricing">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/${product.slug}`}
                className="card-glow group rounded-2xl border border-border bg-surface p-6"
                style={{
                  borderTopColor: product.color,
                  borderTopWidth: "3px",
                  boxShadow: `0 0 0 0 ${product.color}00`,
                }}
                onMouseEnter={undefined}
              >
                {/* Launch badge */}
                <div className="mb-3 inline-block rounded-full bg-red-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                  50% OFF LAUNCH
                </div>
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${product.color}15` }}
                >
                  <div
                    className="h-4 w-4 rounded"
                    style={{ backgroundColor: product.color }}
                  />
                </div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p
                  className="mt-1 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: product.color }}
                >
                  {product.codename}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-xs text-muted">from</span>
                  <span className="text-sm text-muted line-through">
                    ${product.pricing.foundation}
                  </span>
                  <span className="text-2xl font-extrabold" style={{ color: product.color }}>
                    ${product.launchPricing.foundation.launch}
                  </span>
                </div>
                <p className="mt-1 text-xs font-bold text-green-400">
                  Save ${product.launchPricing.foundation.savings}
                </p>
                <div
                  className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                  style={{ color: product.color }}
                >
                  Lock In Price
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="scroll-mt-20 border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Simple As 1-2-3
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              How It Works
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/20 bg-gold/5">
                <span className="text-2xl font-extrabold text-gold">01</span>
              </div>
              <h3 className="text-xl font-bold">Pick Your <span className="text-[#eab308] font-bold">BRIX</span></h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Choose the business OS built for your industry. DJ, barber, coach, tutor — we&apos;ve got your niche.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/20 bg-gold/5">
                <span className="text-2xl font-extrabold text-gold">02</span>
              </div>
              <h3 className="text-xl font-bold">Stack Your <span className="text-[#eab308]">blocks</span></h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Select your tier — Foundation, Structure, or Architect. Each level unlocks more <span className="text-[#eab308]">blocks</span> for your business.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/20 bg-gold/5">
                <span className="text-2xl font-extrabold text-gold">03</span>
              </div>
              <h3 className="text-xl font-bold">Own Your Business</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Deploy in 60 seconds. No subscriptions. No monthly rent. Your business, your <span className="text-[#eab308] font-bold">BRIX</span>, forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INSIDE ===== */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Loaded Out The Box
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              What&apos;s Inside Every <span className="text-[#eab308] font-bold">BRIX</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Each <span className="text-[#eab308] font-bold">BRIX</span> comes loaded with the <span className="text-[#eab308]">blocks</span> your industry needs.
              Industry-specific features on top of a shared foundation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {blocks.map((block) => (
              <div
                key={block.name}
                className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-gold/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <BlockIcon icon={block.icon} />
                </div>
                <span className="text-sm font-semibold">{block.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              From The Community
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Built For Builders
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-background p-8"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1 text-gold">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUPERDASH TEASER ===== */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-10 text-center sm:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              For Empire Builders
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Own multiple businesses?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Meet <span className="font-extrabold text-gold">SUPERDASH</span> — one dashboard for all your <span className="text-[#eab308] font-bold">BRIX</span>.
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
              Combined analytics. Unified finances. Instant persona switching.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-sm text-muted line-through">$497</span>
              <span className="text-xl font-extrabold text-gold">$297 launch</span>
              <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-bold text-green-400">Save $200</span>
            </div>
            <p className="mt-2 text-sm font-bold text-gold">
              Or FREE with any Architect purchase.
            </p>
            <div className="mt-8">
              <Link
                href="/superdash"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-lg font-bold text-background transition-all hover:scale-105 hover:bg-gold-dark"
              >
                Learn More
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER EMAIL CAPTURE ===== */}
      <section className="border-y border-border bg-surface px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Get launch pricing. <span className="text-gold">Be first.</span>
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Drop your email. We&apos;ll notify you the moment doors open with exclusive launch pricing.
          </p>
          <div className="mt-6 flex justify-center">
            <WaitlistForm buttonText="Notify Me" variant="bar" />
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden px-6 py-32">
        {/* Background glow */}
        <div className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-red-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">Launch Pricing Ends Soon</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Prices go up. Spots go down.{" "}
            <span className="text-[#eab308] font-bold">Move now.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            50% off every <span className="text-[#eab308] font-bold">BRIX</span>. First 100 customers. Then full price forever.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#products"
              className="inline-block rounded-full bg-gold px-10 py-5 text-lg font-bold text-background transition-all hover:scale-105 hover:bg-gold-dark"
            >
              Get Your <span className="font-bold">BRIX</span>
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-8 py-5 text-lg font-bold text-red-400 transition-all hover:scale-105"
            >
              See All Launch Pricing &rarr;
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted">
            One-time purchase. No subscriptions. Lifetime updates.
          </p>
          <p className="mt-4 text-sm text-muted">
            Love <span className="text-[#eab308] font-bold">BRIX</span>?{" "}
            <Link href="/affiliates" className="font-semibold text-gold underline underline-offset-4 transition-colors hover:text-gold-dark">
              Earn 30% as an affiliate.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
