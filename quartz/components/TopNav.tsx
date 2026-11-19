import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot, resolveRelative, FullSlug } from "../util/path"
import { concatenateResources } from "../util/resources"
import Search from "./Search"
import Darkmode from "./Darkmode"
import ReaderMode from "./ReaderMode"
import { LINES, lineOf } from "./lines"
import style from "./styles/topNav.scss"

// 全宽顶栏：Logo + 站名、五条线、搜索、深浅色、阅读模式。
// 由 renderPage 渲染在 #quartz-root 之外，因此横跨整页。
export default (() => {
  const SearchC = Search()
  const DarkmodeC = Darkmode()
  const ReaderModeC = ReaderMode()

  const TopNav: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData } = props
    const here = fileData.slug as FullSlug
    const current = lineOf(fileData.slug)
    return (
      <header class="site-topbar">
        <div class="site-topbar-inner">
          <a class="site-brand" href={pathToRoot(here)}>
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <path d="M14 25V15" />
              <path d="M14 15L7 8" />
              <path d="M14 15l7-7" />
              <path d="M14 15V5" />
              <circle cx="7" cy="7" r="2.2" fill="var(--light)" />
              <circle cx="21" cy="7" r="2.2" fill="var(--light)" />
              <circle class="brand-tip" cx="14" cy="4" r="2.2" />
            </svg>
            <span>无人驾驶技能树</span>
          </a>
          <nav class="site-lines" aria-label="五条线">
            {LINES.map((l) => (
              <a
                href={resolveRelative(here, `${l.folder}/index` as FullSlug)}
                class={current?.folder === l.folder ? "is-current" : ""}
                aria-current={current?.folder === l.folder ? "true" : undefined}
              >
                {l.name}
              </a>
            ))}
          </nav>
          <div class="site-tools">
            <SearchC {...props} />
            <DarkmodeC {...props} />
            <ReaderModeC {...props} />
          </div>
        </div>
      </header>
    )
  }

  TopNav.css = concatenateResources(style, SearchC.css, DarkmodeC.css, ReaderModeC.css)
  TopNav.beforeDOMLoaded = concatenateResources(
    SearchC.beforeDOMLoaded,
    DarkmodeC.beforeDOMLoaded,
    ReaderModeC.beforeDOMLoaded,
  )
  TopNav.afterDOMLoaded = concatenateResources(
    SearchC.afterDOMLoaded,
    DarkmodeC.afterDOMLoaded,
    ReaderModeC.afterDOMLoaded,
  )
  return TopNav
}) satisfies QuartzComponentConstructor
