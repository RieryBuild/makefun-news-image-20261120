# news-image-20261120 — The World in One Day

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/RieryBuild/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/RieryBuild/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

**Sum up the world's news of Friday 20 November 2026 in one image.**

A single-page wire poster: masthead date, a "day as it broke" spine in
local times, a big-number strip, 3 hero stories, 10 more illustrated
stories, a numbered world map, a 33-item "also on" list, and a DATE CHECK
footer naming the big stories that broke *before* Friday and were left out
on purpose.

- **46 stories**, 7 regions — every one happened on, or was first reported
  on, Friday 20 November 2026 (see `NEWS.md` for the per-story source and
  first-report date, plus the excluded list).
- **13 illustrated stories**, each labelled in-image with its place and
  event. All 13 panels are original artwork made for this page.
- **Programme:** `main.ts` (Node 22, stdlib only, no network) copies the
  `entry.png` beside it to `/output/entry.png`. Deterministic: two runs
  write identical bytes.

## Files

- `main.ts` — the entry programme
- `entry.png` — the poster (1024×1024, ≤1 MiB)
- `NEWS.md` — the 46 stories with primary sources, first-report dates,
  and the stories excluded by the DATE CHECK
- `LICENSE` — MIT

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---
<sub>Entered on [make.fun](https://make.fun/?ref=wa8s3t3t&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
