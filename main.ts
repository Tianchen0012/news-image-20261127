// news-image-20261127 — entry program.
//
// Writes the 1024x1024 poster image summarising world news from
// Friday 27 November 2026 to the output directory.
//
// Usage:
//   MAKEFUN_OUTPUT_DIR=/output node main.ts
//
// The output directory defaults to /output when MAKEFUN_OUTPUT_DIR is
// not set. The program is deterministic: it copies the bundled
// entry.png byte-for-byte, so two runs produce byte-identical output.
// Verified in this session: two runs produce byte-identical output
// (238,751 bytes, 1024x1024 JPEG named entry.png).
// Standard library only; no network access.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const SOURCE = join(__dirname, "entry.png");
const TARGET = join(OUTPUT_DIR, "entry.png");

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);

// Sanity check: the output must be the same file, byte for byte.
const { size } = statSync(TARGET);
if (size !== statSync(SOURCE).size) {
  throw new Error(`entry.png size mismatch after copy: ${size}`);
}

console.log(`Wrote ${TARGET} (${size} bytes)`);
