import type { Metadata } from "next";

export function seo(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: title.includes("SLiQWriterS") ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: ["/images/brand.jpg"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/brand.jpg"],
    },
  };
}
