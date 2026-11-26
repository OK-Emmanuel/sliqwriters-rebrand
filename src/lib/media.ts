export function mediaUrl(
  path: string | null,
  base = process.env.LEGACY_MEDIA_URL || "https://sliqwriters.com/",
): string {
  if (!path?.trim()) return "/images/brand.jpg";
  const input = path.trim().replace(/\\/g, "/");
  if (/^(?:https?:)?\/\//i.test(input)) {
    return new URL(input, base).href;
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(input)) return "/images/brand.jpg";
  let normalized = input.replace(/^(?:\.{1,2}\/)+/, "").replace(/^\/+/, "");
  const prefixes = [
    new URL(base).pathname.replace(/^\/|\/$/g, ""),
    "sliqwriters",
  ];
  for (const prefix of prefixes) {
    if (
      prefix &&
      normalized.toLowerCase().startsWith(`${prefix.toLowerCase()}/`)
    ) {
      normalized = normalized.slice(prefix.length + 1);
      break;
    }
  }
  return new URL(normalized, base).href;
}
