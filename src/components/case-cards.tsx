import Link from "next/link";
import { cases } from "@/lib/cases";
import { Arrow } from "./ui";

export function CaseCards({ stories = cases }: { stories?: typeof cases }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <article className="story-card" key={story.slug}>
          <Link
            href={`/case-studies/${story.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            className="story-art"
          >
            <b>{story.client.split(" · ").at(-1)}</b>
            <span className="relative z-10 self-start bg-white/75 px-2 py-1 text-[10px]">
              {story.geography}
            </span>
            <span className="monogram">{story.client[0]}</span>
          </Link>
          <div className="story-body">
            <p className="mb-4 text-[10px]! font-semibold tracking-wider uppercase">
              {story.service} · {story.industry}
            </p>
            <h3>
              <Link href={`/case-studies/${story.slug}`}>{story.title}</Link>
            </h3>
            <p>{story.excerpt}</p>
            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-5">
              {story.metrics.slice(0, 2).map((metric) => (
                <div key={metric.label}>
                  <strong className="block text-2xl font-medium tracking-tight">
                    {metric.value}
                  </strong>
                  <span className="mt-2 block text-[10px] text-muted">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
            <Link className="text-link" href={`/case-studies/${story.slug}`}>
              Read More
              <span className="sr-only">: {story.title}</span>
              <Arrow />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
