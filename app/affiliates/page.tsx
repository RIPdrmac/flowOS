import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program — Earn with BRIX",
  description:
    "Recommend the tools. Earn the commission. Get paid forever. Join the BRIX affiliate program.",
};

const commissionTiers = [
  {
    tier: "Foundation",
    commission: "30%",
    range: "$59 – $74",
    description: "Entry-level BRIX. Highest commission rate.",
    color: "#22c55e",
  },
  {
    tier: "Structure",
    commission: "25%",
    range: "$74 – $124",
    description: "Mid-tier BRIX with AI and automation blocks.",
    color: "#eab308",
  },
  {
    tier: "Architect",
    commission: "20%",
    range: "$149 – $249",
    description: "White-label platform tier. Premium payouts.",
    color: "#8b5cf6",
  },
];

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Get your unique referral link in under 60 seconds. No approval wait.",
  },
  {
    number: "02",
    title: "Share",
    description: "Social, email, content, word of mouth. Share however you want.",
  },
  {
    number: "03",
    title: "Earn",
    description: "We pay via Stripe Connect. Fast. Transparent. Instant.",
  },
];

const audiences = [
  {
    title: "Industry Influencers",
    description: "DJ YouTubers, barber TikTokers, coaching podcasters. Your audience trusts you.",
    icon: "speaker",
  },
  {
    title: "Business Consultants",
    description: "You already advise small businesses. Now recommend the tools that back it up.",
    icon: "clipboard",
  },
  {
    title: "SaaS Reviewers",
    description: "Review software for a living? BRIX is the anti-SaaS story your audience craves.",
    icon: "chart",
  },
  {
    title: "Existing BRIX Owners",
    description: "You love your BRIX? Your network will too. Be your own best salesperson.",
    icon: "star",
  },
];

function AudienceIcon({ icon, className = "" }: { icon: string; className?: string }) {
  const cls = `h-6 w-6 ${className}`;
  switch (icon) {
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
    case "chart":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "star":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AffiliatesPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 pt-16">
        <div className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

        <div className="pointer-events-none absolute top-24 left-12 h-20 w-20 rotate-12 rounded border border-gold/10" />
        <div className="pointer-events-none absolute right-16 bottom-40 h-16 w-16 -rotate-6 rounded bg-gold/5" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Affiliate Program
            </p>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Earn with{" "}
              <span className="text-[#eab308] font-bold">BRIX</span>
            </h1>
          </div>
          <p className="animate-fade-up-delay-1 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Recommend the tools. Earn the commission. Get paid forever.
          </p>
          <div className="animate-fade-up-delay-2 mt-4">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              One-time purchase = One-time payout. No recurring tracking headaches.
            </span>
          </div>
        </div>
      </section>

      {/* ===== COMMISSION STRUCTURE ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Commission Structure
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Simple. Generous. Transparent.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {commissionTiers.map((tier) => (
              <div
                key={tier.tier}
                className="rounded-2xl border border-border bg-background p-8 text-center transition-colors hover:border-gold/30"
              >
                <p
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ color: tier.color }}
                >
                  {tier.tier}
                </p>
                <p
                  className="mt-4 text-6xl font-extrabold"
                  style={{ color: tier.color }}
                >
                  {tier.commission}
                </p>
                <p className="mt-2 text-sm text-muted">commission</p>
                <div
                  className="mx-auto my-6 h-px w-16"
                  style={{ backgroundColor: tier.color }}
                />
                <p className="text-2xl font-extrabold">{tier.range}</p>
                <p className="mt-1 text-sm text-muted">per sale</p>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Three Steps
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/20 bg-gold/5">
                  <span className="text-2xl font-extrabold text-gold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO IT'S FOR ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Perfect For
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Who It&apos;s For
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-background p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <AudienceIcon icon={a.icon} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">{a.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-extrabold text-gold sm:text-5xl">
                $127
              </p>
              <p className="mt-2 text-sm text-muted">Avg. payout per referral</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-gold sm:text-5xl">
                7 days
              </p>
              <p className="mt-2 text-sm text-muted">Payout speed</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-gold sm:text-5xl">
                30%
              </p>
              <p className="mt-2 text-sm text-muted">Top-tier commission</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARKETING ASSETS ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
            We&apos;ve Got You Covered
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Marketing Assets Included
          </h2>
          <p className="mx-auto mt-6 text-lg leading-relaxed text-muted">
            We give you everything — social cards, email templates, landing page
            links. Generated by{" "}
            <span className="font-bold text-gold">Snowcone</span>, our AI
            content engine.
          </p>
          <div className="mx-auto mt-10 grid max-w-md gap-3">
            {[
              "Social media cards & banners",
              "Email swipe templates",
              "Custom landing page links",
              "Product comparison sheets",
              "Video scripts & talking points",
            ].map((asset) => (
              <div
                key={asset}
                className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-sm font-semibold">{asset}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Become a{" "}
            <span className="text-[#eab308] font-bold">BRIX</span> Affiliate
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Recommend the right tools. Earn real money. No strings attached.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-block rounded-full bg-gold px-10 py-5 text-lg font-bold text-background transition-all hover:scale-105 hover:bg-gold-dark"
            >
              Become a <span className="font-bold">BRIX</span> Affiliate
            </a>
          </div>
          <p className="mt-6 text-xs text-muted">
            Powered by Stripe Connect. Payouts within 7 days.
          </p>
        </div>
      </section>
    </main>
  );
}
