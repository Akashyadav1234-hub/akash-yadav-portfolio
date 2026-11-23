"use client";

import { useState } from "react";
import { X, Check, Copy, KeyRound, ShieldCheck } from "lucide-react";

interface PgpModalProps {
  isOpen: boolean;
  onClose: () => void;
  fingerprint: string;
  publicKey: string;
}

export function PgpModal({ isOpen, onClose, fingerprint, publicKey }: PgpModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(publicKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20">
              <KeyRound className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">PGP Public Key</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                End-to-end encrypted security communications
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <div>
            <label className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Key Fingerprint
            </label>
            <div className="mt-1 flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs dark:border-slate-800 dark:bg-slate-900/60 text-sky-600 dark:text-sky-400">
              <span className="truncate">{fingerprint}</span>
              <ShieldCheck className="h-4 w-4 ml-2 flex-shrink-0 text-emerald-500" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Public Key Block
              </label>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-medium text-sky-500 hover:text-sky-400 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Key</span>
                  </>
                )}
              </button>
            </div>
            <pre className="mt-1 max-h-60 overflow-y-auto rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-[11px] leading-relaxed dark:border-slate-800 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300">
              {publicKey}
            </pre>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-xs font-medium border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-sky-400 transition-all"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied to Clipboard" : "Copy Full Key"}
          </button>
        </div>
      </div>
    </div>
  );
}
