import readingTime from "reading-time"
import { QuartzPluginData } from "../plugins/vfile"

// 五条线的唯一定义：顺序、显示名、读完之后接着去哪。
// 顶栏、线目录页、技能树、本线导航、上下篇都从这里取。
export interface LineDef {
  folder: string
  name: string
  next: string[]
}

export const LINES: LineDef[] = [
  { folder: "history", name: "历史", next: ["technology"] },
  { folder: "technology", name: "技术", next: ["market", "regulation"] },
  { folder: "market", name: "产业与市场", next: ["companies"] },
  { folder: "companies", name: "公司", next: ["regulation"] },
  { folder: "regulation", name: "安全与监管", next: ["history"] },
]

export function lineOf(slug: string | undefined): LineDef | undefined {
  if (!slug) return undefined
  const top = slug.split("/")[0]
  return LINES.find((l) => l.folder === top)
}

export function lineByFolder(folder: string): LineDef | undefined {
  return LINES.find((l) => l.folder === folder)
}

export function minutesOf(file: QuartzPluginData): number {
  return file.text ? Math.ceil(readingTime(file.text).minutes) : 0
}

export function orderOf(file: QuartzPluginData): number {
  const o = Number(file.frontmatter?.order)
  return Number.isFinite(o) ? o : 999
}

export function isNew(file: QuartzPluginData): boolean {
  return file.frontmatter?.badge === "new"
}

// 某条线里的全部笔记（不含该文件夹的 index），按 order 排序。
export function notesOfLine(allFiles: QuartzPluginData[], folder: string): QuartzPluginData[] {
  return allFiles
    .filter((f) => {
      const s = f.slug ?? ""
      return s.startsWith(folder + "/") && !s.endsWith("/index") && s.split("/").length === 2
    })
    .sort((a, b) => orderOf(a) - orderOf(b))
}

export function lineMinutes(notes: QuartzPluginData[]): number {
  return notes.reduce((n, f) => n + minutesOf(f), 0)
}

// 描述里常以「信息截至 YYYY-MM-DD。」收尾；卡片上已有单独的截至信息，去掉以免重复。
export function cleanDesc(d: string | undefined): string {
  return (d ?? "").replace(/\s*信息截至\s*\d{4}-\d{2}-\d{2}[。.]?\s*$/, "").trim()
}
