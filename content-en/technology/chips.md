---
title: "Chips and compute: the business behind TOPS"
description: What unit NVIDIA Thor's "2000" actually is, the outcome of Tesla's in-house chips and Dojo, the order-of-magnitude gap between Horizon Robotics and Black Sesame, and which kind of chip export controls actually block. Information as of 2026-11-11.
tags:
  - technology
  - chips
order: 4
asof: 2026-11-11
---

<small>Facts follow the Chinese original.</small>

> [!info] Conventions on this page
> Smart-driving chips are the part of the whole industry where figures are most easily inflated: for the same "compute," some count it in FP8 floating point, some in INT8 sparse, and some add up two chips together. Before comparing specifications, first align three things — **precision, dense or sparse, single chip or system total**. All TOPS on this page are labeled with their basis, and automakers' in-house "equivalent / effective compute" is uniformly labeled as company claims. Information as of 2026-11-11.

## The NVIDIA lineage: the numbers game starts here

- **DRIVE PX (2015)**: dual Tegra X1, about 2.3 TFLOPS — there was no TOPS marketing yet at that time. **Xavier (2018)** was about 30 TOPS for a single chip. **Orin (mass production in 2022)** was **254 TOPS (INT8)** for a single chip and became the de facto standard for this generation of high-end smart driving; note that the Jetson version of Orin with the same name is labeled 275 TOPS and marked as "including sparsity," with dense only about half — even NVIDIA itself has two bases.
- **Thor's "2000"**: the headline figure in the September 2022 launch release was **2,000 TFLOPS, and the unit is FP8 floating point, not TOPS** — Chinese reports commonly transcribed it as "2000 TOPS," which is the source of the misreporting. The official specifications of the mass-production Thor-X: up to **1,000 TOPS (INT8) / 2,000 TFLOPS (FP4)**. Mass production was also later than originally planned: the first model carrying it, the Lynk & Co 900, was delivered in May 2025, and the Zeekr 9X was launched in September 2025 (the high trim, with dual Thor-U, totals 1,400 TOPS).
- Remember NVIDIA's quoted "three-piece set": **changing the precision** (FP32→FP16→FP8→FP4, the figure roughly doubles with each step down), **counting sparsity** (structured sparsity multiplies by another 2), and **counting the platform, not a single chip** (adding two chips together). A comparison across generations or vendors is meaningless without first aligning these three items.
- In January 2025, Toyota announced that its next-generation models would adopt the NVIDIA Orin platform — and, in passing, a correction of a misattribution: Qualcomm's benchmark smart-driving customer in 2025 is **BMW** (jointly developing Ride Pilot, first carried on the new-generation iX3); its cooperation with Toyota is on the cockpit, not smart driving. Mobileye's EyeQ6 High is 176 TOPS, and the mass-production timing of its L3-level Chauffeur has slipped to 2027/2028.

