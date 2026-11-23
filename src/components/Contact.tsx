"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { PgpModal } from "./PgpModal";
import {
  Mail,
  KeyRound,
  ShieldCheck,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  FileCode,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Contact() {
  const { personal } = portfolioData;
  const [pgpModalOpen, setPgpModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7e754459-4a2d-49d4-acc0-cb46e892ce12",
          from_name: "Akash Portfolio Contact",
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "New Portfolio Inquiry",
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Submission failed. Please try again or email directly.");
      }
    } catch {
      alert("Network error. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Side: Contact Information & Security Trust Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-3">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Security Trust &amp; Direct Inquiries</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Have a security challenge or engineering role to discuss?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                I am actively open to cybersecurity engineering internships, vulnerability research collaborations, and full-stack software development roles.
              </p>

              {/* Direct Communication Cards */}
              <div className="mt-8 space-y-3">
                {/* Email Card with Copy Action */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#0F172A]">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Primary Email
                      </div>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500 transition-colors truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex-shrink-0 ml-2 rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-600 hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/akash-ydv22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-500/40 dark:border-slate-800 dark:bg-[#0F172A] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      <LinkedinIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Professional Network
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        linkedin.com/in/akash-ydv22
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>

                {/* GitHub Card */}
                <a
                  href="https://github.com/Akashyadav1234-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-sky-500/40 dark:border-slate-800 dark:bg-[#0F172A] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700">
                      <GithubIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Codebase Telemetry
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                        github.com/Akashyadav1234-hub
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
                </a>
              </div>
            </div>

            {/* Cryptographic Trust Strip */}
            <div className="mt-8 rounded-2xl border border-sky-500/20 bg-sky-500/[0.04] p-4 dark:bg-sky-500/[0.06]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Cryptographic Trust
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => setPgpModalOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-800 hover:border-sky-500 dark:border-sky-500/40 dark:bg-slate-900 dark:text-slate-200 transition-colors"
                >
                  <KeyRound className="h-3.5 w-3.5 text-sky-500" />
                  <span>PGP Public Key</span>
                </button>

                <a
                  href="/.well-known/security.txt"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-mono text-slate-700 hover:border-sky-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 transition-colors"
                >
                  <FileCode className="h-3.5 w-3.5 text-emerald-500" />
                  <span>/.well-known/security.txt</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-[#0F172A]">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-sky-500" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Responses typically delivered within 24 business hours.
              </p>

              {formSubmitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center animate-in fade-in">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
                  <h4 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                    Message Dispatched Successfully
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                    Thank you for reaching out. I will review your note and get back to you promptly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white dark:bg-slate-800 hover:bg-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:focus:bg-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:focus:bg-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Security Engineering Opportunity / Research Collaboration"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:focus:bg-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Akash, I saw your work on vulnerability prioritization and threat intelligence pipelines..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:focus:bg-slate-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 py-3 text-xs font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Encrypting &amp; Sending...</span>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PGP Public Key Modal */}
      <PgpModal
        isOpen={pgpModalOpen}
        onClose={() => setPgpModalOpen(false)}
        fingerprint={personal.pgp.fingerprint}
        publicKey={personal.pgp.publicKey}
      />
    </section>
  );
}
