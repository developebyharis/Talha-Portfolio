"use client";
import { Card, CardContent } from "./ui/card";
import { Cpu } from "lucide-react";
import { CoolBtn } from "./creativeDesign/CoolBtn";
import { Button } from "./ui/button";
import { useState } from "react";
import { useEffect } from "react";

export default function SkillCard({ data }: { data: any }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function getSkills() {
      setSkills(data);
    }

    getSkills();
  }, []);
  console.log("skills", skills);
  return (
    <div>
      {skills?.map((skill: any, index: number) => (
        <Card
          key={index}
          className="border-primary/20 bg-card/50 hover:border-primary/50 transition-colors tech-glow"
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
              {skill.techStack.map((tech: any, idx: number) => (
                <div key={idx}>
                  {tech.image ? (
                    <CoolBtn
                      name={tech.tech}
                      icon={tech.image}
                      style={{ backgroundColor: tech.color }}
                    />
                  ) : (
                    <Button style={{ backgroundColor: tech.color }}>
                      {tech.tech}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
