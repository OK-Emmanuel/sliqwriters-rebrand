import "server-only";
import { z } from "zod";

export class GatewayError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "GatewayError";
  }
}

export async function gateway<T>(
  action: string,
  schema: z.ZodType<T>,
  query: Record<string, string> = {},
  body?: object,
): Promise<T> {
  const endpoint = process.env.SLIQ_API_URL;
  const key = process.env.SLIQ_API_KEY;
  if (!endpoint || !key || key.length < 32)
    throw new GatewayError(
      503,
      "The service is not configured. Please email hello@sliqwriters.com.",
    );
  const url = new URL(endpoint);
  if (
    url.protocol !== "https:" &&
    !(
      url.protocol === "http:" &&
      ["127.0.0.1", "localhost", "[::1]"].includes(url.hostname)
    )
  ) {
    throw new GatewayError(503, "The backend requires HTTPS.");
  }
  url.searchParams.set("action", action);
  for (const [name, value] of Object.entries(query))
    url.searchParams.set(name, value);
  let response: Response;
  try {
    response = await fetch(url, {
      method: body ? "POST" : "GET",
      headers: {
        Authorization: `Bearer ${key}`,
        ...(body ? { "Content-Type": "application/json" } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
  } catch (error) {
    console.error(
      "SliQ gateway connection failed",
      error instanceof Error ? error.name : "UnknownError",
    );
    throw new GatewayError(
      503,
      "The service is temporarily unavailable. Please email hello@sliqwriters.com.",
    );
  }
  if (!response.ok) {
    if (response.status !== 404)
      console.error(`SliQ gateway HTTP ${response.status}`);
    throw new GatewayError(
      response.status,
      response.status === 429
        ? "Too many requests. Please try again in an hour or email hello@sliqwriters.com."
        : response.status === 404
          ? "Post not found"
          : "The service is temporarily unavailable. Please email hello@sliqwriters.com.",
    );
  }
  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new GatewayError(502, "The backend returned an invalid response.");
  }
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    console.error(
      "SliQ gateway response validation failed",
      parsed.error.issues.map(({ path, code }) => ({ path, code })),
    );
    throw new GatewayError(502, "The backend returned an invalid response.");
  }
  return parsed.data;
}
