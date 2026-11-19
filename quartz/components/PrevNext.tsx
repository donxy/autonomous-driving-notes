import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"
import { lineOf, lineByFolder, lineName, notesOfLine, minutesOf } from "./lines"
import { uiStrings } from "../i18n/ui"
import style from "./styles/noteChrome.scss"

// 上一篇 / 下一篇：按本线 order；线首回到线目录，线尾接到下一条线
export default (() => {
  const PrevNext: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
    const line = lineOf(fileData.slug)
    if (!line || (fileData.slug ?? "").endsWith("index")) return null
    const t = uiStrings(cfg.locale).prevNext
    const here = fileData.slug as FullSlug
    const notes = notesOfLine(allFiles, line.folder)
    const i = notes.findIndex((n) => n.slug === fileData.slug)
    if (i < 0) return null
    const prev = notes[i - 1]
    const next = notes[i + 1]
    const nextLine = lineByFolder(line.next[0])
    const title = (s: unknown) => String(s ?? "")
    return (
      <nav class="prev-next" aria-label={t.ariaLabel}>
        {prev ? (
          <a href={resolveRelative(here, prev.slug!)}>
            <span class="pn-kicker">{t.prev}</span>
            <span class="pn-title">{title(prev.frontmatter?.title)}</span>
          </a>
        ) : (
          <a href={resolveRelative(here, `${line.folder}/index` as FullSlug)}>
            <span class="pn-kicker">{t.backToLine(lineName(line, cfg.locale))}</span>
            <span class="pn-title">{t.lineGuide(lineName(line, cfg.locale))}</span>
          </a>
        )}
        {next ? (
          <a class="pn-next" href={resolveRelative(here, next.slug!)}>
            <span class="pn-kicker">{t.next(minutesOf(next))}</span>
            <span class="pn-title">{title(next.frontmatter?.title)}</span>
          </a>
        ) : nextLine ? (
          <a class="pn-next" href={resolveRelative(here, `${nextLine.folder}/index` as FullSlug)}>
            <span class="pn-kicker">{t.lineDone}</span>
            <span class="pn-title">{lineName(nextLine, cfg.locale)}</span>
          </a>
        ) : null}
      </nav>
    )
  }
  PrevNext.css = style
  return PrevNext
}) satisfies QuartzComponentConstructor
