"use client";

import { useState, useMemo } from "react";
import { blogPosts, BlogPost } from "@/data/blogs";
import { ArticleModal } from "./ArticleModal";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Calendar,
} from "lucide-react";

export function BlogPreview() {
  const [selectedNote, setSelectedNote] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Threat Intel",
    "Vulnerability Management",
    "OSINT & DFIR",
  ];

  // Sort newest first
  const sortedPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) => {
      const timeA = new Date(a.date).getTime() || 0;
      const timeB = new Date(b.date).getTime() || 0;
      return timeB - timeA;
    });
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return sortedPosts;
    return sortedPosts.filter((post) =>
      post.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [sortedPosts, selectedCategory]);

  return (
    <section id="blog" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-3">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Technical Notes &amp; Field Telemetry</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Daily Cyber Logs &amp; Research Notes
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Daily technical write-ups, vulnerability telemetry, threat actor profiling, and offensive/defensive architecture notes with zero dead links.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-200 bg-white/80 p-1.5 shadow-sm dark:border-slate-800 dark:bg-[#0F172A] w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-sky-500 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((note: BlogPost) => (
            <div
              key={note.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-500/40 hover:shadow-lg dark:border-slate-800 dark:bg-[#0F172A]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                  <span className="rounded-md bg-sky-500/10 px-2 py-0.5 text-sky-600 dark:text-sky-400 font-semibold border border-sky-500/20">
                    {note.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {note.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {note.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {note.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                  <Calendar className="h-3 w-3 text-sky-500" />
                  <span>{note.date}</span>
                </span>

                <button
                  onClick={() => setSelectedNote(note)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-500 hover:text-sky-400 transition-colors cursor-pointer"
                >
                  <span>Read Note</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Reader Modal */}
      <ArticleModal note={selectedNote} onClose={() => setSelectedNote(null)} />
    </section>
  );
}
