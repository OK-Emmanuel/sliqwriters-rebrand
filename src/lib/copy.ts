import deck from "../content/deck.json" with { type: "json" };

export const sections: Record<string, { title: string; text: string }> =
  deck.sections;

export function section(id: string) {
  const result = sections[id];
  if (!result) throw new Error(`Missing copy section: ${id}`);
  return result.text;
}

export function clean(text: string): string {
  return text
    .trim()
    .replace(/\s+\(`[^`]+`\).*$/, "")
    .replace(/^"([\s\S]*)"$/, "$1")
    .replace(/^`([^`]*)`$/, "$1")
    .replace(/^\*"([\s\S]*)"\*$/, "$1")
    .trim();
}

export function field(id: string, label: string): string {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const found = section(id).match(
    new RegExp(`^[ \\t]*\\* \\*{1,2}${escaped}:\\*{1,2}[ \\t]*(.*)$`, "m"),
  );
  if (!found || !found[1].trim())
    throw new Error(`Missing copy field: ${id} / ${label}`);
  return clean(found[1]);
}

export function fields(id: string, label: string): string[] {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return [
    ...section(id).matchAll(
      new RegExp(`^[ \\t]*\\* \\*{1,2}${escaped}:\\*{1,2}[ \\t]*(.+)$`, "gm"),
    ),
  ].map((match) => clean(match[1]));
}

export function quotedBullets(id: string): string[] {
  return [...section(id).matchAll(/^\s*\* "(.+)"\s*$/gm)].map(
    (match) => match[1],
  );
}

export function faq(id: string) {
  return [
    ...section(id).matchAll(
      /^\d+\. \*\*(?:Q: )?(.+?)\*\*[ \t]*\n\s*\*(?:Answer|A):\*\s*"(.+)"/gm,
    ),
  ].map((match) => ({ question: match[1], answer: match[2] }));
}

export function deliverables(id: string) {
  return [
    ...section(id).matchAll(/^\d+\. \*\*(.+?):\*\*\s*\n\s*\* "(.+)"/gm),
  ].map((match) => ({ question: match[1], answer: match[2] }));
}

export const callUrl = "https://calendly.com/dehchukwuka/30-mins-chat-with-deh";
export const whatsappUrl = "https://wa.me/2348133720549";
export const academyUrl = "https://sliqwritersacademy.carrd.co";
export const stats = [
  ["9+", "Years in Business"],
  ["$3M+", "Client Revenue Generated"],
  ["510+", "Brands Served"],
  ["100%", "Client Satisfaction"],
];
