import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"
import { lineOf, notesOfLine, minutesOf } from "./lines"
import script from "./scripts/readingAids.inline"
import style from "./styles/noteChrome.scss"

// 阅读进度条（全端）+ 手机端目录面板（底部弹出）
export default (() => {
  const ReadingAids: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const slug = fileData.slug ?? ""
    if (slug === "index" || slug.endsWith("/index") || slug.startsWith("tags")) return null
    const toc = (fileData.toc ?? []) as { depth: number; text: string; slug: string }[]
    const minDepth = toc.reduce((m, t) => Math.min(m, t.depth), 9)
    const entries = toc.filter((t) => t.depth <= minDepth + 1)
    const line = lineOf(slug)
    const notes = line ? notesOfLine(allFiles, line.folder) : []
    const i = notes.findIndex((n) => n.slug === slug)
    const next = i >= 0 ? notes[i + 1] : undefined
    return (
      <div class="reading-aids">
        <div class="reading-progress" aria-hidden="true">
          <span></span>
        </div>
        {entries.length > 1 && (
          <>
            <button type="button" class="toc-fab" aria-haspopup="dialog">
              目录
            </button>
            <dialog class="toc-sheet" aria-label="本页目录">
              <div class="toc-sheet-grip" aria-hidden="true"></div>
              <div class="toc-sheet-head">
                <span>本页目录</span>
                <span class="mono toc-sheet-pct">已读 0%</span>
              </div>
              <ol>
                {entries.map((t) => (
                  <li class={t.depth > minDepth ? "is-sub" : ""}>
                    <a href={`#${t.slug}`} data-for={t.slug}>
                      {t.text}
                    </a>
                  </li>
                ))}
              </ol>
              {next && (
                <a class="toc-sheet-next" href={resolveRelative(slug as FullSlug, next.slug!)}>
                  <span>下一篇</span>
                  <b>
                    {String(next.frontmatter?.title ?? "").split(/[：:]/)[0]} · {minutesOf(next)} 分钟 →
                  </b>
                </a>
              )}
            </dialog>
          </>
        )}
      </div>
    )
  }
  ReadingAids.css = style
  ReadingAids.afterDOMLoaded = script
  return ReadingAids
}) satisfies QuartzComponentConstructor
