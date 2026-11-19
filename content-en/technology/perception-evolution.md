---
title: "Perception paradigm evolution: from object list to occupancy network"
description: What exactly should a perception system represent the world as — the evolution of four generations of paradigms, object list, BEV features, occupancy grids, and end-to-end internal representations, their representative work, and evidence levels. Information as of 2026-11-17.
tags:
  - technology
  - perception
order: 2
asof: 2026-11-17
badge: new
---

<small>Facts follow the Chinese original.</small>

> [!info] Conventions on this page
> This is the missing link between [[technology/routes|The route debate]] and [[technology/stack|Technology stack at a glance]]: above the sensors and below planning, the four generations of change in what a perception system "represents the world as." First, the most important boundary on this page — **the academic evolution can be checked in papers; there is no independent source that can verify "which representation a mass-production vehicle has adopted," and all of that evidence is company-originated**, labeled item by item on this page. Information as of 2026-11-17.

## Generation 1: object list — the world is a checklist

The standard architecture before 2020: each camera and each type of sensor processed separately, fused at the end at the object level, and what was handed downstream was an **object list** — for each object, its category (from a fixed taxonomy), 3D box, velocity, and tracking ID. Anything that did not exist in the list, planning treated as not existing. Its failure modes are structural:

- **Objects across cameras can never be seen in full**, prediction in image space requires nearly perfect per-pixel depth, and occluded space cannot be represented (Tesla recounted its own early system this way at its 2021 AI Day — company statement);
- **Boxes cannot contain arbitrary shapes**: an overturned truck, dropped cargo, an articulated bus — the wording in the SurroundOcc and Occ3D papers is, respectively, "arbitrary shapes and unlimited categories" and "objects outside the vocabulary";
- **Module boundaries lose information**: detection confidence and uncertainty are flattened by the time they reach planning, and errors accumulate level by level — precisely the criticism in the opening of the UniAD paper.

The advantages of the object list are equally real: the interface is human-readable, and when something goes wrong you can localize which link it was — still the modular camp's strongest engineering argument to this day.

## Generation 2: BEV fusion — unify the coordinates first, then talk about tasks

