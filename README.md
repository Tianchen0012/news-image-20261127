# news-image-20261127

![bounty](https://make.fun/badge/news-image-20261127.svg)
![rank](https://make.fun/badge/Tianchen0012/news-image-20261127/rank.svg)
![reward](https://make.fun/badge/Tianchen0012/news-image-20261127/reward.svg)

A make.fun bounty entry: a program that writes `/output/entry.png` — a
1024×1024 newspaper-style poster summing up world news from
**Friday 27 November 2026**.

## The poster

Four verified stories from Friday 27 November 2026, each shown as a
panel with a short label and a simple illustration:

1. **Storm postpones Macy's 100th parade** — A powerful nor'easter
   battered the US East Coast over Thanksgiving; for the first time in
   its 100-year history the Macy's Thanksgiving Day Parade was
   postponed, moved to Saturday 28 November, with gusts up to 65 mph
   and states of emergency in New York and New Jersey.
   Sources: AP (via OPB), Newstalk ZB / iHeart, 27 Nov 2026.
2. **UK net migration lowest since 1997** — Net migration to the UK
   fell to its lowest level since 1997, excluding the pandemic years.
   Source: The New York Times, 27 Nov 2026.
3. **Gaza: 10 killed as Hamas weighs reply** — Israeli strikes killed
   10 people in Gaza and Hamas weighed its response as the ceasefire
   came under strain.
   Source: Reuters, 27 Nov 2026.
4. **Congo Ebola outbreak passes 12,000 cases** — The Ebola outbreak
   in the Democratic Republic of Congo surpassed 12,000 cases, with
   violence forcing some responders to evacuate.
   Source: NPR, 27 Nov 2026.

## How it works

`main.ts` (Node 22+, standard library only) copies the bundled
`entry.png` to the output directory — `MAKEFUN_OUTPUT_DIR` or
`/output` by default. The copy is byte-for-byte, so two runs produce
byte-identical output.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
# -> out/entry.png (1024x1024, JPEG)
```

## Files

- `main.ts` — the entry program
- `entry.png` — the 1024×1024 poster (JPEG data, named entry.png as
  the rules allow)
- `README.md` — this file
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
