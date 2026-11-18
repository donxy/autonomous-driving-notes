# 无人驾驶技能树

公开站点：https://donxy.github.io/autonomous-driving-notes/

基于 Quartz 4 的中文自动驾驶知识站。当前有 21 篇笔记，涵盖历史、技术、公司、中国格局和监管五条内容线。

## 内容结构

- `content/index.md`：首页、推荐阅读与笔记地图。
- `content/timeline.md`：发展时间线。
- `content/history/`：历史脉络。
- `content/technology/`：技术路线。
- `content/companies/`：公司。
- `content/china/`：中国 Robotaxi 格局。
- `content/regulation/`：分级与规则。
- `content/assets/`：本站矢量图。

关键事实需要提供可追溯来源；区分一手文件、公司披露、媒体转述及未核实信息；现状类判断必须标记信息截至日期。

## 开发与发布

```bash
npm ci
npx quartz build --serve
```

`main` 分支通过 `.github/workflows/deploy.yml` 发布到 GitHub Pages；PR 由 `validate-quartz.yml` 检查构建。

主站共享 CSS `https://donxy.github.io/design/shared.css` 只提供字体、阅读节奏等基础 token，本站独立管理主题色、布局和导航，并提供离线 fallback。

跨站架构与数据同步说明见 [个人主站工程文档](https://github.com/donxy/donxy.github.io/blob/main/docs/ARCHITECTURE.md)。
