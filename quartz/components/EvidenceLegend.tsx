import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { uiStrings } from "../i18n/ui"
import style from "./styles/noteChrome.scss"

const LEVEL_CLASS = ["ok", "co", "md", "un"]

export default (() => {
  const EvidenceLegend: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const t = uiStrings(cfg.locale).evidenceLegend
    return (
      <div class={classNames(displayClass, "evidence-legend")}>
        <h3>{t.title}</h3>
        <ul>
          {t.items.map((item, i) => (
            <li>
              <span class={`ev ev-${LEVEL_CLASS[i]}`}>{item.level}</span>
              {item.desc}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  EvidenceLegend.css = style
  return EvidenceLegend
}) satisfies QuartzComponentConstructor
