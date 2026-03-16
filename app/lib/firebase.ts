import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDMk8afC-Gmc96ey1he3UyxMLjmUKRHOX0",
  authDomain: "csuite-v2.firebaseapp.com",
  projectId: "csuite-v2",
  storageBucket: "csuite-v2.firebasestorage.app",
  messagingSenderId: "924762459633",
  appId: "1:924762459633:web:1fe63cd0c58da97bd0c850",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export interface BrixProduct {
  id: string;
  name: string;
  description: string;
  status: string;
  price: number;
  colorway: string;
  accentColor: string;
  division: string;
  brandGuide?: {
    name: string;
    tagline: string;
    voice: string;
    hooks: string[];
    blocks: string[];
    colorway: string;
    pricing: Record<string, string>;
    stackLevels: Record<string, {
      price: number;
      name: string;
      features: string[];
    }>;
    terminology: { use: string[]; avoid: string[] };
    spelling: Record<string, string>;
    audience: string;
  };
}

export interface BrixPricing {
  productId: string;
  productName: string;
  colorway: string;
  tiers: Record<string, {
    price: number;
    name: string;
    margin: number;
  }>;
  competitor: { name: string; model: string; annualCost: number };
  positioning: string;
  launchSpotsTotal?: number;
  launchSpotsLeft?: number;
}

// Fetch all DP products from Firestore
export async function getProducts(): Promise<BrixProduct[]> {
  const snap = await getDocs(collection(db, 'companies'));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() } as BrixProduct))
    .filter((p) => p.division === 'dp');
}

// Fetch single product
export async function getProduct(id: string): Promise<BrixProduct | null> {
  const snap = await getDoc(doc(db, 'companies', id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as BrixProduct;
}

// Fetch pricing data
export async function getPricing(id: string): Promise<BrixPricing | null> {
  const snap = await getDoc(doc(db, 'pricing', id));
  if (!snap.exists()) return null;
  return snap.data() as BrixPricing;
}

// Fetch all pricing
export async function getAllPricing(): Promise<BrixPricing[]> {
  const snap = await getDocs(collection(db, 'pricing'));
  return snap.docs
    .map((d) => d.data() as BrixPricing)
    .filter((p) => p.productId && p.productId !== '_portfolio');
}
