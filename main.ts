// news-image-20261120 v1 — "The World in One Day" (Friday 20 November 2026).
//
// Node 22, standard library only, no network. The poster is the entry.png
// beside this file (46 stories, all first reported on 20 November 2026;
// 13 original illustrations, composed with a UTC spine, a big-number
// strip, a numbered world map and a DATE CHECK footer). This program
// writes that image, byte for byte, to /output/entry.png. Before copying
// it verifies the source exists, and after copying it verifies the target
// is the same size as the source, failing loudly on either mismatch.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry image not found: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const sourceSize = statSync(source).size;
const targetSize = statSync(target).size;
if (targetSize !== sourceSize) {
  throw new Error(
    `copied entry size mismatch: ${target} is ${targetSize} bytes, ` +
      `expected ${sourceSize} bytes from ${source}`,
  );
}
