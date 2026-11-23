"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Shield, ArrowUp } from "lucide-react";

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/50 py-12 dark:border-slate-800/80 dark:bg-[#070D19]/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20">
              <Shield className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {personal.name}
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                Engineering Proactive Defense &amp; Secure Systems
              </div>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-600 dark:text-slate-400">
            <Link href="#about" className="hover:text-sky-500 transition-colors">
              About
            </Link>
            <Link href="#arsenal" className="hover:text-sky-500 transition-colors">
              Arsenal
            </Link>
            <Link href="#projects" className="hover:text-sky-500 transition-colors">
              Projects
            </Link>
            <Link href="#github" className="hover:text-sky-500 transition-colors">
              GitHub
            </Link>
            <Link href="#experience" className="hover:text-sky-500 transition-colors">
              Experience
            </Link>
            <Link href="#blog" className="hover:text-sky-500 transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="hover:text-sky-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-sky-400 hover:text-sky-500 dark:border-slate-800 dark:bg-[#0F172A] dark:text-slate-300 dark:hover:border-sky-400 transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom Credits & Integrity Info */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div>
            &copy; 2026 Akash Yadav. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
            <span>•</span>
            <Link
              href="/.well-known/security.txt"
              className="hover:text-sky-400 transition-colors underline decoration-sky-500/40"
            >
              security.txt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
