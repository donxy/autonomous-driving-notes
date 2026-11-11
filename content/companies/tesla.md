---
title: Tesla
description: Tesla 的 Autopilot/FSD 演进、纯视觉路线、Robotaxi 试点现状与监管审查——文件口径与营销语言分开写。信息截至 2026-11-11。
tags:
  - 公司
  - Tesla
---

# Tesla

> [!warning] 本页纪律
> 把「已交付功能的监管定性」和「营销语言」分开写。凡引 Tesla 对自身功能的定性，以其监管文件与官方支持页为准。信息截至 2026-11-11。

## 一条主线：名字越叫越满，定性一直是 L2

| 时间 | 事件 | 定性 |
|---|---|---|
| 2014-10 | HW1 硬件套件发布（Mobileye EyeQ3、前雷达、前视摄像头、12 超声波），自 2014 年 9 月产车辆起装配，软件未激活 | — |
| 2015-10-14 | 软件 v7.0 推送，Autopilot 可用；Tesla 当时即声明驾驶员仍负全责 | L2 |
| 2016-05-07 | Joshua Brown 致死事故：Model S 以 Autopilot 74 mph 撞穿横切的白色半挂车。NTSB 认定可能原因含驾驶员过度依赖自动化，系统设计「允许长时间脱离驾驶任务」为促成因素 | — |
| 2016-07 | 与 Mobileye 分手（部署方式分歧） | — |
| 2016-10-19 | HW2 发布（NVIDIA 平台）；Tesla 宣称所有新车具备「完全自动驾驶所需硬件」，同日开售 "Full Self-Driving Capability" 选装——此表述后成监管与诉讼焦点 | 宣传口径 |
| 2020-10-20 | FSD Beta 向小范围用户首发（版本 2020.40.8.10），首次实现城市街道自动转向；2022-11 扩至北美所有购买者 | L2（Tesla 在召回文件中自述） |
| 2021-05 / 2022-10 | 转 Tesla Vision：北美 Model 3/Y 先取消毫米波雷达，后全线取消超声波传感器，纯摄像头 + 神经网络 | 见 [[technology/routes\|路线之争]] |
| 2024-03 | 「FSD Beta」更名为 **FSD (Supervised)**，「Supervised」首次进入官方命名与合同文本 | L2 |

