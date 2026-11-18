import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Leadership } from "@/components/portfolio/Leadership";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "M Aqeel Gibran — Informatics Management Graduate",
      },
      {
        name: "description",
        content:
          "Portfolio of M Aqeel Gibran, an Informatics Management graduate from Universitas Sriwijaya interested in web development, information systems, and digital solutions. Based in Palembang, Indonesia.",
      },
      {
        property: "og:title",
        content: "M Aqeel Gibran — Informatics Management Graduate",
      },
      {
        property: "og:description",
        content:
          "Building digital solutions — web development, information systems, and project leadership. Based in Palembang, Indonesia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
