import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
void repoRoot;

// This line stays because it packs the whole evening into one breath: charcoal smoke, stinging sambal, and cold waves on bare feet.
const text =
  "On the beach at dusk my father grilled fish over charcoal while the sea wind carried the smoke, and the sambal stung my lips as the waves washed over my bare feet.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
