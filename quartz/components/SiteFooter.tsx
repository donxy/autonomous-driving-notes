import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { uiStrings } from "../i18n/ui"
import style from "./styles/siteFooter.scss"

interface Options {
  links: Record<string, string>
}

// 页脚：衬线站名 + 源码 / RSS / 构建工具（链接文案按构建语言取字符串表，layout 里的中文键只作中文版用）
export default ((opts?: Options) => {
  const SiteFooter: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const t = uiStrings(cfg.locale)
    const label = (text: string, link: string) => {
      if (link.includes("github.com/donxy/autonomous-driving-notes")) return t.footer.sourceLabel
      if (link.includes("quartz.jzhao.xyz")) return t.footer.builtWithLabel
      return text
    }
    return (
      <footer class={classNames(displayClass, "site-footer")}>
        <span class="site-footer-name">{t.siteTitle}</span>
        <ul>
          {Object.entries(opts?.links ?? {}).map(([text, link]) => (
            <li>
              <a href={link}>{label(text, link)}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }
  SiteFooter.css = style
  return SiteFooter
}) satisfies QuartzComponentConstructor
