import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akash Yadav | Cybersecurity & Software Engineer",
  description:
    "Portfolio of Akash Yadav — B.Tech CSE (Cybersecurity & Digital Forensics) at UPES Dehradun. Specializing in proactive defense, threat intelligence, vulnerability prioritization, and scalable engineering.",
  keywords: [
    "Akash Yadav",
    "Cybersecurity",
    "Digital Forensics",
    "UPES Dehradun",
    "AppSec",
    "DFIR",
    "OSINT",
    "Vulnerability Prioritization",
    "Software Engineer",
  ],
  authors: [{ name: "Akash Yadav" }],
  creator: "Akash Yadav",
  openGraph: {
    title: "Akash Yadav — Cybersecurity & Software Engineer",
    description:
      "Engineering proactive defense, threat intelligence pipelines, and secure software systems.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#070d19" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark) || !storedTheme) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-slate-900 antialiased dark:bg-[#070D19] dark:text-slate-100 selection:bg-sky-500/30 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
