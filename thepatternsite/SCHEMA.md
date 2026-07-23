# Pattern Spec Schema

Every pattern file is Markdown with YAML frontmatter, named `<id>.md`, placed in its
category folder. Follow this spec exactly — INDEX.md and validation tooling parse it.

## Frontmatter

```yaml
---
id: double-bottom-adam-adam        # kebab-case, unique, matches filename
name: Adam & Adam Double Bottom    # display name as Bulkowski titles it
aliases: [AADB]                    # other names/abbreviations; [] if none
category: chart-pattern            # chart-pattern | candlestick | small-pattern | harmonic
type: reversal                     # reversal | continuation | either
direction: bullish                 # bullish | bearish | either
bars: {min: 10, typical: 40}       # formation length in bars (integers; best estimate)
confirmation: required             # required | recommended | none
rank: {value: 26, of: 39}          # Bulkowski's overall rank; null if not ranked
stats:                             # include keys that exist on the page; null if absent
  break_even_failure_rate: 0.16    # fractions, not percentages
  avg_move: 0.39                   # average rise (bullish) or decline (bearish)
  throwback_rate: 0.67             # throwback (up breakout) or pullback (down breakout)
  pct_meeting_target: 0.73
  reversal_rate: null              # candlesticks: % acting as reversal
  frequency_rank: null             # candlesticks: how common (1 = most common)
source: https://thepatternsite.com/aadb.html
accessed: 2026-07-16
---
```

Rules for frontmatter values:
- Percentages from the site become fractions (16% → `0.16`).
- Unknown/absent values are `null` — never guess a statistic.
- Candlestick ranks use Bulkowski's candle ranking (`of: 103`); chart patterns use the
  chart-pattern ranking (`of: 39` or as stated on the page).
- If a page gives separate bull/bear-market stats, put the **bull-market** figure in
  frontmatter and detail the rest in the Performance section.

## Body sections (fixed order, all present; write "Not stated by Bulkowski." if empty)

### 1. `## Overview`
2–3 sentences: what the pattern looks like, where it appears, what it signals.

### 2. `## Identification Guidelines`
Bulkowski's stated criteria, faithfully paraphrased, as a table:
`| Characteristic | Guideline |`. Short quotes (a phrase) are OK; do not copy paragraphs.

### 3. `## Detection Rules (computable)`
Numbered rules `R1…Rn`. Each rule is ONE measurable condition with explicit numbers,
tagged `[B]` (Bulkowski-stated) or `[D]` (our default for a qualitative criterion).
Format:

```
- **R1 [B]** Prior trend down: `close < close[20]` at pattern start.
- **R2 [D]** Valley lows within 3% of each other: `abs(low1 - low2) / min(low1, low2) <= 0.03` (default 3%, adjustable).
```

Conventions: pseudo-Pine expressions in backticks; OHLC names `open/high/low/close`;
`body = abs(close - open)`, `range = high - low`; bar offsets as `close[1]`.
For multi-bar formations reference pivots as `valley1/valley2/peak` etc. and define them.

### 4. `## Confirmation & Breakout`
The exact trigger that validates the pattern (e.g. "close above the peak between the two
valleys"), plus breakout-direction probabilities if given.

### 5. `## Targets & Stops`
Measure rule as a formula (e.g. `target = breakout_price + 0.73 * (peak_high - lower_valley_low)`),
including Bulkowski's percentage-meeting-target adjustment. Stop placement guidance.

### 6. `## Performance`
Stats table (bull/bear market splits, up/down breakout splits where given) + notable
findings (e.g. paradoxical behavior, best/worst conditions).

### 7. `## Trading Tactics`
Bulkowski's tips, condensed to actionable bullets.

### 8. `## Pine Notes`
Translation guidance: feasibility (easy/moderate/hard), which rules need pivot detection
(`ta.pivothigh/low` lookback → signal lag/repaint tradeoff), which criteria are inherently
subjective, suggested input parameters, session/timeframe caveats.

## Provenance discipline

- Never attribute a number or rule to Bulkowski (`[B]`) unless the source page states it.
- If the page is thin on identification criteria, formalize what exists and mark the rest
  `[D]` with sensible defaults — a spec must always be codable end-to-end.
- If the source page is missing/members-only/not actually a pattern definition, do NOT
  write a file; report it back instead.
