import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { gateway, GatewayError } from "@/lib/gateway";

const common = {
  name: z.string().trim().min(1).max(120),
  email: z.email().max(254),
  website: z.literal("").default(""),
};
const inquiry = z.discriminatedUnion("kind", [
  z.object({
    ...common,
    kind: z.literal("contact"),
    phone: z.string().trim().min(1).max(40),
    message: z.string().trim().min(10).max(10000),
  }),
  z.object({ ...common, kind: z.literal("newsletter") }),
]);

export async function POST(request: Request) {
  const expectedOrigin = new URL(process.env.SITE_URL || request.url).origin;
  if (request.headers.get("origin") !== expectedOrigin)
    return NextResponse.json(
      { message: "Invalid request origin." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return NextResponse.json({ message: "JSON is required." }, { status: 415 });
  if (Number(request.headers.get("content-length") || "0") > 24576)
    return NextResponse.json(
      { message: "Request is too large." },
      { status: 413 },
    );
  const reader = request.body?.getReader();
  if (!reader)
    return NextResponse.json(
      { message: "Form data is required." },
      { status: 400 },
    );
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 24576) {
      await reader.cancel();
      return NextResponse.json(
        { message: "Request is too large." },
        { status: 413 },
      );
    }
    chunks.push(value);
  }
  let input: unknown;
  try {
    input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return NextResponse.json({ message: "Invalid JSON." }, { status: 400 });
  }
  const parsed = inquiry.safeParse(input);
  if (!parsed.success)
    return NextResponse.json(
      {
        message:
          "Please check the required fields. Messages must contain at least 10 characters.",
      },
      { status: 422 },
    );
  const key = process.env.SLIQ_API_KEY;
  if (!key)
    return NextResponse.json(
      {
        message:
          "The service is not configured. Please email hello@sliqwriters.com.",
      },
      { status: 503 },
    );
  // Vercel overwrites x-forwarded-for. Other reverse proxies must do the same.
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  const client_hash = createHmac("sha256", key).update(ip).digest("hex");
  try {
    const result = await gateway(
      "inquiry",
      z.object({ message: z.string() }),
      {},
      { ...parsed.data, client_hash },
    );
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    if (!(error instanceof GatewayError)) throw error;
    console.error(`SliQ inquiry failed: ${error.status}`);
    return NextResponse.json(
      { message: error.message },
      {
        status: error.status,
        headers: error.status === 429 ? { "Retry-After": "3600" } : {},
      },
    );
  }
}
