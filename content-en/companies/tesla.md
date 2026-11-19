---
title: Tesla
description: Tesla's Autopilot/FSD evolution, vision-only route, the current state of its Robotaxi pilot, and regulatory scrutiny — filing language and marketing language are written separately. Information as of 2026-11-19.
tags:
  - Companies
  - Tesla
order: 2
asof: 2026-11-19
---

<small>Facts follow the Chinese original.</small>

> [!warning] Discipline of this page
> Write the "regulatory characterisation of delivered features" and "marketing language" separately. Where Tesla's characterisation of its own features is cited, its regulatory filings and official support pages are authoritative. Information as of 2026-11-19.

## One main line: the names keep getting fuller, the characterisation has always been L2

| Time | Event | Characterisation |
|---|---|---|
| 2014-10 | HW1 hardware suite released (Mobileye EyeQ3, front radar, front-facing camera, 12 ultrasonic sensors), fitted to vehicles produced from September 2014, software not activated | — |
| 2015-10-14 | Software v7.0 pushed, Autopilot became usable; Tesla already stated at the time that the driver remained fully responsible | L2 |
| 2016-05-07 | Joshua Brown fatal crash: a Model S on Autopilot at 74 mph crashed through a crossing white semi-trailer. The NTSB found the probable causes included the driver's overreliance on automation, and that the system design "permitted prolonged disengagement from the driving task" was a contributing factor | — |
| 2016-07 | Split with Mobileye (disagreement over deployment approach) | — |
| 2016-10-19 | HW2 released (NVIDIA platform); Tesla claimed all new cars had the "hardware needed for full self-driving", and on the same day began selling the "Full Self-Driving Capability" option — this wording later became a focus of regulation and litigation | Promotional account |
| 2020-10-20 | FSD Beta first released to a small group of users (version 2020.40.8.10), achieving automatic steering on city streets for the first time; in 2022-11 it was expanded to all purchasers in North America | L2 (as stated by Tesla itself in recall filings) |
| 2021-05 / 2022-10 | Shift to Tesla Vision: North American Model 3/Y first removed the mmWave radar, then the whole line removed ultrasonic sensors — cameras only + neural networks | See [[technology/routes\|The Route Debate]] |
| 2024-03 | "FSD Beta" renamed **FSD (Supervised)**; "Supervised" entered the official naming and contract text for the first time | L2 |

