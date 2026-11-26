"use client";
import { useEffect, useRef, useState } from "react";

export function PostViews({
  slug,
  initial,
}: {
  slug: string;
  initial: number;
}) {
  const [views, setViews] = useState(initial);
  const requested = useRef(false);
  useEffect(() => {
    if (requested.current) return;
    requested.current = true;
    async function record() {
      try {
        const response = await fetch(
          `/api/blog/${encodeURIComponent(slug)}/view`,
          { method: "POST" },
        );
        if (!response.ok)
          throw new Error(`View tracking failed: ${response.status}`);
        const result: unknown = await response.json();
        if (
          typeof result !== "object" ||
          result === null ||
          !("views" in result) ||
          typeof result.views !== "number"
        )
          throw new Error("Invalid view count response");
        setViews(result.views);
      } catch (error) {
        console.error(
          error instanceof Error ? error.message : "View tracking failed",
        );
      }
    }
    void record();
  }, [slug]);
  return <span>Views({views})</span>;
}
