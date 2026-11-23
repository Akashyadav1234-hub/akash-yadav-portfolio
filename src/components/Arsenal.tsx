"use client";

import { portfolioData, ArsenalCategory } from "@/data/portfolio";
import {
  ShieldAlert,
  Binary,
  Lock,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";

export function Arsenal() {
  const { arsenal } = portfolioData;

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="h-5 w-5 text-rose-500" />;
      case "Binary":
        return <Binary className="h-5 w-5 text-sky-500" />;
      case "Lock":
        return <Lock className="h-5 w-5 text-amber-500" />;
      case "Terminal":
        return <Terminal className="h-5 w-5 text-emerald-500" />;
      default:
        return <Layers className="h-5 w-5 text-sky-500" />;
    }
  };

  return (
    <section id="arsenal" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-3">
            <Cpu className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Security &amp; Engineering Arsenal
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive breakdown of offensive security toolchains, digital forensics pipelines, enterprise risk frameworks, and core software engineering systems.
          </p>
        </div>

        {/* 2x2 Category Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {arsenal.map((category: ArsenalCategory, idx: number) => (
            <div
              key={category.title}
              className="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-500/40 hover:shadow-lg dark:border-slate-800 dark:bg-[#0F172A]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      {renderCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skill Pills Grid */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs transition-all ${
                        skill.highlight
                          ? "border-sky-500/40 bg-sky-500/5 text-slate-900 dark:bg-sky-500/10 dark:text-slate-100 font-medium"
                          : "border-slate-200 bg-slate-50/80 text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
                      }`}
                    >
                      <span>{skill.name}</span>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider ${
                          skill.level === "Advanced"
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                            : skill.level === "Active Research"
                            ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                            : "bg-sky-500/15 text-sky-600 dark:text-sky-400"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal Aesthetic Footer line */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>Module verified</span>
                </span>
                <span>Ready for deployment</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
