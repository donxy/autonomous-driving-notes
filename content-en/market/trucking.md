---
title: "Autonomous Trucks: The Long-Haul Freight Line"
description: Why trucks were once thought easier to make driverless than passenger cars, the two playbooks of Aurora and Kodiak, how TuSimple and Embark died, and why China first made ports, mining areas, and platooning work. Information as of 2026-11-11.
tags:
  - Technology
  - Trucks
order: 4
asof: 2026-11-11
aliases:
  - technology/trucking
---

<small>Facts follow the Chinese original.</small>

> [!info] Scope of this page
> The trucking line's narrative was once very compelling: simpler scenarios, clearer accounts. Then it delivered its first commercial driverless operation a full cycle later than robotaxis. This page follows "why it was once favoured — the US main line — the list of the dead — the China line — the common footnote on both sides"; mileage and cost figures are labelled by definition item by item. Information as of 2026-11-11.

## Why trucks were once thought to be easier

- **Scenario logic**: Long-haul trucks mainly run on highways — a single operating domain, with no pedestrians or traffic lights; the mainstream mode is "hub-to-hub": short hauls at both ends are completed by human drivers, and the several hundred kilometres of highway in the middle are handed to the system. Freight does not get carsick or complain, and there is no passenger-experience problem.
- **Account logic**: The American Trucking Associations (ATA) estimated a driver shortage of nearly 78,000 in 2022; industry statistics (ATRI) show driver wages and benefits account for about **44%** of carriers' marginal costs — "removing the driver" is the largest single numerical basis for the whole track. Two footnotes: the ATA is an industry association, and its "shortage" definition has been questioned by Bureau of Labor Statistics-system research as essentially a retention and pay problem; 44% is also a carrier-cost definition, not an industry-wide average.
- Then reality delivered a correction: highway scenarios are indeed simple, but **the long tail of the safety argument, the absence of mass-production-grade redundant chassis, and the freight cycle itself** pushed everyone's timetable back by about ten years (see the end of this article).

## US main line 1: Aurora — the first to charge for driverless operation on public roads

