import { blogPosts } from "./blogs";

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
  badge?: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  detail: string;
  highlight?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  status: "verified" | "in_progress" | "target";
  date?: string;
  credentialId?: string;
  skills: string[];
  description: string;
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  tag: string;
  description: string;
}

export interface ArsenalSkill {
  name: string;
  level: "Proficient" | "Advanced" | "Active Research";
  highlight?: boolean;
}

export interface ArsenalCategory {
  title: string;
  description: string;
  icon: string;
  skills: ArsenalSkill[];
}

export interface Project {
  id: string;
  title: string;
  category: "Security Engineering" | "Core Engineering & AI" | "Research & Policy" | "Research & Security Engineering" | string;
  badge?: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  inDevelopment?: boolean;
}

export interface ExperienceRole {
  role: string;
  organization: string;
  department?: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  techTags: string[];
}

export interface BlogNote {
  id: string;
  slug: string;
  title: string;
  readTime: string;
  date: string;
  category: string;
  summary: string;
  takeaways: string[];
  content: string[];
}

export const portfolioData = {
  personal: {
    name: "Akash Yadav",
    role: "Cybersecurity & Software Engineer",
    statusBadge: "Open to Security & SWE Roles / Research",
    location: "Dehradun, India",
    email: "akashyadav22052005@gmail.com",
    avatarUrl: "/images/profile.jpg",
    resumeUrl: "/resume.pdf",
    headline: {
      line1: "Engineering",
      line2: "Proactive Defense",
      line3: "& Secure Systems",
    },
    subtitle:
      "B.Tech CSE student specializing in Cybersecurity & Digital Forensics at UPES Dehradun. Experienced in threat intelligence pipelines, offensive security tooling, vulnerability prioritization, and scalable backend software engineering.",
    socials: [
      {
        name: "Location",
        url: "https://maps.google.com/?q=Dehradun,India",
        icon: "MapPin",
        handle: "Dehradun, India",
      },
      {
        name: "GitHub",
        url: "https://github.com/Akashyadav1234-hub",
        icon: "Github",
        handle: "Akashyadav1234-hub",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akash-ydv22",
        icon: "Linkedin",
        handle: "akash-ydv22",
      },
      {
        name: "TryHackMe",
        url: "https://tryhackme.com/p/akashydv2255",
        icon: "ShieldAlert",
        handle: "akashydv2255",
        badge: "Top 20%",
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/Akashyadav1234",
        icon: "Code",
        handle: "Akashyadav1234",
      },
      {
        name: "HackerOne",
        url: "https://hackerone.com/akashy911",
        icon: "Crosshair",
        handle: "akashy911",
      },
    ] as SocialLink[],
    pgp: {
      fingerprint: "4A8F B832 C120 7401 9D73  C8B1 5E3A 911F BD22 76A0",
      publicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v5.11.0
Comment: Akash Yadav Security Contact Key

xjMEawSgVRYJKwYBBAHaRw8BAQdAr3Yrlh/aCLiXOZG2aValXrw4oi0ndihS
WEWL14RZaGfNKkFrYXNoIFlhZGF2IDxha2FzaHlhZGF2MjIwNTIwMDVAZ21h
aWwuY29tPsLAEwQTFgoAhQWCawSgVQMLCQcJEEaHCmruU7wdRRQAAAAAABwA
IHNhbHRAbm90YXRpb25zLm9wZW5wZ3Bqcy5vcme3frhoQhcxxZD7AXw+yE8V
s4dlMLI45PyXipy8XuxUBAUVCggODAQWAAIBAhkBApsDAh4BFiEEHZE8LlZ+
0ySu3dWtRocKau5TvB0AACbgAQCbF669zCQdAXZkr/08NBNZZi95X6f4j+PN
Y7MTX8+avQD+Ojx/zYscyHgZauAXKg76+lNTQAwx+CFn6BPjcj7RVQDOOARr
BKBVEgorBgEEAZdVAQUBAQdA2j4TOXDlH+0ECK1GZgJIWEWNJHkhQIY/KDJk
u9yy/gcDAQgHwr4EGBYKAHAFgmsEoFUJEEaHCmruU7wdRRQAAAAAABwAIHNh
bHRAbm90YXRpb25zLm9wZW5wZ3Bqcy5vcmfSjH6FSiXWpYvNeJfhbt6+xdCN
wHYmjmRbesxJKdCLKwKbDBYhBB2RPC5WftMkrt3VrUaHCmruU7wdAADmfAEA
mUzf717oaQjc30j0OxaRr5fE/zPLmqJmm+nbfc4QiJYA/0ftKH6QwA0kZeMd
mdX0sR44VcBH8FS8Me2z11e+JLAF
=GlUT
-----END PGP PUBLIC KEY BLOCK-----`,
    },
    securityTxtUrl: "/.well-known/security.txt",
  },

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      specialization: "Cybersecurity & Digital Forensics",
      institution: "University of Petroleum and Energy Studies (UPES), Dehradun",
      period: "Jul 2024 – Jul 2028",
      score: "CGPA: 7.76 / 10",
      status: "In Progress",
      highlights: [
        "Specialized coursework in Cryptography, Threat Intelligence, Operating Systems, Computer Networks, and Forensics.",
        "Active member of IEEE Computer Society & ACM Student Chapters.",
      ],
    },
    {
      degree: "Class XII (Senior Secondary)",
      specialization: "Science (PCM & Computer Science)",
      institution: "City Montessori School (CMS), Lucknow",
      period: "2023",
      score: "94.00%",
      status: "Completed",
      highlights: [
        "Strong foundation in algorithmic programming, discrete mathematics, and analytical problem-solving.",
      ],
    },
  ],

  impactStats: [
    {
      value: "2x",
      label: "Tech Internships",
      detail: "UP Police Headquarters (Cybercrime) & Xebia",
      highlight: true,
    },
    {
      value: "Top 20%",
      label: "TryHackMe Global",
      detail: "Verified Pre-Security & Defensive Modules",
      highlight: false,
    },
    {
      value: "3x",
      label: "Hackathon Qualifiers",
      detail: "WCHL National Round, Google & AWS Prototype",
      highlight: true,
    },
    {
      value: "2028",
      label: "B.Tech CSE UPES",
      detail: "Cybersecurity & Digital Forensics Honors",
      highlight: false,
    },
  ] as ImpactStat[],

  marqueeSkills: [
    { name: "Java", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "C", category: "Language" },
    { name: "SQL", category: "Database" },
    { name: "Kali Linux", category: "OS / Tool" },
    { name: "Burp Suite", category: "Offensive Tool" },
    { name: "Wireshark", category: "Packet Analysis" },
    { name: "Splunk", category: "SIEM / DFIR" },
    { name: "Nmap", category: "Network Scanner" },
    { name: "SpiderFoot 4.0", category: "OSINT" },
    { name: "Neo4j", category: "Graph DB" },
    { name: "Git & GitHub", category: "DevOps" },
    { name: "Docker", category: "Containers" },
    { name: "Linux Bash", category: "Systems" },
  ],

  certRoadmap: {
    completedCount: 2,
    totalCount: 6,
    progressPercentage: 33,
    certifications: [
      {
        id: "cisco-industrial-cyber",
        title: "Industrial Cybersecurity Essentials",
        issuer: "Cisco Networking Academy",
        status: "verified",
        date: "2025",
        credentialId: "CSCO-IND-SEC-2025",
        skills: ["OT / SCADA Security", "Industrial Threat Defense", "Perimeter Hardening"],
        description: "Hands-on verification of industrial automation security architectures, OT network zoning, and mitigating attacks against physical-cyber environments.",
      },
      {
        id: "thm-pre-security",
        title: "Pre Security (Top 20% Ranking)",
        issuer: "TryHackMe",
        status: "verified",
        date: "2025",
        credentialId: "THM-PRE-SEC-2255",
        skills: ["Network Security", "Web Exploitation Fundamentals", "Linux Privileges"],
        description: "Comprehensive mastery of networking protocols, packet inspection, common web vulnerabilities, and defensive baselines placed within the top 20% globally.",
      },
      {
        id: "nit-kurukshetra-isea",
        title: "ISEA Phase-III: AI-Driven Computer & Network Security",
        issuer: "NIT Kurukshetra",
        status: "in_progress",
        date: "Target 2025",
        skills: ["AI in Cyber Defense", "Adversarial ML", "Network Anomaly Detection"],
        description: "Government of India sponsored cyber defense training focused on intelligent intrusion detection, machine learning security, and forensic threat analysis.",
      },
      {
        id: "comptia-sec-plus",
        title: "CompTIA Security+ (SY0-701)",
        issuer: "CompTIA",
        status: "in_progress",
        date: "In Progress",
        skills: ["Threat Vectors", "Security Architecture", "Risk Mitigation & Governance"],
        description: "Industry-standard baseline covering operational risk management, identity & access controls, cryptography implementations, and incident response.",
      },
      {
        id: "ejpt",
        title: "eJPT — Junior Penetration Tester",
        issuer: "INE Security",
        status: "target",
        date: "Target 2026",
        skills: ["Network Pentesting", "Vulnerability Assessment", "Metasploit & Pivoting"],
        description: "100% practical, dynamic penetration testing certification assessing real-world reconnaissance, exploitation, and host compromise.",
      },
      {
        id: "aws-security-specialty",
        title: "AWS Certified Security – Specialty",
        issuer: "Amazon Web Services",
        status: "target",
        date: "Target 2027",
        skills: ["Cloud KMS & Encryption", "IAM Policies", "AWS GuardDuty / Security Hub"],
        description: "Advanced verification of cloud workload isolation, automated compliance auditing, incident handling in distributed AWS environments.",
      },
    ] as Certification[],
    achievements: [
      {
        title: "National Round Qualifier",
        event: "World Computer Hacker League (WCHL) 2025",
        year: "2025",
        tag: "National Hackathon",
        description: "Qualified for national finals following rigorous multi-round competitive security engineering and algorithmic challenges.",
      },
      {
        title: "Prototype Phase Qualifier",
        event: "Google Solution Challenge 2026 & AI for Bharat Hackathon (AWS)",
        year: "2026",
        tag: "AI & Innovation",
        description: "Selected to build and demonstrate working prototypes leveraging AI for public impact and resilient cloud architectures.",
      },
    ] as Achievement[],
  },

  arsenal: [
    {
      title: "Offensive Security & AppSec",
      description: "Reconnaissance, active exploitation, and web application vulnerability assessment.",
      icon: "ShieldAlert",
      skills: [
        { name: "Burp Suite Professional", level: "Proficient", highlight: true },
        { name: "Nmap & Network Mapping", level: "Advanced", highlight: true },
        { name: "Penetration Testing Methodology", level: "Proficient" },
        { name: "DVWA & OWASP Top 10", level: "Advanced", highlight: true },
        { name: "Web App Vulnerability Scanning", level: "Proficient" },
        { name: "Payload Crafting & Privilege Escalation", level: "Proficient" },
      ],
    },
    {
      title: "DFIR, OSINT & Threat Intel",
      description: "Packet capture, incident reconstruction, open-source intelligence, and event correlation.",
      icon: "Binary",
      skills: [
        { name: "Wireshark Packet Analysis", level: "Advanced", highlight: true },
        { name: "Splunk SIEM & Log Analysis", level: "Proficient", highlight: true },
        { name: "SpiderFoot 4.0 OSINT", level: "Advanced", highlight: true },
        { name: "Digital Forensics & Artifacts", level: "Proficient" },
        { name: "Threat Hunting & IOC Mapping", level: "Proficient" },
        { name: "Neo4j Graph Threat Modeling", level: "Active Research", highlight: true },
      ],
    },
    {
      title: "Risk, GRC & Cryptography",
      description: "Multi-factor vulnerability prioritization, security standards, and cryptographic validation.",
      icon: "Lock",
      skills: [
        { name: "CVSS / EPSS / CISA KEV Scoring", level: "Advanced", highlight: true },
        { name: "Cryptography & PKI Validation", level: "Proficient", highlight: true },
        { name: "GRC Frameworks & NIST CSF", level: "Proficient" },
        { name: "Cyber Law & IPR Analysis", level: "Active Research" },
        { name: "Vulnerability Triaging", level: "Advanced" },
        { name: "Security Architecture Review", level: "Proficient" },
      ],
    },
    {
      title: "Core Software Engineering",
      description: "Performant code, thread safety, automation pipelines, and robust data systems.",
      icon: "Terminal",
      skills: [
        { name: "Java & OOP (Multithreading/DSA)", level: "Advanced", highlight: true },
        { name: "Python Automation & Scripting", level: "Advanced", highlight: true },
        { name: "C & Operating Systems Concepts", level: "Proficient" },
        { name: "SQL & Relational DBMS", level: "Advanced", highlight: true },
        { name: "Git Workflow & CI/CD", level: "Proficient" },
        { name: "REST APIs & Microservices", level: "Proficient" },
      ],
    },
  ] as ArsenalCategory[],

  projects: [
    {
      id: "vuln-prioritization-engine",
      title: "Context-Aware Vulnerability Prioritization Engine",
      category: "Research & Security Engineering",
      badge: "Co-authored Research in Prep",
      subtitle: "Multi-metric risk scoring framework eliminating alert fatigue in production pipelines",
      description:
        "Engineered a deterministic risk-scoring engine that combines CVSS v3.1 base severity, Attack Vector reachability coefficients, EPSS exploit likelihood, and CISA Known Exploited Vulnerabilities (KEV) live threat intelligence across 100 representative CVEs. Includes an ML-based extension to eliminate supply-chain alert fatigue by dynamically deprioritizing unexploited internal dependencies.",
      highlights: [
        "Deterministic formula weighting CVSS (40%), EPSS (35%), CISA KEV (15%), and Asset Criticality (10%).",
        "Validated across 100 real-world CVEs with an empirical 68% reduction in actionable patch queues.",
        "Machine learning prototype extending prioritization to enterprise software bill of materials (SBOM).",
      ],
      techStack: ["Python", "CVSS v3.1", "EPSS API", "CISA KEV", "Scikit-Learn", "FastAPI"],
      githubUrl: "https://github.com/Akashyadav1234-hub",
    },
    {
      id: "osint-knowledge-graph",
      title: "AI-Powered OSINT Knowledge Graph",
      category: "Security Engineering",
      badge: "Threat Intelligence",
      subtitle: "Graph-based multi-hop correlation across threat actors, infrastructure, and indicators",
      description:
        "Architected an entity-extraction and correlation pipeline that maps unstructured threat intelligence into a Neo4j graph database. Enables security analysts to uncover multi-hop relationships across domain registrations, IP subnets, ASN footprints, malware hashes, and threat actor personas to accelerate incident response investigations.",
      highlights: [
        "NLP-based entity recognition extracting IOCs from advisories, blogs, and dark-web dumps.",
        "Neo4j Cypher querying enabling instant discovery of shared C2 infrastructure across campaigns.",
        "Interactive visual explorer providing graph clustering of threat actor tactics and aliases.",
      ],
      techStack: ["Python", "Neo4j", "Cypher", "spaCy NLP", "NetworkX", "SpiderFoot"],
      githubUrl: "https://github.com/Akashyadav1234-hub",
    },
    {
      id: "secure-banking-system",
      title: "Java-Based Secure Banking System",
      category: "Core Engineering & AI",
      badge: "Concurrency & Security",
      subtitle: "Thread-safe enterprise banking simulation with strict transactional isolation",
      description:
        "Engineered a high-integrity core banking prototype in Java emphasizing OOP design principles, multithreaded synchronization, and defensive exception handling. Utilizes reentrant locks and concurrent collections to eliminate race conditions during high-volume ledger transactions while maintaining immutable audit trails.",
      highlights: [
        "Thread-safe transaction engine preventing double-spend and ledger discrepancies under stress.",
        "Modular authentication module with password hashing and role-based privilege checks.",
        "Comprehensive JUnit test coverage validating concurrency limits and ACID compliance.",
      ],
      techStack: ["Java 17", "Multithreading", "Concurrency Locks", "OOP", "JUnit 5"],
      githubUrl: "https://github.com/Akashyadav1234-hub",
    },
    {
      id: "candidate-ranking-engine",
      title: "AI Candidate Ranking & Diagnostic Engine",
      category: "Core Engineering & AI",
      badge: "Machine Learning",
      subtitle: "Deterministic classification and ranking pipeline with balanced precision/recall metrics",
      description:
        "Developed a predictive diagnostic engine leveraging regularized machine learning to evaluate, normalize, and rank multidimensional candidate profiles. Implemented strict data preprocessing, outlier detection, and performance benchmarking across classification thresholds.",
      highlights: [
        "Trained regularized logistic regression and tree ensembles with 89% cross-validation accuracy.",
        "Automated feature weighting preventing bias while surfacing key technical aptitude signals.",
        "Exportable performance report dashboards with ROC-AUC and precision-recall trade-off graphs.",
      ],
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/Akashyadav1234-hub",
    },
    {
      id: "cybersquatting-trademark-analysis",
      title: "Cybersquatting & Trademark Infringement Analysis",
      category: "Research & Policy",
      badge: "Legal-Tech Research",
      subtitle: "Empirical study on domain name disputes, UDRP proceedings, and brand protection",
      description:
        "Comprehensive legal-technical research examining domain squatting mechanics, typosquatting vectors, and Uniform Domain-Name Dispute-Resolution Policy (UDRP) arbitration enforcement. Formulated algorithmic detection heuristics to alert trademark holders to unauthorized lookalike registrations.",
      highlights: [
        "Analyzed 50+ landmark WIPO/UDRP dispute proceedings for procedural patterns and jurisdictional gaps.",
        "Engineered fuzzy string-matching and typo-squatting generation heuristics to detect typosquat domains.",
        "Formulated proactive mitigation strategies combining automated takedowns and DNS registry brand-locks.",
      ],
      techStack: ["Python", "Whois API", "DNS Telemetry", "Levenshtein Distance", "Cyber Law"],
      githubUrl: "https://github.com/Akashyadav1234-hub",
    },
    {
      id: "b2b-security-platform",
      title: "Upcoming B2B Security Platform",
      category: "Security Engineering",
      badge: "In Development",
      subtitle: "Next-generation attack surface management and continuous vulnerability validation",
      description:
        "Teaser for an upcoming commercial security venture engineered for mid-market engineering teams. Designed to continuously discover shadow IT assets, correlate external reachability, and validate real-world exploitability through automated, non-disruptive testing workflows.",
      highlights: [
        "Continuous automated discovery of public cloud assets and forgotten subdomains.",
        "Non-destructive reachability testing mapping real risk rather than theoretical noise.",
        "Designed from the ground up for modern developer platforms and CI/CD pipelines.",
      ],
      techStack: ["Next.js", "TypeScript", "Python/Go", "Distributed Workers", "Cloud Security"],
      inDevelopment: true,
    },
  ] as Project[],

  experience: [
    {
      role: "Cybersecurity Intern",
      organization: "UP Police Headquarters (Cybercrime Department)",
      department: "Cybercrime Investigation & Intelligence Division",
      location: "Lucknow, India",
      period: "Jun 2026 – Jul 2026",
      type: "Internship",
      bullets: [
        "Engineered Python-based OSINT automation pipelines to ingest, normalize, and structure multi-source threat indicators for active cybercrime investigations.",
        "Transformed unstructured digital intelligence into structured forensic risk and mitigation reports used by investigating officers.",
        "Analyzed phishing infrastructure, domain registries, and digital fraud campaign patterns to trace threat actor networks.",
      ],
      techTags: ["Python", "OSINT", "SpiderFoot", "Digital Forensics", "Threat Intelligence"],
    },
    {
      role: "Software Engineering Intern",
      organization: "Xebia",
      department: "Enterprise Software Engineering & EdTech",
      location: "Gurugram, India",
      period: "Jun 2026",
      type: "Internship",
      bullets: [
        "Architected UniSmart LMS using modular software engineering principles and AI-assisted development workflows.",
        "Implemented dynamic class scheduling, real-time attendance tracking, and role-based access control for students and faculty.",
        "Established structured unit testing suites and participated in collaborative code reviews adhering to production standards.",
      ],
      techTags: ["Software Engineering", "Full-Stack Architecture", "Testing & QA", "AI Workflows"],
    },
    {
      role: "Google Gemini Student Ambassador",
      organization: "Google (UPES Chapter)",
      location: "Dehradun, India",
      period: "2024 – Present",
      type: "Leadership",
      bullets: [
        "Selected to represent Google Gemini on campus, spearheading #TeamGemini developer activations, workshops, and AI hackathons.",
        "Conducted hands-on sessions introducing 200+ undergraduate students to multimodal prompt engineering and Gemini API integrations.",
        "Facilitated campus hackathon mentorship sessions around responsible AI deployment and secure application development.",
      ],
      techTags: ["Developer Community", "Gemini API", "AI Literacy", "Technical Leadership"],
    },
    {
      role: "Core Committee Member",
      organization: "IEEE Computer Society & ACM Student Chapters, UPES",
      location: "Dehradun, India",
      period: "2024 – Present",
      type: "Organization & Editorial",
      bullets: [
        "Organized national-level technical symposiums, coding competitions, and cybersecurity capture-the-flag (CTF) challenges.",
        "Authored editorial content and technical write-ups covering emerging security trends and software design patterns.",
        "Collaborated with cross-functional teams to design high-impact visual assets and technical event documentation.",
      ],
      techTags: ["Event Operations", "Technical Editorial", "Design Assets", "Peer Mentorship"],
    },
    {
      role: "Group Lead (Team of 12)",
      organization: "Youth Willers Foundation",
      location: "Lucknow, India",
      period: "2023 – 2024",
      type: "Social Impact & Leadership",
      bullets: [
        "Supervised a multidisciplinary team of 12 volunteers executing education outreach and digital literacy programs.",
        "Coordinated project timelines, task delegations, and community stakeholder communications with quantifiable engagement growth.",
      ],
      techTags: ["Team Leadership", "Project Management", "Digital Literacy"],
    },
  ] as ExperienceRole[],

  blogNotes: blogPosts,
};
