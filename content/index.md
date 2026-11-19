---
title: 无人驾驶技能树
description: 一座关于自动驾驶历史脉络与当下现状的笔记花园——全部页面已完成首轮核源填充。信息截至 2026-11-11。
tags:
  - 总览
paths:
  - kicker: 速览
    title: 现在的格局
    desc: 用一条时间线和三篇现状笔记，知道今天谁在跑、跑到哪、被怎么管。
    notes:
      - history/timeline
      - regulation/levels-and-rules
      - companies/waymo
      - market/robotaxi-china
  - kicker: 技术入门
    title: 一辆无人车怎么「看」和「想」
    desc: 从技术栈地图出发，到感知表示、传感器路线和算力账。
    notes:
      - technology/stack
      - technology/perception-evolution
      - technology/routes
      - technology/chips
  - kicker: 商业与安全
    title: 它赚不赚钱，安不安全
    desc: 经济账、安全数据的读法，以及第一次浪潮里倒下的公司。
    notes:
      - market/business-model
      - regulation/safety-evidence
      - history/shakeout
      - companies/cruise
errata:
  - wrong: 2016 年 10 月更名
    right: Waymo 更名宣布于 2016 年 12 月 13 日，不是常说的 2016 年 10 月。
  - wrong: J3016 最新修订是 2021 年
    right: SAE J3016 已有 2026 年 9 月版，「最新修订是 2021 年」已经过时。
  - wrong: 武汉投放 1,000 辆
    right: 萝卜快跑 2024 年在武汉的实际投放是 400 多辆（武汉市交通运输局澄清），1,000 辆是百度的年内计划口径。
updates:
  - date: "2026-11-17"
    text: 新增《感知范式演进：从目标列表到占用网络》
  - date: "2026-11-11"
    text: 全站完成首轮核源，统一「信息截至」日期
---

<!-- 维护提示：「21 篇」= content 下除各 index.md 外的 md 数，由 scripts/count-notes.mjs 在发布前自动校准，勿手改。路径、勘误、更新记录写在本页 frontmatter，由 SkillTree 组件渲染。 -->
<div class="home-hero">
<div class="home-hero-main">
<div class="home-kicker">四十年 · 五条线 · <span class="note-count">21 篇笔记</span></div>
<p class="home-title">从实验室演示，<br>到满街跑的无人车</p>
<p class="home-sub">四十年，一条主线：谁在开车、谁来兜底、谁为它付钱。这座笔记花园顺着链接，把每个事件连到它的前因、后果和对手。</p>
<div class="home-actions"><a class="home-btn-primary" href="#paths">选一条路开始 →</a><a class="home-btn-ghost" href="#tree">看完整技能树</a></div>
<div class="home-meta"><span>信息截至 <b class="mono">2026-11-11</b></span><span>证据分级：</span><span class="ev ev-ok">已核实</span><span class="ev ev-co">公司口径</span><span class="ev ev-md">媒体转述</span><span class="ev ev-un">未核实</span></div>
</div>
<aside class="home-coords" aria-label="现在的三个坐标">
<div class="home-coords-head"><h2>现在的三个坐标</h2><span class="mono">截至 2026-11-11</span></div>
<div class="coord"><div class="coord-num">50 万+<small> 次/周</small></div><div class="coord-body"><a class="coord-title" href="./companies/waymo">Waymo 每周全无人付费出行</a><span>2026 年 3 月末数据，Alphabet 一季度财报会披露</span><span class="coord-src">来源：<a href="https://cdn.prod.nntech.io/company-events/reports/4427659d-5ae5-31e6-a271-a19dad46a35e/report.pdf">Alphabet Q1 2026 财报</a>（2026-04-29）</span><span><span class="ev ev-co">公司口径</span></span></div></div>
<div class="coord"><div class="coord-num">2<small> 款车型</small></div><div class="coord-body"><a class="coord-title" href="./regulation/levels-and-rules">中国首批 L3 车型获附条件准入</a><span>长安深蓝 SL03 与极狐阿尔法 S6，由指定主体在限定路段试点</span><span class="coord-src">来源：<a href="https://www.miit.gov.cn/xwfb/gxdt/sjdt/art/2025/art_f734c7074580470593d4018742997640.html">工信部准入通告</a>（2025-12-15）</span><span><span class="ev ev-ok">已核实 · 工信部</span></span></div></div>
<div class="coord"><div class="coord-num">L2</div><div class="coord-body"><a class="coord-title" href="./companies/tesla">Tesla 消费级 FSD 在监管文件中的定级</a><span>卖给消费者的系统始终是 L2；2025 年 12 月，加州 DMV 裁定其营销误导</span><span class="coord-src">来源：<a href="https://www.dmv.ca.gov/portal/news-and-media/tesla-takes-corrective-action-to-avoid-dmv-suspension/">加州 DMV</a>（裁定 2025-12-16）</span><span><span class="ev ev-ok">已核实 · 加州 DMV</span></span></div></div>
</aside>
</div>
