---
title: How to Read Safety Data
description: RAND's mileage power calculation, the correct use of NHTSA reported data, the Swiss Re claims study, and the methods and limits of the Waymo Safety Impact Hub — why safety headline numbers can almost never be compared directly. Information as of 2026-11-11.
tags:
  - Technology
  - Safety
order: 1
asof: 2026-11-11
aliases:
  - technology/safety-evidence
---

<small>Facts follow the Chinese original.</small>

> [!info] This page's definitions
> "Autonomous driving is X% safer than humans" is the type of number most frequently cited in this industry, and with the most confused definitions. This page offers no conclusion; it only takes apart the methods: what the denominator of each number is, who calculated it, and how far its scope extends. After reading this page, the safety numbers cited on the Waymo page will be clearer in their qualifying conditions. Information as of 2026-11-11.

## First, clarify the problem: safety has no single number

- Crash rate is only one dimension of safety evaluation, and the hardest one to measure accurately — truly serious crashes are extremely rare, and rare events statistically require astronomical sample sizes.
- The four data systems below answer four different questions: what statistical power allows one to ask (RAND), what regulators mandatorily collect (NHTSA), what insurance claims show (Swiss Re), and how detailed a company's self-assessment can be (Waymo Safety Impact Hub). Mixing them into a single sentence, "X times safer", is the source of most misreadings.

## RAND's power calculation: you cannot prove a fatality rate just by driving

- The core conclusion of RAND's 2016 report *Driving to Safety* (Kalra & Paddock): to produce statistically clear evidence, autonomous vehicles need to drive "hundreds of millions of miles, sometimes hundreds of billions of miles", and developers "cannot simply drive their way to safety".
- Three threshold numbers (against the 2013 US human benchmark of 1.09 fatalities per 100 million miles):
  - **Drive 275 million miles with zero fatalities**, and only then can one state with 95% confidence that the fatality rate is no higher than humans';
  - To **estimate the fatality rate to within ±20%**, about **8.8 billion miles** are needed;
  - To prove the fatality rate is **20% lower than humans'** (95% confidence, 80% power), about **11 billion miles** are needed.
- The more common the event, the lower the threshold: for injuries, only several million to 160 million miles are needed. So "the injury rate is 82% lower" can be a solid conclusion, while "the fatality rate is already better than humans'" cannot be proven at the mileage scale of any company today — which is why Waymo itself never publishes a fatality-rate comparison. Whenever citing any "zero fatalities in N miles", first compare it against the 275 million line.

