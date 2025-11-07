import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CircuitBackground } from "@/components/circuit-background";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import { FetchProjects } from "@/lib/Contentful";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = await FetchProjects();
  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden circuit-pattern border-b">
        <CircuitBackground />
        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Button asChild variant="ghost" size="sm" className="mb-6 gap-2">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="font-mono text-xs">
                {project.category}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-balance mb-4 md:text-5xl">
              {project.name}
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="aspect-video rounded-lg overflow-hidden mb-4 border">
              <img
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-end mb-8 gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <p className="text-muted-foreground">{project.duration}</p>
            </div>

            <div className="space-y-8">
              <div className="prose prose-md lg:prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-pre:bg-muted prose-blockquote:border-l-primary">
                <MarkdownRenderer content={project.caseStudy} />
              </div>

              <div className="border-t pt-8 flex gap-4">
                {project.github && (
                  <Link href={project.github}>
                    <Button className="gap-2">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </Button>
                  </Link>
                )}
                {project.live && (
                  <Link href={project.live}>
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
