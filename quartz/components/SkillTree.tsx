import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { LINES, notesOfLine, minutesOf, lineMinutes, isNew } from "./lines"
import style from "./styles/skillTree.scss"

// 首页下半部分：阅读路径、技能树、勘误台与最近更新。
// 数据来自笔记 frontmatter（order / badge）与首页 frontmatter（paths / errata / updates），
// 新增或移动笔记后自动更新，篇数和分钟数与文章页一致。

interface PathDef {
  kicker: string
  title: string
  desc: string
  notes: string[]
}
interface Erratum {
  wrong: string
  right: string
}
interface Update {
  date: string
  text: string
}

function shortTitle(f: QuartzPluginData | undefined): string {
  const t = (f?.frontmatter?.title as string | undefined) ?? f?.slug ?? ""
  return t.split(/[：:]/)[0]
}

export default (() => {
  const SkillTree: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const here = fileData.slug as FullSlug
    const fm = (fileData.frontmatter ?? {}) as Record<string, unknown>
    const paths = (fm.paths as PathDef[] | undefined) ?? []
    const errata = (fm.errata as Erratum[] | undefined) ?? []
    const updates = ((fm.updates as Update[] | undefined) ?? []).slice(0, 3)
    const bySlug = new Map(allFiles.map((f) => [f.slug as string, f]))
    const href = (slug: string) => resolveRelative(here, slug as FullSlug)

    const lines = LINES.map((l) => {
      const notes = notesOfLine(allFiles, l.folder)
      return { ...l, notes, minutes: lineMinutes(notes) }
    })
    const totalNotes = lines.reduce((n, l) => n + l.notes.length, 0)
    const totalMinutes = lines.reduce((n, l) => n + l.minutes, 0)

    const node = (n: QuartzPluginData, i: number) => {
      const kind = isNew(n) ? "new" : i === 0 ? "entry" : "plain"
      return (
        <li class={`st-node st-${kind}`}>
          <span class="st-dot" aria-hidden="true"></span>
          <a class="st-card" href={href(n.slug!)}>
            <span class="st-title">{shortTitle(n)}</span>
            <span class="st-meta">
              <span class="mono">{minutesOf(n)} 分钟</span>
              {isNew(n) && <span class="st-new">新</span>}
            </span>
          </a>
        </li>
      )
    }

    return (
      <div class="skill-tree-home">
        {paths.length > 0 && (
          <section id="paths" class="st-paths" aria-labelledby="paths-title">
            <div class="st-section-head">
              <h2 id="paths-title">第一次来？选一条路</h2>
              <span class="st-aside">每条 4 篇，按顺序读，前一篇是后一篇的前置</span>
            </div>
            <div class="st-path-grid">
              {paths.map((p) => {
                const notes = p.notes.map((s) => bySlug.get(s)).filter((x) => x !== undefined)
                const mins = notes.reduce((n, f) => n + minutesOf(f!), 0)
                return (
                  <article class="st-path">
                    <div class="st-path-top">
                      <span class="st-kicker">{p.kicker}</span>
                      <span class="mono st-dim">约 {mins} 分钟</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <ol>
                      {notes.map((n, i) => (
                        <li>
                          <span class="st-num mono" aria-hidden="true">
                            {i + 1}
                          </span>
                          <a href={href(n!.slug!)}>{shortTitle(n)}</a>
                          <span class="mono st-dim">{minutesOf(n!)}′</span>
                        </li>
                      ))}
                    </ol>
                    {notes[0] && (
                      <a class="st-path-go" href={href(notes[0].slug!)}>
                        从第 1 篇开始 →
                      </a>
                    )}
                  </article>
                )
              })}
            </div>
          </section>
        )}

        <section id="tree" class="st-tree" aria-labelledby="tree-title">
          <div class="st-section-head">
            <h2 id="tree-title">技能树</h2>
            <div class="st-legend">
              <span>
                <i class="st-lg st-lg-entry"></i>入口篇
              </span>
              <span>
                <i class="st-lg st-lg-new"></i>本周新增
              </span>
              <span class="mono">
                {totalNotes} 篇 · 约 {totalMinutes} 分钟
              </span>
            </div>
          </div>
          <p class="st-intro">五条线，从上往下读。每个节点标注阅读时长。</p>

          <div class="st-grid">
            {lines.map((l) => (
              <div class="st-col">
                <a class="st-col-head" href={href(`${l.folder}/index`)}>
                  <span class="st-col-name">{l.name}</span>
                  <span class="mono st-dim">
                    {l.notes.length} 篇 · 约 {l.minutes} 分钟
                  </span>
                </a>
                <ol>{l.notes.map(node)}</ol>
              </div>
            ))}
          </div>

          <div class="st-accordion">
            {lines.map((l, i) => (
              <details open={i === 0}>
                <summary>
                  <span class="st-col-name">{l.name}</span>
                  <span class="mono st-dim">
                    {l.notes.length} 篇 · {l.minutes}′
                  </span>
                </summary>
                <ol>{l.notes.map(node)}</ol>
                <a class="st-acc-all" href={href(`${l.folder}/index`)}>
                  {l.name}线导读 →
                </a>
              </details>
            ))}
          </div>
        </section>

        {(errata.length > 0 || updates.length > 0) && (
          <section class="st-bottom">
            {errata.length > 0 && (
              <div class="st-box">
                <h2>勘误台 · 本轮纠正的常见误传</h2>
                <ol>
                  {errata.map((e) => (
                    <li>
                      <del>{e.wrong}</del>
                      <span>{e.right}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {updates.length > 0 && (
              <div class="st-box">
                <h2>最近更新</h2>
                <ol>
                  {updates.map((u) => (
                    <li>
                      <span class="mono st-dim">{u.date}</span>
                      <span>{u.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </section>
        )}
      </div>
    )
  }

  SkillTree.css = style
  return SkillTree
}) satisfies QuartzComponentConstructor
