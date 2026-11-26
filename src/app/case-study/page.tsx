import { permanentRedirect } from "next/navigation";
export default async function LegacyCase({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}) {
  const { slug } = await searchParams;
  permanentRedirect(
    slug ? `/case-studies/${encodeURIComponent(slug)}` : "/case-studies",
  );
}
