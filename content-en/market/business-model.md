---
title: The Cost and Business Model of Robotaxis
description: How much a driverless vehicle actually costs, the controversy over a 5-yuan ride in Wuhan, where the vanished driver cost went, and four ways to make money — the economic ledger of robotaxis and its definition traps. Information as of 2026-11-11.
tags:
  - Technology
  - Business Model
order: 1
asof: 2026-11-11
aliases:
  - technology/business-model
---

<small>Facts follow the Chinese original.</small>

> [!info] Scope of this page
> In this field, "cost" is the estimate most easily spread as fact: operators never publish true per-vehicle costs, and most figures in circulation are company claims or analyst models. Every figure on this page is labelled as which kind it is; wherever there is only an estimate, it is explicitly written as an estimate. Information as of 2026-11-11.

## How much does a driverless vehicle actually cost

- **Baidu Apollo RT6 (mass-production name Yichi 06)**: At Apollo Day in May 2024, the announced price was **204,600 yuan**, with the first batch of 1,000 vehicles planned for delivery to Apollo Go【Company claim: target】, supporting automatic battery swapping in about 3 minutes. This is currently the only mass-production robotaxi model whose price has been formally announced by an operator. Baidu says its whole-vehicle cost fell by about 60% compared with the fifth generation (the fifth generation's "about 480,000 yuan" is a figure carried over by media and analysts; Baidu officially gives only the relative reduction).
- **Pony.ai Gen-7**: The company says the BOM cost of its autonomous driving kit fell by 70% compared with the previous generation (compute unit down 80%), but it never gives an absolute value; a "kit 5,000–10,000 USD" figure circulating in some self-media has no company source and is not adopted on this page. The company has also given a forward-looking target: the total cost of the 2027 model to fall below 230,000 yuan (company claim, stated at the Beijing Auto Show 2026).
- **Waymo**: Has never published per-vehicle cost. Mainstream media/analyst estimates for the I-PACE fleet are about **150,000 USD per vehicle** (base vehicle about 70,000 + hardware about 30,000 + retrofit about 50,000, all estimates); after the sixth generation switched to a Zeekr chassis, whole-vehicle cost estimates range between 70,000–125,000 USD, with large differences across sources.
- **Cruise Origin**: At its 2020 launch, GM said its manufacturing cost was about half that of an electric SUV【Company claim】; the actual cost was never disclosed, and when the model was shelved in 2024 GM took an impairment of about 583 million USD.
- How to read this: The claim that per-vehicle costs in China and the US differ by an order of magnitude (204,600 yuan vs 150,000 USD) is broadly right in direction, but the composition on the two sides (whether retrofit, insurance, and spare parts are included) never aligns, so it can only be used as an order-of-magnitude reference.

Sources: [Sina Finance: Apollo Day 2024 and RT6 price](https://finance.sina.cn/2024-05-15/detail-inavhvsu2836907.d.html); [Breakdown of Waymo cost estimates](https://www.understandingrobots.org/p/how-waymo-plans-to-grow-its-fleet)

## Capital intensity: Cruise's 10 billion USD lesson

- By GM's account: Since its acquisition in 2016, Cruise accumulated operating losses of more than 10 billion USD and cumulative revenue of less than 500 million USD; in 2023 alone, cash burn was about 1.9 billion USD and pre-tax loss about 2.7 billion USD. When Barra shut it down in December 2024, she put it plainly: beyond the 10 billion USD already invested, "a considerable amount of incremental time and capital" would still be needed.
- External shareholders also paid: Honda had committed 2.75 billion USD (actually invested 852 million), and SoftBank and Microsoft both made large investments — "total capital destroyed exceeding 15 billion USD" is a media calculation combining external investment, not a disclosure figure from any single company.
- The lesson is not the size of the numbers: Cruise's technology milestones (California's first paid permit, a million miles) were all genuinely achieved; the cause of death was that commercial revenue and capital consumption were not in the same order of magnitude at all, and a crisis of trust cut off the possibility of continued financing at the critical moment. For the full story, see [[companies/cruise|Cruise]].

Source: [AP, Cruise's cumulative bill calculated from SEC filings](https://www.ien.com/operations/news/22928463/gm-sounds-robotaxi-retreat-stops-funding-cruise-unit)

## Price is not cost: the controversy over a 5-yuan ride in Wuhan

- **In July 2024**, a Wuhan netizen posted a receipt: after discounts, Apollo Go charged only 5.07 yuan for 7.1 km (original price 48.34 yuan), prompting accusations of disrupting the market with low prices, while local cruising taxi drivers reported their takings halved. Wuhan's market regulator responded: driverless ride-hailing prices are **market-regulated prices**, not government-set prices.
- Prices rose again after the controversy: later that month, Wuhan prices were reported to have risen to about 1.6 yuan/km, close to ordinary ride-hailing — showing that prices during the controversy period contained a large subsidy component, and the posted receipt price was neither the list price nor, even less, the cost.
- Baidu's UE narrative: In May 2024 it proposed the targets of "achieving break-even in Wuhan by the end of 2024 and full profitability in 2025"; on the earnings call in August 2025, Robin Li said Wuhan had achieved **unit economics (UE) break-even** at the end of 2024. Media breakdowns immediately pointed to the footnote: UE break-even means only that per-vehicle revenue covers its direct operating costs, **excluding R&D, platform amortization, and headquarters costs**. Pony.ai also claimed in November 2025 that it had achieved city-level per-vehicle UE break-even in Guangzhou (per-vehicle average daily net revenue 299 yuan, by the company's earnings-report account) — both companies' claims of "break-even" must be read together with their footnotes.
- Control group: Actual measurements by third-party price-comparison platform Obi in the San Francisco Bay Area (late 2025 to early 2026, 94,000 price queries) showed Waymo's average price at 19.69 USD per ride, about 13% more expensive than Uber and about 27% more expensive than Lyft — the US leader's strategy is not low price but an experience premium, and that premium is narrowing.

Sources: [21 Finance: the Wuhan low-price controversy (2024-07)](https://www.21jingji.com/article/20240712/herald/5cc80f08a7a48957401c18963c220928.html); [Huxiu: a breakdown of the UE break-even definition](https://www.huxiu.com/article/4837525.html)

## Where did the vanished driver cost go: the hidden cost stack

Robotaxis save the driver, but part of the driver's work and cost merely changes its name:

- **Remote assistance**: Waymo's official term is "fleet response" — the vehicle can request assistance from remote personnel, who do not drive directly. The human-to-vehicle ratio has never been officially disclosed; third-party estimates range from 1:10 to 1:25, and remote operating cost is about 0.2–0.4 USD/mile, all modelled figures. On the China side, the human-to-machine ratio for remote safety operators is constrained by management definitions (media calculations about 1:3), and is one of the most sensitive variables in domestic UE models. Every company guards this number most tightly, precisely because it is the most valuable.
- **Depot operations**: Cleaning, charging, maintenance, dispatch, and parking — in the Waymo and Uber partnership, this block is explicitly packaged to Uber and third-party operators (Moove, Avis, etc.); self-operated cities must likewise build it themselves or outsource it.
- **Insurance**: By Uber's official account, insurance accounted for 31% of the average fare per ride in California at the end of 2025 — this is a cost that in the human-driven era was shared between platform and driver; a robotaxi operator must bear it in full, with no driver to share it.
- **Refuelling/recharging time**: The RT6's 3-minute automatic battery swap and its battery-swap cooperation with CATL are essentially buying "vehicle online time".
- Benchmark: Uber's take rate is about 30% (calculated from its financial reports), i.e. about 70% of the order amount flows to the driver side; analysts estimate driver labour accounts for about 55–60% of the fare, about 0.85–1.10 USD/mile — this is the largest single item robotaxis can theoretically save, provided the sum of the hidden cost stack above is lower than it.

Sources: [Uber official: insurance cost account](https://www.uber.com/us/en/newsroom/uber-comment-consumer-reports/); [Uber take-rate calculation (based on 10-K)](https://fourweekmba.com/uber-take-rate/)

## Four ways to make money

1. **Self-operated fleet (Waymo One)**: Own app, own vehicles, own operations — control over the experience, at the cost of the heaviest assets.
2. **Platform distribution + outsourced operations (Waymo × Uber)**: Announced in September 2024, in Austin and Atlanta rides are hailed only via the Uber App, Uber is responsible for fleet management, cleaning, maintenance, and depots, and Waymo retains technology operations and roadside assistance; the revenue split has never been disclosed. Note this is not the endgame: Waymo has reportedly notified that it will launch its own App in the two cities in January 2028, and the current exclusive arrangement is loosening.
3. **Asset-light + platform expansion overseas (Baidu)**: From 2024 Baidu shifted to "asset-light" language — R&D kept in-house, non-core operations outsourced — and expanded overseas via platforms through Uber (July 2025, Asia-Pacific and the Middle East first, claiming several thousand vehicles) and Lyft (August 2025, planned for Germany and the UK in 2026); but the main domestic fleet is still purchased and self-operated within the Baidu system, so "asset-light" mainly applies overseas and in new scenarios.
4. **OEM contract manufacturing and technology licensing**: Hyundai positions itself as an "AV contract manufacturer" — assembling and integrating the IONIQ 5 for Waymo at its Georgia plant (October 2024 partnership); Toyota hedges both ways: it both mass-produces the bZ4X robotaxi in a joint venture with Pony.ai and explores putting Waymo's technology into private cars (preliminary agreement in April 2025). The online rumour of "Hyundai supplying Waymo 50,000 vehicles, about 2.5 billion USD" appears only in secondary reporting, Hyundai has never confirmed it, and this page does not treat it as fact.

Source: [Uber × Waymo joint press release (2024-09-13)](https://investor.uber.com/news-events/news/press-release-details/2024/Uber-and-Waymo-Expand-Partnership-to-Bring-Autonomous-Ride-Hailing-to-Austin-and-Atlanta/default.aspx)

## How to read forecasts correctly

- Goldman Sachs' April 2026 forecast: the global robotaxi market will be about 415 billion USD in 2035, and the US market 19 billion USD in 2030 — while its own earlier version estimated the US in 2030 at only about 7 billion USD. From the same institution, within two years, the forecast was revised upward by nearly 3 times.
- Market-size forecasts are sentiment indicators, not data: when citing them you must include the institution name and version date, and never mix figures from two versions in one chart.

Source: [Goldman Sachs: Robotaxis to become a $400B market (2026-04-30)](https://www.goldmansachs.com/insights/articles/robotaxis-to-become-a-400-billion-dollar-market-in-2035)

## Estimates most often taken as fact (must carry a label when cited)

1. "Waymo per-vehicle cost 150,000 / 180,000 / 200,000 USD" — the company has never disclosed it; the three versions cite each other across media.
2. "Remote safety operator human-to-vehicle ratio 1:10 / 1:20 / 1:50" — all third-party modelling, with no official figure from any operator.
3. "Apollo Go fifth-generation vehicle cost 480,000 yuan" — Baidu officially gives only "sixth generation down 60%"; 480,000 is a figure reverse-derived by media and then carried over.
4. "Robotaxi cost per mile has fallen to X USD" — from investment-bank and consulting models, not operator financial-report figures.
5. "Drivers account for 70%/80% of the fare" — drifts between 55%–78% depending on the definition (whether taxes, insurance, and incentives are included); Uber's official "net take about 20%" and academia's "actual take exceeding 50%" coexist, and citing either side alone is misleading.

## Related notes

- [[companies/cruise|Cruise: from valuation peak to shutdown]] · [[companies/pony-ai|Pony.ai]] · [[companies/waymo|Waymo]]
- [[market/robotaxi-china|China Robotaxi Landscape]] · [[history/shakeout|Industry shakeout: failures and exits]] · [[history/timeline|Timeline overview]]