Sources: [NVIDIA Thor launch release (2022-09)](https://nvidianews.nvidia.com/news/nvidia-paves-way-for-tomorrow-s-cars-with-nvidia-drive-automotive-computers-6622505); [Toyota adopts NVIDIA platform (2025-01)](https://investor.nvidia.com/news/press-release-details/2025/Toyota-Aurora-and-Continental-Join-Growing-List-of-NVIDIA-Partners-Rolling-Out-Next-Generation-Highly-Automated-and-Autonomous-Vehicles-Fleets/)

## Tesla: in-house in-vehicle chips, and the abandoned in-house training effort

- **In-vehicle**: HW3 (2019) in-house dual chips totaling 144 TOPS; for AI4 / HW4 (in vehicles from 2023) Tesla **has never published an official TOPS**, and figures circulating online are all teardown estimates. AI5's "2,000–2,500 TOPS" is so far only Musk's claim, with no third-party verification, and mass production has slipped to 2027. The multi-year supply contract of **16.5 billion US dollars** disclosed by Samsung in July 2025 (through 2033) is for the next generation after that, **AI6**, not AI5 — the two are often conflated.
- **The turn on the training side**: in August 2025, according to Bloomberg reporting, Tesla disbanded the team behind its in-house training supercomputer Dojo, and Musk subsequently confirmed it and called it an "evolutionary dead end." The alternative is to buy cards: the Cortex cluster at Giga Texas in Texas trains FSD with NVIDIA H100/H200, at about 50,000 cards at the end of 2024 and continuing to expand thereafter. The industry's most aggressive vertical in-house developer ultimately returned, on the training side, to NVIDIA's shelf — that news carries more information than any single new chip.
- For comparison: Waymo's training relies on Google's TPU clusters (a route unique to the Alphabet family), and its in-vehicle Generation 6 system uses custom silicon supplied by multiple partners and never publishes a whole-vehicle TOPS.

Source: [TechCrunch: Dojo timeline (2025)](https://techcrunch.com/2025/09/02/teslas-dojo-a-timeline/)

## China: Horizon Robotics far ahead, automakers' in-house chips following

- **Horizon Robotics (09660.HK)**: the Journey 6 series (released in 2024, 7nm), in six versions covering 10–560 TOPS, with the flagship 6P at 560 TOPS. On an annual-report basis: 2.9 million sets delivered in 2024, a cumulative total breaking through 7.7 million sets, and revenue of 2.384 billion yuan. Its urban solution HSD had its mass-production debut in November 2025 with models such as the Exeed ET5. Note on basis: the company's promoted "cumulative 10 million chips" and the annual report's "7.7 million sets" are two counting systems, chips vs. sets, and cannot be spliced together.
- **Black Sesame Technologies (02533.HK)**: the Huashan A1000 is 58 TOPS and the A1000 Pro is 106+ TOPS (2021; the prospectus calls it China's first 100+ TOPS automotive-grade SoC); revenue in 2024 was 474 million yuan — a gap of about 5 times versus Horizon Robotics, but Horizon Robotics' revenue includes a large amount of licensing service income and cannot be read directly as a gap in chip market share. The new-generation A2000 family was launched at the end of 2024, and the company gives only a family statement of "starting at 250+ TOPS," with no flagship single-point value; media have reported that its mass-production progress has been delayed by post-tape-out review, and as of 2026-11 it has not yet gone into vehicles at scale.
- **Market landscape (Gasgoo basis)**: for Chinese smart-driving domain-controller chip installations in 2024, NVIDIA Orin-X ranked first with 2.1 million sets; excluding Tesla's self-use chips, Orin accounted for about 53%. Huawei Ascend 610 at about 500,000 sets and Horizon Robotics Journey 5 at about 270,000 sets followed behind (share figures change with the denominator, so the basis must be stated when citing them).
- **Three automakers with in-house chips**: NIO Shenji NX9031 (5nm, in mass production with the ET9 in April 2025; NIO does not publish TOPS and gives only the company claim of "one chip equivalent to four Orin-X"; Li Bin said in 2026 that cumulative shipments had exceeded 550,000 chips); XPeng Turing (mass production in 2025, a single chip's "effective compute of 750 TOPS" is a company claim, three chips in the G7 Ultra total 2,250 TOPS, and it has already won a Volkswagen designation); Li Auto Mach M100 (in vehicles with the L9 Livis in May 2026, a single chip's 1,280 TOPS is a company claim; its chip subsidiary completed 1.625 billion yuan of financing in 2026 and plans to supply externally). Huawei MDC is a compute platform, not a single chip: the mainstay MDC 610 is 200 TOPS (INT8 dense) and is the mass-production base of ADS.
- The common copy for in-house chips is "equivalent / effective compute" — this is a marketing basis, not an industry standard: utilization depends on one's own architecture and one's own model, outsiders cannot reproduce it, and it should be viewed separately from nominal TOPS in cross-comparisons.

Sources: [Horizon Robotics 2024 annual report report (PEdaily, 2025-03)](https://news.pedaily.cn/20250325/104236.shtml); [Black Sesame 2024 annual report (HKEX disclosure)](https://www.hkexnews.hk/listedco/listconews/sehk/2025/0425/2025042501584_c.pdf)

## Which kind of chip export controls actually block

This section is worth writing separately, because public discourse has long conflated it:

- US export controls (BIS ECCN 3A090) use dual thresholds of total processing performance and memory bandwidth, and point to **data-center-grade training / inference GPUs** (at the A100/H100 level). In-vehicle SoCs such as Orin and Thor are far below the thresholds, **are not on the restricted list, and have been supplied normally to China throughout**. So the popular narrative that "Chinese in-vehicle chips were forced into existence by a supply cutoff" does not hold — the real drivers are cost and pricing power, expectations of supply-chain risk, and the iteration efficiency of hardware-software co-design.
- The real control exposure for in-vehicle chips is at the **manufacturing end**: advanced-process foundry work, EDA, and high-end IP are constrained by the foreign direct product rule. The Black Sesame A2000 undergoing US review after tape-out and its mass-production delay (media reporting) is an example at this layer.
- The training side is the main battlefield of the controls, and what training compute determines is **model iteration speed**: Tesla's Cortex and xAI's Colossus are both clusters at the 100,000-card level, while Chinese vendors' training resources are constrained by supplies of HBM and advanced GPUs — the impact of this line is not on the single vehicle, but on the version cadence.

## How to read a chip

> [!tip] Four must-ask questions
> 1. **Precision**: is the figure INT8, FP8, or FP4? With each step down, the value roughly doubles while the information content does not.
> 2. **Sparsity**: does it include structured sparsity? A peak that includes sparsity holds only for models matching that sparsity pattern.
> 3. **Scope**: a single chip, a dual-chip board, or a whole-vehicle total (including cockpit chips padded in)?
> 4. **Bandwidth**: perception workloads are essentially memory-bound — no matter how high the peak TOPS, when memory bandwidth cannot feed the compute array, sustained throughput can differ by several times. Ordering on TOPS alone, without being able to ask about bandwidth and measured utilization, is the most common procurement mistake in this supply chain.

There is one more piece of experience: **launch timelines are generally optimistic by one to two years**. Thor took nearly three years from launch to going into vehicles at scale, AI5 has slipped to 2027, and Mobileye's L3 solution has slipped to 2027/2028 — every figure at a launch event should by default carry the discount of "subject to mass-production vehicle delivery."

## Related notes

- [[market/consumer-adas|Passenger-car smart driving: assisted driving sold to car owners]] · [[technology/stack|What an automated driving system consists of]]
- [[companies/tesla|Tesla and FSD]] · [[technology/routes|The technology route debate]] · [[history/timeline|Timeline overview]]