Source: [RAND: Driving to Safety (2016)](https://www.rand.org/pubs/research_reports/RR1478.html)

## What regulators collect: NHTSA's Standing General Order (SGO 2021-01)

- Issued in June 2021: it requires manufacturers/operators of L2 assisted driving and L3–L5 automated driving to report crashes when the system was engaged within 30 seconds before the crash; crashes involving hospital transport for injuries, a fatality, a tow-away, airbag deployment, or a vulnerable road user must be reported quickly.
- **NHTSA's own disclaimer is worth reading verbatim**: this data "has not been normalized by vehicle count or miles traveled … and therefore cannot be used to compare safety across manufacturers" — the denominator (mileage) is in the manufacturers' hands and is not reported.
- The counts also have channel bias: companies with connected vehicles can learn of and report more minor scrapes immediately; companies relying on user complaints systematically undercount. A 2026 IIHS study estimated that only about 22% of the crashes reported in 2021–2024 were at the level "an ordinary person would usually report to the police".
- The 2025 rule revision (effective in June) changed the thresholds again: the reporting period for serious crashes was relaxed to 5 days, and a new 1,000 dollar reporting threshold was added for property damage only. **SGO counts before and after June 2025 are not measured with the same ruler**, and drawing a trend line across that break is invalid.
- Correct use: SGO is suitable for "signal discovery" (which kinds of scenarios are producing incidents), not for ranking companies.

Source: [NHTSA press release: crash reporting order (2021)](https://www.nhtsa.gov/press-releases/nhtsa-orders-crash-reporting-vehicles-equipped-advanced-driver-assistance-systems); [NHTSA: notes on the first data release](https://www.nhtsa.gov/press-releases/initial-data-release-advanced-vehicle-technologies)

## The hidden line of insurance claims: the Swiss Re × Waymo study

- The approach: use **liability claim frequency** as a proxy variable for "at-fault crashes", bypassing the underreporting and inconsistent definitions in police data. The human benchmark comes from Swiss Re's own policy data (over 500,000 claims, over 200 billion miles of exposure), calibrated by mileage and region.
- The first edition in 2023 (3.8 million miles, San Francisco + Phoenix): property-damage claim frequency fell by 76%; bodily-injury claims were zero — note that this is "zero parts observed", not "zero risk"; under RAND's power framework, zero events in a small sample only gives an upper bound on the rate.
- The December 2024 expanded edition (25.3 million miles, four cities): **property-damage claims reduced by 88%, bodily-injury claims reduced by 92%**; the absolute numbers were only 9 property-damage cases and 2 bodily-injury cases (against human expectations of 78 and 26 cases for the same mileage), and the 2 bodily-injury claims were still unsettled at publication. Compared with newer human vehicles equipped with ADAS, the reductions were still 86% and 90%.
- Qualifying conditions: this is **collaborative research by interested parties** — the author team includes Waymo employees, the two have been formal partners since 2022, and the data was provided by Waymo; the conclusions apply only to the geofenced urban surface streets where it operates; and a "claim" is not the same as a "crash" — crashes below the claim threshold do not enter the dataset.

Source: [Waymo official blog: Swiss Re expanded study (2024-12-19)](https://waymo.com/blog/2024/12/new-swiss-re-study-waymo); [Research preprint (arXiv:2309.01206)](https://arxiv.org/abs/2309.01206)

## The ceiling of company self-assessment: Waymo Safety Impact Hub

- Launched in September 2024 and published voluntarily: the numerator is the crashes the company reported to NHTSA (which can be reconciled with the public SGO data), and the denominator is the driverless passenger mileage the company itself reported (with no third-party audit); the methodology paper has been peer-reviewed, but each period's numbers are calculated by the company itself.
- The latest period (data as of June 2026, 271.3 million miles, five locations): any-injury reported crashes 0.67 per million miles vs. a human benchmark of 3.77 (**a reduction of 82%**); serious injury or worse reduced by about 95% — but there were only 3 events on the Waymo side, and a percentage on a single-digit sample can be substantially rewritten by one or two additional events, so it can only be cited together with its confidence interval.
- Its method is indeed the most rigorous among company self-assessments: the comparison scope is limited to surface streets (aligned with its operating scenarios), the human benchmark is reweighted by the road composition it actually drove, the "any injury" definition applies a +32% underreporting correction to police data, and all results are given with 95% confidence intervals. Learn from its method, and keep its qualifications.

Source: [Waymo Safety Impact Hub](https://waymo.com/safety/impact/)

## What independent verification looks like: the IIHS 2026 study

- IIHS independently cleaned the 2021–2024 SGO data, kept only crashes at the "would usually be reported to the police" level, and then calculated: over about 50 million driverless miles, Waymo's crash rate was 1.28 per million miles vs. 4.06 for humans (68% lower), and its injury-crash rate was 81% lower.
- The most instructive part is the by-city results: Phoenix −76%, Los Angeles −71%, San Francisco −35%, **Austin +4%** (small sample) — the same system, the same period, with conclusions swinging from a large lead to slightly behind depending on the city. This is not data fabrication; geography, road networks, and sample size can simply do this. It is the empirical proof of "do not compare across cities".
- IIHS also named the problem with the data ecosystem: apart from Waymo, companies do not publish their miles driven, and there is no mandatory reporting at the federal level — for most companies, independent recalculation simply cannot be done.

Source: [IIHS press release (2026)](https://www.iihs.org/news/detail/waymos-driverless-cars-crash-less-often-than-people)

## Why cross-comparisons systematically break: five misalignments

1. **No denominator**: SGO has only crash counts, no mileage; a high count often just means a large fleet and complete reporting.
2. **Underreporting on the human side**: about 60% of property-damage crashes and 32% of injury crashes never enter police records (an NHTSA-commissioned study) — whether or not an underreporting correction is applied can shift the conclusion by a wide margin.
3. **Severity mixed together**: 41% of the crashes Waymo self-reported had a speed change of less than 1 mph (essentially scrapes); treating the "overall crash rate" as the headline averages scrapes together with serious injuries.
4. **Different road composition**: highways naturally have a far lower crash rate per mile than city streets. This is the point on which Tesla's safety reports are criticized most harshly: after researcher Goodall normalized the data, he found that about 93% of Autopilot miles were on highways (only about 30% for manual driving), and after correcting for road type, Tesla's claimed crash-rate advantage shrank from 43% to about 10%. Moreover, what Tesla sells is L2 (the driver bears full responsibility), which is not the same species as an L4 driverless number and cannot be ranked in the same table.
5. **Different liability definitions**: claim frequency approximates the "at-fault rate", while the Hub and IIHS use a "participation rate regardless of fault" — three numbers answer three questions, and mixing their citations is a misreading. In addition, simulated mileage is not road exposure and can never enter the denominator of a crash rate.

Source: [Goodall normalization study (2023, DOI:10.1080/19439962.2023.2178566)](https://doi.org/10.1080/19439962.2023.2178566)

## Another route: compare scenarios and arguments, not mileage

- **UNECE NATM (multi-pillar assessment)**: audit + simulation/virtual testing + test track + real-road testing (plus in-service monitoring), organizing verification by scenario rather than by accumulated mileage; the simulation pillar comes with toolchain credibility requirements — simulation results must first prove their own fidelity before they qualify to enter the argument. Its thinking has been absorbed into the first global technical regulation for ADS adopted in 2026, whose core requirement is stated as: the system must present "no unreasonable risk", and its performance must be at least no lower than that of a "competent and careful human driver".
- **UL 4600 and the safety case**: a goal-oriented standard requiring a company to prove, in a "claim—argument—evidence" structure, that its system is "acceptably safe" within its operating domain, subject to independent review; what it standardizes is the argument itself, and it sets no uniform passing line. Waymo publicly states that its deployment-readiness decisions use the safety case as their framework — crash-rate comparisons are only the retrospective part of its evidence portfolio.

## Reader's checklist: ask five questions the next time you see a safety headline

1. What is the denominator — how many miles, what roads, what city?
2. How is the numerator counted — by police-report definition, claim definition, or reporting definition? Does it include crashes where the company was not at fault?
3. Who calculated it — an independent institution, collaborative research, or a company self-assessment? Were underreporting and composition corrections applied to the human benchmark?
4. How large is the sample — is the absolute number of events behind the percentage in single digits? Was a confidence interval given?
5. Has the scope been extrapolated — has a conclusion about urban surface streets been stated as "autonomous driving is safer than humans"?

## Related notes

- [[companies/waymo|Waymo]] · [[companies/tesla|Tesla]] · [[companies/cruise|Cruise: From Valuation Peak to Shutdown]]
- [[regulation/levels-and-rules|Automated Driving Levels and Regulation]] · [[history/shakeout|Industry Shakeout: Failures and Exits]] · [[history/timeline|Timeline Overview]]
