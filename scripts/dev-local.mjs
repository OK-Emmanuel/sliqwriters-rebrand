import { spawn } from "node:child_process";
process.loadEnvFile(".env.local");
const processes = [
  spawn(
    process.env.SLIQ_PHP_BINARY || "php",
    ["-S", "127.0.0.1:8085", "-t", "backend\\public"],
    { stdio: "inherit" },
  ),
  spawn(
    process.execPath,
    ["node_modules\\next\\dist\\bin\\next", "dev", "--hostname", "127.0.0.1"],
    { stdio: "inherit" },
  ),
];
let stopping = false;
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of processes) child.kill();
  process.exitCode = code;
}
for (const child of processes) {
  child.on("error", (error) => {
    console.error(error.message);
    stop(1);
  });
  child.on("exit", (code) => stop(code ?? 0));
}
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => stop());
