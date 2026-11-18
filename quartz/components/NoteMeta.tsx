import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { simplifySlug } from "../util/path"
import { lineOf, notesOfLine, minutesOf } from "./lines"
import { classNames } from "../util/lang"
import style from "./styles/noteChrome.scss"

// 元信息行：信息截至 · N 分钟阅读 · 被 M 篇笔记引用（替代 Quartz 默认的构建/提交日期）
export default (() => {
  const NoteMeta: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
    if (!fileData.text) return null
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
            {line.name}线 · <b class="mono">{pos + 1}</b> / {notes.length}
          </span>
        )}
        {asof && (
          <span>
            信息截至 <b class="mono">{String(asof)}</b>
          </span>
        )}
        <span>
          <b class="mono">{minutesOf(fileData)}</b> 分钟阅读
        </span>
        {refs > 0 && (
          <span>
            被 <b class="mono">{refs}</b> 篇笔记引用
          </span>
        )}
      </p>
    )
  }
  NoteMeta.css = style
  return NoteMeta
}) satisfies QuartzComponentConstructor
