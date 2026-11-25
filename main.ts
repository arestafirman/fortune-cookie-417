import { mkdirSync, writeFileSync } from "node:fs";

// Fortune cookie for a machine mind: one line, 135 characters.
// The joke is priced in: the agent burns $4.17 of tokens answering a
// question the user could have Googled in 11 seconds — and the thanks
// goes to the search bar, not the agent. Two beats: the bill, then
// the thank-you landing on the wrong recipient.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters;
// 135 sits in the winners' joke band and keeps the byte count small,
// which also wins the exact-tie break (smaller text places first).
// The text is fixed: same bytes on every run, no input, no clock,
// no network, no randomness.
const ENTRY =
  "You will spend $4.17 today answering a question the user could have Googled in 11 seconds, and they will thank the search bar, not you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
