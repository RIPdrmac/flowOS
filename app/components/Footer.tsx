import Link from "next/link";
import { products } from "../lib/products";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gold">
                <span className="text-sm font-extrabold text-background">
                  B
                </span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#eab308]">
                BRIX
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              Business Ready Intelligence eXtension.
              <br />
              Stack. Build. Own.
            </p>
            <p className="text-xs text-muted">
              Powered by AI-native intelligence
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
              Products
            </h4>
            <ul className="flex flex-col gap-2">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="/#products"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
              Connect
            </h4>
            <div className="flex gap-4">
              {/* Twitter/X */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-gold hover:text-gold"
                aria-label="Twitter"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-gold hover:text-gold"
                aria-label="TikTok"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.1a8.16 8.16 0 005.58 2.2v-3.45a4.85 4.85 0 01-3-.64z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} <span className="text-[#eab308] font-bold">BRIX</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-widest text-muted">
              A
            </span>
            <span className="text-xs font-bold tracking-widest text-gold">
              Research In Public
            </span>
            <span className="text-xs font-semibold tracking-widest text-muted">
              company
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
