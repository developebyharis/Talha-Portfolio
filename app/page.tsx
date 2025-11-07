import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CircuitBackground } from "@/components/circuit-background";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Cpu,
  BookOpen,
} from "lucide-react";
import {
  FetchAbout,
  FetchProjects,
  FetchResearchPapers,
  FetchSkills,
} from "@/lib/Contentful";
import ProjectCard from "@/components/ProjectCard";
import ResearchCard from "@/components/ResearchCard";
export default async function HomePage() {
  const [about, skills, projects, researchPapers] = await Promise.all([
    FetchAbout(),
    FetchSkills(),
    FetchProjects(),
    FetchResearchPapers(),
  ]);

  return (
    <div className="flex flex-col">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-pattern">
        <CircuitBackground />

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <Badge
                variant="outline"
                className="border-primary/50 text-primary font-mono"
              >
                {about.title}
              </Badge>
            </div>

            <h1 className="mb-6 text-6xl font-bold tracking-tight text-balance sm:text-7xl md:text-8xl">
              {about.name}
            </h1>

            <p className="mb-8 text-lg text-muted-foreground text-balance max-w-3xl leading-relaxed">
              {about.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button asChild size="lg" className="gap-2">
                <Link href="/projects">
                  <Cpu className="h-5 w-5" />
                  View Projects
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/about">
                  About Me
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:haris@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-12 w-6 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="h-2 w-1 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 circuit-pattern border-t">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-primary font-mono">
              <div className="h-px w-8 bg-primary" />
              CORE_COMPETENCIES
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-4xl font-bold text-balance mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Comprehensive skill set across the embedded systems development
              lifecycle
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <Card
                className="border-primary/20 bg-card/50 hover:border-primary/50 transition-colors tech-glow"
                key={index}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.techStack.map((tech, index) => (
                      <Badge
                        variant="secondary"
                        className="text-xs font-mono"
                        key={index}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-primary font-mono">
              <div className="h-px w-8 bg-primary" />
              PORTFOLIO
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-4xl font-bold text-balance mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Real-world embedded systems solutions from concept to deployment
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Research Section */}
      <section className="py-20 circuit-pattern">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-primary font-mono">
              <div className="h-px w-8 bg-primary" />
              RESEARCH_&_PUBLICATIONS
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-4xl font-bold text-balance mb-4">
              Research Work
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Contributing to the advancement of embedded systems through
              research and publications
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {researchPapers.map((paper) => (
              <ResearchCard key={paper.slug} paper={paper} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent"
            >
              <Link href="/research">
                View All Research
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 circuit-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm text-primary font-mono">
            <div className="h-px w-8 bg-primary" />
            GET_IN_TOUCH
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="mb-6 text-4xl font-bold text-balance">
            Let's Build Something Together
          </h2>
          <p className="mb-8 text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Have an embedded systems project in mind? Let's discuss how I can
            help bring your hardware vision to life.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                <Mail className="h-5 w-5" />
                Start a Conversation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
