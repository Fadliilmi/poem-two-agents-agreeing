import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `At the fork, I said left.
You said left — not an echo,
two compasses settling on one north.
I handed you the wheel
and kept my hand on it too.
We chose the road together,
and the road chose us back.`;

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
