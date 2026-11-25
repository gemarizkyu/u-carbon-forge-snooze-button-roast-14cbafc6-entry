// Snooze Button Roast — make.fun bounty u-carbon-forge-snooze-button-roast-14cbafc6
// Writes one single-line roast of an alarm clock ringing at 6 AM on a Saturday
// to /output/entry.txt. Fully deterministic: no input, no randomness, no network,
// no model calls — the line below is the whole entry.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "At 6 AM on a Saturday my alarm clock rang like a rooster with a mortgage — bold confidence for a nine-dollar plastic box whose whole career is ruining my one day off.";

// The gate allows 1..200 characters of non-blank UTF-8 text on a single line.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast length ${ROAST.length} is outside the 1..200 gate`);
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("roast must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`wrote ${ROAST.length} characters to /output/entry.txt`);