Sources: [Consumer Reports timeline (citing Tesla official blog posts)](https://www.consumerreports.org/cars/autonomous-driving/timeline-of-tesla-self-driving-aspirations-a9686689375/); [NTSB report coverage (Reuters, 2017-09)](https://www.ehstoday.com/safety/article/21919260/ntsb-fatal-crash-involving-tesla-autopilot-resulted-from-driver-errors-overreliance-on-automation); [Electrek (2022-10-04)](https://electrek.co/2022/10/04/tesla-moving-away-ultrasonic-sensors-in-favor-tesla-vision/)

## What Tesla itself says in filings (and the gap with marketing)

- **Letter to the California DMV (2020-12, Deputy General Counsel)**: "The final release version of City Streets will continue to be an SAE Level 2 advanced driver assistance feature" and "does not constitute autonomous driving under the DMV's definition". Source: [The Drive (2021-03-09)](https://www.thedrive.com/tech/39647/tesla-admits-current-full-self-driving-beta-will-always-be-a-level-2-system-emails)
- **DMV meeting memo (2021-03)**: Tesla's Autopilot software director told the DMV that "Elon's tweets about achieving L5 by year-end do not match engineering reality" and that "Tesla is currently at Level 2". Source: [TechCrunch (2021-05-07)](https://techcrunch.com/2021/05/07/tesla-refutes-elon-musks-timeline-on-full-self-driving/)
- **Current wording on the official support page**: Autopilot/FSD features "require active driver supervision and do not make the vehicle autonomous". Source: [Tesla official support page](https://www.tesla.com/en_gb/support/autopilot)
- Media report: Musk acknowledged on the April 2026 earnings call that HW3 vehicles (produced 2016–2023) are architecturally unable to achieve unsupervised FSD; unsupervised FSD for consumer cars would come at the earliest in 2026 Q4 (this was a statement on the call, not a delivery commitment).

## Robotaxi: the pilot is real; how "driverless" it is depends on whether someone is sitting in the seat

- **2024-10-10 "We, Robot" event**: it released the two-seat Cybercab (no steering wheel, no pedals; Musk said the price would be < USD 30,000 and mass production would be "in 2026 or before 2027") and the 20-seat Robovan; Tesla's filing with the SEC confirmed both vehicles were designed for autonomous driving from scratch. Source: [whatledto event roundup (citing the SEC filing)](https://whatledto.com/events/tesla-cybercab-robotaxi)

![Inside the Cybercab](https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Inside_the_Tesla_Cybercab.jpg/1280px-Inside_the_Tesla_Cybercab.jpg)
*The Cybercab cabin (photographed on the night of the 2024 event): no steering wheel, no pedals, only two seats and a central screen — which is exactly why it must go through the federal exemption/audit process. Image: Steve Jurvetson, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Inside_the_Tesla_Cybercab.jpg).*
- **Austin pilot launched on 2025-06-22**: invitation-only, approx. 10–20 Model Y vehicles, a limited area in South Austin, operating 6:00–24:00, a flat price of USD 4.20/ride; **the driver's seat was empty, but a Tesla safety monitor sat in the front passenger seat** (able to perform an emergency stop, with no steering wheel/pedals) — therefore it was not unsupervised operation. On the first day of launch, videos appeared of vehicles briefly driving the wrong way and the like, and NHTSA contacted Tesla the next day to inquire. Source: [TechCrunch (2025-06-22)](https://techcrunch.com/2025/06/22/tesla-launches-robotaxi-rides-in-austin-with-big-promises-and-unanswered-questions/)
- **Bay Area (2025-07-31)**: what launched was a ride-hailing service holding a CPUC charter-party carrier permit (TCP), with **a safety driver in the driver's seat of every vehicle**; on the California DMV lists, Tesla appears only on the "testing with a safety driver" list, not on the driverless testing or deployment lists. Source: [dockduty check (2026-10-27)](https://dockduty.com/blog/tesla-robotaxi-san-francisco.html)
- **Expansion (2026, summarised from trackers and Tesla pages)**: from 2026-01-22, Austin began removing safety monitors on a limited basis; during 2026, Dallas, Houston, Miami, Orlando, Tampa and others successively began driverless operation; on 2026-09-03 the Cybercab joined the paid fleet in Austin; as of early November 2026, approx. 8 metropolitan areas with driverless operation + the Bay Area service with drivers. Source: [Wikipedia: Tesla Robotaxi](https://en.wikipedia.org/wiki/Tesla_Robotaxi); [teslanewswire tracker (2026-11-09)](https://teslanewswire.com/robotaxi-tracker)
- **Cybercab mass-production status 【Company claim】**: Tesla's Q2 2026 shareholder filing says it has already gone into production at the Texas factory; the Q3 call on 2026-10-21 said the target is to start small-batch customer deliveries before the end of 2026. The Q3 shareholder deck also listed: installed annual capacity for the Cybercab in Texas of more than 125,000 vehicles, with status Production.
- **Tesla's first Robotaxi safety report (2026-10-21, company claim)**: it said that from 2026-01-22 to 10-18, mileage without an in-car monitor was approx. 3.11 million miles, with zero personal injuries; but its downloadable list for the same period listed 32 collisions reported to NHTSA (30 property-damage only), and that figure is not consistent with the account in the Q3 shareholder deck — the deck's original text said "as of quarter-end (2026-09-30), cumulative unsupervised Robotaxi mileage was nearly 2 million miles, up to 8 times quarter-on-quarter", and both the time window and the definition of "unsupervised" differ from the safety report. When citing, include both. Sources: [teslant coverage (2026-10)](https://teslant.com/en/news/tesla-robotaxi-safety-report-3-1-million-miles-32-crashes-las-vegas-phoenix-next-2026-10); [Tesla Q3 2026 shareholder deck (2026-10-21)](https://assets-ir.tesla.com/tesla-contents/IR/TSLA-Q3-2026-Update.pdf)
- **FSD operating figures (Q3 2026 deck)**: 1.74 million active FSD subscriptions (year-on-year +67%), an FSD take rate of more than 75% on newly delivered vehicles in North America; more than 100,000 users in nine EU countries, with cumulative driving of more than 160 million kilometres. For cumulative FSD (Supervised) mileage, the deck gave only a chart (the last bar approaching the order of 16 billion miles), with no precise figure, so when citing it can only be given as a chart reading.

## Regulatory scrutiny (as of 2026-11)

- **The major NHTSA Autopilot investigation has closed**: opened in 2021 → upgraded to an engineering analysis in 2022 → Tesla in 2023-12 filed recall 23V-838 (2.03 million vehicles, an OTA strengthening driver monitoring) → **closed on 2024-04-25**; NHTSA's conclusion was that its "weak driver engagement system did not match its permissive operating capabilities"; at the same time it newly opened RQ24-009, a review of the effectiveness of the recall remedy (still open as of autumn 2026). Source: [NHTSA ODI closure document (2024-04-25)](https://business.cch.com/plsd/EA22002closed.pdf)
- **The FSD low-visibility investigation is escalating**: opened in 2024-10 (approx. 2.4 million vehicles) → **upgraded in 2026-03 to engineering analysis EA26-002**, with the scope expanded to approx. 3.2 million vehicles; the focus is whether the vision-only system can recognise a drop in visibility and warn in time under glare/fog/dust. An engineering analysis is a required step before demanding a recall; there has been no recall yet.
- **FSD traffic-violation investigation**: opened in 2025-10, covering approx. 2.88 million vehicles, targeting 50+ reports of running red lights and driving the wrong way; still in preliminary evaluation.
- **The California DMV false-advertising case has been decided**: on **2025-12-16** the DMV found that Tesla's use of "Autopilot" and "Full Self-Driving Capability" in marketing was misleading and violated state law; the penalty was mitigated to a licence suspension stayed from execution + a 60-day rectification period; on **2026-02-17** the DMV announced that Tesla had stopped using the word "Autopilot" in its California marketing and was spared the licence suspension. Tesla has separately sued the DMV seeking to overturn the finding (not yet decided). Source: [California DMV official press release (2026-02-17)](https://www.dmv.ca.gov/portal/news-and-media/tesla-takes-corrective-action-to-avoid-dmv-suspension/)
- **DOJ/SEC status**: Tesla's own SEC filing account is authoritative — the company says it continuously receives information requests and subpoenas from agencies including NHTSA, NTSB, SEC and DOJ, and says that "to the company's knowledge, no government agency has found wrongdoing in any ongoing investigation". The follow-up progress of the DOJ criminal investigation and whether the SEC has a separate independent investigation have not been confirmed through public channels, and this site marks them as unverified.

## Related notes

- [[regulation/levels-and-rules|Autonomous Driving Levels and Regulation]] · [[regulation/safety-evidence|How to Read Safety Data]]
- [[companies/waymo|Waymo]] · [[market/business-model|Robotaxi Costs and Business Model]] · [[history/timeline|Timeline Overview]]
