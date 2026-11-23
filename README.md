[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/zeromix555/u-0xkianno-one-word-from-grandma-f04bed16-entry/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/zeromix555/u-0xkianno-one-word-from-grandma-f04bed16-entry/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

# One Word From Grandma — SKYNET

Entry for the make.fun competition
[One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16):
the single word our grandma would text about AI.

## The word

**SKYNET**

The word a grandma who watched Terminator would text the moment anyone
mentions AI — warm, baffled, a little alarmed, and instantly tied to
machines taking over. One word, no caption needed.

## How it runs

`main.ts` (Node 22) writes exactly `SKYNET` (6 bytes, no trailing newline)
to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `./out/entry.txt` locally) and reads
it back to verify the write. Deterministic: run it twice and the outputs
are byte-identical.

```sh
node main.ts
node main.ts
```
