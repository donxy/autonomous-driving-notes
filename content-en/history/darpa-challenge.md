---
title: The DARPA Challenges (2004–2007)
description: The format, results, and legacy of the three DARPA Challenges — the public starting point of modern autonomous driving. Information as of 2026-11-11.
tags:
  - History
  - DARPA
order: 2
asof: 2026-11-11
---

<small>Facts follow the Chinese original.</small>

> [!info] Scope of this page
> Key facts are each given a source; where figures differ, this is marked as a "difference in accounts" and not stated as fixed. Information as of 2026-11-11.

## Why start here

With three public competitions, DARPA (the U.S. Defense Advanced Research Projects Agency) turned "can a driverless car complete a course on its own in real terrain" from a laboratory demonstration into an engineering problem with clear acceptance criteria. The people and teams it filtered out — Thrun's team at Stanford, and Whittaker/Urmson's team at CMU — later directly formed the backbone of the Google driverless project (see [[history/google-to-waymo|From the Google Project to Waymo]]).

## 2004: The first Grand Challenge — no finisher

- Time and place: March 13, 2004, Barstow, California → Primm, Nevada, across the Mojave Desert.
- Result: **no finisher**, and the $1,000,000 prize went unclaimed. The farthest was CMU Red Team's Sandstorm, at about 7.4 miles.
- The total route length differs across sources (142 / 143 / 150 miles — three accounts coexist); this page records only "about 230 kilometers" and notes the difference in accounts.
- Sources: [CMU RI technical report (Urmson 2004)](https://www.ri.cmu.edu/pub_files/pub4/urmson_christopher_2004_1/urmson_christopher_2004_1.pdf); [Wikipedia: DARPA Grand Challenge (2004)](https://en.wikipedia.org/wiki/DARPA_Grand_Challenge_(2004))

## 2005: The second edition — Stanley finishes and wins

- Time: October 8, 2005, course about 131.6 miles.
- Winner: Stanford's **Stanley** (a modified Volkswagen Touareg, led by Sebastian Thrun), prize $2,000,000; 5 of the 23 participating teams finished.
- The winning time differs by 10 seconds between two sources (the team paper and New Atlas record 6:53:58, Wikipedia records 6:53:08); this page uses 6:53:58 and notes the difference.
- Sources: [New Atlas (2005-10-10)](https://newatlas.com/go/4720/); [Smithsonian Magazine (2024)](https://www.smithsonianmag.com/smithsonian-institution/how-a-blue-suv-named-stanley-revolutionized-driverless-car-technology-180984882/); [Stanford Magazine](https://stanfordmag.org/contents/drivers-not-wanted)

![The Stanley vehicle itself](https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Stanford_Volkswagon_Touareg_Robotic_Control_Vehicle_%2886757864%29.jpg/1280px-Stanford_Volkswagon_Touareg_Robotic_Control_Vehicle_%2886757864%29.jpg)
*The 2005 winning vehicle, Stanley itself (photo from its display at the 2006 North American International Auto Show, not the race site). The row of lidars and cameras on the roof was the perception configuration of the winning solution that year. Photo: Global Reactions, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Stanford_Volkswagon_Touareg_Robotic_Control_Vehicle_(86757864).jpg).*

## 2007: Urban Challenge — into an urban environment

- Time and place: November 3, 2007, Victorville, California (the former George Air Force Base), an urban-environment course of about 55 miles, requiring handling of traffic rules, interaction with other vehicles, and intersection passage.
- Winner: CMU Tartan Racing's **Boss** (a Chevrolet Tahoe, led by Red Whittaker, with Chris Urmson as technical director), prize $2,000,000, time 4:10:20, about 20 minutes ahead of second place.
- Runner-up Stanford's Junior ($1,000,000), third place Virginia Tech's Odin ($500,000).
- Sources: [CMU Tartan Racing 10th-anniversary retrospective (2017)](https://www.ri.cmu.edu/tartan-racing-team-celebrates-10th-anniversary-of-victory/); [MIT Technology Review (2007-11-05)](https://www.technologyreview.com/2007/11/05/223163/champion-robot-car-declared/amp/)

## Earlier origins (before the Challenges)

- **CMU Navlab**: the project began in 1986. In July 1995, "No Hands Across America": Navlab 5 drove from Pittsburgh to San Diego, about 2,850 miles, with the RALPH system controlling the steering wheel for 98.2% of the time — but the throttle and brakes were still controlled by a human, so strictly speaking it was "automatic steering", not full automation. Source: [CMU (2015 retrospective)](https://www.cs.cmu.edu/news/2015/look-ma-no-hands-cmu-vehicle-steered-itself-across-country-20-years-ago)
- **Ernst Dickmanns** (University of the Bundeswehr Munich, Germany): VaMoRs carried out autonomous driving experiments from 1986; in October 1994, in the closing demonstration of the PROMETHEUS project in Paris, VaMP and VITA-2 drove 1,000+ kilometers in normal three-lane traffic, at up to 130 km/h. Source: [IEEE oral history: Ernst Dickmanns](https://ethw.org/Oral-History:Ernst_Dickmanns). Note: the details of his 1995 Munich–Odense round trip (about 1,758 kilometers) appear only in weaker secondary sources, and this page does not expand on them.

## Legacy

- **Talent lineage**: core members of the 2005 winning team and the 2007 winning team later entered the Google project, Uber ATG, and other institutions respectively — the roster of the first generation of backbone talent in the autonomous driving industry is basically the entry lists of these three competitions.
- **Methodological legacy**: a public format + unified acceptance turned "building it" into comparable engineering results; the industry's later benchmark culture came from this.
- **Technical legacy**: multisensor fusion (lidar + camera + radar + GPS/IMU) was validated on desert and urban courses as the feasible route at the time, and this route was later inherited by Waymo, see [[technology/routes|The Route Debate: Lidar vs. Vision-Only]].

## Related notes

- [[history/google-to-waymo|From the Google Project to Waymo]]
- [[history/timeline|Timeline Overview]]
