import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 五条线的侧栏目录（列表页常驻；笔记页只在手机端作为抽屉）
const explorer = () =>
  Component.Explorer({
    // 五条线固定顺序；线内按 frontmatter 的 order（Explorer 在浏览器端运行，取不到 frontmatter，故在此硬编码）
    sortFn: (a, b) => {
      const rank: Record<string, number> = {
        history: 1, technology: 2, market: 3, companies: 4, regulation: 5,
        timeline: 1, "darpa-challenge": 2, "google-to-waymo": 3, shakeout: 4,
        stack: 1, "perception-evolution": 2, routes: 3, chips: 4,
        "business-model": 1, "robotaxi-china": 2, "consumer-adas": 3, trucking: 4,
        waymo: 1, tesla: 2, cruise: 3, "apollo-go": 4, "pony-ai": 5, weride: 6,
        "safety-evidence": 1, "levels-and-rules": 2, "us-eu-rules": 3,
      }
      const ra = rank[a.slugSegment] ?? 99
      const rb = rank[b.slugSegment] ?? 99
      if (ra !== rb) return ra - rb
      return a.displayName.localeCompare(b.displayName)
    },
  })

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  // 全宽顶栏（renderPage 把 header 渲染在 #quartz-root 之外）
  header: [Component.TopNav()],
  afterBody: [
    Component.ConditionalRender({
      component: Component.SkillTree(),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.PrevNext(),
    Component.ReadingAids(),
  ],
  footer: Component.SiteFooter({
    links: {
      "本站源码（GitHub）": "https://github.com/donxy/autonomous-driving-notes",
      RSS: "https://donxy.github.io/autonomous-driving-notes/index.xml",
      "由 Quartz 构建": "https://quartz.jzhao.xyz",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({ rootName: "首页" }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.NoteMeta(),
    Component.TagList(),
  ],
  left: [Component.DesktopOnly(Component.LineNav()), Component.MobileOnly(explorer())],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.EvidenceLegend()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs({ rootName: "首页" }), Component.ArticleTitle()],
  left: [explorer()],
  right: [],
}
