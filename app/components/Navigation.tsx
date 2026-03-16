"use client";

import { useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-gold">
            <span className="text-sm font-extrabold text-background">B</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#eab308]">
            BRIX
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/#products"
            className="text-sm font-semibold text-muted transition-colors hover:text-foreground"
          >
            Products
          </a>
          <Link
            href="/blocks"
            className="text-sm font-semibold text-[#eab308] transition-colors hover:text-[#eab308]/80"
          >
            blocks
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-bold text-red-400 transition-colors hover:text-red-300"
          >
            Pricing
          </Link>
          <Link
            href="/superdash"
            className="text-sm font-bold text-[#eab308] transition-colors hover:text-[#eab308]/80"
          >
            SUPERDASH
          </Link>
          <Link
            href="/affiliates"
            className="text-sm font-semibold text-muted transition-colors hover:text-foreground"
          >
            Affiliates
          </Link>
          <a
            href="/#products"
            className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-background transition-colors hover:bg-gold-dark"
          >
            Get Your <span className="font-bold">BRIX</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`border-t border-border bg-background transition-all duration-300 md:hidden ${
          mobileOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          <a
            href="/#products"
            onClick={() => setMobileOpen(false)}
            className="text-base font-semibold text-muted transition-colors hover:text-foreground"
          >
            Products
          </a>
          <Link
            href="/blocks"
            onClick={() => setMobileOpen(false)}
            className="text-base font-semibold text-[#eab308] transition-colors hover:text-[#eab308]/80"
          >
            blocks
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold text-red-400 transition-colors hover:text-red-300"
          >
            Pricing
          </Link>
          <Link
            href="/superdash"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold text-[#eab308] transition-colors hover:text-[#eab308]/80"
          >
            SUPERDASH
          </Link>
          <Link
            href="/affiliates"
            onClick={() => setMobileOpen(false)}
            className="text-base font-semibold text-muted transition-colors hover:text-foreground"
          >
            Affiliates
          </Link>
          <a
            href="/#products"
            onClick={() => setMobileOpen(false)}
            className="rounded-full bg-gold px-5 py-3 text-center text-base font-bold text-background transition-colors hover:bg-gold-dark"
          >
            Get Your <span className="font-bold">BRIX</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
