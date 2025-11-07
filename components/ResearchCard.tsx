import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowRight, Users } from "lucide-react";
export default function ResearchCard({ paper }: { paper: any }) {
  return (
    <div>
      <Card
        key={paper.slug}
        className="border-primary/20 hover:border-primary/50 transition-all tech-glow"
      >
        <CardHeader className="-mb-5">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="outline" className="font-mono text-xs">
                  {paper.category}
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs">
                  {paper.publishDate}
                </Badge>
              </div>
              <CardTitle className="text-balance text-2xl mb-2">
                {paper.title}
              </CardTitle>
              <CardDescription className="text-base mb-2">
                <span className="text-primary font-medium">
                  {paper.conference}
                </span>
              </CardDescription>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                {paper.authors}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
            {paper.abstract}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {paper.keywords.map((keyword: string) => (
              <Badge
                key={keyword}
                variant="secondary"
                className="font-mono text-xs"
              >
                {keyword}
              </Badge>
            ))}
          </div>
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link href={`/research/${paper.slug}`}>
              Read Full Paper
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
