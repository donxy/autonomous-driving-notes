import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/siteFooter.scss"

interface Options {
  links: Record<string, string>
}

// 页脚：衬线站名 + 源码 / RSS / 构建工具
export default ((opts?: Options) => {
  const SiteFooter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
    <footer class={classNames(displayClass, "site-footer")}>
      <span class="site-footer-name">无人驾驶技能树</span>
      <ul>
        {Object.entries(opts?.links ?? {}).map(([text, link]) => (
          <li>
            <a href={link}>{text}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
  SiteFooter.css = style
  return SiteFooter
}) satisfies QuartzComponentConstructor
