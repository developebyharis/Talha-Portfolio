"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ content }: any) {
  return (
    <div
      className="prose prose-slate prose-img:rounded-xl prose-img:border
     dark:prose-invert max-w-none mt-10 prose-a:text-blue-600"
    >
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}