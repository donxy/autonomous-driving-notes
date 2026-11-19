import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { resolveRelative, FullSlug } from "../../util/path"
import { ComponentChildren } from "preact"
import FolderContent from "./FolderContent"
import { concatenateResources } from "../../util/resources"
import { lineByFolder, lineName, notesOfLine, minutesOf, lineMinutes, isNew, cleanDesc } from "../lines"
import { uiStrings } from "../../i18n/ui"
import style from "../styles/lineFolder.scss"

export default (() => {
  const Fallback = FolderContent()

  const LineFolder: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData, allFiles, cfg } = props
    const t = uiStrings(cfg.locale).lineFolder
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
              <dt>{t.publishedSuffix}</dt>
              <dd class="mono">{notes.length}</dd>
            </div>
            <div>
              <dt>{t.minutesSuffix}</dt>
              <dd class="mono">{total}</dd>
            </div>
            {newCount > 0 && (
              <div class="is-new">
                <dt>{t.newThisWeekSuffix}</dt>
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
                    {isNew(n) && <span class="lf-new">{t.badgeNewThisWeek}</span>}
                    <span class="lf-min mono">{t.minutes(minutesOf(n))}</span>
                  </span>
                  <span class="lf-desc">
                    <b>{t.learnPrefix}</b>
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
              <span class="lf-next-kicker">{i === 0 ? t.nextFirst : t.nextOr}</span>
              <span class="lf-next-name">{lineName(x!.line, cfg.locale)} →</span>
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
