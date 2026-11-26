import { randomBytes } from "node:crypto";
import { access, writeFile } from "node:fs/promises";

try {
  await access(".env.local");
  console.log(".env.local already exists; left unchanged.");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
  await writeFile(
    ".env.local",
    [
      "SITE_URL=http://localhost:3000",
      "SLIQ_API_URL=http://127.0.0.1:8085/index.php",
      `SLIQ_API_KEY=${randomBytes(32).toString("hex")}`,
      "LEGACY_MEDIA_URL=http://localhost/sliqwriters/",
      "SLIQ_DATABASE_CONFIG=C:\\xampp\\htdocs\\sliqwriters\\config\\database.php",
      "SLIQ_PHP_BINARY=C:\\xampp\\php\\php.exe",
      "",
    ].join("\n"),
    { flag: "wx" },
  );
  console.log(
    "Created ignored .env.local with a generated local API key. No credentials copied.",
  );
}
