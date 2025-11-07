import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { FetchBlogs } from "@/lib/Contentful";

export default async function BlogPage() {
  const blogPosts = await FetchBlogs();
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-balance md:text-5xl">
          Blog
        </h1>
        <p className="mb-12 text-lg text-muted-foreground text-pretty">
          Technical articles and insights about embedded systems, IoT, and
          firmware development.
        </p>

        <div className="grid grid-col-3 md:grid-col-1 gap-4">
          {blogPosts.map((post) => (
            <Card
              key={post.title}
              className="group transition-all hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedDate}>
                    {new Date(post.publishedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <CardTitle className="text-balance group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-pretty line-clamp-2">
                  {post.detail.replace(/[#_*~`>\[\]()\-!]/g, "").slice(0, 400)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">{post.category}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
