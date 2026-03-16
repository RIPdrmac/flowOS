import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SUPERDASH — One Dashboard. All Your Businesses. | BRIX",
  description:
    "Unified analytics, combined financials, and persona switching across all your BRIX. For entrepreneurs who run empires.",
};

const features = [
  {
    title: "Unified Analytics",
    description: "See performance across all your BRIX in a single view. Revenue, clients, bookings — everything.",
    icon: "chart",
  },
  {
    title: "Combined Financial View",
    description: "Revenue, expenses, and profit across all businesses. No more spreadsheet juggling.",
    icon: "dollar",
  },
  {
    title: "Persona Switching",
    description: "Jump between DJBook, BarberBook, CoachPortal in one click. No logout required.",
    icon: "users",
  },
  {
    title: "Cross-Business Client Insights",
    description: "Discover shared customers across your brands. Unlock cross-sell opportunities.",
    icon: "brain",
  },
  {
    title: "AI-Powered Recommendations",
    description: "\"Your barber shop is slow on Tuesdays — your DJ business peaks then. Cross-promote.\"",
    icon: "star",
  },
  {
    title: "Empire-Level Reporting",
    description: "Investor-ready reports across your entire portfolio. One export. Every business.",
    icon: "clipboard",
  },
];

const useCases = [
  "You're a DJ AND a barber? SUPERDASH.",
  "You coach AND tutor? SUPERDASH.",
  "You run 3 cleaning crews AND a freelance gig? SUPERDASH.",
  "Serial entrepreneurs. Multi-business owners. Empire builders.",
];

