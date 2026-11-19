import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"
import { lineOf, notesOfLine, minutesOf } from "./lines"
import { classNames } from "../util/lang"
import style from "./styles/noteChrome.scss"

// 左栏：本线导航（只在五条线里的笔记页显示）
export default (() => {
  const LineNav: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
    const line = lineOf(fileData.slug)
    if (!line || (fileData.slug ?? "").endsWith("/index")) return null
    const here = fileData.slug as FullSlug
    const notes = notesOfLine(allFiles, line.folder)
    return (
      <nav class={classNames(displayClass, "line-nav")} aria-label={`${line.name}线`}>
        <a class="line-nav-head" href={resolveRelative(here, `${line.folder}/index` as FullSlug)}>
          {line.name}线 · {notes.length} 篇
        </a>
        <ol>
          {notes.map((n, i) => {
            const cur = n.slug === fileData.slug
            return (
              <li>
                <a
                  href={resolveRelative(here, n.slug!)}
                  class={cur ? "is-current" : ""}
                  aria-current={cur ? "page" : undefined}
                >
                  <span>
                    {i + 1} · {(n.frontmatter?.title as string).split(/[：:]/)[0]}
                  </span>
                  <span class="mono">{minutesOf(n)}′</span>
                </a>
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
  LineNav.css = style
  return LineNav
}) satisfies QuartzComponentConstructor
