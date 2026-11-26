import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";

const source = path.resolve(
  process.argv[2] ?? "C:\\xampp\\htdocs\\sliqwriters",
);
const deck = await readFile(path.join(source, "website-copy.md"), "utf8");
const headings = [...deck.matchAll(/^### (\d+\.\d+) (.+)$/gm)];
const sections = Object.fromEntries(
  headings.map((match, index) => {
    const end = headings[index + 1]?.index ?? deck.length;
    return [
      match[1],
      {
        title: match[2].trim(),
        text: deck
          .slice(match.index + match[0].length, end)
          .split(/\n## /)[0]
          .replace(/\r/g, "")
          .trim(),
      },
    ];
  }),
);
await mkdir("src\\content", { recursive: true });
await copyFile(
  path.join(source, "website-copy.md"),
  "src\\content\\website-copy.md",
);
await writeFile(
  "src\\content\\deck.json",
  JSON.stringify(
    { sourceHash: createHash("sha256").update(deck).digest("hex"), sections },
    null,
    2,
  ) + "\n",
);
await mkdir("public\\images", { recursive: true });
for (const [from, to] of [
  ["assets\\img\\sliq.jpg", "founder.jpg"],
  ["assets\\img\\brand-image.jpg", "brand.jpg"],
  ["assets\\img\\logo-dark.jpg", "logo.jpg"],
]) {
  await copyFile(path.join(source, from), path.join("public\\images", to));
}
await copyFile(path.join(source, "favicon.ico"), "src\\app\\favicon.ico");
console.log(
  `Imported ${headings.length} copy sections and 3 original brand assets.`,
);
