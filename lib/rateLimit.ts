/**
 * Simple in-memory rate limiter for login attempts.
 * Max 5 failed attempts per IP within a 15-minute window.
 */

interface AttemptRecord {
  count: number;
  firstAttempt: number;
  blockedUntil?: number;
}

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;
const BLOCK_DURATION_MS = 15 * 60 * 1000; // block for 15 minutes

const attempts = new Map<string, AttemptRecord>();

export function checkRateLimit(ip: string): { allowed: boolean; waitMinutes?: number } {
  const now = Date.now();
  const record = attempts.get(ip);

  if (record?.blockedUntil && now < record.blockedUntil) {
    const waitMs = record.blockedUntil - now;
    const waitMinutes = Math.ceil(waitMs / 60000);
    return { allowed: false, waitMinutes };
  }

  if (record && now - record.firstAttempt > WINDOW_MS) {
    attempts.delete(ip);
    return { allowed: true };
  }

  return { allowed: true };
}

export function recordFailedAttempt(ip: string): void {
  const now = Date.now();
  const record = attempts.get(ip);

  if (!record) {
    attempts.set(ip, { count: 1, firstAttempt: now });
    return;
  }

  if (now - record.firstAttempt > WINDOW_MS) {
    attempts.set(ip, { count: 1, firstAttempt: now });
    return;
  }

  record.count += 1;
  if (record.count >= MAX_ATTEMPTS) {
    record.blockedUntil = now + BLOCK_DURATION_MS;
  }
  attempts.set(ip, record);
}

export function resetAttempts(ip: string): void {
  attempts.delete(ip);
}
