---
title: US and EU Regulation
description: The federal absence and state-level dual track in the United States, type approval and Germany's L4 law in Europe, the United Kingdom's liability experiment, and the first global technical regulation for ADS in 2026 with a three-way comparison of China, the US, and Europe. Information as of 2026-11-11.
tags:
  - Regulation
  - United States
  - EU
order: 3
asof: 2026-11-11
---

<small>Facts follow the Chinese original.</small>

> [!info] This page's definitions
> For admission and pilots on the China side, see [[regulation/levels-and-rules|Levels and Regulation]]; this page covers the US and European systems, and closes with a three-way comparison. For regulatory facts, official texts and releases are authoritative. Information as of 2026-11-11.

## The US federal level: standards exist, but no congressional law

- The United States still **has no comprehensive federal automated driving law**: vehicle safety standards (FMVSS) belong to the federal level, while driving behavior and operating permits belong to the states. The SELF DRIVE Act passed the House in 2017 but did not become law (in February 2026 it was reintroduced under a new bill number and is still in Congress); the AV START Act stalled in the Senate in 2018 and has never passed.
- The FMVSS were written for human-driven vehicles (the steering wheel, pedals, and mirrors are all assumptions in the text): a driverless model without a steering wheel that does not meet the standards can only go through an **exemption** — capped at **2,500 vehicles** per 12 months, for a maximum of 2 years at a time. This is the ceiling on the scale of every purpose-built driverless vehicle in the US, and both Zoox and Cruise Origin ran into it.
- NHTSA does not do pre-market approval: manufacturers **self-certify** compliance, and the federal level regulates after the fact through defect investigations, recalls, and the Standing General Order (crash reporting; see [[regulation/safety-evidence|Safety Evidence]]) — "get on the road first, be held accountable later" is an accurate summary of the US model.

