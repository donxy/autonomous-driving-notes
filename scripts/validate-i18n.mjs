#!/usr/bin/env node
// 译稿自动校验（方案 §3.4）：逐篇比对中文原文与英文译稿的
// 数字、日期、外链 URL、wikilink 目标与表格行数；输出不一致清单供人工复核。
// 注意：中文数字词（如「三家」）、约数（「400 多辆」）会产生假阳性，需人工判读。
import { readdirSync, readFileSync, existsSync } from "node:fs"
import { join, relative } from "node:path"
import { fileURLToPath } from "node:url"
import { dirname } from "node:path"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const zhDir = join(root, "content")
const enDir = join(root, "content-en")

function mdFiles(dir, base = dir) {
  const out = []
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...mdFiles(p, base))
    else if (e.name.endsWith(".md")) out.push(relative(base, p))
  }
  return out
}

const norm = (s) => s.replace(/,/g, "").replace(/．/g, ".")
function numbers(text) {
  const t = norm(text.replace(/％/g, "%"))
  const found = t.match(/\d+(?:\.\d+)?%?/g) ?? []
  return found.map((x) => x.replace(/%$/, "")).sort()
}
function dates(text) {
  const out = []
  for (const m of text.matchAll(/(\d{4})-(\d{2})-(\d{2})/g)) out.push(`${m[1]}-${m[2]}-${m[3]}`)
  for (const m of text.matchAll(/(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/g))
    out.push(`${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`)
  for (const m of text.matchAll(/(\d{4})\s*年\s*(\d{1,2})\s*月(?!\s*\d)/g))
    out.push(`${m[1]}-${m[2].padStart(2, "0")}`)
  for (const m of text.matchAll(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})/g)) {
    const months = { January: "01", February: "02", March: "03", April: "04", May: "05", June: "06", July: "07", August: "08", September: "09", October: "10", November: "11", December: "12" }
    out.push(`${m[3]}-${months[m[1]]}-${m[2].padStart(2, "0")}`)
  }
  for (const m of text.matchAll(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/g)) {
    const months = { January: "01", February: "02", March: "03", April: "04", May: "05", June: "06", July: "07", August: "08", September: "09", October: "10", November: "11", December: "12" }
    out.push(`${m[2]}-${months[m[1]]}`)
  }
  return out.sort()
}
function links(text) {
  const out = []
  for (const m of text.matchAll(/\]\((https?:[^)\s]+)\)/g)) out.push(m[1])
  for (const m of text.matchAll(/\[\[([^\]|#]+)/g)) out.push(`[[${m[1].trim()}]]`)
  return out.sort()
}
function tableRows(text) {
  return text.split("\n").filter((l) => l.trim().startsWith("|")).length
}
function diffMultiset(a, b) {
  const count = (arr) => arr.reduce((m, x) => m.set(x, (m.get(x) ?? 0) + 1), new Map())
  const ca = count(a), cb = count(b)
  const only = []
  for (const [k, v] of ca) { const d = v - (cb.get(k) ?? 0); if (d > 0) only.push(`${k}×${d}`) }
  return only
}

let bad = 0
for (const rel of mdFiles(zhDir)) {
  const enPath = join(enDir, rel)
  if (!existsSync(enPath)) { console.log(`✗ ${rel}：缺英文稿`); bad++; continue }
  const zh = readFileSync(join(zhDir, rel), "utf8")
  const en = readFileSync(enPath, "utf8")
  const problems = []
  const zn = numbers(zh), enN = numbers(en)
  const nOnlyZh = diffMultiset(zn, enN), nOnlyEn = diffMultiset(enN, zn)
  if (nOnlyZh.length || nOnlyEn.length)
    problems.push(`数字差异 仅原文[${nOnlyZh.join(", ")}] 仅译稿[${nOnlyEn.join(", ")}]`)
  const zd = dates(zh), ed = dates(en)
  const dOnlyZh = diffMultiset(zd, ed), dOnlyEn = diffMultiset(ed, zd)
  if (dOnlyZh.length || dOnlyEn.length)
    problems.push(`日期差异 仅原文[${dOnlyZh.join(", ")}] 仅译稿[${dOnlyEn.join(", ")}]`)
  const zl = links(zh), el = links(en)
  const lOnlyZh = diffMultiset(zl, el), lOnlyEn = diffMultiset(el, zl)
  if (lOnlyZh.length || lOnlyEn.length)
    problems.push(`链接差异 仅原文[${lOnlyZh.join(", ")}] 仅译稿[${lOnlyEn.join(", ")}]`)
  const zt = tableRows(zh), et = tableRows(en)
  if (zt !== et) problems.push(`表格行数 原文 ${zt} ≠ 译稿 ${et}`)
  if (problems.length) { bad++; console.log(`✗ ${rel}\n    ${problems.join("\n    ")}`) }
  else console.log(`✓ ${rel}`)
}
console.log(bad === 0 ? "\n全部通过" : `\n${bad} 篇有差异（待人工复核）`)
