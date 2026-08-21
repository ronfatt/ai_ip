import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrencyRM(amount: number): string {
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: 'MYR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('MYR', 'RM');
}

export function triggerConfetti() {
  if (typeof window === 'undefined') return;
  import('canvas-confetti').then((confetti) => {
    confetti.default({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E5C07B', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B'],
    });
  });
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return Promise.resolve(false);
  return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
}
