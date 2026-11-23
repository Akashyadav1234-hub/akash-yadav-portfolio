"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = portfolioData;

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Arsenal", href: "#arsenal" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub Activity", href: "#github" },
    { label: "Experience", href: "#experience" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-4 z-40 mx-auto w-full max-w-7xl px-4 sm:px-6">
      <nav
        aria-label="Main Navigation"
        className="flex items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-4 py-2.5 shadow-lg shadow-slate-200/40 backdrop-blur-md transition-all dark:border-slate-800/80 dark:bg-[#0F172A]/85 dark:shadow-sky-950/20"
      >
        {/* Left: Avatar + Name */}
        <Link
          href="#"
          className="group flex items-center gap-2.5 rounded-full p-1 pr-3 transition-colors hover:bg-slate-100/80 dark:hover:bg-slate-800/60"
        >
          <div className="relative h-9 w-9 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile.jpg"
              alt={personal.name}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover object-top border border-sky-400/40 shadow-sm"
            />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#0F172A]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
              {personal.name}
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono text-slate-500 dark:text-slate-400">
              Cyber &amp; DFIR
            </span>
          </div>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-1 rounded-full bg-slate-100/60 px-3 py-1 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/60">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-1 text-xs font-medium text-slate-600 transition-all hover:bg-white hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Theme Toggle + CTA Button */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-white shadow-sm shadow-sky-500/25 transition-all hover:bg-sky-400 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mt-2 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-lg lg:hidden dark:border-slate-800 dark:bg-[#0F172A]/95 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-600 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-sky-400"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-sky-500 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-sky-400"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
