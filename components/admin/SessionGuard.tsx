"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { logoutAction } from "@/app/admin/login/actions";

const IDLE_TIMEOUT_MS = 60 * 60 * 1000;   // 60 menit
const WARNING_BEFORE_MS = 5 * 60 * 1000;  // peringatan 5 menit sebelum logout

export default function SessionGuard({ children }: { children: React.ReactNode }) {
  const [showWarning, setShowWarning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(300);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const warningTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isLoggingOut = useRef(false);

  const doLogout = useCallback(async () => {
    if (isLoggingOut.current) return;
    isLoggingOut.current = true;
    await logoutAction();
  }, []);

  const resetTimers = useCallback(() => {
    if (showWarning) return; // do not reset once warning shown

    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (warningTimer.current) clearTimeout(warningTimer.current);

    // Set warning timer
    warningTimer.current = setTimeout(() => {
      setShowWarning(true);
      setSecondsLeft(Math.floor(WARNING_BEFORE_MS / 1000));

      // Start countdown
      countdownRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            if (countdownRef.current) clearInterval(countdownRef.current);
            doLogout();
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }, IDLE_TIMEOUT_MS - WARNING_BEFORE_MS);

    // Set hard logout timer
    idleTimer.current = setTimeout(() => {
      doLogout();
    }, IDLE_TIMEOUT_MS);
  }, [showWarning, doLogout]);

  // Track user activity
  useEffect(() => {
    const events = ["mousemove", "keydown", "mousedown", "touchstart", "scroll"];
    events.forEach((e) => window.addEventListener(e, resetTimers, { passive: true }));
    resetTimers();

    return () => {
      events.forEach((e) => window.removeEventListener(e, resetTimers));
      if (idleTimer.current) clearTimeout(idleTimer.current);
      if (warningTimer.current) clearTimeout(warningTimer.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [resetTimers]);

  const handleStayLoggedIn = () => {
    setShowWarning(false);
    if (countdownRef.current) clearInterval(countdownRef.current);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (warningTimer.current) clearTimeout(warningTimer.current);
    // Restart timers fresh
    warningTimer.current = setTimeout(() => {
      setShowWarning(true);
      setSecondsLeft(Math.floor(WARNING_BEFORE_MS / 1000));
      countdownRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            if (countdownRef.current) clearInterval(countdownRef.current);
            doLogout();
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }, IDLE_TIMEOUT_MS - WARNING_BEFORE_MS);

    idleTimer.current = setTimeout(() => {
      doLogout();
    }, IDLE_TIMEOUT_MS);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {children}

      {/* Session Timeout Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center">
            <div className="w-16 h-16 rounded-full bg-warning-container flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[36px] text-on-warning-container">
                timer
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-on-surface mb-2">
              Sesi Akan Berakhir
            </h2>
            <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
              Kamu tidak aktif. Sesi admin akan otomatis berakhir dalam:
            </p>
            <div className="text-5xl font-black text-primary mb-6 font-mono tabular-nums">
              {formatTime(secondsLeft)}
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleStayLoggedIn}
                className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-container transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] align-middle mr-1">
                  refresh
                </span>
                Tetap Login
              </button>
              <button
                onClick={() => doLogout()}
                className="w-full py-3 rounded-xl border border-outline-variant text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors"
              >
                Logout Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