The turning point was to fuse all sensors first into the same top-down grid (a bird's-eye view (BEV) feature map), with detection, mapping, and prediction all decoded from the same tensor:

- **Lift-Splat-Shoot** (NVIDIA / University of Toronto, ECCV 2020): "lifts" images into frustums and then "splats" them flat into a BEV grid for downstream planning to consume — the public starting point for building camera BEV with "explicit depth distribution lifting" (the BEV feature representation itself is earlier: OFT (2018/2019) already mapped monocular image features into an orthographic bird's-eye space for 3D detection, and did not use an explicit depth distribution).
- **Tesla AI Day (2021-08)**: 8 cameras output a 3D "vector space" via a Transformer. Note the wording: Tesla has not published a BEV paper, and its mass-production solution is not named BEV either; "BEV+Transformer" is a later technical paraphrase by others; but Karpathy had already publicly described its "bird's-eye space network prediction" route in his February 2020 ScaledML talk (multi-camera features fused inside the network, directly outputting predictions in top-down space), earlier than the public release of LSS (2020-08) — there is no basis for "Tesla originated BEV," and "Tesla never used the BEV concept" does not hold either.
- **BEVDet** (2021-12): turned the LSS-style paradigm into a detection framework — arXiv preprint only, with no conference venue; treat it as a preprint when citing it.
- **BEVFormer** (Shanghai AI Lab and others, ECCV 2022): a BEV query grid + spatial cross-attention + **temporal self-attention**, with temporal fusion markedly improving velocity estimation and low-visibility recall.

Why BEV won: a single metric coordinate system holds all sensors and tasks; temporal fusion becomes aligning the grid by ego motion; scale is naturally conserved in the grid. But be clear about what it solved — **BEV solves the fusion problem, not the unknown-obstacle problem**: an obstacle is present in the features, but if the detection head does not decode it into an object, planning still cannot see it.

Sources: [LSS (arXiv:2008.05711)](https://arxiv.org/abs/2008.05711); [OFT (arXiv:1811.08188)](https://arxiv.org/abs/1811.08188); [Karpathy ScaledML talk (2020-02, official video)](https://www.youtube.com/watch?v=hx7BXih7zx8); [BEVFormer (arXiv:2203.17270)](https://arxiv.org/abs/2203.17270); [BEVDet (arXiv:2112.11790)](https://arxiv.org/abs/2112.11790)

## Generation 3: occupancy network — don't ask what it is, only whether it occupies space

The representation goes one step further: cut 3D space into voxels and predict, cell by cell, the "probability of being occupied" (semantic categories and motion flow can be attached as well). Planning runs collision checks directly against "solid space" — **it does not matter what an overturned truck is called; what matters is that it is occupying the road**.

- **Academic roots**: MonoScene (CVPR 2022) performs dense semantic scene completion from a single RGB image and can "imagine" space outside the field of view; it is the bridge from semantic scene completion (SSC) to occupancy representation.
- **Tesla's claim 【Company claim】**: at its September 2022 AI Day it detailed its Occupancy Network — 8 video streams generate a unified volumetric occupancy + semantics + occupancy flow, claiming that geometric supervision lets it "escape the requirement to define an ontology," that auto-labeling involves "no human participation," and that it runs in about 10 milliseconds on all FSD vehicles. All of these are Tesla's own launch-event statements, with no peer-reviewed paper and no independent reproduction.
- **The 2023 academic explosion**: TPVFormer (CVPR) pointed out that a single BEV plane cannot describe fine 3D structure and compromised with three orthogonal planes; SurroundOcc's (ICCV) dense ground truth was **generated** by multi-frame lidar fusion + reconstruction, not drawn by humans; Occ3D (NeurIPS dataset track) provided a visibility-aware labeling pipeline; OccNet (ICCV) argued that "the scene is occupancy," and its OpenOcc benchmark has **16 voxel categories** — note: semantic occupancy in academia has not dispensed with a classification ontology; "no need to define an ontology" is only Tesla's framing.
- **The opposing side**: SparseOcc pointed out that **more than 90% of voxels in a dense volume are empty**, and that a fully sparse network can reach the same quality at real-time speed — the academic momentum after 2024 is turning toward sparse / query / vectorized forms that "keep the semantics of occupancy (solid means blocking), but do not pay for every empty cell."

Sources: [MonoScene (arXiv:2112.00726)](https://arxiv.org/abs/2112.00726); [SurroundOcc (arXiv:2303.09551)](https://arxiv.org/abs/2303.09551); [Occ3D (arXiv:2304.14365)](https://arxiv.org/abs/2304.14365); [SparseOcc (arXiv:2312.17118)](https://arxiv.org/abs/2312.17118)

## Mass-production claims, viewed separately

Read the following separately from the academic line above: **all of it is company claims; not one company has published architecture details, voxel resolution, labeling pipelines, or internal evaluations, and there has been no independent audit or teardown verification**.

- **Huawei GOD** (2023-04, released with ADS 2.0): "General Obstacle Detection," whose selling point is recognizing irregular obstacles outside a whitelist — a statement at the functional level, not a disclosure at the representation level. Later media reports said ADS 3.0 (2024) "removed the BEV network" and used GOD as the name for the whole of perception — names drifting with product generations itself hints at a labeling flavor.
- **Li Auto AD Max 3.0** (2023-04): static BEV + dynamic BEV + Occupancy, three networks side by side, with NeRF enhancing the occupancy ground truth.
- **NIO NOP+** (2023-07): the official wording includes "a new perception model with BEV and occupancy network" — the same release is described in different media as an "occupancy network" or an "occupancy grid," and the details stop at one sentence.
- **XPeng XNet** (2024-05 official press release): calls itself "the industry's first mass-produced vision-only 2K occupancy network," with more than 2 million grid cells — "industry's first" is XPeng's own claim; and the same press release also says it can recognize more than 50 types of objects, so the mass-production system is in fact a hybrid form.

There is only one summary that holds up: **since 2023, the major Chinese automakers and Tesla have all released "occupancy-style general obstacle perception" as a named feature of mass-production smart driving; what their mass-production stacks actually compute internally has not been independently verified.**

Sources: [XPeng 2024-05 official press release](https://www.xpeng.com/news/018f968985698f616d3f2c9e8f720154); [Huawei ADS 2.0 release report (National Business Daily, 2023-04-16)](https://www.nbd.com.cn/articles/2023-04-16/2761474.html)

## Four representations, one table

| | Object list | BEV features | Occupancy grid | Pure end-to-end (limiting form) |
|---|---|---|---|---|
| What downstream receives | A sparse checklist of category + 3D box + velocity + tracking ID | A shared top-down feature tensor, from which each task head decodes | Per-voxel occupancy probability (+ semantics + flow), planning checks collisions directly | Only a trajectory / control commands, with no inspectable intermediate |
| Unknown obstacles | Worst: if it is not in the taxonomy, it does not exist | Depends on the decoding head: if it is not decoded, it does not exist | Best: category-agnostic "solid means blocking" — but "predicted as occupied" is itself still learned behavior | No explicit signal to audit, real-world performance **unverified** |
| Labeling cost | Lowest: a small number of boxes and categories per frame | Box + map segmentation labels; the BEV tensor itself needs no labeling | Highest: per-voxel labels generated by a pipeline + human cleaning (see below) | Lowest perception labeling, with the cost shifted to massive driving demonstrations and evaluation |
| Debuggability | Best: failures can be localized to a module | Medium: the tensor is unreadable, but decoding heads can be visualized | Medium-high: the grid can be compared against lidar point clouds, but the ground truth itself is ambiguous | Worst: only probing and counterfactual testing of the whole network |

**There is only one hard figure for labeling cost**: RenderOcc, citing a prior pipeline — about 30,000 frames of **generative** occupancy labels required about **4,000 person-hours** of human cleaning; and for the same raw data, occupancy ground truth differs by 10–15% across different benchmarks. **A first-hand per-frame cost comparison of "boxes vs. voxels" does not exist**, and any claim giving an exact unit price should be treated with doubt.

Source: [RenderOcc (arXiv:2309.09502)](https://arxiv.org/abs/2309.09502)

## Act four: end-to-end changes not whether representations exist, but their status

- **UniAD** (Shanghai AI Lab / OpenDriveLab and others, CVPR 2023): detection, tracking, mapping, trajectory prediction, **occupancy prediction**, and planning — six tasks organized in one network in a planning-oriented way — won one of the two CVPR 2023 Best Papers (verifiable on the CVPR official site). Note: occupancy in UniAD is an **internal task**, not an object that has been eliminated.
- **VAD** (ICCV 2023): took the vectorized route, opposing dense grids (occupancy included) — computationally heavy and losing instance structure.
- **The evidence problem**: UniAD's lead was measured in **open-loop** evaluation on nuScenes. NAVSIM (NeurIPS 2024) pointed out that open-loop results do not reflect closed-loop performance; BEV-Planner further found that a simple baseline using no perception labels is also very competitive on nuScenes — the academic center of gravity is therefore shifting toward simulation / closed-loop evaluation.

So "end-to-end = no intermediate representation" is a misreading: end-to-end in the 2023 literature is **jointly trained, planning-oriented, with internal representations still present**; the limiting form of pixels directly outputting a trajectory has no public evidence to this day. For the detailed divergence see [[technology/routes|The route debate]], and this piece is only responsible for handing off to it.

Sources: [UniAD (arXiv:2212.10156)](https://arxiv.org/abs/2212.10156); [CVPR 2023 Best Paper announcement](https://cvpr.thecvf.com/Conferences/2023/Blog22June); [NAVSIM (arXiv:2406.15349)](https://arxiv.org/abs/2406.15349)

## Related notes

- [[technology/routes|The route debate: vision-only vs. lidar, and end-to-end]] — this piece is upstream of it: representations come first, then the route debate
- [[technology/stack|Technology stack at a glance: from sensors to actuators]] — this piece expands the "perception" link in it
- [[technology/chips|Chips and compute: the business behind TOPS]] — the compute bill for dense voxels and large grids is settled over there
- [[market/consumer-adas|Passenger-car smart driving: another front in the Chinese market]] — the publishers of the mass-production claims are all on that front
- [[history/timeline|Timeline: key milestones at a glance]]
