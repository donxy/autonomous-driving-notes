import { QuartzTransformerPlugin } from "../types"
import { Root, Html } from "mdast"
import { findAndReplace } from "mdast-util-find-and-replace"

// 证据标签：把正文里的【已核实】【公司口径】【媒体转述】【未核实】渲染成统一的标签。
// 冒号后可带最多 30 字的后缀，例如【已核实：工信部】→「已核实 · 工信部」。
// 代码块与行内代码不是 text 节点，不会被处理。
const LEVELS: Record<string, string> = {
  已核实: "ok",
  公司口径: "co",
  媒体转述: "md",
  未核实: "un",
  // 英文版固定译法（术语表）：与中文标签同级、同 CSS 类
  Verified: "ok",
  "Company claim": "co",
  "Media report": "md",
  Unverified: "un",
}

const PATTERN =
  /【(已核实|公司口径|媒体转述|未核实|Verified|Company claim|Media report|Unverified)(?:[：:]\s*([^】]{1,30}))?】/g

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export function evidenceTag(level: string, suffix?: string): string {
  const cls = LEVELS[level]
  const label = suffix ? `${level} · ${escapeHtml(suffix.trim())}` : level
  return `<span class="ev ev-${cls}">${label}</span>`
}

export const Evidence: QuartzTransformerPlugin = () => {
  return {
    name: "Evidence",
    markdownPlugins() {
      return [
        () => (tree: Root) => {
          findAndReplace(tree, [
            [
              PATTERN,
              (_match: string, level: string, suffix?: string): Html => ({
                type: "html",
                value: evidenceTag(level, suffix),
              }),
            ],
          ])
        },
      ]
    },
  }
}
