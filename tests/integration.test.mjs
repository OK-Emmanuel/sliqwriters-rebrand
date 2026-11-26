import { test } from "node:test";
import assert from "node:assert/strict";
import { randomBytes, createHmac } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

const enabled = process.env.SLIQ_TEST_DATABASE === "1";
if (enabled && existsSync(".env.local")) process.loadEnvFile(".env.local");

test(
  "live API enforces publication, redirects, validation, persistence and rate limits",
  { skip: !enabled },
  async () => {
    const run = `rebrand-test-${randomBytes(8).toString("hex")}`;
    const email = `${run}@example.invalid`;
    const fixture = (action) =>
      execFileSync(
        process.env.SLIQ_PHP_BINARY || "php",
        ["tests\\fixtures.php", action, run],
        { encoding: "utf8", env: process.env },
      );
    async function api(action, query = {}, body, authorized = true) {
      const url = new URL(process.env.SLIQ_API_URL);
      url.searchParams.set("action", action);
      Object.entries(query).forEach(([key, value]) =>
        url.searchParams.set(key, value),
      );
      return fetch(url, {
        method: body ? "POST" : "GET",
        headers: {
          ...(authorized
            ? { Authorization: `Bearer ${process.env.SLIQ_API_KEY}` }
            : {}),
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      });
    }
    try {
      fixture("seed");
      assert.equal((await api("posts", {}, undefined, false)).status, 401);
      assert.equal((await api("post", { slug: `${run}-draft` })).status, 404);
      assert.equal((await api("post", { slug: `${run}-future` })).status, 404);
      const post = await (
        await api("post", { slug: `${run}-published` })
      ).json();
      assert.equal(post.post.slug, `${run}-published`);
      const redirect = await (await api("post", { slug: `${run}-old` })).json();
      assert.equal(redirect.redirect, `${run}-published`);
      const sitemap = await (await api("sitemap")).json();
      assert.equal(
        sitemap.posts.some((post) => post.slug === `${run}-future`),
        false,
      );
      assert.equal(
        sitemap.posts.some((post) => post.slug === `${run}-draft`),
        false,
      );
      assert.equal((await api("posts", { page: "-1" })).status, 422);
      const invalid = await (
        await api("posts", { category: "not-a-real-category" })
      ).json();
      assert.equal(invalid.invalid_filter, true);
      const client_hash = createHmac("sha256", process.env.SLIQ_API_KEY)
        .update(run)
        .digest("hex");
      const contact = {
        kind: "contact",
        name: run,
        email,
        phone: "+10000000000",
        message: "Automated integration test. No action required.",
        client_hash,
        website: "",
      };
      assert.equal(
        (await api("inquiry", {}, { ...contact, email: "invalid" })).status,
        422,
      );
      assert.equal(
        (await api("inquiry", {}, { ...contact, website: "spam.example" }))
          .status,
        422,
      );
      const frontend = process.env.SITE_URL;
      assert.equal(
        (
          await fetch(`${frontend}/api/inquiries`, {
            method: "POST",
            headers: {
              Origin: frontend,
              "Content-Type": "application/json",
              "x-forwarded-for": run,
            },
            body: JSON.stringify(contact),
          })
        ).status,
        201,
      );
      for (let i = 0; i < 4; i++)
        assert.equal(
          (await api("inquiry", {}, { ...contact, kind: "newsletter" })).status,
          201,
        );
      assert.equal((await api("inquiry", {}, contact)).status, 429);
      assert.deepEqual(JSON.parse(fixture("verify")), {
        contacts: 1,
        subscribers: 1,
      });
      const article = await fetch(`${frontend}/blog/${run}-published`);
      const html = await article.text();
      assert.equal(article.status, 200);
      assert.ok(html.includes("Preserved article text."));
      assert.ok(!html.includes('<script>alert("x")</script>'));
      assert.ok(!html.includes('onerror="alert(1)"'));
      const view = await fetch(`${frontend}/api/blog/${run}-published/view`, {
        method: "POST",
        headers: { Origin: frontend },
      });
      assert.equal(view.status, 200);
      assert.equal((await view.json()).views, 1);
      assert.equal(
        (await api("view", { slug: `${run}-future` }, {})).status,
        404,
      );
      const moved = await fetch(`${frontend}/blog/${run}-old`, {
        redirect: "manual",
      });
      assert.equal(moved.status, 308);
      assert.equal((await fetch(`${frontend}/blog/${run}-future`)).status, 404);
      assert.equal(
        (
          await fetch(`${frontend}/api/inquiries`, {
            method: "POST",
            headers: {
              Origin: "https://untrusted.example",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
          })
        ).status,
        403,
      );
      assert.equal(
        (
          await fetch(`${frontend}/api/inquiries`, {
            method: "POST",
            headers: { Origin: frontend, "Content-Type": "application/json" },
            body: JSON.stringify({ ...contact, email: "invalid" }),
          })
        ).status,
        422,
      );
    } finally {
      fixture("clean");
    }
  },
);
