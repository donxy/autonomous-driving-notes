import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"
import { lineOf, lineByFolder, notesOfLine, minutesOf } from "./lines"
import style from "./styles/noteChrome.scss"

// 上一篇 / 下一篇：按本线 order；线首回到线目录，线尾接到下一条线
export default (() => {
  const PrevNext: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const line = lineOf(fileData.slug)
    if (!line || (fileData.slug ?? "").endsWith("index")) return null
    const here = fileData.slug as FullSlug
    const notes = notesOfLine(allFiles, line.folder)
    const i = notes.findIndex((n) => n.slug === fileData.slug)
    if (i < 0) return null
    const prev = notes[i - 1]
    const next = notes[i + 1]
    const nextLine = lineByFolder(line.next[0])
    const title = (s: unknown) => String(s ?? "")
    return (
      <nav class="prev-next" aria-label="上一篇与下一篇">
        {prev ? (
          <a href={resolveRelative(here, prev.slug!)}>
            <span class="pn-kicker">← 上一篇</span>
            <span class="pn-title">{title(prev.frontmatter?.title)}</span>
          </a>
        ) : (
          <a href={resolveRelative(here, `${line.folder}/index` as FullSlug)}>
            <span class="pn-kicker">← 返回{line.name}线</span>
            <span class="pn-title">{line.name}线导读</span>
          </a>
        )}
        {next ? (
          <a class="pn-next" href={resolveRelative(here, next.slug!)}>
            <span class="pn-kicker">下一篇 · {minutesOf(next)} 分钟 →</span>
            <span class="pn-title">{title(next.frontmatter?.title)}</span>
          </a>
        ) : nextLine ? (
          <a class="pn-next" href={resolveRelative(here, `${nextLine.folder}/index` as FullSlug)}>
            <span class="pn-kicker">这条线读完了，接着去 →</span>
            <span class="pn-title">{nextLine.name}</span>
          </a>
        ) : null}
      </nav>
    )
  }
  PrevNext.css = style
  return PrevNext
}) satisfies QuartzComponentConstructor
