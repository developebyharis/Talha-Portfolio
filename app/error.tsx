"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-background">
      <div className="flex flex-col items-center text-center space-y-4">
        <AlertTriangle className="h-10 w-10 text-destructive animate-pulse" />
        <h1 className="text-2xl font-semibold text-foreground">
          Oops! Something went wrong.
        </h1>
        <p className="text-sm text-muted-foreground max-w-md">
          An unexpected error occurred while loading the page. Please try again or return to the homepage.
        </p>
        <Button
          onClick={() => router.push("/")}
          className="mt-2 px-6 py-2 rounded-xl"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
}
