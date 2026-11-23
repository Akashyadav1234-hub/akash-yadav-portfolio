"use client";

import { X, Calendar, Clock, BookOpen, CheckCircle2 } from "lucide-react";
import { BlogPost } from "@/data/blogs";

interface ArticleModalProps {
  note: BlogPost | null;
  onClose: () => void;
}

export function ArticleModal({ note, onClose }: ArticleModalProps) {
  if (!note) return null;

  const takeaways = note.keyTakeaways || note.takeaways || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl dark:border-slate-800 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
          aria-label="Close article modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="rounded-full bg-sky-500/10 px-3 py-1 font-mono text-sky-600 dark:text-sky-400 border border-sky-500/20">
            {note.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {note.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {note.readTime}
          </span>
        </div>

        <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          {note.title}
        </h2>

        <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-2 border-sky-500 pl-4 py-1 bg-sky-500/[0.03]">
          {note.summary}
        </p>

        {takeaways.length > 0 && (
          <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 dark:border-amber-400/20 dark:bg-amber-400/[0.04]">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
              <CheckCircle2 className="h-4 w-4" /> Key Security Takeaways
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {takeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {note.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <BookOpen className="h-4 w-4 text-sky-500" />
            <span>Akash Yadav Technical Security Notes</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-400 transition-colors shadow-sm"
          >
            Close Note
          </button>
        </div>
      </div>
    </div>
  );
}
