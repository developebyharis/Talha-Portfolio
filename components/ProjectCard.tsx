"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Card
      key={project.name}
      className="group overflow-hidden border-primary/20 hover:border-primary/50 transition-all tech-glow p-0"
    >
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 relative">
        <div className="absolute inset-0 grid-overlay" />
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className="h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="font-mono text-xs">
            {project.category}
          </Badge>
        </div>
        <CardTitle className="text-balance">{project.name}</CardTitle>
        <CardDescription className="text-pretty leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project?.techStack.map((tech: string) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pb-4">
        <Link href={`projects/${project.slug}`}>
          <Button variant="outline" className="w-full gap-2 bg-transparent ">
            View Details
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
