import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
if (existsSync(".env.local")) process.loadEnvFile(".env.local");
const operation = process.argv[2];
if (!["serve", "migrate"].includes(operation))
  throw new Error("Use serve or migrate.");
const command = process.env.SLIQ_PHP_BINARY || "php";
const args =
  operation === "migrate"
    ? ["backend\\migrate.php"]
    : ["-S", "127.0.0.1:8085", "-t", "backend\\public"];
const child = spawn(command, args, { stdio: "inherit", env: process.env });
child.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => child.kill());
