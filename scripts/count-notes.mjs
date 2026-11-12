// 构建前自动校准首页的笔记计数。
// 口径：content/ 下全部 .md，排除首页 index.md 本身（时间线计入笔记）。
// 用法：node scripts/count-notes.mjs（或 npm run count-notes）。
// 发布流程在推送前运行本脚本校准并提交 index.md；CI 只做 npx quartz build 渲染，
// 不改源码，因此计数以源文件为准、由本脚本保证不漂移。
import { readdirSync, readFileSync, writeFileSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const contentDir = join(root, "content")

function countMd(dir) {
  let n = 0
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) n += countMd(join(dir, e.name))
    else if (e.name.endsWith(".md") && e.name !== "index.md") n += 1
  }
  return n
}

const count = countMd(contentDir)
const indexPath = join(contentDir, "index.md")
let text = readFileSync(indexPath, "utf8")
const before = text
text = text
  .replace(/「\d+ 篇笔记」/g, `「${count} 篇笔记」`)
  .replace(/<span>\d+ 篇笔记<\/span>/g, `<span>${count} 篇笔记</span>`)
  .replace(/全站索引（\d+ 篇/g, `全站索引（${count} 篇`)
if (text !== before) writeFileSync(indexPath, text)
console.log(`[count-notes] 笔记数 = ${count}（不含首页）${text !== before ? "，已更新 index.md" : "，与 index.md 一致"}`)
