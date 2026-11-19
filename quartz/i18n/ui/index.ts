import { UIStrings } from "./types"
import { zhUI } from "./zh"
import { enUI } from "./en"

export type { UIStrings }

// 按构建配置的 locale 取自研组件文案；未知 locale 回退中文（站点默认语言）。
export function uiStrings(locale: string | undefined): UIStrings {
  if (locale && locale.toLowerCase().startsWith("en")) return enUI
  return zhUI
}

export function isEnglish(locale: string | undefined): boolean {
  return !!locale && locale.toLowerCase().startsWith("en")
}
