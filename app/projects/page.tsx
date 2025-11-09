import { CircuitBackground } from "@/components/circuit-background";
import ProjectsClient from "@/components/ProjectsClient";
import { FetchProjects } from "@/lib/Contentful";

export default async function ProjectsPage() {
  const projects = await FetchProjects();

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden circuit-pattern border-b">
        <CircuitBackground />
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-primary font-mono">
              <div className="h-px w-8 bg-primary" />
              PORTFOLIO
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="mb-6 text-5xl font-bold text-balance md:text-6xl">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Real-world embedded systems solutions from concept to deployment
            </p>
          </div>
        </div>
      </section>

      <ProjectsClient projects={projects} />
    </div>
  );
}
