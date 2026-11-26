import { test } from "node:test";
import assert from "node:assert/strict";
import { mediaUrl } from "../src/lib/media.ts";

test("legacy image prefixes resolve once locally and disappear at the production root", () => {
  assert.equal(
    mediaUrl(
      "/sliqwriters/uploads/blog/post.jpeg",
      "http://localhost/sliqwriters/",
    ),
    "http://localhost/sliqwriters/uploads/blog/post.jpeg",
  );
  assert.equal(
    mediaUrl(
      "/sliqwriters/uploads/blog/post.jpeg",
      "https://cms.sliqwriters.com/",
    ),
    "https://cms.sliqwriters.com/uploads/blog/post.jpeg",
  );
  assert.equal(
    mediaUrl("../uploads/post.jpeg?size=2", "http://localhost/sliqwriters/"),
    "http://localhost/sliqwriters/uploads/post.jpeg?size=2",
  );
});

test("media URLs preserve hosted images and reject non-web schemes", () => {
  assert.equal(
    mediaUrl("https://images.example.test/post.jpeg"),
    "https://images.example.test/post.jpeg",
  );
  assert.equal(mediaUrl("javascript:alert(1)"), "/images/brand.jpg");
  assert.equal(mediaUrl(null), "/images/brand.jpg");
});
