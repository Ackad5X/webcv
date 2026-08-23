import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/language";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { ProjectExperience } from "@/components/ProjectExperience";
import { Certifications } from "@/components/Certifications";
import { Automation } from "@/components/Automation";
import { Interests } from "@/components/Interests";
import { SiteFooter } from "@/components/SiteFooter";
import { GridBackground } from "@/components/GridBackground";

const title = "Alejandro Castaño — Security Architect | SSE, SASE & Zero Trust";
const description =
  "Cybersecurity architect specialising in Zscaler and Netskope. SSE/SASE and Zero Trust delivery across banking, energy, transport and public sector environments.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-background">
        <GridBackground />
        <SiteNav />
        <main className="relative z-10">
          <Hero />
          <ProjectExperience />
          <Certifications />
          <Automation />
          <Interests />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
