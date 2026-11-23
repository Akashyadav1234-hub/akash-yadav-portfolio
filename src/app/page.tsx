import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Arsenal } from "@/components/Arsenal";
import { Projects } from "@/components/Projects";
import { GithubActivity } from "@/components/GithubActivity";
import { CertRoadmap } from "@/components/CertRoadmap";
import { Experience } from "@/components/Experience";
import { BlogPreview } from "@/components/BlogPreview";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Sticky Pill Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About & Impact Metrics with Tech Marquee */}
        <About />

        {/* 3. Security & Engineering Arsenal (2x2 Grid) */}
        <Arsenal />

        {/* 4. Featured Projects & Research */}
        <Projects />

        {/* 5. Live GitHub Contributions */}
        <GithubActivity />

        {/* 6. Security Certification Roadmap & Achievements */}
        <CertRoadmap />

        {/* 7. Experience & Industry Impact */}
        <Experience />

        {/* 8. Security Notes & Interactive Blog Reader */}
        <BlogPreview />

        {/* 9. Contact & Security Trust */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