Source: [Congressional Research Service: report on automated vehicles](https://www.everycrsreport.com/changes/2025-07-22_R48605_bda07e072326753c275f5629f700d4c5fb08801f__2026-03-23_R48605_a3b7fe1e492259f4d124eda6a51588c8b188eb5a.html)

## The 2025 turn: a framework, faster processing, and the Zoox exemption

- On **2025-04-24**, Secretary of Transportation Duffy released a new "Automated Vehicle Framework" (safety first, unleash innovation, promote commercial deployment): it revised the SGO reporting requirements, and extended the research/development and demonstration exemption channel that had applied only to imported vehicles to US-built vehicles. In **June 2025**, NHTSA announced it was simplifying the exemption review process and promised faster processing.
- Zoox is the living sample of this channel: in 2022 it self-certified that a model without a steering wheel "complied with the FMVSS"; NHTSA audited and questioned this and pointed to "multiple instances of apparent non-compliance"; in August 2025 it received the first demonstration exemption for a US-built vehicle under the framework (on the condition that it withdraw the "complies with the FMVSS" wording); on **2026-07-31** it formally received a commercial exemption: exemption from parts of 8 FMVSS requirements, capped at 2,500 vehicles per year, valid until July 2028, after which the company began paid service in Las Vegas. From self-certification to exemption, it took four years.
- Separately, according to reports, NHTSA said in March 2026 that it was working on minimum performance standards for ADS "capability" — if enacted, it would be the first time the US moved from "vehicle construction standards" toward "driving capability standards" (the legislative process has begun and is not yet finalized; media report).

Source: [US Department of Transportation: release of the Duffy framework (2025-04-24)](https://www.transportation.gov/briefing-room/trumps-transportation-secretary-sean-p-duffy-unveils-new-automated-vehicle-framework); [US Department of Transportation: Zoox demonstration exemption (2025-08)](https://www.transportation.gov/briefing-room/nhtsa-issues-first-ever-demonstration-exemption-american-built-automated-vehicles)

## The states are the real regulators

- **California's dual track**: the DMV issues testing/deployment permits (managing the vehicles and safety), and the CPUC issues authorization for paid passenger service (managing operations) — both permits are required before charging fares, and the entire permit stories of Cruise and Waymo took place within this structure (see [[companies/cruise|Cruise]]).
- **Arizona**: a 2015 gubernatorial executive order opened the door to testing, making it an early testing haven; after the fatal Tempe crash in 2018, a new executive order the same year tightened it (written compliance confirmation, safety protocols), and Uber's testing was once directly ordered suspended by the governor (see [[history/shakeout|Shakeout]]).
- **Texas**: SB 2205 in 2017 unified the rules at the state level, explicitly prohibited cities and counties from setting separate automated driving regulations, and recognized that an automated driving system can be the "driver" in the legal sense — half of why Austin became a deployment hotspot is the technology, and half is this preemption (state law takes precedence) rule.
- As an aside, California's **disengagement reports**: the DMV requires permit-holding companies to report human takeover data annually, and for years the industry and academia have criticized them for inconsistent definitions across companies and non-comparable numbers — they are more a symbol of transparency than a safety evaluation tool.

## Europe's answer: legislate first

- **UN R157 (ALKS)**: adopted by WP.29 in 2020 and effective in January 2021, the world's first L3 type-approval regulation (the original version was limited to highways, a maximum of 60 km/h, and required a data storage system, DSSAD); a 2022 amendment raised the limit to **130 km/h** and added automated lane changes, effective in January 2023.
- **EU Implementing Regulation 2022/1426**: it establishes a unified ADS type-approval procedure for fully automated vehicles, initially limited to small series (a cap of 1,500 vehicles per model per year), covering three types of scenarios: passenger/freight transport in limited areas, fixed routes between hubs, and automated valet parking; the specific on-road operating conditions still belong to the member states.
- **Germany**: its 2021 legal amendment made it the first country in the world to allow L4 regular operation in approved operating areas; the 2022 AFGBV ordinance refined this into three levels of approval (the Federal Motor Transport Authority approves the vehicle, state-level authorities approve the operating area, and a "technical supervision" function capable of remote intervention must be established). But "having a law" does not mean "fast permits": according to media reports, the first L4 operating permit under the German framework was not issued until August 2026 (a cab-less truck on limited road sections in Hesse).

Source: [EUR-Lex: UN R157 text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:42021X0389); [EUR-Lex: Implementing Regulation (EU) 2022/1426](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R1426)

## The United Kingdom's liability experiment

- The *Automated and Electric Vehicles Act 2018* was a world first: when a vehicle in automated driving mode is involved in a crash, the **insurer** bears liability (if uninsured, the owner does), the victim is compensated first, and the insurer then recovers from the liable party — taking "who to claim from" out of litigation first.
- The *Automated Vehicles Act 2024* (received Royal Assent on 2024-05-20) goes further: it creates the **ASDE (Authorised Self-Driving Entity)** — the organization legally responsible for the continued compliance of an automated driving function; the vehicle's "user-in-charge" is in principle exempt from driving-related liability while automated driving is engaged. Implementation pace: pilot passenger services first in spring 2026, with a government target of fully implementing the authorization and licensing system in the second half of 2027.
- The United Kingdom has the most complete liability legislation among the major economies, yet its commercial deployment timetable is last — completeness of legislation and speed of industry are two different things.

Source: [Overview of the UK Automated Vehicles Act 2024](https://en.wikipedia.org/wiki/Automated_Vehicles_Act_2024)

## 2026: the first global regulation, and the limits of its effect

- On **2026-06-24**, UNECE WP.29 adopted the first **global technical regulation (GTR) for ADS** and a supporting UN Regulation, jointly promoted by China, Europe, the US, the United Kingdom, Japan, and Canada, covering automated driving systems including L4 — this is the first globally unified ADS rule text.
- The core requirements are performance-oriented: the system must present "no unreasonable risk", and its driving performance must be at least no lower than that of a "competent and careful human driver"; manufacturers must build a **safety case** covering the full lifecycle of design, verification (simulation + track + road), and post-deployment monitoring (which connects directly to the evaluation methods discussed in [[regulation/safety-evidence|Safety Evidence]]).
- The asymmetry of effect is the sentence most easily missed when reading this news: for parties to the *1958 Agreement* such as the EU, the United Kingdom, and Japan, the supporting UN Regulation is binding once it takes effect; the US and China are parties to the *1998 Agreement*, and the GTR only requires them to "give serious consideration" to domestic transposition, and they may decline to adopt it with reasons. So it is first and foremost a globalization of the European rule text, not a world law that will constrain US companies tomorrow.

Source: [TomTom Newsroom: UN adopts the first global regulation for fully autonomous vehicles (2026-06)](https://www.tomtom.com/newsroom/news/un-adopts-the-first-global-regulation-allowing-fully-autonomous-vehicles/)

## Three-way comparison

| | United States | EU/United Kingdom | China |
|---|---|---|---|
| Who approves | No federal operating approval: the federal level manages vehicle standards and exemptions, the states issue operating permits | Member-state approval authorities conduct type approval under unified regulations; operating areas belong to each country | MIIT admission + local operating permits (two layers) |
| Admission logic | Self-certification + post-hoc regulation + exemption as a backstop (get on the road first, be held accountable later) | Third-party type approval before market entry (prove first, then get on the road) | Admission pilot system (pilot first, then expand the scope) |
| Liability tendency | Evolves case by case through tort litigation and state law, with no unified federal arrangement | Shifts liability from the driver toward the ASDE/manufacturer and insurance (the United Kingdom is the clearest) | Uses admission conditions and the liability of the operating entity as levers, with detailed rules formed during the pilots |

How to read this: the difference between the three systems is not "how strict" they are, but **who bears the burden of proof for risk first** — the US lets the market run first and has courts and regulators pursue accountability after something goes wrong; Europe requires companies to complete the proof before getting on the road; China uses pilot fences to complete the proof process in stages within a controllable scope. Each company's global playbook (for example, WeRide obtaining permits level by level in the UAE, and Baidu working through a postal partnership in Switzerland) is essentially an adaptation to this logic of the host country.

## Related notes

- [[regulation/levels-and-rules|Automated Driving Levels and Regulation]] · [[regulation/safety-evidence|How to Read Safety Data]] · [[market/consumer-adas|Consumer Smart Driving: Assisted Driving Sold to Car Owners]]
- [[companies/cruise|Cruise: From Valuation Peak to Shutdown]] · [[history/shakeout|Industry Shakeout: Failures and Exits]] · [[history/timeline|Timeline Overview]]
