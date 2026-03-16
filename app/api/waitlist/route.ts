import { NextResponse } from 'next/server';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check for duplicate
    const existing = await getDocs(
      query(collection(db, 'waitlist'), where('email', '==', normalizedEmail))
    );

    if (!existing.empty) {
      const position = existing.docs[0].data().position ?? 1;
      return NextResponse.json({ success: true, position, existing: true });
    }

    // Get current count for position
    const allDocs = await getDocs(collection(db, 'waitlist'));
    const position = allDocs.size + 1;

    await addDoc(collection(db, 'waitlist'), {
      email: normalizedEmail,
      source: 'gotbrix.app',
      position,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, position });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}
