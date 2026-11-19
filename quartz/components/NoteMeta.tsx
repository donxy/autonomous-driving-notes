import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { simplifySlug } from "../util/path"
import { lineOf, lineName, notesOfLine, minutesOf } from "./lines"
import { uiStrings } from "../i18n/ui"
import { classNames } from "../util/lang"
import style from "./styles/noteChrome.scss"

// 元信息行：信息截至 · N 分钟阅读 · 被 M 篇笔记引用（替代 Quartz 默认的构建/提交日期）
export default (() => {
  const NoteMeta: QuartzComponent = ({ fileData, allFiles, displayClass, cfg }: QuartzComponentProps) => {
    if (!fileData.text) return null
    const t = uiStrings(cfg.locale)
    const asof = fileData.frontmatter?.asof as string | undefined
    const slug = simplifySlug(fileData.slug!)
    const refs = allFiles.filter(
      (f) => f.links?.includes(slug) && !(f.slug ?? "").endsWith("index") && f.slug !== fileData.slug,
    ).length
    const line = lineOf(fileData.slug)
    const notes = line ? notesOfLine(allFiles, line.folder) : []
    const pos = notes.findIndex((n) => n.slug === fileData.slug)
    return (
      <p class={classNames(displayClass, "note-meta")}>
        {line && pos >= 0 && (
          <span class="note-meta-pos">
            {t.noteMeta.linePos(lineName(line, cfg.locale))} · <b class="mono">{pos + 1}</b> / {notes.length}
          </span>
        )}
        {asof && (
          <span>
            {t.noteMeta.asOf} <b class="mono">{String(asof)}</b>
          </span>
        )}
        <span>
          <b class="mono">{minutesOf(fileData)}</b> {t.noteMeta.readMinutes}
        </span>
        {refs > 0 && (
          <span>
            {t.noteMeta.citedByBefore} <b class="mono">{refs}</b> {t.noteMeta.citedByAfter}
          </span>
        )}
      </p>
    )
  }
  NoteMeta.css = style
  return NoteMeta
}) satisfies QuartzComponentConstructor
