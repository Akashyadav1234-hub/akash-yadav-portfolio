# Akash Yadav — Cybersecurity & Software Engineering Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Site-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://akash-yadav-portfolio-theta.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_16-App_Router-0F172A?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-0284C7?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Security Policy](https://img.shields.io/badge/RFC_9116-security.txt-10B981?style=for-the-badge&logo=shield&logoColor=white)](https://akash-yadav-portfolio-theta.vercel.app/.well-known/security.txt)

A high-performance, single-page developer and cybersecurity portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**. Designed with a dark-navy cyber aesthetic (`#070D19`), a zero-flash dark/light theme engine, centralized data management, and verifiable security standards.

**Live Deployment:** [https://akash-yadav-portfolio-theta.vercel.app](https://akash-yadav-portfolio-theta.vercel.app)

---

## Key Features & Engineering Highlights

* **Single Source of Truth Architecture:** All personal profile details, internships, certifications, project case studies, and daily cyber write-ups are decoupled from UI components inside `src/data/portfolio.ts` and `src/data/blogs.ts` for effortless updates.
* **Zero-Flash Dark & Light Theme Engine:** Built with React's `useSyncExternalStore` (`src/hooks/useTheme.ts`) to synchronize `localStorage` preferences cleanly without hydration mismatches.
* **Live GitHub Telemetry:** Integrates `react-github-calendar` to pull real-time commit activity and contribution streaks directly from `@Akashyadav1234-hub`.
* **Interactive Security Certification Roadmap:** Visual progress tracker highlighting verified credentials (*Cisco Industrial Cybersecurity Essentials*, *TryHackMe Pre-Security Top 20%*) alongside in-progress milestones (*ISEA Phase-III NIT Kurukshetra*, *CompTIA Security+*, *eJPT*, *AWS Security Specialty*).
* **Read-Only Daily Cyber Logs:** Git-backed publishing workflow (`src/data/blogs.ts`) with category filtering and interactive reader modals—eliminating exposed admin panels while keeping publishing restricted to repository push access.
* **Production Contact Pipeline & Cryptographic Trust:**
  * Integrated **Web3Forms** API submission in `Contact.tsx` with client-side validation and one-click email copy toast.
  * RFC 9116 compliant `/.well-known/security.txt` disclosure endpoint.
  * Copyable **OpenPGP Public Key** modal (`PgpModal.tsx`) for encrypted communications.

---

## Featured Research & Projects

| Project / Research | Domain | Stack | Core Impact |
| :--- | :--- | :--- | :--- |
| **Context-Aware Vulnerability Prioritization Engine** *(Co-authored Research)* | Vulnerability Management & Risk | Python, CVSS v3.1, EPSS, CISA KEV, Scikit-Learn | Deterministic + ML risk-scoring framework benchmarked across 100 CVEs to cut supply-chain alert fatigue by deprioritizing non-reachable flaws. |
| **AI-Powered OSINT Knowledge Graph** | Threat Intelligence & DFIR | Python, NLP (spaCy), Neo4j, NetworkX | Automated entity-extraction pipeline mapping multi-hop relationships across threat actors, domains, IP subnets, and infrastructure. |
| **Java-Based Secure Banking System** | Core Software Engineering | Java, OOP, Multithreading, Collections | Thread-safe authentication and concurrent transaction processing engineered to prevent race conditions. |
| **AI Candidate Ranking & Diagnostic Engine** | Applied Machine Learning | Python, Logistic Regression, Pandas | Structured classification and diagnostic ranking pipeline evaluated using precision and recall metrics. |

---

## Tech Stack

* **Framework:** Next.js 16 (App Router, Static Site Generation)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
* **Animations & Icons:** Framer Motion, Lucide React
* **Telemetry & Forms:** `react-github-calendar`, Web3Forms REST API
* **Deployment & CI/CD:** GitHub + Vercel Automatic Deployments

---

## Project Structure

```text
├── public/
│   ├── .well-known/
│   │   └── security.txt          # RFC 9116 security disclosure policy
│   ├── images/
│   │   └── profile.jpg           # Portrait asset
│   └── resume.pdf                # Direct downloadable resume
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind v4 theme tokens & marquee animations
│   │   ├── layout.tsx            # Metadata, OpenGraph tags & theme script
│   │   └── page.tsx              # Single-page portfolio assembly
│   ├── components/
│   │   ├── Navbar.tsx            # Floating pill nav + mobile drawer
│   │   ├── Hero.tsx              # Hero headline, portrait card, email copy & resume CTA
│   │   ├── About.tsx             # Infinite skills marquee, bio, metrics & education
│   │   ├── Arsenal.tsx           # 2x2 categorized security & engineering stack
│   │   ├── Projects.tsx          # Filterable project & research showcase
│   │   ├── GithubActivity.tsx    # Live GitHub contribution graph
│   │   ├── CertRoadmap.tsx       # Certification progress tracker & hackathon honors
│   │   ├── Experience.tsx        # Internships & campus leadership timeline
│   │   ├── BlogPreview.tsx       # Daily cyber logs grid & category filters
│   │   ├── Contact.tsx           # Web3Forms contact form, PGP & security.txt links
│   │   ├── ArticleModal.tsx      # Full-article reader modal
│   │   ├── PgpModal.tsx          # Copyable OpenPGP public key modal
│   │   └── Footer.tsx            # Quick navigation & back-to-top trigger
│   ├── data/
│   │   ├── portfolio.ts          # Single source of truth for portfolio data
│   │   └── blogs.ts              # Git-backed daily cyber log entries
│   └── hooks/
│       └── useTheme.ts           # SSR-safe theme state hook
├── postcss.config.mjs            # Tailwind CSS v4 PostCSS configuration
└── package.json