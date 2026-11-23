"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import {
  Code,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Security Engineering", "Core Engineering & AI", "Research & Policy"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => {
          if (activeCategory === "Research & Policy") {
            return p.category.includes("Research") || p.category.includes("Policy");
          }
          if (activeCategory === "Security Engineering") {
            return p.category.includes("Security");
          }
          if (activeCategory === "Core Engineering & AI") {
            return p.category.includes("Core") || p.category.includes("AI");
          }
          return p.category === activeCategory;
        });

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-3">
              <Code className="h-3.5 w-3.5" />
              <span>Engineered Systems &amp; Threat Research</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Featured Projects &amp; Research
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Real-world systems, threat intelligence correlation pipelines, and concurrency-hardened software prototypes.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-200 bg-white/80 p-1.5 shadow-sm dark:border-slate-800 dark:bg-[#0F172A] w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-sky-500 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project: Project) => {
            const isInDev = project.inDevelopment;

            return (
              <div
                key={project.id}
                className={`relative flex flex-col justify-between rounded-3xl border p-6 transition-all hover:shadow-xl ${
                  isInDev
                    ? "border-amber-500/30 bg-gradient-to-br from-amber-500/[0.03] to-slate-50/50 dark:from-amber-500/[0.04] dark:to-[#0F172A] dark:border-amber-500/30"
                    : "border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0F172A] hover:border-sky-500/40"
                }`}
              >
                <div>
                  {/* Top Bar: Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-mono text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {project.category}
                    </span>

                    {project.badge && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider ${
                          isInDev
                            ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                            : "bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30"
                        }`}
                      >
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-xs font-mono text-sky-600 dark:text-sky-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  {/* Key Highlights Bullet Points */}
                  <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 dark:border-slate-800/80 dark:bg-slate-950/40">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Architecture &amp; Impact
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-500 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: Tech Stack + Links */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    {isInDev ? (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-amber-500">
                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                        <span>Private Beta / In Active Development</span>
                      </span>
                    ) : (
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 transition-colors"
                          >
                            <GithubIcon className="h-4 w-4" />
                            <span>Repository</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-500 hover:text-sky-400 transition-colors"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
