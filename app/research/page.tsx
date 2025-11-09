import { CircuitBackground } from "@/components/circuit-background";
import ResearchCard from "@/components/ResearchCard";
import { FetchResearchPapers } from "@/lib/Contentful";

export default async function ResearchPage() {
  const researchPapers = await FetchResearchPapers();
  
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden circuit-pattern border-b">
        <CircuitBackground />
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-primary font-mono">
              <div className="h-px w-8 bg-primary" />
              RESEARCH_&_PUBLICATIONS
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="mb-6 text-5xl font-bold text-balance md:text-6xl">
              Research
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Contributing to the advancement of embedded systems through
              research and publications
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-6">
              {researchPapers.map((paper) => (
                <ResearchCard key={paper.slug} paper={paper} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
