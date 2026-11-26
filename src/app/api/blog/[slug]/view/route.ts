import { NextResponse } from "next/server";
import { z } from "zod";
import { gateway, GatewayError } from "@/lib/gateway";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  if (
    request.headers.get("origin") !==
    new URL(process.env.SITE_URL || request.url).origin
  )
    return NextResponse.json(
      { message: "Invalid request origin." },
      { status: 403 },
    );
  const { slug } = await params;
  if (!/^[a-z0-9-]{1,255}$/i.test(slug))
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  try {
    return NextResponse.json(
      await gateway("view", z.object({ views: z.number() }), { slug }, {}),
    );
  } catch (error) {
    if (!(error instanceof GatewayError)) throw error;
    console.error(`SliQ view tracking failed: ${error.status}`);
    return NextResponse.json(
      { message: error.message },
      { status: error.status },
    );
  }
}
