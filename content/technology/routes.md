---
title: 路线之争：激光雷达 vs 纯视觉
description: 传感器路线的技术事实、成本曲线与端到端转向——分歧到底在哪一层。信息截至 2026-11-11。
tags:
  - 技术路线
---

# 路线之争：激光雷达 vs 纯视觉

> 本页口径：传感器原理与价格数据给出处；厂商路线表述标注「公司主张」。信息截至 2026-11-11。

## 先把三类传感器钉清楚

| 传感器 | 直接测到什么 | 强项 | 弱项 |
|---|---|---|---|
| 摄像头 | 颜色、纹理、语义（车道线、信号灯、标志） | 信息密度最高、成本最低 | 深度要靠算法推断；受光照、天气影响大 |
| 毫米波雷达 | 距离 + 多普勒速度（直接测量） | 全天候、测速直接 | 角分辨率低、语义弱 |
| 激光雷达 | 3D 几何（ToF 飞行时间直接测距，d = c·t/2） | 不依赖环境光、几何精确 | 成本曾极高；语义要靠算法补 |

来源：[IBM: What is lidar](https://www.ibm.com/think/topics/lidar)；[NI 传感器测试综述](https://www.ni.com/en/solutions/transportation/adas-and-autonomous-driving-testing/adas-and-autonomous-driving-sensors-and-electronics-test/lidar-role-autonomous-driving-laser-vision-cars.html)

争论的实质不是「谁看得清」，而是：**深度和几何要靠昂贵硬件直接量，还是靠便宜传感器 + 算法推**。前者把成本花在硬件冗余上，后者把风险押在算法与数据规模上。

## 成本曲线：激光雷达为什么从「用不起」变成选项

- DARPA 时期 Velodyne HDL-64E 约 **75,000 美元**（常见叙述对应 2007 年前后；不宜写成 2012 年的价格）。来源：[Lidar News 成本史](https://lidarnews.com/automotive-lidar-cost-history-75000-to-200/)
- 禾赛 ADAS 长距产品均价到 2024–2025 年已低于 500 美元，新一代 ATX 被报道在约 200 美元级；据财报汇编，禾赛整体均价序列约 2023 年 1,100 美元 → 2024 年 530 美元 → 2025 年 260 美元（下降主因是低价 ADAS 产品占比上升；此数未经一手财报核对，属二手口径）。来源：[财报汇编](https://www.thesistory.com/HSAI.html)

价格跌了两个数量级之后，「激光雷达太贵」这个 2016 年前后的核心论据已经不成立——但这没有终结争论，只是把争论推向了下一层：量产车在乎的还有功耗、造型、标定与数据闭环。

## 两派的实际配置

**多传感器派（以 Waymo 为代表）**
- 第 5 代（捷豹 I-PACE）：29 摄像头 / 5 激光雷达 / 6 毫米波雷达。
- 第 6 代 Driver（2024-08-19 公布）：精简为 13 摄像头 / 4 激光雷达 / 6 毫米波雷达 + 外置音频接收器，各传感器视场重叠、最远 500 米。（数据为对 Waymo 公布内容的二手汇编。）

**纯视觉派（以 Tesla 为代表）**
- 2021 年起 Model 3/Y 转向 Tesla Vision、取消前雷达；**2022-10-04** 宣布移除超声波传感器，先从 Model 3/Y 开始、2023 年扩展至 Model S/X，用视觉 occupancy network 替代。来源：[Electrek（2022-10-04）](https://electrek.co/2022/10/04/tesla-moving-away-ultrasonic-sensors-in-favor-tesla-vision/)；[Tesla 官方支持页](https://www.tesla.com/en_gb/support/autopilot)
- 立场见 [[companies/tesla|Tesla]]；运营方的立场见 [[companies/waymo|Waymo]]。

**中国市场正在分化**（均为公司主张口径）
- **小鹏转纯视觉**：P7+（2024-10）搭载纯视觉方案 + 端到端大模型、取消激光雷达；公司在 2024 年科技日宣布后续车型全面取消激光雷达。来源：[小鹏官网](https://www.xiaopeng.com/news/company_news/5383.html)
- **华为坚持多传感器分层**：乾崑 ADS 分 Max/Pro/SE 等档位，Max 版带高线数激光雷达，SE 基础版无激光雷达；所谓「ADS Ultra = 高速 L3 方案」是厂商宣称，不是监管认定。来源：[华为乾崑官网](https://auto.huawei.com/cn/ads/)

同一个市场、同一时期，两家头部供应商反向押注——这说明分歧至今没有被工程证据裁决，更多是成本结构与产品定位的选择。

## 「端到端」之后，争论换了问法

- **Tesla FSD v12**：发布说明原文称城市街道驾驶栈升级为「单一端到端神经网络，在数百万视频片段上训练，替换了 30 多万行显式 C++ 代码」；2024 年 3 月在美大范围推送；**仍是监督式 L2**。来源（转述发布说明）：[elonfacts](https://elonfacts.org/achievements/fsd-v12-end-to-end-neural-net)
- **Waymo EMMA**：以 Gemini 多模态大模型从摄像头输入直接以文本输出轨迹/目标/道路图的研究项目（2024-10 论文，后刊 TMLR 2025）。注意：**是研究而非量产系统**——论文自述局限为仅处理少量帧、未融合激光雷达/雷达、计算昂贵；Waymo 未宣称 EMMA 用于量产 Driver。来源：[alphaXiv: EMMA 论文](https://www.alphaxiv.org/abs/2410.23262v1)
- **理想「端到端 + VLM」双系统**、**Momenta「一段式端到端」**：中国方案的共同点是把感知—规划压进大模型，同时保留不同程度的模块化兜底。来源：[Momenta 官网](https://www.momenta.cn/article/178.html)

端到端改变的是**软件栈的组织方式**（见 [[technology/stack|技术栈速览]]），不直接裁决传感器之争：端到端可以吃多传感器输入，纯视觉也可以配模块化管线。两个维度别混为一谈。

## 本页结论

1. 传感器之争的硬件论据（激光雷达成本）已被价格曲线大幅削弱；
2. 今天真正的分歧在**系统定级与责任**：敢不敢在限定区域内去掉安全员、以谁的名义担责——那是 [[regulation/levels-and-rules|分级与监管]] 的问题，不全是传感器问题；
3. 厂商发布会上的路线表述，须与实际量产配置和监管文件分开看。

## 相关笔记

- [[technology/stack|技术栈速览：感知 / 预测 / 规划 / 控制]]
- [[companies/waymo|Waymo]] · [[companies/tesla|Tesla]]
