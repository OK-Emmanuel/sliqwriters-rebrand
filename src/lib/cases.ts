import { field, section } from "./copy";

export const cases = Array.from({ length: 8 }, (_, i) => {
  const id = `14.${i + 2}`;
  const route = field(id, "Slug / Route");
  const slug = route.split("slug=")[1];
  const category = field(id, "Service Category").split(" · ");
  const text = section(id);
  const metricsText =
    text.split("#### Key Performance Metrics:")[1]?.split("####")[0] ?? "";
  const metrics = [...metricsText.matchAll(/\*\*(.+?)\*\* \((.+?)\)/g)].map(
    (match) => ({ value: match[1], label: match[2] }),
  );
  const narrative = text
    .slice(text.indexOf("#### 1."))
    .replace(/^#### \d+\. /gm, "## ")
    .replace(/\n---[\s\S]*/, "");
  return {
    id,
    slug,
    title: field(id, "Title"),
    client: field(id, "Client & Role"),
    service: category[0],
    industry: category.slice(1).join(" · "),
    geography: field(id, "Geography & Timeframe"),
    excerpt: field(id, "Summary Excerpt"),
    metrics,
    narrative,
  };
});