来源：[Consumer Reports 时间线（引 Tesla 官方博文）](https://www.consumerreports.org/cars/autonomous-driving/timeline-of-tesla-self-driving-aspirations-a9686689375/)；[NTSB 报告转述（Reuters，2017-09）](https://www.ehstoday.com/safety/article/21919260/ntsb-fatal-crash-involving-tesla-autopilot-resulted-from-driver-errors-overreliance-on-automation)；[Electrek（2022-10-04）](https://electrek.co/2022/10/04/tesla-moving-away-ultrasonic-sensors-in-favor-tesla-vision/)

## Tesla 自己在文件里怎么说（与营销的落差）

- **致加州 DMV 函（2020-12，副总法律顾问）**：「City Streets 的最终发布版将继续是 SAE Level 2 高级驾驶辅助功能」「不构成 DMV 定义下的自动驾驶」。来源：[The Drive（2021-03-09）](https://www.thedrive.com/tech/39647/tesla-admits-current-full-self-driving-beta-will-always-be-a-level-2-system-emails)
- **DMV 会议备忘录（2021-03）**：Autopilot 软件总监对 DMV 称「Elon 关于年底实现 L5 的推文不符合工程现实」「Tesla 目前处于 Level 2」。来源：[TechCrunch（2021-05-07）](https://techcrunch.com/2021/05/07/tesla-refutes-elon-musks-timeline-on-full-self-driving/)
- **官方支持页现行表述**：Autopilot/FSD 功能「require active driver supervision and do not make the vehicle autonomous」。来源：[Tesla 官方支持页](https://www.tesla.com/en_gb/support/autopilot)
- 媒体报道：Musk 在 2026 年 4 月财报电话会上承认 HW3 车辆（2016–2023 年产）在架构上无法实现无监督 FSD；消费车无监督 FSD 最早 2026 Q4（此为电话会表态，非交付承诺）。

## Robotaxi：试点是真的，「无人」的成色要看座位上坐没坐人

- **2024-10-10「We, Robot」发布会**：发布双座 Cybercab（无方向盘、无踏板，Musk 称售价 <3 万美元、量产「2026 年或 2027 年之前」）与 20 座 Robovan；Tesla 向 SEC 的文件确认两车为自动驾驶从零设计。来源：[whatledto 事件汇编（引 SEC 文件）](https://whatledto.com/events/tesla-cybercab-robotaxi)

![Cybercab 车内](https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Inside_the_Tesla_Cybercab.jpg/1280px-Inside_the_Tesla_Cybercab.jpg)
*Cybercab 的座舱（2024 年发布会当晚拍摄）：没有方向盘、没有踏板，只有双座和一块中控屏——这正是它必须走联邦豁免/审计程序的原因。图：Steve Jurvetson，[CC BY 2.0](https://creativecommons.org/licenses/by/2.0)，经 [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Inside_the_Tesla_Cybercab.jpg)。*
- **奥斯汀试点 2025-06-22 上线**：邀请制，约 10–20 辆 Model Y，南奥斯汀限定区域，6:00–24:00 运营，统一价 4.20 美元/单；**驾驶座无人，但前排副驾坐有 Tesla 安全监控员**（可急停，无方向盘/踏板）——因此不是无监督运营。上线首日即出现车辆短暂逆行等视频，NHTSA 次日即与 Tesla 联系问询。来源：[TechCrunch（2025-06-22）](https://techcrunch.com/2025/06/22/tesla-launches-robotaxi-rides-in-austin-with-big-promises-and-unanswered-questions/)
- **湾区（2025-07-31）**：上线的是持 CPUC 包车许可（TCP）的叫车服务，**每辆车驾驶座有安全驾驶员**；加州 DMV 名单中 Tesla 仅在「带安全员测试」名单，不在无人测试与部署名单。来源：[dockduty 核对（2026-10-27）](https://dockduty.com/blog/tesla-robotaxi-san-francisco.html)
- **扩张（2026，据追踪站与 Tesla 页面汇总）**：2026-01-22 起奥斯汀开始有限移除安全监控员；2026 年内达拉斯、休斯顿、迈阿密、奥兰多、坦帕等陆续无人运营；2026-09-03 Cybercab 在奥斯汀加入收费车队；截至 2026-11 上旬约 8 个都会区无人运营 + 湾区带驾驶员服务。来源：[Wikipedia: Tesla Robotaxi](https://en.wikipedia.org/wiki/Tesla_Robotaxi)；[teslanewswire 追踪（2026-11-09）](https://teslanewswire.com/robotaxi-tracker)
- **Cybercab 量产状态（公司口径）**：Tesla Q2 2026 股东文件称已在得州工厂投产；2026-10-21 Q3 电话会称目标 2026 年底前开始小批量客户交付。
- **Tesla 首份 Robotaxi 安全报告（2026-10-21，公司口径）**：称 2026-01-22 至 10-18 无车内监控员里程约 311 万英里、零人员受伤；但其可下载清单同期列有 32 起上报 NHTSA 的碰撞（30 起仅财产损失），且该数字与 Q3 股东信「累计无人里程近 200 万」的口径并不一致。引用时两条都要带。来源：[teslant 转述（2026-10）](https://teslant.com/en/news/tesla-robotaxi-safety-report-3-1-million-miles-32-crashes-las-vegas-phoenix-next-2026-10)

## 监管审查（截至 2026-11）

- **NHTSA Autopilot 大调查已结案**：2021 年开立 → 2022 年升级工程分析 → Tesla 2023-12 申报召回 23V-838（203 万辆，OTA 加强驾驶员监控）→ **2024-04-25 结案**；NHTSA 结论是其「薄弱的驾驶员参与系统与其宽松的运行能力不匹配」；同时新开审查召回补救有效性的 RQ24-009（截至 2026 年秋仍开放）。来源：[NHTSA ODI 结案文件（2024-04-25）](https://business.cch.com/plsd/EA22002closed.pdf)
- **FSD 低能见度调查升级中**：2024-10 开立（约 240 万辆）→ **2026-03 升级为工程分析 EA26-002**，范围扩至约 320 万辆，焦点是纯视觉系统在眩光/雾/扬尘下能否识别能见度下降并及时警告。工程分析是要求召回前的必经步骤，目前尚未有召回。
- **FSD 交通违规调查**：2025-10 开立，覆盖约 288 万辆，针对 50+ 起闯红灯、逆行报告，仍在初步评估。
- **加州 DMV 虚假广告案已裁决**：**2025-12-16** DMV 认定 Tesla 在营销中使用「Autopilot」与「Full Self-Driving Capability」具误导性、违反州法；处罚减轻为执照暂停暂缓执行 + 60 天整改期；**2026-02-17** DMV 宣布 Tesla 已停用加州营销中的「Autopilot」一词、免于执照暂停。Tesla 已另行起诉 DMV 请求推翻认定（未判）。来源：[加州 DMV 官方新闻稿（2026-02-17）](https://www.dmv.ca.gov/portal/news-and-media/tesla-takes-corrective-action-to-avoid-dmv-suspension/)
- **DOJ/SEC 状态**：以 Tesla 自身 SEC 文件口径为准——公司称持续收到 NHTSA、NTSB、SEC、DOJ 等机构的信息请求与传票，并称「据公司所知，尚无任何政府机构在进行中的调查里认定存在不当行为」。DOJ 刑事调查的后续进展与 SEC 是否另有独立调查，公开渠道未确认，本站标未核实。

## 相关笔记

- [[regulation/levels-and-rules|自动驾驶分级与监管]] · [[technology/safety-evidence|安全数据怎么读]]
- [[companies/waymo|Waymo]] · [[technology/business-model|Robotaxi 的成本与商业模式]] · [[timeline|时间线总览]]
