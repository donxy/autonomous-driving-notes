#!/usr/bin/env node
// 译文待同步检查（方案 §1.4）：逐篇比对 content/ 与 content-en/——
// 缺译文、或英文稿的 asof/updated 落后于中文稿的，列入「译文待同步」。
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

function frontmatterField(text, field) {
  const m = text.match(new RegExp(`^${field}:\\s*(\\S+)`, "m"))
  return m ? m[1].replace(/["']/g, "") : undefined
}

const pending = []
const missing = []
for (const rel of mdFiles(zhDir)) {
  const enPath = join(enDir, rel)
  if (!existsSync(enPath)) {
    missing.push(rel)
    continue
  }
  const zh = readFileSync(join(zhDir, rel), "utf8")
  const en = readFileSync(enPath, "utf8")
  for (const field of ["asof", "updated"]) {
    const z = frontmatterField(zh, field)
    const e = frontmatterField(en, field)
    if (z && e !== z) pending.push(`${rel}（${field}：中文 ${z} ≠ 英文 ${e ?? "缺失"}）`)
  }
}

if (missing.length) console.log(`未译（缺英文稿）${missing.length} 篇：\n  ${missing.join("\n  ")}`)
if (pending.length) console.log(`译文待同步 ${pending.length} 篇：\n  ${pending.join("\n  ")}`)
console.log(`译文待同步：${pending.length} 篇；未译：${missing.length} 篇`)
