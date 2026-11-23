"use client";

import { portfolioData } from "@/data/portfolio";
import {
  GraduationCap,
  Shield,
  Terminal,
  Binary,
} from "lucide-react";

export function About() {
  const { personal, education, impactStats, marqueeSkills } = portfolioData;

  // Duplicate skills list for infinite marquee animation
  const tickerItems = [...marqueeSkills, ...marqueeSkills];

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      {/* Top Infinite Horizontal Marquee Ticker */}
      <div className="relative mb-16 w-full overflow-hidden border-y border-slate-200/80 bg-slate-50/50 py-3.5 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/40">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#F8FAFC] dark:from-[#070D19] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#F8FAFC] dark:from-[#070D19] to-transparent" />

        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {tickerItems.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-4 py-1.5 text-xs font-mono font-medium text-slate-700 shadow-sm transition-transform hover:scale-105 dark:border-slate-800/90 dark:bg-[#0F172A] dark:text-slate-300"
            >
              <Terminal className="h-3 w-3 text-sky-500" />
              <span>{skill.name}</span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-sans">
                ({skill.category})
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#0F172A]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 border border-sky-500/20">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {personal.name}
                  </h3>
                  <p className="text-xs font-mono text-sky-500">
                    Cybersecurity &amp; SWE
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Specialized in offensive security methodologies, forensic incident response, and building resilient software systems that withstand active adversarial exploitation.
                </p>
                <p>
                  Passionate about transforming theoretical security standards into high-throughput automation pipelines that bridge cyber forensics and modern cloud systems.
                </p>
              </div>

              {/* Core Philosophy Tags */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Core Engineering Pillars
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Proactive Defense",
                    "Deterministic Risk",
                    "Threat Intel Graphs",
                    "Thread Safety & Concurrency",
                    "OSINT Automation",
                  ].map((pillar) => (
                    <span
                      key={pillar}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* University & Degree Badge */}
            <div className="mt-6 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-4 dark:bg-sky-500/10">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-sky-600 dark:text-sky-400">
                <GraduationCap className="h-4 w-4" />
                <span>UPES Dehradun</span>
              </div>
              <div className="mt-1 text-xs font-medium text-slate-800 dark:text-slate-200">
                B.Tech in CSE — Cybersecurity &amp; Digital Forensics
              </div>
              <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>2024 – 2028</span>
                <span className="text-emerald-500 font-semibold">CGPA: 7.76 / 10</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, 4 Impact Stats, and Education */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-3">
                <Binary className="h-3.5 w-3.5" />
                <span>Background &amp; Applied Impact</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Bridging Threat Intelligence &amp; Robust Software Engineering
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                As a cybersecurity engineer and computer science undergraduate at UPES Dehradun, I operate at the intersection of offensive security, threat intelligence pipelines, and high-concurrency software development. Having interned with the <strong className="text-slate-900 dark:text-white">Uttar Pradesh Police Headquarters (Cybercrime Department)</strong>, I have engineered production-grade OSINT pipelines that parse, normalize, and correlate multi-source threat indicators to accelerate active investigations.
              </p>

              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                My software engineering experience at <strong className="text-slate-900 dark:text-white">Xebia</strong> reinforced modular system design, automated testing, and agile workflows. I build tools that turn high-noise vulnerability alerts into actionable intelligence — focusing on multi-metric algorithms combining CVSS, EPSS exploit likelihood, and CISA KEV data to protect real-world infrastructure.
              </p>
            </div>

            {/* 4 Impact Stat Cards */}
            <div className="my-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {impactStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-4 shadow-sm transition-all hover:scale-[1.02] ${
                    stat.highlight
                      ? "border-sky-500/40 bg-sky-500/[0.04] dark:bg-sky-500/[0.08]"
                      : "border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0F172A]"
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-sky-600 dark:text-sky-400">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Education Cards */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#0F172A]">
              <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                <GraduationCap className="h-4 w-4 text-sky-500" />
                <span>Academic Record &amp; Foundations</span>
              </h4>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-100 last:border-0 pb-3 last:pb-0 dark:border-slate-800"
                  >
                    <div>
                      <div className="font-semibold text-sm text-slate-900 dark:text-white">
                        {edu.degree} — <span className="text-sky-500">{edu.specialization}</span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {edu.institution}
                      </div>
                    </div>
                    <div className="text-left sm:text-right flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                      <span className="font-mono text-xs font-bold text-emerald-500">
                        {edu.score}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
