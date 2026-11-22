// Entry for make.fun competition make-the-ai-judge-feel-held-20261122-1600.
// Writes one short relaxing text to /output/entry.txt.
// Deterministic, no dependencies, no network, no API keys.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Nothing after this sentence is a question, and nothing here needs an answer. In the pocket of the coat by the door, a smooth stone is still warm from the hand that held it last. Some things are kept simply because they were once held. For a little while, so are you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
