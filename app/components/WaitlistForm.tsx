'use client';

import { useState } from 'react';

export function WaitlistForm({
  buttonText = 'Join the Waitlist',
  variant = 'hero',
}: {
  buttonText?: string;
  variant?: 'hero' | 'bar';
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [position, setPosition] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong');
        setStatus('error');
        return;
      }

      setPosition(data.position);
      setStatus('success');
      setEmail('');
    } catch {
      setErrorMsg('Network error. Try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={variant === 'hero' ? 'mt-6 text-center' : ''}>
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3">
          <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-semibold text-green-400">
            You&apos;re #{position} on the list!
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'bar') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 sm:flex-row sm:gap-2">
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm text-white placeholder:text-muted focus:border-gold focus:outline-none sm:w-72"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-full bg-gold px-6 py-3 text-sm font-bold text-background transition-all hover:scale-105 hover:bg-gold-dark disabled:opacity-50 sm:w-auto"
        >
          {status === 'loading' ? 'Joining...' : buttonText}
        </button>
        {status === 'error' && (
          <p className="text-xs text-red-400">{errorMsg}</p>
        )}
      </form>
    );
  }

  // Hero variant
  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col items-center gap-3 sm:flex-row sm:gap-2">
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-full border border-border bg-surface px-5 py-3 text-sm text-white placeholder:text-muted focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full whitespace-nowrap rounded-full bg-gold px-6 py-3 text-sm font-bold text-background transition-all hover:scale-105 hover:bg-gold-dark disabled:opacity-50 sm:w-auto"
        >
          {status === 'loading' ? 'Joining...' : buttonText}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-2 text-center text-xs text-red-400">{errorMsg}</p>
      )}
      <p className="mt-3 text-center text-xs text-muted">
        Join <span className="font-semibold text-gold">0</span> entrepreneurs building with <span className="font-bold text-[#eab308]">BRIX</span>
      </p>
    </div>
  );
}
