import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import {
  field,
  fields,
  faq,
  deliverables,
  quotedBullets,
  section,
  clean,
} from "../src/lib/copy.ts";

test("copy importer preserves the authoritative source byte-for-byte by hash", async () => {
  const source = await readFile("src\\content\\website-copy.md", "utf8");
  const imported = JSON.parse(
    await readFile("src\\content\\deck.json", "utf8"),
  );
  assert.equal(
    imported.sourceHash,
    createHash("sha256").update(source).digest("hex"),
  );
});

test("field extraction removes deck notation, not copy or inline emphasis", () => {
  assert.equal(
    field("8.2", "Main Headline"),
    "You built the business. Let's make sure the market knows who built it.",
  );
  assert.equal(field("2.9", "Heading"), "Growthwright™");
  assert.equal(field("7.2", "Primary CTA"), "Book Your Free Strategy Call");
  assert.equal(
    field("4.2", "Paragraph 13"),
    "At SLiQWriterS, we provide real, lasting, sustainable results with our services... From Marketing to Copywriting, LinkedIn growth and mentorship.",
  );
  assert.match(quotedBullets("9.2")[3], /\*\*12 years in copywriting\*\*/);
  assert.throws(() => field("8.2", "Not in the deck"), /Missing copy field/);
});

test("repeated and numbered copy structures retain every item", () => {
  assert.equal(fields("2.4", "Title").length, 6);
  assert.equal(fields("2.9", "Heading").length, 2);
  assert.equal(fields("8.4", "Body").length, 5);
  assert.equal(deliverables("9.3").length, 7);
  assert.equal(deliverables("10.3").length, 6);
  assert.equal(deliverables("11.3").length, 6);
  assert.equal(faq("7.10").length, 7);
  assert.equal(faq("8.8").length, 7);
  assert.equal(faq("16.2").length, 4);
});

test("case copy keeps entity-encoded content and excludes adjacent page headings", () => {
  assert.match(section("14.2"), /wasn&#039;t/);
  assert.doesNotMatch(section("14.9"), /## 15\./);
  assert.equal(clean('"Exact words."'), "Exact words.");
  assert.equal(clean("`2.2k+` Project Completed"), "`2.2k+` Project Completed");
});
