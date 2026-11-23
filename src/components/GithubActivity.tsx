"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useMounted, useIsDark } from "@/hooks/useTheme";
import { GitBranch, Terminal, Shield, FolderGit2, Code2 } from "lucide-react";

export function GithubActivity() {
  const mounted = useMounted();
  const isDark = useIsDark();

  return (
    <section id="github" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 mb-3">
              <GitBranch className="h-3.5 w-3.5" />
              <span>Live Development Velocity</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              GitHub Contributions
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Real-time commit telemetry, open-source research codebases, and security engineering automation repositories.
            </p>
          </div>

          <a
            href="https://github.com/Akashyadav1234-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:border-sky-500 hover:text-sky-500 dark:border-slate-800 dark:bg-[#0F172A] dark:text-slate-200 dark:hover:border-sky-400 transition-colors w-fit"
          >
            <span>@Akashyadav1234-hub</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </a>
        </div>

        {/* 3 Stat Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#0F172A] transition-all hover:border-sky-500/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Active Repositories
              </span>
              <FolderGit2 className="h-4 w-4 text-sky-500" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">12+</span>
              <span className="text-xs text-emerald-500 font-medium font-mono">Public &amp; Research</span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Tooling, automation scripts &amp; research pipelines
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#0F172A] transition-all hover:border-sky-500/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Languages
              </span>
              <Code2 className="h-4 w-4 text-amber-500" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-xl font-bold text-slate-900 dark:text-white">Java / Python / C</span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              DSA, Multithreading, OSINT pipelines &amp; OS systems
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#0F172A] transition-all hover:border-sky-500/40">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Focus Areas
              </span>
              <Shield className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-xl font-bold text-slate-900 dark:text-white">AppSec &amp; DFIR</span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Vulnerability prioritization &amp; graph threat intelligence
            </p>
          </div>
        </div>

        {/* Embedded Live GitHub Calendar Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#0F172A]">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-emerald-500" />
              <span className="font-mono text-xs text-slate-700 dark:text-slate-300">
                contributions_graph.sh — username: Akashyadav1234-hub
              </span>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500">
              Live GitHub API Sync
            </span>
          </div>

          <div className="flex justify-center overflow-x-auto py-2">
            {mounted ? (
              <GitHubCalendar
                username="Akashyadav1234-hub"
                blockSize={13}
                blockMargin={4}
                fontSize={12}
                colorScheme={isDark ? "dark" : "light"}
                theme={{
                  light: ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"],
                  dark: ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"],
                }}
              />
            ) : (
              <div className="h-32 w-full animate-pulse rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <span className="font-mono text-xs text-slate-400">Loading contribution matrix...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
