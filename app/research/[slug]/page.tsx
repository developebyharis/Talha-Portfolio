import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircuitBackground } from "@/components/circuit-background";
import { ArrowLeft, Download, ExternalLink, Users } from "lucide-react";
import { FetchResearchPapers } from "@/lib/Contentful";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const researchPaper = await FetchResearchPapers();
  const research = researchPaper.find((res) => res.slug === slug);
  if (!research) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold">Research paper not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden circuit-pattern border-b">
        <CircuitBackground />
        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Button asChild variant="ghost" size="sm" className="mb-6 gap-2">
              <Link href="/research">
                <ArrowLeft className="h-4 w-4" />
                Back to Research
              </Link>
            </Button>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="font-mono text-xs">
                {research.category}
              </Badge>
              <Badge variant="secondary" className="font-mono text-xs">
                {research.publishDate}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-balance mb-4 md:text-5xl">
              {research.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              <span className="text-primary font-medium">
                {research.conference}
              </span>
            </p>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <Users className="h-4 w-4" />
              <span className="text-sm">{research.authors}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  Abstract
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {research.abstract}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                  Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {research.keywords.map((keyword: string) => (
                    <Badge
                      key={keyword}
                      variant="secondary"
                      className="font-mono"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="border-t pt-8">
                <div className="prose prose-md lg:prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-pre:bg-muted prose-blockquote:border-l-primary">
                  <MarkdownRenderer content={research.detail} />
                </div>
              </div>

              <div className="border-t pt-8 flex gap-4">
                {research.paperPdf && research.paperPdf.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {research.paperPdf.map((pdf, index) => (
                      <Link
                        key={index}
                        href={pdf.fields.file?.url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <Button variant="outline" className="gap-2">
                          <Download className="h-4 w-4" />
                          {(pdf.fields.title as string) ||
                            `Download paper ${index + 1}`}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
                {research.link && (
                  <Link
                    href={research.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                      View
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
