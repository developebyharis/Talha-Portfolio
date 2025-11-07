"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CircuitBackground } from "@/components/circuit-background";
import { FetchProjects } from "@/lib/Contentful";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  interface Project {
    name: string;
    description: string;
    category: string;
    techStack: string[];
    thumbnail: any;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const getProjects = async () => {
      const data = await FetchProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((c) => c.category))),
  ];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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

      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground font-mono">
                FILTER_BY:
              </span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="font-mono text-xs"
                >
                  {category}
                </Button>
              ))}
              <span className="ml-auto text-sm text-muted-foreground font-mono">
                {filteredProjects.length} PROJECT
                {filteredProjects.length !== 1 ? "S" : ""}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
