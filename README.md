# 无人驾驶技能树

一座关于自动驾驶历史脉络与当下现状的笔记花园，用 [Quartz 4](https://github.com/jackyzha0/quartz) 构建，部署在 GitHub Pages。

> 当前是**骨架版**：结构与导航已搭好，正文是待填充的提纲。正式调研写入时遵循本站约定——关键事实逐项给出处，区分已核实事实与行业说法 / 宣传口径，涉及最新进展注明信息截至日期。

## 笔记结构

- `content/index.md` —— 首页 / 笔记地图
- `content/timeline.md` —— 时间线总览
- `content/history/` —— 历史脉络（DARPA 挑战赛、Google → Waymo）
- `content/technology/` —— 技术路线（路线之争、技术栈速览）
- `content/companies/` —— 公司（Waymo、Tesla）
- `content/china/` —— 中国 Robotaxi 格局（待调研）
- `content/regulation/` —— 分级与监管（待调研）

笔记之间用 `[[双向链接]]` 互相牵引，站点的关系图与反向链接由此生成。

## 本地预览

```bash
npm i
npx quartz build --serve   # http://localhost:8080
```

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 自动构建并发布到 GitHub Pages。

注：站点自有的图标（`quartz/static/icon.png`、`og-image.png`，源图为 `logo.svg`）已存入本仓库；只有 `quartz/util/emojimap.json`（约 15 MB，超出文件推送上限）未入库，构建工作流在文件缺失时才从 Quartz 上游取回。本地构建前也需要先取回它：

```bash
curl -fsSL https://raw.githubusercontent.com/jackyzha0/quartz/v4/quartz/util/emojimap.json -o quartz/util/emojimap.json
```

本仓库也不含 Quartz 上游的 `docs/` 文档目录。
