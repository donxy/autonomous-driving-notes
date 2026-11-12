---
title: DARPA 挑战赛（2004–2007）
description: 三届 DARPA 挑战赛的赛制、结果与遗产——现代自动驾驶的公开起点。信息截至 2026-11-11。
tags:
  - 历史
  - DARPA
---


> [!info] 本页口径
> 关键事实逐项给出处；数字有出入处标注「口径差异」，不写死。信息截至 2026-11-11。

## 为什么从这里讲起

DARPA（美国国防高级研究计划局）用三届公开竞赛，把「无人车能不能在真实地形里自己跑完全程」从实验室演示变成了有明确验收标准的工程问题。它筛出的那批人和团队——斯坦福的 Thrun 团队、CMU 的 Whittaker/Urmson 团队——后来直接构成了 Google 无人驾驶项目的骨干（见 [[history/google-to-waymo|从 Google 项目到 Waymo]]）。

## 2004：第一届 Grand Challenge——无人完赛

- 时间地点：2004 年 3 月 13 日，加州 Barstow → 内华达 Primm，穿越莫哈韦沙漠。
- 结果：**无一完赛**，100 万美元奖金无人领取。走得最远的是 CMU Red Team 的 Sandstorm，约 7.4 英里。
- 路线总长各源不一（142 / 143 / 150 英里三种说法并存），本页只记「约 230 公里」并注口径差异。
- 来源：[CMU RI 技术报告（Urmson 2004）](https://www.ri.cmu.edu/pub_files/pub4/urmson_christopher_2004_1/urmson_christopher_2004_1.pdf)；[Wikipedia: DARPA Grand Challenge (2004)](https://en.wikipedia.org/wiki/DARPA_Grand_Challenge_(2004))

## 2005：第二届——Stanley 完赛夺冠

- 时间：2005 年 10 月 8 日，赛道约 131.6 英里。
- 冠军：斯坦福的 **Stanley**（大众 Touareg 改装，Sebastian Thrun 领队），奖金 200 万美元；23 支参赛队中 5 支完赛。
- 冠军用时两源有 10 秒之差（车队论文与 New Atlas 记 6:53:58，Wikipedia 记 6:53:08），本页取 6:53:58 并注差异。
- 来源：[New Atlas（2005-10-10）](https://newatlas.com/go/4720/)；[Smithsonian Magazine（2024）](https://www.smithsonianmag.com/smithsonian-institution/how-a-blue-suv-named-stanley-revolutionized-driverless-car-technology-180984882/)；[Stanford Magazine](https://stanfordmag.org/contents/drivers-not-wanted)

![Stanley 本车](https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Stanford_Volkswagon_Touareg_Robotic_Control_Vehicle_%2886757864%29.jpg/1280px-Stanford_Volkswagon_Touareg_Robotic_Control_Vehicle_%2886757864%29.jpg)
*2005 年冠军车 Stanley 本车（2006 年北美国际车展展出照，非比赛现场）。车顶一排激光雷达与摄像头，就是当年获胜方案的感知配置。图：Global Reactions，[CC BY 2.0](https://creativecommons.org/licenses/by/2.0)，经 [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Stanford_Volkswagon_Touareg_Robotic_Control_Vehicle_(86757864).jpg)。*

## 2007：Urban Challenge——进入城市环境

- 时间地点：2007 年 11 月 3 日，加州 Victorville（原 George 空军基地），城市环境赛道约 55 英里，要处理交通规则、他车交互与路口通行。
- 冠军：CMU Tartan Racing 的 **Boss**（雪佛兰 Tahoe，Red Whittaker 领队、Chris Urmson 任技术总监），奖金 200 万美元，用时 4:10:20，领先第二名约 20 分钟。
- 亚军斯坦福 Junior（100 万美元），季军弗吉尼亚理工 Odin（50 万美元）。
- 来源：[CMU Tartan Racing 十周年回顾（2017）](https://www.ri.cmu.edu/tartan-racing-team-celebrates-10th-anniversary-of-victory/)；[MIT Technology Review（2007-11-05）](https://www.technologyreview.com/2007/11/05/223163/champion-robot-car-declared/amp/)

## 更早的源头（挑战赛之前）

- **CMU Navlab**：项目始于 1986 年。1995 年 7 月「No Hands Across America」：Navlab 5 从匹兹堡开到圣迭戈约 2,850 英里，RALPH 系统掌控方向盘的时间占 98.2%——但油门与刹车仍由人控制，准确说是「自动转向」，不是全自动。来源：[CMU（2015 回顾）](https://www.cs.cmu.edu/news/2015/look-ma-no-hands-cmu-vehicle-steered-itself-across-country-20-years-ago)
- **Ernst Dickmanns**（德国慕尼黑联邦国防军大学）：VaMoRs 自 1986 年起做自动驾驶实验；1994 年 10 月 PROMETHEUS 项目巴黎收官演示中，VaMP 与 VITA-2 在三车道正常交通中行驶 1,000+ 公里、最高 130 km/h。来源：[IEEE 口述史：Ernst Dickmanns](https://ethw.org/Oral-History:Ernst_Dickmanns)。注：其 1995 年慕尼黑—欧登塞往返（约 1,758 公里）的细节仅见较弱二手源，本页不展开。

## 遗产

- **人才谱系**：2005 冠军队与 2007 冠军队的核心成员，后来分别进入 Google 项目、Uber ATG 等机构——自动驾驶行业的第一代骨干名单，基本就是这三届比赛的参赛名册。
- **方法论遗产**：公开赛制 + 统一验收，把「做出来」变成可比较的工程结果；行业后来的 benchmark 文化由此而来。
- **技术遗产**：多传感器融合（激光雷达 + 摄像头 + 雷达 + GPS/IMU）在沙漠与城市赛道上被验证为当时的可行路线，这条路线后来被 Waymo 继承，见 [[technology/routes|路线之争：激光雷达 vs 纯视觉]]。

## 相关笔记

- [[history/google-to-waymo|从 Google 项目到 Waymo]]
- [[timeline|时间线总览]]
