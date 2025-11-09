"use client";

import { Loader2 } from "lucide-react";
import { CircuitBackground } from "@/components/circuit-background";

export default function Loading() {
  return (
    <div className="relative flex items-center justify-center h-screen w-full overflow-hidden">
      <CircuitBackground />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground font-mono tracking-wide">
          Initializing systems...
        </p>
      </div>
    </div>
  );
}
