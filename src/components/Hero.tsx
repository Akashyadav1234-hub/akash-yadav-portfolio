"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import {
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  Download,
  MapPin,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TryHackMeIcon,
  LeetCodeIcon,
  HackerOneIcon,
} from "./BrandIcons";

export function Hero() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "MapPin":
        return <MapPin className="h-3.5 w-3.5 text-sky-500" />;
      case "Github":
        return <GithubIcon className="h-3.5 w-3.5 text-slate-700 dark:text-slate-200" />;
      case "Linkedin":
        return <LinkedinIcon className="h-3.5 w-3.5 text-blue-500" />;
      case "ShieldAlert":
      case "TryHackMe":
        return <TryHackMeIcon className="h-3.5 w-3.5 text-rose-500" />;
      case "Code":
      case "LeetCode":
        return <LeetCodeIcon className="h-3.5 w-3.5 text-amber-500" />;
      case "Crosshair":
      case "HackerOne":
        return <HackerOneIcon className="h-3.5 w-3.5 text-slate-700 dark:text-slate-200" />;
      default:
        return <ExternalLink className="h-3.5 w-3.5 text-sky-500" />;
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Light Mode sky-blue radial gradient backdrop, dark mode subtle navy glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#EFF6FF] via-[#F8FAFC] to-white dark:from-[#0B1329] dark:via-[#070D19] dark:to-[#070D19] transition-colors" />

      {/* Subtle tech background grid pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, Bio, Buttons, Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-mono font-medium text-sky-700 dark:text-sky-300 shadow-sm backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
            </div>

            {/* 3-Line Display Stack Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              <span className="block text-slate-900 dark:text-slate-100">
                {personal.headline.line1}
              </span>
              <span className="block bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent filter drop-shadow-[0_2px_15px_rgba(56,189,248,0.25)]">
                {personal.headline.line2}
              </span>
              <span className="block text-slate-900 dark:text-slate-100">
                {personal.headline.line3}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
              {personal.subtitle}
            </p>

            {/* Two Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:bg-sky-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:bg-slate-100 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:border-slate-600"
              >
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Verified Icon Links Strip directly below buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
              {personal.socials.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-sky-400 hover:text-sky-600 dark:border-slate-800 dark:bg-[#0F172A] dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-400"
                >
                  {renderSocialIcon(item.icon)}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="rounded bg-rose-500/10 px-1.5 py-0.2 font-mono text-[10px] text-rose-500 font-semibold border border-rose-500/20">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Portrait Card Placeholder + Email/Resume Buttons */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm">
              {/* Outer Glow & Terminal Frame */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl transition-all dark:border-slate-800 dark:bg-[#0F172A] glow-subtle">
                {/* Top Terminal Bar */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3 px-2 dark:border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                    identity.sys • verified
                  </span>
                </div>

                {/* Portrait Display Area */}
                <div className="group relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl border border-sky-500/20 bg-slate-900 shadow-inner">
                  <Image
                    src={personal.avatarUrl}
                    alt={personal.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient vignette overlay at bottom to frame the compact status pill */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                  {/* Compact Status Pill Overlay */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-slate-950/80 p-2.5 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                      </span>
                      <div className="truncate">
                        <div className="text-xs font-semibold text-white truncate flex items-center gap-1.5">
                          <span>{personal.name}</span>
                          <ShieldCheck className="h-3 w-3 text-sky-400 inline flex-shrink-0" />
                        </div>
                        <div className="text-[10px] font-mono text-sky-300 truncate">
                          UP Police &amp; Xebia Intern
                        </div>
                      </div>
                    </div>
                    <span className="flex-shrink-0 rounded-md bg-sky-500/20 px-2 py-0.5 text-[10px] font-mono font-medium text-sky-300 border border-sky-500/30">
                      UPES &bull; &apos;28
                    </span>
                  </div>
                </div>

                {/* Two Action Buttons Under Portrait */}
                <div className="mt-3 grid grid-cols-2 gap-2 pt-2">
                  {/* Amber Email Me button + Copy Email icon */}
                  <div className="flex items-center rounded-xl bg-amber-500 text-white shadow-sm shadow-amber-500/20 overflow-hidden">
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold hover:bg-amber-400 transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Email me</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                      className="border-l border-amber-600/50 p-2.5 hover:bg-amber-600 transition-colors relative"
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5 text-white" />
                      ) : (
                        <Copy className="h-3.5 w-3.5 text-white/90" />
                      )}
                      {copied && (
                        <span className="absolute -top-8 -left-5 rounded bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 shadow-md">
                          Copied!
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Resume Download button */}
                  <a
                    href={personal.resumeUrl}
                    download="Akash_Yadav_Resume.pdf"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 py-2.5 px-3 text-xs font-semibold text-slate-800 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
                  >
                    <Download className="h-3.5 w-3.5 text-sky-500" />
                    <span>Resume ↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
