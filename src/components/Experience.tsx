"use client";

import { portfolioData, ExperienceRole } from "@/data/portfolio";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
} from "lucide-react";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-3">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Applied Engineering &amp; Leadership</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Experience &amp; Industry Impact
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Applied defense pipelines at law enforcement headquarters, enterprise software development, developer community ambassadorship, and team leadership.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-200 pl-6 ml-3 sm:ml-6 sm:pl-8 dark:border-slate-800 space-y-10">
          {experience.map((item: ExperienceRole, index: number) => {
            const isCybercrime = item.role.includes("Cybersecurity");

            return (
              <div key={index} className="relative group">
                {/* Timeline Node Dot */}
                <span
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white dark:ring-[#070D19] ${
                    isCybercrime
                      ? "bg-sky-500 text-white"
                      : "bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-white dark:bg-slate-900" />
                </span>

                {/* Card Container */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-500/40 hover:shadow-md dark:border-slate-800 dark:bg-[#0F172A]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
                        <span className="rounded-md bg-sky-500/10 px-2 py-0.5 text-[11px] font-mono text-sky-600 dark:text-sky-400 font-semibold border border-sky-500/20">
                          {item.type}
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                        <span className="flex items-center gap-1 font-semibold text-slate-900 dark:text-white">
                          <Building2 className="h-3.5 w-3.5 text-sky-500" />
                          {item.organization}
                        </span>
                        {item.department && (
                          <span className="text-slate-400">
                            • {item.department}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Concrete Bullets */}
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {item.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2.5 py-0.5 text-[11px] font-mono text-slate-600 dark:bg-slate-800/80 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
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
