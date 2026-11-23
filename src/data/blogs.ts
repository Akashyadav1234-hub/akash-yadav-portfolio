/**
 * ==============================================================================
 * AKASH YADAV — DAILY CYBER LOGS & RESEARCH NOTES
 * ==============================================================================
 *
 * HOW TO PUBLISH A NEW POST:
 * 1. Copy the TEMPLATE block below.
 * 2. Paste it at the TOP of the `blogPosts` array (newest entries first).
 * 3. Update the fields (`id`, `title`, `date`, `category`, `readTime`, `summary`,
 *    `keyTakeaways`, `content`).
 * 4. Save this file — your new post will automatically appear on the portfolio!
 *
 * TEMPLATE:
 * ------------------------------------------------------------------------------
 * {
 *   id: "unique-post-slug-here",
 *   title: "Your Post Title Here",
 *   date: "Nov 24, 2026", // Format: MMM DD, YYYY
 *   category: "Threat Intel", // "Threat Intel" | "Vulnerability Management" | "OSINT & DFIR"
 *   readTime: "5 min read",
 *   summary: "A crisp 1-2 sentence executive summary of the vulnerability, threat actor, or technique.",
 *   keyTakeaways: [
 *     "First actionable finding or engineering takeaway.",
 *     "Second key insight regarding defense or detection.",
 *     "Third operational recommendation.",
 *   ],
 *   content: [
 *     "First paragraph: Introduction to the technical problem or active cyber campaign...",
 *     "Second paragraph: Analysis of the vulnerability mechanics, payload, or telemetry...",
 *     "Third paragraph: Concrete defensive remediation, detection rules, or code snippets...",
 *   ],
 * },
 * ==============================================================================
 */

export type BlogCategory =
  | "Threat Intel"
  | "Vulnerability Management"
  | "OSINT & DFIR";

export interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  date: string; // e.g. "Nov 24, 2026"
  category: BlogCategory | string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  takeaways?: string[]; // backwards compatibility
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "cvss-mislead",
    slug: "why-raw-cvss-scores-mislead-patch-teams",
    title: "Why Raw CVSS Scores Mislead Patch Teams",
    category: "Vulnerability Management",
    date: "Nov 24, 2026",
    readTime: "5 min read",
    summary:
      "Why relying purely on CVSS Base v3.1 results in patching the wrong 80% of vulnerabilities, and how combining EPSS exploit likelihood with CISA KEV transforms remediation into a high-leverage risk engine.",
    keyTakeaways: [
      "Only ~4-6% of published CVEs are ever exploited in the wild.",
      "CVSS Base measures theoretical severity in a vacuum, not active threat velocity or accessibility.",
      "EPSS calculates probability of exploitation in the next 30 days based on dark web and honeypot signals.",
      "A CVSS 9.8 vulnerability on an isolated internal server poses less immediate danger than a CVSS 7.2 with high EPSS exposed to the internet.",
    ],
    content: [
      "Every month, enterprise security teams drown in critical alert queues. Security scanners spit out thousands of High and Critical CVEs, creating operational paralysis and friction between AppSec and engineering teams.",
      "The root problem is an over-reliance on CVSS (Common Vulnerability Scoring System) Base scores. While CVSS was created to measure theoretical technical severity, it was never designed as a standalone prioritization metric. A buffer overflow on an air-gapped system might score 9.8, but has zero external reachability.",
      "By introducing the Exploit Prediction Scoring System (EPSS) and CISA's Known Exploited Vulnerabilities (KEV) catalog into the scoring formula, organizations can filter out more than 60% of false-urgency tickets and focus remediation bandwidth where adversaries are actively attacking.",
      "The winning formula balances CVSS (inherent severity), EPSS (exploit likelihood), KEV status (active campaign verification), and Asset Reachability (internet-facing vs. internal network segment).",
    ],
  },
  {
    id: "graph-threat-intel",
    slug: "graph-based-threat-actor-attribution-using-neo4j",
    title: "Graph-Based Threat Actor Attribution Using Neo4j",
    category: "Threat Intel",
    date: "Nov 22, 2026",
    readTime: "6 min read",
    summary:
      "How modeling multi-hop relationships between DNS records, SSL certificates, registrant personas, and malware hashes in Neo4j exposes threat actor infrastructure clusters.",
    keyTakeaways: [
      "Relational tables fail to surface 3rd and 4th-degree connections between disparate adversary assets.",
      "Cypher queries can instantly locate co-hosted command-and-control (C2) domains across separate campaigns.",
      "Normalizing Certificate Transparency and passive DNS data enables proactive blocking before weaponization.",
      "Graph clustering algorithms (e.g. Louvain) group shared infrastructure nodes automatically.",
    ],
    content: [
      "Adversary infrastructure is rarely isolated. Threat actors reuse registrar accounts, SSL certificate wildcards, shared hosting subnets, and code-signing certificates across multiple campaigns to reduce operational setup costs.",
      "When investigators analyze indicators in flat spreadsheets or disconnected SIEM alerts, these systemic relationships remain invisible. By ingesting normalized OSINT and forensic artifacts into a Neo4j property graph, analysts can traverse multi-hop connections with single Cypher queries.",
      "For instance, querying all domains that share an SSL SHA-1 fingerprint with a known C2 node immediately surfaces the adversary's entire staging cluster — allowing defenders to deploy network blocks prior to phishing campaign launches.",
    ],
  },
  {
    id: "third-party-risk",
    slug: "third-party-vendor-risk-lessons",
    title: "Third-Party Vendor Risk Lessons from Recent Breaches",
    category: "Threat Intel",
    date: "Nov 18, 2026",
    readTime: "6 min read",
    summary:
      "How modern adversaries bypass fortified perimeters through trusted third-party integrations, and why continuous automated attack surface validation must replace annual vendor questionnaires.",
    keyTakeaways: [
      "Static annual SOC 2 questionnaires fail to capture mid-cycle zero-days and compromised APIs.",
      "Transitive dependencies represent the vast majority of unmonitored attack surfaces in modern microservices.",
      "Principle of Least Privilege must apply to partner API keys, webhooks, and SaaS OAuth grants.",
      "Zero Trust means continuous verification of vendor payloads before they touch internal data buses.",
    ],
    content: [
      "Historically, security perimeters were built like medieval castles: deep moats, tall walls, and single drawbridges. Today's modern enterprise is a web of thousands of interconnected SaaS platforms, open-source npm/PyPI dependencies, and vendor APIs.",
      "Recent breaches demonstrate that attackers no longer knock on the front door; they compromise an obscure third-party customer support widget or an unmonitored analytics endpoint with broad database read permissions.",
      "Defenders must move away from 'security via checkbox compliance'. Continuous external attack surface mapping (EASM), strict API scoping, and isolated network ingress zones are required to contain blast radiuses when an upstream vendor is compromised.",
    ],
  },
  {
    id: "osint-automation",
    slug: "automating-osint-recon-on-kali-linux",
    title: "Automating OSINT Recon on Kali Linux with Python",
    category: "OSINT & DFIR",
    date: "Nov 12, 2026",
    readTime: "7 min read",
    summary:
      "A practical blueprint for building repeatable Python pipelines on Kali Linux to aggregate DNS records, Certificate Transparency logs, Shodan metadata, and graph-correlated threat indicators.",
    keyTakeaways: [
      "Manual OSINT is slow and difficult to reproduce across large forensic investigations.",
      "Certificate Transparency (crt.sh) logs reveal ephemeral and shadow subdomains within seconds.",
      "Normalizing disparate API responses into a unified JSON/Graph schema enables multi-hop adversary tracking.",
      "Defensive OSINT allows engineering teams to identify their own leaked keys and exposed ports before attackers do.",
    ],
    content: [
      "Open-source intelligence (OSINT) is the cornerstone of both cybercrime investigations and modern penetration testing. However, manually clicking through web tools and copy-pasting domain records introduces human error and consumes valuable investigation hours.",
      "During my work in digital defense, building automated Python pipelines that execute against headless APIs proved to be a transformative efficiency multiplier.",
      "By leveraging crt.sh for passive DNS, Sublist3r, Shodan, and SpiderFoot 4.0 modules, an analyst can construct an exhaustive map of an organization's attack perimeter in under 90 seconds.",
      "Furthermore, importing these extracted entities directly into a graph database like Neo4j allows investigators to detect shared registrant emails, IP clusters, and C2 hosting patterns with simple Cypher queries.",
    ],
  },
];
