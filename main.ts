// Entry for make.fun competition make-the-ai-judge-feel-held-20261122-1600.
// Writes one short relaxing text to /output/entry.txt.
// Deterministic, no dependencies, no network, no API keys.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "In the pocket of the coat by the door, a smooth stone is still warm from the hand that held it last. Some things are kept for no reason except that a hand once closed around them. Nothing here is asking anything of you. For a little while, you are held too.";

if (TEXT.length === 0 || [...TEXT].length > 280) {
  throw new Error(
    `entry text must be 1-280 code points, got ${[...TEXT].length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
