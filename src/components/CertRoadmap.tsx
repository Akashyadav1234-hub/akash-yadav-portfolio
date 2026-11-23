"use client";

import { portfolioData, Certification } from "@/data/portfolio";
import {
  Lock,
  Clock,
  Award,
  CheckCircle2,
  Trophy,
} from "lucide-react";

export function CertRoadmap() {
  const { certRoadmap } = portfolioData;

  const renderBadgeStatus = (cert: Certification) => {
    switch (cert.status) {
      case "verified":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-emerald-500 border border-emerald-500/20">
            <CheckCircle2 className="h-3 w-3" />
            Verified
          </span>
        );
      case "in_progress":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-amber-500 border border-amber-500/20">
            <Clock className="h-3 w-3" />
            In Progress
          </span>
        );
      case "target":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-slate-400 border border-slate-500/20">
            <Lock className="h-3 w-3" />
            Target
          </span>
        );
    }
  };

  return (
    <section id="roadmap" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>Skill Validation &amp; Industry Standards</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Security Certification Roadmap
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Continuous validation through hands-on lab credentials, industry-standard certs, and specialized offensive/defensive accreditations.
            </p>
          </div>

          {/* Interactive Progress Bar Summary */}
          <div className="w-full md:w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#0F172A]">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-slate-500 dark:text-slate-400">Milestone Progress</span>
              <span className="font-bold text-sky-500 dark:text-sky-400">
                {certRoadmap.completedCount} of {certRoadmap.totalCount} Completed — {certRoadmap.progressPercentage}%
              </span>
            </div>
            {/* Visual Bar */}
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${certRoadmap.progressPercentage}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>Cisco &amp; TryHackMe (Verified)</span>
              <span>OSCP &amp; AWS (Target)</span>
            </div>
          </div>
        </div>

        {/* 6 Certification Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certRoadmap.certifications.map((cert) => {
            const isVerified = cert.status === "verified";
            return (
              <div
                key={cert.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-5 transition-all ${
                  isVerified
                    ? "border-emerald-500/40 bg-white dark:bg-[#0F172A] shadow-md shadow-emerald-500/5 hover:border-emerald-500"
                    : "border-slate-200 bg-white/60 dark:border-slate-800 dark:bg-[#0F172A]/70 hover:border-slate-400 dark:hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </span>
                    {renderBadgeStatus(cert)}
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-600 dark:bg-slate-800/80 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Achievements Strip */}
        <div className="mt-8 rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-500/5 via-sky-500/10 to-amber-500/5 p-5 dark:border-sky-500/20 dark:bg-slate-900/60">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>National Hackathon &amp; Research Milestones</span>
                  <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] font-mono text-amber-600 dark:text-amber-400 font-semibold">
                    3x National Qualifiers
                  </span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Competitive problem solving, algorithmic challenges, and innovative cybersecurity architectures.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {certRoadmap.achievements.map((ach) => (
                <div
                  key={ach.title}
                  className="rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2 text-xs dark:border-slate-800 dark:bg-[#0F172A]"
                >
                  <div className="font-semibold text-slate-800 dark:text-slate-200">{ach.title}</div>
                  <div className="text-[11px] text-sky-500 dark:text-sky-400 font-mono mt-0.5">
                    {ach.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
