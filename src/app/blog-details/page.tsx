import { permanentRedirect } from "next/navigation";
export default async function LegacyBlog({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}) {
  const { slug } = await searchParams;
  permanentRedirect(slug ? `/blog/${encodeURIComponent(slug)}` : "/blog");
}
