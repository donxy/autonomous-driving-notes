// 本站自研组件的界面文案表（与 Quartz 内置 i18n 分开：内置的管搜索/目录等通用组件，
// 这里管 TopNav、LineNav、SkillTree 等自研组件）。语言由构建配置的 locale 决定。
export interface UIStrings {
  siteTitle: string
  linesAriaLabel: string
  langSwitch: {
    toEnglish: string
    toChinese: string
    partialNote: string
    ariaLabel: string
  }
  evidenceLegend: {
    title: string
    items: { level: string; desc: string }[]
  }
  lineNav: {
    ariaSuffix: string
    header: (lineName: string, count: number) => string
  }
  noteMeta: {
    linePos: (lineName: string) => string
    asOf: string
    readMinutes: string
    citedByBefore: string
    citedByAfter: string
  }
  prevNext: {
    ariaLabel: string
    prev: string
    backToLine: (lineName: string) => string
    lineGuide: (lineName: string) => string
    next: (minutes: number) => string
    lineDone: string
  }
  skillTree: {
    minutes: (m: number) => string
    badgeNew: string
    pathsTitle: string
    pathsAside: string
    aboutMinutes: (m: number) => string
    startFromFirst: string
    treeTitle: string
    legendEntry: string
    legendNew: string
    totalLine: (notes: number, minutes: number) => string
    treeIntro: string
    lineSummary: (notes: number, minutes: number) => string
    lineSummaryShort: (notes: number, minutes: number) => string
    lineGuide: (lineName: string) => string
    errataTitle: string
    updatesTitle: string
  }
  readingAids: {
    tocButton: string
    tocTitle: string
    readPct: (pct: number) => string
    next: string
    nextItem: (title: string, minutes: number) => string
    sheetAriaLabel: string
  }
  lineFolder: {
    publishedSuffix: string
    minutesSuffix: string
    newThisWeekSuffix: string
    badgeNewThisWeek: string
    minutes: (m: number) => string
    learnPrefix: string
    nextFirst: string
    nextOr: string
  }
  footer: {
    sourceLabel: string
    builtWithLabel: string
  }
  breadcrumbHome: string
}
