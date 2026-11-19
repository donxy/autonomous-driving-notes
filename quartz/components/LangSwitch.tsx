import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug, SimpleSlug } from "../util/path"
import { uiStrings, isEnglish } from "../i18n/ui"
import { LINES } from "./lines"
import langSwitchScript from "./scripts/langswitch.inline"
import style from "./styles/langSwitch.scss"

// 语言切换钮（方案 §0.2）：跳到同一页面的另一语言版本；
// 英文站是同构的第二棵内容树，构建在 /en/ 下，因此用「虚拟 slug」做路径运算：
// 英文页的虚拟 slug 带 en/ 前缀，resolveRelative 只做纯路径数学，不要求目标页存在于本次构建。
// 没有对应页的（标签页、404 等）回退到另一语言的首页，并显示旁注。
export default (() => {
  const LangSwitch: QuartzComponent = ({ cfg, fileData }: QuartzComponentProps) => {
    const locale = cfg.locale
    const en = isEnglish(locale)
    const t = uiStrings(locale)
    const slug = (fileData.slug ?? "index") as string

    const firstSegment = slug.split("/")[0]
    const hasCounterpart =
      slug === "index" || LINES.some((l) => l.folder === firstSegment)

    const virtualCurrent = (en ? `en/${slug}` : slug) as FullSlug
    const virtualTarget = (
      hasCounterpart ? (en ? slug : `en/${slug}`) : en ? "index" : "en/index"
    ) as SimpleSlug
    const href = resolveRelative(virtualCurrent, virtualTarget)

    return (
      <span class="lang-switch-wrap">
        <a
          class="lang-switch"
          href={href}
          data-lang-target={en ? "zh" : "en"}
          aria-label={t.langSwitch.ariaLabel}
        >
          <span class={en ? "" : "is-current"}>中文</span>
          <span class="lang-switch-sep">/</span>
          <span class={en ? "is-current" : ""}>EN</span>
        </a>
        {!hasCounterpart && <span class="lang-switch-note">{t.langSwitch.partialNote}</span>}
      </span>
    )
  }

  LangSwitch.css = style
  LangSwitch.afterDOMLoaded = langSwitchScript
  return LangSwitch
}) satisfies QuartzComponentConstructor