function FeatureIcon({ icon, className = "" }: { icon: string; className?: string }) {
  const cls = `h-6 w-6 ${className}`;
  switch (icon) {
    case "chart":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "dollar":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "users":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    case "brain":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case "star":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      );
    case "clipboard":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SuperdashPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
        <div className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/8 blur-[150px]" />

        <div className="pointer-events-none absolute top-20 left-10 h-20 w-20 rotate-12 rounded border border-gold/10 md:h-32 md:w-32" />
        <div className="pointer-events-none absolute right-12 bottom-24 h-16 w-16 -rotate-6 rounded bg-gold/5 md:h-24 md:w-24" />
        <div className="pointer-events-none absolute top-40 right-24 h-8 w-8 rotate-45 border border-gold/10" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="animate-fade-up">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              The Command Center
            </p>
            <h1 className="text-[80px] font-extrabold leading-none tracking-tight sm:text-[100px] lg:text-[120px]">
              <span className="text-[#eab308]">SUPER</span><span className="text-white">DASH</span>
            </h1>
          </div>
          <p className="animate-fade-up-delay-1 mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl">
            One dashboard. All your businesses. Total control.
          </p>
          <p className="animate-fade-up-delay-2 mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            For the entrepreneur who doesn&apos;t run one business — you run an
            empire.
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pricing"
              className="inline-block rounded-full bg-gold px-8 py-4 text-lg font-bold text-background transition-all hover:scale-105 hover:bg-gold-dark"
            >
              Get SUPERDASH — $497
            </a>
            <span className="text-sm font-semibold text-muted">
              or{" "}
              <span className="font-bold text-gold">FREE with Architect</span>
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-10 w-6 rounded-full border-2 border-muted/30 p-1">
            <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-gold" />
          </div>
        </div>
      </section>

      {/* ===== WHAT IS SUPERDASH ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              What You Get
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything. In One Place.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-gold/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <FeatureIcon icon={f.icon} />
                </div>
                <h3 className="text-sm font-bold">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISUAL MOCKUP ===== */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Preview
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your Empire at a Glance
            </h2>
          </div>

          {/* F1 Pit Wall Dashboard Mockup */}
          <div className="overflow-hidden rounded-2xl border border-[#eab308]/30 bg-[#07070e] shadow-[0_0_60px_rgba(234,179,8,0.08)]">
            {/* Title bar — pit wall header */}
            <div className="flex items-center justify-between border-b border-[#eab308]/15 bg-[#0a0a14] px-4 py-2.5">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-sm font-extrabold tracking-tight">
                  <span className="text-[#eab308]">SUPER</span><span className="text-white">DASH</span>
                </span>
                <span className="text-[9px] font-mono text-[#eab308]/50 tracking-widest">LIVE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-[#8b5cf6]/20 px-2 py-0.5 text-[9px] font-bold text-[#8b5cf6] border border-[#8b5cf6]/20">DJBook</span>
                <span className="rounded bg-[#eab308]/20 px-2 py-0.5 text-[9px] font-bold text-[#eab308] border border-[#eab308]/20">BarberBook</span>
                <span className="rounded bg-[#14b8a6]/20 px-2 py-0.5 text-[9px] font-bold text-[#14b8a6] border border-[#14b8a6]/20">CoachPortal</span>
                <span className="rounded bg-[#f97316]/20 px-2 py-0.5 text-[9px] font-bold text-[#f97316] border border-[#f97316]/20">FreelanceOS</span>
              </div>
              <span className="text-[9px] font-mono text-white/30">15:42:08 CDT</span>
            </div>

            {/* Main pit wall grid */}
            <div className="p-3 grid grid-cols-4 gap-2">
              {/* KPI Telemetry — top row, 4 columns */}
              <div className="rounded-lg border border-white/5 bg-[#0c0c16] p-3">
                <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/30">TOTAL REV</p>
                <p className="mt-1 text-2xl font-extrabold text-[#eab308] font-mono tracking-tight">$24,350</p>
                <p className="text-[9px] font-mono text-[#22c55e]">▲ 12.4% vs last month</p>
              </div>
              <div className="rounded-lg border border-white/5 bg-[#0c0c16] p-3">
                <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/30">CLIENTS</p>
                <p className="mt-1 text-2xl font-extrabold text-white font-mono tracking-tight">187</p>
                <p className="text-[9px] font-mono text-[#22c55e]">▲ 23 new this week</p>
              </div>
              <div className="rounded-lg border border-white/5 bg-[#0c0c16] p-3">
                <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/30">BOOKINGS</p>
                <p className="mt-1 text-2xl font-extrabold text-white font-mono tracking-tight">342</p>
                <p className="text-[9px] font-mono text-[#eab308]">● 18 pending</p>
              </div>
              <div className="rounded-lg border border-white/5 bg-[#0c0c16] p-3">
                <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/30">HEALTH</p>
                <p className="mt-1 text-2xl font-extrabold text-[#22c55e] font-mono tracking-tight">98.2%</p>
                <p className="text-[9px] font-mono text-white/30">All systems nominal</p>
              </div>

              {/* Revenue telemetry — spans 2 cols */}
              <div className="col-span-2 rounded-lg border border-white/5 bg-[#0c0c16] p-3">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/30">REVENUE TELEMETRY</p>
                  <p className="text-[8px] font-mono text-[#eab308]/50">REAL-TIME</p>
                </div>
                {/* Revenue bars — F1 style */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
                    <span className="w-20 text-[10px] font-mono text-white/60">DJBook</span>
                    <div className="flex-1 h-5 bg-[#12121e] rounded overflow-hidden relative">
                      <div className="h-full rounded" style={{ width: '78%', background: 'linear-gradient(90deg, #8b5cf640, #8b5cf6)' }} />
                      <span className="absolute right-2 top-0.5 text-[9px] font-mono font-bold text-white">$12,400</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#eab308]" />
                    <span className="w-20 text-[10px] font-mono text-white/60">BarberBook</span>
                    <div className="flex-1 h-5 bg-[#12121e] rounded overflow-hidden relative">
                      <div className="h-full rounded" style={{ width: '52%', background: 'linear-gradient(90deg, #eab30840, #eab308)' }} />
                      <span className="absolute right-2 top-0.5 text-[9px] font-mono font-bold text-white">$8,200</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#14b8a6]" />
                    <span className="w-20 text-[10px] font-mono text-white/60">Coaching</span>
                    <div className="flex-1 h-5 bg-[#12121e] rounded overflow-hidden relative">
                      <div className="h-full rounded" style={{ width: '30%', background: 'linear-gradient(90deg, #14b8a640, #14b8a6)' }} />
                      <span className="absolute right-2 top-0.5 text-[9px] font-mono font-bold text-white">$3,750</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                    <span className="w-20 text-[10px] font-mono text-white/60">Freelance</span>
                    <div className="flex-1 h-5 bg-[#12121e] rounded overflow-hidden relative">
                      <div className="h-full rounded" style={{ width: '15%', background: 'linear-gradient(90deg, #f9731640, #f97316)' }} />
                      <span className="absolute right-2 top-0.5 text-[9px] font-mono font-bold text-white/60">$0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Persona switching — right panel */}
              <div className="col-span-2 rounded-lg border border-white/5 bg-[#0c0c16] p-3">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/30">COMMAND DECK</p>
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                    <p className="text-[8px] font-mono text-[#22c55e]">4 ACTIVE</p>
                  </div>
                </div>
                {/* Persona cards */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="rounded border border-[#8b5cf6]/30 bg-[#8b5cf6]/5 p-2 cursor-pointer hover:bg-[#8b5cf6]/10 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#8b5cf6]">DJBook</span>
                      <span className="text-[8px] font-mono text-[#22c55e]">●</span>
                    </div>
                    <p className="text-[9px] font-mono text-white/40 mt-0.5">$12.4K rev · 67 clients</p>
                  </div>
                  <div className="rounded border border-[#eab308]/30 bg-[#eab308]/5 p-2 cursor-pointer hover:bg-[#eab308]/10 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#eab308]">BarberBook</span>
                      <span className="text-[8px] font-mono text-[#22c55e]">●</span>
                    </div>
                    <p className="text-[9px] font-mono text-white/40 mt-0.5">$8.2K rev · 82 clients</p>
                  </div>
                  <div className="rounded border border-[#14b8a6]/30 bg-[#14b8a6]/5 p-2 cursor-pointer hover:bg-[#14b8a6]/10 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#14b8a6]">CoachPortal</span>
                      <span className="text-[8px] font-mono text-[#22c55e]">●</span>
                    </div>
                    <p className="text-[9px] font-mono text-white/40 mt-0.5">$3.8K rev · 24 clients</p>
                  </div>
                  <div className="rounded border border-[#f97316]/30 bg-[#f97316]/5 p-2 cursor-pointer hover:bg-[#f97316]/10 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#f97316]">FreelanceOS</span>
                      <span className="text-[8px] font-mono text-white/20">○</span>
                    </div>
                    <p className="text-[9px] font-mono text-white/40 mt-0.5">Setup · 0 clients</p>
                  </div>
                </div>
                {/* AI recommendation */}
                <div className="mt-2 rounded border border-[#eab308]/15 bg-[#eab308]/5 p-2">
                  <p className="text-[8px] font-mono uppercase tracking-[0.15em] text-[#eab308]/60 mb-0.5">AI INSIGHT</p>
                  <p className="text-[9px] text-white/70">&quot;Your barber shop is slow Tuesdays. Your DJ business peaks then. Cross-promote a DJ × Barber loyalty bundle.&quot;</p>
                </div>
              </div>

              {/* Bottom strip — system status */}
              <div className="col-span-4 rounded-lg border border-white/5 bg-[#0a0a12] px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                    <span className="text-[8px] font-mono text-white/30">AI ENGINE</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                    <span className="text-[8px] font-mono text-white/30">PAYMENTS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                    <span className="text-[8px] font-mono text-white/30">SYNC</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#eab308]" />
                    <span className="text-[8px] font-mono text-[#eab308]/50">1 ALERT</span>
                  </div>
                </div>
                <span className="text-[8px] font-mono text-white/20">SUPERDASH v2.0 · gotbrix.app</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO NEEDS SUPERDASH ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Is This You?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Who Needs SUPERDASH
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-6"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <svg
                    className="h-4 w-4 text-gold"
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
                </div>
                <p className="text-sm font-semibold leading-relaxed">
                  {uc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              You already own the{" "}
              <span className="text-[#eab308] font-bold">BRIX</span>.
              SUPERDASH connects them.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* SUPERDASH standalone */}
            <div className="rounded-2xl border-2 border-gold p-8 text-center" style={{ backgroundColor: "rgba(234, 179, 8, 0.03)" }}>
              <p className="text-sm font-bold uppercase tracking-widest text-gold">
                SUPERDASH
              </p>
              <div className="my-6">
                <span className="text-6xl font-extrabold text-gold">$497</span>
              </div>
              <p className="text-sm text-muted">One-time payment</p>
              <div className="mx-auto my-6 h-px w-16 bg-gold/30" />
              <ul className="mx-auto flex max-w-xs flex-col gap-3 text-left">
                {[
                  "Connects unlimited BRIX",
                  "Unified analytics dashboard",
                  "Combined financial reporting",
                  "One-click persona switching",
                  "Cross-business client insights",
                  "AI cross-promotion engine",
                  "Lifetime updates",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
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
                    <span className="text-sm text-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block w-full rounded-full bg-gold px-8 py-4 text-center font-bold text-background transition-all hover:scale-[1.02] hover:bg-gold-dark"
                >
                  Get SUPERDASH — $497
                </a>
              </div>
            </div>

            {/* Free with Architect */}
            <div className="rounded-2xl border border-border bg-surface p-8 text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[#8b5cf6]">
                Architect Tier Perk
              </p>
              <div className="my-6">
                <span className="text-6xl font-extrabold text-foreground">
                  FREE
                </span>
              </div>
              <p className="text-sm text-muted">
                With any Architect-tier purchase
              </p>
              <div className="mx-auto my-6 h-px w-16 bg-border" />
              <ul className="mx-auto flex max-w-xs flex-col gap-3 text-left">
                {[
                  "Everything in SUPERDASH",
                  "White-label capability",
                  "Multi-location / multi-user",
                  "API access",
                  "Custom integrations",
                  "Dedicated onboarding call",
                  "Priority support",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#8b5cf6]"
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
                    <span className="text-sm text-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/#products"
                  className="inline-block w-full rounded-full border border-[#8b5cf6] px-8 py-4 text-center font-bold text-[#8b5cf6] transition-all hover:scale-[1.02] hover:bg-[#8b5cf6]/10"
                >
                  Browse Architect <span className="font-bold">BRIX</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-[#eab308]">SUPER</span><span className="text-white">DASH</span>
          </h2>
          <p className="mt-6 text-xl text-muted">
            One dashboard. All your{" "}
            <span className="text-[#eab308] font-bold">BRIX</span>. Total
            control.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-block rounded-full bg-gold px-10 py-5 text-lg font-bold text-background transition-all hover:scale-105 hover:bg-gold-dark"
            >
              Get SUPERDASH — $497
            </a>
            <span className="text-sm font-semibold text-muted">
              Free with Architect
            </span>
          </div>
          <p className="mt-6 text-xs text-muted">
            One-time purchase. Connects unlimited{" "}
            <span className="text-[#eab308] font-bold">BRIX</span>. Lifetime
            updates.
          </p>
        </div>
      </section>
    </main>
  );
}
