import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircuitBackground } from "@/components/circuit-background";
import { GraduationCap, Briefcase, Award, Cpu, Zap } from "lucide-react";
import {
  FetchAbout,
  FetchCertificate,
  FetchEducation,
  FetchExperience,
  FetchProjects,
  FetchSkills,
} from "@/lib/Contentful";
import { CoolBtn } from "@/components/creativeDesign/CoolBtn";
import { Button } from "@/components/ui/button";
import SkillCard from "@/components/SkillCard";

export default async function AboutPage() {
  const [about, skills, education, certificates, experience, projects] =
    await Promise.all([
      FetchAbout(),
      FetchSkills() as any,
      FetchEducation(),
      FetchCertificate(),
      FetchExperience(),
      FetchProjects(),
    ]);
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden circuit-pattern border-b">
        <CircuitBackground />
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-primary font-mono">
              <div className="h-px w-8 bg-primary" />
              ABOUT_ME
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="mb-6 text-5xl font-bold text-balance md:text-6xl">
              {about.name}
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Embedded Systems Engineer specializing in firmware development and
              IoT solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <div className="absolute inset-0 grid-overlay" />
                  <Image
                    src={about.me || "/placeholder-avatar.png"}
                    alt="Haris Khan"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover relative z-10"
                  />
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold">
                  Building the Future of Connected Devices
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  {about.description}
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="border-primary/20 bg-card/50">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Cpu className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary mono-number">
                          {projects.length}+
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Projects Completed
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-secondary/20 bg-card/50">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="rounded-lg bg-secondary/10 p-2">
                        <Zap className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary mono-number">
                          2+
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Years Experience
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 circuit-pattern">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 text-sm text-primary font-mono">
                <div className="h-px w-8 bg-primary" />
                BACKGROUND
                <div className="h-px w-8 bg-primary" />
              </div>
              <h2 className="text-4xl font-bold text-balance">
                Education & Experience
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="border-primary/20 bg-card/50 tech-glow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 text-xl font-semibold">Education</h3>
                      {education.map((edu, index) => (
                        <div className="space-y-6" key={index}>
                          <div className="relative pl-6 border-l-2 border-primary/20">
                            <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-primary" />
                            <p className="font-medium">{edu.course}</p>
                            <p className="text-sm text-muted-foreground font-mono">
                              {edu.school} • {edu.startEndDate}
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                              {edu.description}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="text-xs font-mono"
                              >
                                GPA: {edu.score}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-card/50 tech-glow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-secondary/10 p-3">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 text-xl font-semibold">
                        Certifications
                      </h3>
                      <div className="space-y-4">
                        {certificates.map((certificate, index) => (
                          <div key={index}>
                            <p className="font-medium">{certificate.name}</p>
                            <p className="text-sm text-muted-foreground font-mono">
                              {certificate.source}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 border-accent/20 bg-card/50 tech-glow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-6 text-xl font-semibold">
                      Professional Experience
                    </h3>
                    <div className="space-y-8">
                      {experience.map((exp, index) => (
                        <div
                          className="relative pl-6 border-l-2 border-primary/20"
                          key={index}
                        >
                          <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-primary" />
                          <p className="font-medium text-lg">{exp.title}</p>
                          <p className="text-sm text-muted-foreground font-mono mb-3">
                            {exp.organization} • {exp.startEndDate}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 text-sm text-primary font-mono">
                <div className="h-px w-8 bg-primary" />
                TECHNICAL_SKILLS
                <div className="h-px w-8 bg-primary" />
              </div>
              <h2 className="text-4xl font-bold text-balance">
                Technology Stack
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SkillCard data={skills} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
