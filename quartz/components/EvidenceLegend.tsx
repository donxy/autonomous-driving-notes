import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/noteChrome.scss"

export default (() => {
  const EvidenceLegend: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
    <div class={classNames(displayClass, "evidence-legend")}>
      <h3>证据等级</h3>
      <ul>
        <li>
          <span class="ev ev-ok">已核实</span>一手官方或监管文件
        </li>
        <li>
          <span class="ev ev-co">公司口径</span>公司自述、财报、目标
        </li>
        <li>
          <span class="ev ev-md">媒体转述</span>二手报道、追踪站、汇总
        </li>
        <li>
          <span class="ev ev-un">未核实</span>查不到一手来源
        </li>
      </ul>
    </div>
  )
  EvidenceLegend.css = style
  return EvidenceLegend
}) satisfies QuartzComponentConstructor
