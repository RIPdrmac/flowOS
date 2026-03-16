import Link from "next/link";
import { products } from "../lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All blocks — BRIX",
  description:
    "Every block available across the BRIX platform. Booking, AI, invoicing, and industry-specific modules.",
};

/* ── Aggregate unique blocks across all products ── */
type AggregatedBlock = {
  name: string;
  description: string;
  icon: string;
  products: { name: string; color: string; slug: string }[];
};

function aggregateBlocks(): AggregatedBlock[] {
  const map = new Map<string, AggregatedBlock>();
  for (const product of products) {
    for (const block of product.blocks) {
      const existing = map.get(block.name);
      if (existing) {
        existing.products.push({
          name: product.name,
          color: product.color,
          slug: product.slug,
        });
      } else {
        map.set(block.name, {
          name: block.name,
          description: block.description,
          icon: block.icon,
          products: [
            { name: product.name, color: product.color, slug: product.slug },
          ],
        });
      }
    }
  }
  return Array.from(map.values());
}

const coreBlockNames = [
  "Booking",
  "Client Portal",
  "Invoicing",
  "Analytics",
  "AI Assistant",
  "SMS/Email",
  "Calendar Sync",
  "Custom Branding",
];

const coreBlocks = [
  { name: "Booking", description: "Let clients book you directly. No more back-and-forth.", icon: "calendar" },
  { name: "Client Portal", description: "Clients see their projects, invoices, and history in one place.", icon: "users" },
  { name: "Invoicing", description: "Send invoices, collect payments, automate follow-ups.", icon: "dollar" },
  { name: "Analytics", description: "See your revenue, growth, and performance at a glance.", icon: "chart" },
  { name: "AI Assistant*", description: "Claude-powered intelligence built into every workflow. Bring your own API key or get a 30-day trial with Architect.", icon: "brain" },
  { name: "SMS / Email", description: "Automated notifications, reminders, and follow-ups.", icon: "message" },
  { name: "Calendar Sync", description: "Sync with Google Calendar, Apple Calendar, and more.", icon: "calendar" },
  { name: "Custom Branding", description: "Your logo, your colors, your business identity.", icon: "star" },
];

/* ── Icon component ── */
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
    case "grid":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
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

export default function BlocksPage() {
  const allBlocks = aggregateBlocks();
  const industryBlocks = allBlocks.filter(
    (b) => b.products.length < products.length
  );

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 pt-16">
        <div className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

        <div className="pointer-events-none absolute top-20 left-10 h-16 w-16 rotate-12 rounded border border-gold/10 md:h-24 md:w-24" />
        <div className="pointer-events-none absolute right-16 bottom-32 h-12 w-12 -rotate-6 rounded bg-gold/5 md:h-20 md:w-20" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              The Full Stack
            </p>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              The <span className="text-[#eab308]">blocks</span> that build
              your business
            </h1>
          </div>
          <p className="animate-fade-up-delay-1 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Every <span className="text-[#eab308] font-bold">BRIX</span> comes
            loaded with industry-specific{" "}
            <span className="text-[#eab308]">blocks</span>. Here&apos;s
            what&apos;s inside.
          </p>
        </div>
      </section>

      {/* ===== CORE BLOCKS ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Shared Foundation
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Core <span className="text-[#eab308]">blocks</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              These <span className="text-[#eab308]">blocks</span> power every{" "}
              <span className="text-[#eab308] font-bold">BRIX</span>. The
              foundation every business needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreBlocks.map((block) => (
              <div
                key={block.name}
                className="flex flex-col rounded-xl border border-gold/20 bg-gold/5 p-6 transition-colors hover:border-gold/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <BlockIcon icon={block.icon} />
                </div>
                <h3 className="text-sm font-bold">{block.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {block.description}
                </p>
                <div className="mt-3 flex items-center gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                    All BRIX
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ALL UNIQUE BLOCKS GRID ===== */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Niche-Specific
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Industry <span className="text-[#eab308]">blocks</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Purpose-built{" "}
              <span className="text-[#eab308]">blocks</span> unique to specific
              industries. This is what makes each{" "}
              <span className="text-[#eab308] font-bold">BRIX</span> special.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryBlocks.map((block) => (
              <div
                key={block.name}
                className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-gold/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <BlockIcon icon={block.icon} />
                </div>
                <h3 className="text-sm font-bold">{block.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {block.description}
                </p>
                {/* Product dots */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {block.products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/${p.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold transition-colors hover:border-gold/30"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: p.color }}
                      />
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOCK COUNT ===== */}
      <section className="border-y border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-extrabold text-gold sm:text-5xl">
                {allBlocks.length}+
              </p>
              <p className="mt-2 text-sm text-muted">
                Unique <span className="text-[#eab308]">blocks</span>
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-gold sm:text-5xl">
                {products.length}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="text-[#eab308] font-bold">BRIX</span>{" "}
                Products
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-gold sm:text-5xl">
                8
              </p>
              <p className="mt-2 text-sm text-muted">Industries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            See which <span className="text-[#eab308]">blocks</span> your
            industry needs
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Every <span className="text-[#eab308] font-bold">BRIX</span> is
            loaded with the right{" "}
            <span className="text-[#eab308]">blocks</span> for your business.
            Pick your industry and start building.
          </p>
          <div className="mt-10">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-5 text-lg font-bold text-background transition-all hover:scale-105 hover:bg-gold-dark"
            >
              See All <span className="font-bold">BRIX</span>
              <svg
                className="h-5 w-5"
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
          </div>
        </div>
      </section>
    </main>
  );
}
