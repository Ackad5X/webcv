import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/language";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { AllProjects } from "@/components/AllProjects";
import { Certifications } from "@/components/Certifications";
import { Interests } from "@/components/Interests";
import { SiteFooter } from "@/components/SiteFooter";

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
      <div className="min-h-screen bg-background">
        <SiteNav />
        <main>
          <Hero />
          <FeaturedProjects />
          <AllProjects />
          <Certifications />
          <Interests />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