- Founded in 2017 by three veterans: Chris Urmson (former head of Google's self-driving project), Sterling Anderson (former head of Tesla Autopilot), and Drew Bagnell (CMU/Uber ATG). It listed via SPAC in November 2021 (pro forma market capitalisation about 13 billion USD — note this is a market-capitalisation definition; equity valuation about 11 billion); it was also the company that acquired Uber ATG in 2020 (see [[history/shakeout|Shakeout]]).
- Its moat is OEM binding: PACCAR (Peterbilt/Kenworth) and Volvo together account for about half of US Class 8 heavy-truck sales, and both were PIPE investors at its listing. In May 2024, Volvo released the first "production-ready" driverless heavy truck, the VNL Autonomous, equipped with the Aurora Driver and a fully redundant chassis.
- **From 2025-04-27**, Aurora began regular driverless commercial transport on the Dallas—Houston I-45 corridor (announced on May 1, with first customers Uber Freight and Hirschbach), calling itself "the first company to commercially operate driverless trucks on US public roads". The triple qualifier must be kept in full: **public roads, paid operation, Class 8 heavy trucks** — and at launch an observer still sat in the back seat. The pace thereafter: night operation opened in July 2025, the Fort Worth—El Paso line opened in October, and by early 2026 it had built 10 "Sun Belt" routes.
- Financial reality (2026 Q3 shareholder letter): revenue in the quarter was 3 million USD, net loss 234 million USD, cash at quarter-end exceeded 1 billion USD; cumulative driverless commercial mileage broke 500,000 miles; full-year revenue guidance was cut to about 9 million USD due to late mass-production ramp-up, and the original target of 200 driverless trucks by the end of 2026 was postponed to February 2027. Between technology working and revenue scaling, there is still the whole segment of mass-production ramp-up.

Sources: [Aurora 2026 Q3 shareholder letter (SEC filing)](https://ir.aurora.tech/sec-filings/all-sec-filings/content/0001828108-26-000092/aurora26q3shareholderlet.htm); [Volvo VNL Autonomous launch (2024-05)](https://www.volvogroup.com/en/news-and-media/news/2024/may/the-volvo-vnl-autonomous-proving-the-way-forward.html)

## US main line 2: Kodiak — first selling trucks to customers in the oilfields

- Founded in **2018** (often miswritten as 2019), founder Don Burnette was an early technical lead on Google's self-driving project. Its playbook is the opposite of Aurora's: instead of first building a self-operated fleet, it **sells driverless trucks directly to customers for their own operation**.
- It landed in Texas's Permian oilfields: from December 2024, energy company Atlas Energy operated Kodiak driverless trucks in a customer-owned mode, hauling frac sand on a 21-mile off-road segment; in January 2025 it announced completion of 100 truck trips, with an initial order of 100 vehicles; as of June 2026 it had 35 vehicles in self-owned operation, charging per mile/per vehicle, with recurring revenue already.
- In September 2025 it listed on Nasdaq via a SPAC merger (ticker KDK, raising more than 275 million USD). Another revenue line is defence: in 2022 it obtained a Department of Defense DIU contract of about 50 million USD to develop driverless systems for Army robotic combat vehicles, and in February 2026 it obtained a further Marine Corps contract. The company says it is advancing toward a first long-haul driverless launch on public highways before the end of 2026.

Source: [Kodiak listing report (2025-09)](https://ts2.tech/en/soros-and-ark-bet-2-5-billion-on-driverless-trucks-inside-kodiak-robotics-bold-wall-street-debut/)

## The dead and the pivoted (truck edition)

- **TuSimple**: Founded in 2015, listed on Nasdaq in April 2021 (valuation about 8.5 billion USD), and in December of the same year completed the first single driverless truck run on US public roads (Tucson—Phoenix, of a demonstration nature) — so "Aurora is the first driverless truck" must carry the qualifier "commercial operation". It closed its US business in December 2023, voluntarily delisted in early 2024, and at year-end renamed itself CreateAI and pivoted to AI games and animation, triggering shareholder litigation. Its China business line survived separately after delisting, but it is no longer the original listed company.
- **Embark**: Listed via SPAC in 2021 at a valuation of 5.2 billion USD, with zero revenue; in March 2023 it announced shutdown, and in May it was acquired by Applied Intuition for 71 million USD.
- **Waymo Via**: Even Waymo sharply scaled back its trucking business in July 2023, pulling resources back to robotaxis and retaining only its redundant-chassis cooperation with Daimler.
- Earlier still: teleoperation-based Starsky Robotics shut down in 2020 after running out of funding; Ike was acquired by Nuro in 2020 and pivoted to delivery robots.
- **OEM in-house development** is still in the game: Daimler acquired a majority stake in Torc Robotics in 2019 (now about 91%), following a hub-to-hub route on the Freightliner platform, with a company-claim target of commercially launching L4 trucks in the US in 2027 (currently still with test drivers); Volvo's VAS follows an open-platform route — the same VNL Autonomous chassis carries both Aurora's system and Waabi's system.

Source: [FreightWaves: 2023 autonomous trucking shakeout review](https://www.freightwaves.com/news/autonomous-trucking-2023-leaders-emerge-amid-exits-and-entries)

## China line: ports, mining areas, and platooning worked first

The commercialisation order for Chinese trucks is exactly the opposite of passenger cars — **not trunk lines first, but closed scenarios making money first**:

- **Ports**: Mainline Technology has cooperated with Tianjin Port since 2018; in January 2020, 25 driverless container trucks were commercially delivered and achieved "safety driver removal", and thereafter another 60 were delivered to Tianjin Port's zero-carbon terminal, with cumulative deliveries exceeding 100.
- **Mining areas**: Eacon's Zhundong coal mine in Xinjiang has 203 driverless mining trucks in regular operation at a single mine; in July 2026 it listed on the Hong Kong Stock Exchange (by prospectus account: in 2025 its domestic mining-area driverless market share was 55.5%, active driverless mining trucks exceeded 2,500, and revenue broke 1 billion yuan) — this is a rare sample in Chinese autonomous driving where revenue ran ahead of listing. Tage Zhixing has achieved 24-hour regular safety-driver-free operation in mines such as Baotou Steel.
- **Trunk lines**: Inceptio Technology (founded in 2018 by G7, GLP, etc.) follows an L3 mass-production route — at the end of 2021 it deployed front-installed mass-production heavy trucks with Dongfeng and Sinotruk, with a driver in the vehicle and the system providing highway navigation assistance; by company account, cumulative assisted driving mileage broke 1 billion km in September 2026. PlusAI formed a mass-production joint venture with FAW Jiefang and delivered navigation heavy trucks to SF Express and others; its overseas entity attempted a SPAC three times, none successfully. DeepWay (incubated by Baidu and Lionbridge) first sold new-energy heavy trucks to accumulate data, with cumulative deliveries of about 6,400 vehicles, and has filed for a Hong Kong listing — its revenue mainstay is vehicle sales, not autonomous driving services.
- **Platooning, a China-specific solution**: Kargobot (spun out of DiDi's freight team) uses "hybrid intelligent platooning" — 1 manned lead vehicle leading up to 5 L4 driverless following vehicles, focused on short-haul coal transport in Inner Mongolia; the Ordos municipal government disclosed that more than 400 vehicles have been deployed and cumulative operation has exceeded 40 million km; in April 2026 it obtained Inner Mongolia's first **cross-league/city remote commercial pilot** qualification for driverless heavy trucks, jointly issued by three departments of Inner Mongolia. By company account, platooning reduced transport cost from 42 yuan/ton to 29 yuan/ton.

Sources: [Jiemian News: Kargobot platooning model](https://www.jiemian.com/article/15136933.html); [Pedaily: Eacon listing (2026)](https://news.pedaily.cn/20260626/132886.shtml)

## The common footnote on both sides

- **Regulatory status (China)**: At the national level there is still no system allowing heavy trucks to conduct "safety-driver-free" commercial operation on open highways — the 2023 four-department access pilot included trucks, but limited them to designated areas and road-use pilots; the first batch of conditional L3 access in December 2025 comprised only two passenger cars. There are only three legal forms on trunk lines: mass-production assisted driving with a driver in the vehicle, platooning demonstrations on limited segments, and Inner Mongolia-style platooning commercial pilots. The mandatory national standard GB 44721—2026 (*Safety Requirements for Automated Driving Systems*) was released in July 2026 and takes effect in July 2027, covering trucks — it is a safety baseline, not an operating release.
- **How to read the cost account**: McKinsey calculates that the TCO per mile of fully driverless long-haul heavy trucks can fall by about 42%, and Bernstein calculates a net saving of about 28% — all are forward-looking models under the "completely removing the driver" scenario. The cost reductions actually realised in China at this stage are of only two kinds: platooning saving labour (local pilot account) and assisted driving saving fuel by 3%–7% and turning double-driving into single-driving (customer account). Reading "L3 mass-production mileage" as "driverless mileage", reading a platooning pilot as "nationwide release", and reading TCO calculations as "verified" are the three most common consecutive misreadings on this line.
- **Why it was ten years late**: Industry expectations in 2016–2019 generally pointed to driverlessness in 2020–2021; even Aurora's 2021 listing documents said its first product would launch at the end of 2023, when it actually arrived only in April 2025. The composition of the delay: the long-tail cost of the safety argument was higher than expected, OEM mass-production-grade redundant chassis were long unavailable, and the 2023 freight downturn combined with a capital retreat cleared out players in swathes. Trucks did not lose to the technology narrative; they lost to the timetable of mass production and the cycle — the same lesson shared with the robotaxi chapters (see [[history/shakeout|Shakeout]] and [[market/business-model|Business model]]).

## Related notes

- [[history/shakeout|Industry shakeout: failures and exits]] · [[market/business-model|The Cost and Business Model of Robotaxis]] · [[market/consumer-adas|Consumer smart driving: assisted driving sold to car owners]]
- [[companies/pony-ai|Pony.ai]] · [[regulation/us-eu-rules|US and EU regulation]] · [[history/timeline|Timeline overview]]
