import type { BrixProduct, BrixPricing } from './firebase';
import type { Product } from './products';

/**
 * Transforms Firestore BrixProduct + BrixPricing into the Product shape
 * expected by all existing components. This keeps the UI layer untouched —
 * we only swap the data source at the boundary.
 */
export function transformProduct(p: BrixProduct, pricing?: BrixPricing | null): Product {
  const bg = p.brandGuide;
  const sl = bg?.stackLevels;

  // Convert hex to rgb string for rgba() usage
  const hex = p.accentColor || '#eab308';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const colorRgb = `${r}, ${g}, ${b}`;

  // Derive industry label from description or name
  const industry =
    p.description
      ?.split('.')[0]
      ?.replace(/^The\s+/i, '')
      .replace(/\s+operating system/i, '')
      .toLowerCase() || p.name.toLowerCase();

  // Tier prices from Firestore (stackLevels or pricing doc) with sensible fallbacks
  const foundationPrice = sl?.foundation?.price ?? pricing?.tiers?.foundation?.price ?? p.price ?? 197;
  const structurePrice = sl?.structure?.price ?? pricing?.tiers?.structure?.price ?? (p.price ?? 197) * 2;
  const architectPrice = sl?.architect?.price ?? pricing?.tiers?.architect?.price ?? (p.price ?? 197) * 5;

  // Launch = 50% off (matching current static pattern)
  const foundationLaunch = Math.round(foundationPrice * 0.5);
  const structureLaunch = Math.round(structurePrice * 0.5);
  const architectLaunch = Math.round(architectPrice * 0.5);

  // Competitor info
  const competitorName = pricing?.competitor?.name || 'Competitors';
  const competitorAnnual = pricing?.competitor?.annualCost || 500;
  const competitorModel = pricing?.competitor?.model || 'monthly';

  // Blocks — if brandGuide has them they're strings; wrap into {name, description, icon}
  const blocks: Product['blocks'] = bg?.blocks?.map((b) => ({
    name: b,
    description: `${p.name} — ${b}`,
    icon: 'grid', // Firestore doesn't store icon keys; default to grid
  })) || [];

  // FAQs — generic set since Firestore doesn't store them per-product
  const faqs: Product['faqs'] = [
    {
      question: 'Is this really a one-time purchase?',
      answer: `Yes. You pay once and own ${bg?.name || p.name} forever. No monthly fees. No annual renewals. No surprises. Lifetime updates included.`,
    },
    {
      question: "What's included in each stack level?",
      answer: `Foundation gets you the core management blocks. Structure adds analytics, automation, and AI. Architect gives you white-label capability and multi-location support.`,
    },
    {
      question: 'Can I upgrade later?',
      answer: 'Absolutely. Start with Foundation and upgrade anytime. You only pay the difference between tiers.',
    },
    {
      question: 'Is there support?',
      answer: 'Every purchase includes access to our community and documentation. Structure and Architect tiers include priority email support.',
    },
  ];

  return {
    slug: p.id,
    name: bg?.name || p.name,
    codename: p.colorway || bg?.colorway || 'Standard',
    color: p.accentColor || '#eab308',
    colorRgb,
    description: p.description || '',
    hook: bg?.hooks?.[0] || p.description || '',
    industry,
    businessType: `${industry} business`,
    painPoint:
      bg?.hooks?.[2] ||
      `You're running your ${industry} business from a notebook and texts. Things fall through. Clients ghost. You forget to follow up.`,
    outcomes: bg?.hooks?.slice(0, 4) || [
      'Save time and eliminate busywork',
      'Grow revenue with smart tools',
      'Get organized with one system',
      'Own your tools — no subscriptions',
    ],
    competitor: competitorName,
    competitorPrice: `$${competitorAnnual}`,
    pricing: {
      foundation: foundationPrice,
      structure: structurePrice,
      architect: architectPrice,
    },
    launchPricing: {
      foundation: {
        regular: foundationPrice,
        launch: foundationLaunch,
        savings: foundationPrice - foundationLaunch,
      },
      structure: {
        regular: structurePrice,
        launch: structureLaunch,
        savings: structurePrice - structureLaunch,
      },
      architect: {
        regular: architectPrice,
        launch: architectLaunch,
        savings: architectPrice - architectLaunch,
      },
    },
    launchSpotsTotal: pricing?.launchSpotsTotal ?? 100,
    launchSpotsLeft: pricing?.launchSpotsLeft ?? 100,
    blocks,
    faqs,
  };
}
