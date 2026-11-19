---
title: Self-Driving Skill Tree
description: A notes garden on the history and current state of autonomous driving — all pages have completed a first round of source verification. Information as of 2026-11-11.
tags:
  - Overview
paths:
  - kicker: At a glance
    title: The current landscape
    desc: Use one timeline and three status notes to know who is running today, how far they have got, and how they are regulated.
    notes:
      - history/timeline
      - regulation/levels-and-rules
      - companies/waymo
      - market/robotaxi-china
  - kicker: Technology primer
    title: How a driverless car "sees" and "thinks"
    desc: Start from the technology stack map, then move to perception representations, sensor routes, and the compute bill.
    notes:
      - technology/stack
      - technology/perception-evolution
      - technology/routes
      - technology/chips
  - kicker: Business & safety
    title: Does it make money, and is it safe
    desc: The economics, how to read safety data, and the companies that fell in the first wave.
    notes:
      - market/business-model
      - regulation/safety-evidence
      - history/shakeout
      - companies/cruise
errata:
  - wrong: Renamed in October 2016
    right: The Waymo rename was announced on December 13, 2016, not in October 2016 as commonly said.
  - wrong: The latest J3016 revision is from 2021
    right: SAE J3016 already has a September 2026 edition; "the latest revision is from 2021" is outdated.
  - wrong: 1,000 vehicles deployed in Wuhan
    right: Apollo Go's actual deployment in Wuhan in 2024 was just over 400 vehicles (clarified by the Wuhan Municipal Transport Bureau); 1,000 vehicles was Baidu's within-year plan figure.
updates:
  - date: "2026-11-17"
    text: "Added \"Perception Paradigm Evolution: From Object Lists to Occupancy Networks\""
  - date: "2026-11-11"
    text: The whole site completed its first round of source verification, with a unified "information as of" date
---

<small>Facts follow the Chinese original.</small>

<!-- Maintenance note: "21 notes" = the number of md files under content excluding each index.md, automatically calibrated by scripts/count-notes.mjs before publishing; do not edit by hand. Paths, errata, and update records are written in this page's frontmatter and rendered by the SkillTree component. -->
<div class="home-hero">
<div class="home-hero-main">
<div class="home-kicker">40 years · Five lines · <span class="note-count">21 notes</span></div>
<p class="home-title">From laboratory demonstrations,<br>to driverless cars all over the streets</p>
<p class="home-sub">40 years, one main thread: who is driving, who takes responsibility when something goes wrong, and who pays for it. Following the links, this notes garden connects each event to its causes, consequences, and competitors.</p>
<div class="home-actions"><a class="home-btn-primary" href="#paths">Pick a path to start →</a><a class="home-btn-ghost" href="#tree">See the full skill tree</a></div>
<div class="home-meta"><span>Information as of <b class="mono">2026-11-11</b></span><span>Evidence levels:</span><span class="ev ev-ok">Verified</span><span class="ev ev-co">Company claim</span><span class="ev ev-md">Media report</span><span class="ev ev-un">Unverified</span></div>
</div>
<aside class="home-coords" aria-label="Three coordinates for the present">
<div class="home-coords-head"><h2>Three coordinates for the present</h2><span class="mono">As of 2026-11-11</span></div>
<div class="coord"><div class="coord-num">500,000+<small> rides/week</small></div><div class="coord-body"><a class="coord-title" href="./companies/waymo">Waymo fully driverless paid rides per week</a><span>Data from late March 2026, disclosed at the Alphabet Q1 earnings call</span><span class="coord-src">Source: <a href="https://cdn.prod.nntech.io/company-events/reports/4427659d-5ae5-31e6-a271-a19dad46a35e/report.pdf">Alphabet Q1 2026 earnings report</a> (2026-04-29)</span><span><span class="ev ev-co">Company claim</span></span></div></div>
<div class="coord"><div class="coord-num">2<small> models</small></div><div class="coord-body"><a class="coord-title" href="./regulation/levels-and-rules">China's first L3 models granted conditional admission</a><span>The Changan Deepal SL03 and the Arcfox Alpha S6, piloted by designated entities on limited road sections</span><span class="coord-src">Source: <a href="https://www.miit.gov.cn/xwfb/gxdt/sjdt/art/2025/art_f734c7074580470593d4018742997640.html">MIIT admission notice</a> (2025-12-15)</span><span><span class="ev ev-ok">Verified · MIIT</span></span></div></div>
<div class="coord"><div class="coord-num">L2</div><div class="coord-body"><a class="coord-title" href="./companies/tesla">The level assigned to Tesla's consumer FSD in regulatory filings</a><span>The system sold to consumers has always been L2; in December 2025, the California DMV ruled that its marketing was misleading</span><span class="coord-src">Source: <a href="https://www.dmv.ca.gov/portal/news-and-media/tesla-takes-corrective-action-to-avoid-dmv-suspension/">California DMV</a> (ruling 2025-12-16)</span><span><span class="ev ev-ok">Verified · California DMV</span></span></div></div>
</aside>
</div>
