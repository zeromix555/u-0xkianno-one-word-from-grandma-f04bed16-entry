// One Word From Grandma — entry program.
//
// The competition asks for exactly one word: the single word our grandma
// would text about AI. The word is SKYNET — the word a grandma who watched
// Terminator would text the moment anyone mentions AI: warm, baffled, a
// little alarmed, and instantly tied to machines taking over. It is a real
// word, it is one word, and it lands its joke without a caption.
//
// Deterministic by construction: the program writes a fixed 6-byte string
// to the grader's output directory. No network, no clock, no randomness.
// Running it twice writes identical bytes.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The grader sets MAKEFUN_OUTPUT_DIR; local runs fall back to ./out.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
const target = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });

// Exactly one word, no trailing newline: "SKYNET".
writeFileSync(target, "SKYNET", "utf8");

// Read back what was written so a truncated write can never pass silently.
import { readFileSync } from "node:fs";
const written = readFileSync(target, "utf8");
if (written !== "SKYNET") {
  throw new Error(`entry.txt mismatch: expected "SKYNET", got ${JSON.stringify(written)}`);
}
