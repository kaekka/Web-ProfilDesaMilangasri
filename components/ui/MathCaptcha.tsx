"use client";

import { useState, useEffect, useCallback } from "react";

interface MathCaptchaProps {
  onVerified: (verified: boolean, expected?: number) => void;
}

type Operator = "+" | "-" | "*";

interface Question {
  a: number;
  b: number;
  op: Operator;
  answer: number;
}

function generateQuestion(): Question {
  const ops: Operator[] = ["+", "-", "*"];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a: number, b: number, answer: number;

  switch (op) {
    case "+":
      a = Math.floor(Math.random() * 20) + 1;
      b = Math.floor(Math.random() * 20) + 1;
      answer = a + b;
      break;
    case "-":
      a = Math.floor(Math.random() * 20) + 10;
      b = Math.floor(Math.random() * a) + 1;
      answer = a - b;
      break;
    case "*":
      a = Math.floor(Math.random() * 9) + 2;
      b = Math.floor(Math.random() * 9) + 2;
      answer = a * b;
      break;
  }

  return { a, b, op, answer };
}

export default function MathCaptcha({ onVerified }: MathCaptchaProps) {
  const [question, setQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [shakeKey, setShakeKey] = useState(0);

  const refresh = useCallback(() => {
    setQuestion(generateQuestion());
    setUserAnswer("");
    setStatus("idle");
    onVerified(false);
  }, [onVerified]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserAnswer(val);

    if (val === "") {
      setStatus("idle");
      onVerified(false);
      return;
    }

    const num = parseInt(val, 10);
    if (isNaN(num)) {
      setStatus("idle");
      onVerified(false);
      return;
    }

    if (num === question?.answer) {
      setStatus("correct");
      onVerified(true, question.answer);
    } else {
      setStatus("idle");
      onVerified(false);
    }
  };

  if (!question) return null;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-on-surface mb-1.5">
        Verifikasi Keamanan{" "}
        <span className="text-error">*</span>
      </label>
      <div className="flex items-center gap-3">
        {/* Math question box */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-container border border-outline-variant select-none">
          <span className="text-base font-mono font-bold text-on-surface tracking-widest">
            {question.a} {question.op === "*" ? "x" : question.op} {question.b} =
          </span>
        </div>

        {/* Answer input */}
        <div className="relative flex-1" key={shakeKey}>
          <input
            type="number"
            name="captcha-answer"
            inputMode="numeric"
            value={userAnswer}
            onChange={handleChange}
            placeholder="?"
            required
            aria-label="Jawaban verifikasi"
            className={`w-full px-4 py-3 rounded-xl border text-on-surface text-sm font-bold text-center focus:outline-none focus:ring-2 transition
              ${
                status === "correct"
                  ? "border-green-500 bg-green-50 ring-green-400 text-green-700"
                  : status === "wrong"
                  ? "border-error bg-error-container ring-error animate-shake"
                  : "border-outline-variant bg-white focus:ring-primary focus:border-transparent"
              }`}
            style={status === "wrong" ? { animation: "shake 0.4s ease" } : {}}
          />
          {status === "correct" && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-green-500 text-[20px]">
              check_circle
            </span>
          )}
          {status === "wrong" && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-error text-[20px]">
              cancel
            </span>
          )}
        </div>

        {/* Refresh button */}
        <button
          type="button"
          onClick={refresh}
          title="Ganti soal"
          className="p-2.5 rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors shrink-0"
        >
          <span className="material-symbols-outlined text-[20px]">refresh</span>
        </button>
      </div>

      {status === "wrong" && (
        <p className="text-xs text-error font-medium flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">error</span>
          Jawaban salah, silakan coba lagi
        </p>
      )}
      {status === "correct" && (
        <p className="text-xs text-green-600 font-medium flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">check_circle</span>
          Verifikasi berhasil!
        </p>
      )}

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
