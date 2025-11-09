import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CircuitBackground } from "@/components/circuit-background";
import { FetchBlogs } from "@/lib/Contentful";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogPosts = await FetchBlogs();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen">
      <CircuitBackground />

      <div className="relative border-b bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="mx-auto max-w-4xl">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="mb-6 text-4xl font-bold text-balance md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <Button variant="ghost" size="sm" className="ml-auto gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <div className="prose prose-md lg:prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-pre:bg-muted prose-blockquote:border-l-primary">
                <MarkdownRenderer content={post.detail} />
              </div>

              {post.tags && (
                <>
                  <Separator className="my-8" />
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <Separator className="my-8" />

              {blogPosts.length > 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Related Articles</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {blogPosts
                      .filter(
                        (p) =>
                          p.slug !== post.slug && p.category === post.category
                      )
                      .slice(0, 2)
                      .map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                        >
                          <div className="group rounded-lg border p-4 transition-all hover:border-primary hover:shadow-md">
                            <Badge variant="secondary" className="mb-2">
                              {relatedPost.category}
                            </Badge>
                            <h4 className="mb-2 font-semibold text-balance group-hover:text-primary transition-colors">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-muted-foreground text-pretty line-clamp-2">
                              {relatedPost.detail}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
