import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { resolveRelative, FullSlug } from "../../util/path"
import { ComponentChildren } from "preact"
import FolderContent from "./FolderContent"
import { concatenateResources } from "../../util/resources"
import { lineByFolder, notesOfLine, minutesOf, lineMinutes, isNew, cleanDesc } from "../lines"
import style from "../styles/lineFolder.scss"

export default (() => {
  const Fallback = FolderContent()

  const LineFolder: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData, allFiles } = props
    const folder = (fileData.slug ?? "").replace(/\/index$/, "")
    const line = lineByFolder(folder)
    if (!line) return <Fallback {...props} />

    const notes = notesOfLine(allFiles, folder)
    const total = lineMinutes(notes)
    const newCount = notes.filter(isNew).length
    const here = fileData.slug as FullSlug
    const lead = (
      (tree as Root).children.length === 0
        ? fileData.description
        : htmlToJsx(fileData.filePath!, tree)
    ) as ComponentChildren

    const nextLines = line.next
      .map((f) => {
        const l = lineByFolder(f)
        const idx = allFiles.find((x) => x.slug === `${f}/index`)
        return l ? { line: l, desc: cleanDesc(idx?.description) } : undefined
      })
      .filter((x) => x !== undefined)

    return (
      <div class="popover-hint line-folder">
        <div class="lf-head">
          <article class="lf-lead">{lead}</article>
          <dl class="lf-stats">
            <div>
              <dt>篇已发布</dt>
              <dd class="mono">{notes.length}</dd>
            </div>
            <div>
              <dt>分钟读完</dt>
              <dd class="mono">{total}</dd>
            </div>
            {newCount > 0 && (
              <div class="is-new">
                <dt>篇本周新增</dt>
                <dd class="mono">{newCount}</dd>
              </div>
            )}
          </dl>
        </div>

        <ol class="lf-steps">
          {notes.map((n, i) => {
            const kind = isNew(n) ? "new" : i === 0 ? "entry" : "plain"
            return (
              <li class={`lf-step lf-${kind}`}>
                <span class="lf-badge mono" aria-hidden="true">
                  {i + 1}
                </span>
                <a class="lf-card" href={resolveRelative(here, n.slug!)}>
                  <span class="lf-title-row">
                    <span class="lf-title">{n.frontmatter?.title}</span>
                    {isNew(n) && <span class="lf-new">本周新增</span>}
                    <span class="lf-min mono">{minutesOf(n)} 分钟</span>
                  </span>
                  <span class="lf-desc">
                    <b>读完你会弄懂：</b>
                    {cleanDesc(n.description)}
                  </span>
                </a>
              </li>
            )
          })}
        </ol>

        <div class="lf-next">
          {nextLines.map((x, i) => (
            <a class="lf-next-card" href={resolveRelative(here, `${x!.line.folder}/index` as FullSlug)}>
              <span class="lf-next-kicker">{i === 0 ? "读完这条线，接着去" : "或者"}</span>
              <span class="lf-next-name">{x!.line.name} →</span>
              <span class="lf-next-desc">{x!.desc}</span>
            </a>
          ))}
        </div>
      </div>
    )
  }

  LineFolder.css = concatenateResources(style, Fallback.css)
  return LineFolder
}) satisfies QuartzComponentConstructor
