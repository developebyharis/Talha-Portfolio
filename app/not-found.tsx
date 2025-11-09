"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted/30 px-4 text-center gap-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-base text-muted-foreground mb-8 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg" className="gap-2">
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            Go Back Home
          </Link>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="gap-2"
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-5 w-5" />
          Go Back
        </Button>
      </div>
    </div>
  );
}
