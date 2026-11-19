#!/usr/bin/env node
// 双语双构建（方案 §3.1）：一次命令产出中文站（public/）与英文站（public/en/）。
// 做法：先按默认配置构建中文；再把 quartz.config.en.ts 临时换入为 quartz.config.ts
// 构建英文（内容目录 content-en、输出 public/en），无论成败都还原中文配置。
import { execFileSync } from "node:child_process"
import { copyFileSync, existsSync, rmSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const configPath = join(root, "quartz.config.ts")
const enConfigPath = join(root, "quartz.config.en.ts")
const backupPath = join(root, "quartz.config.ts.zh-backup")

function build(args) {
  execFileSync("npx", ["quartz", "build", ...args], { cwd: root, stdio: "inherit" })
}

console.log("=== [1/2] 构建中文站（content → public） ===")
build(["-d", "content", "-o", "public"])

console.log("=== [2/2] 构建英文站（content-en → public/en） ===")
if (!existsSync(enConfigPath)) throw new Error("缺少 quartz.config.en.ts")
copyFileSync(configPath, backupPath)
try {
  copyFileSync(enConfigPath, configPath)
  build(["-d", "content-en", "-o", "public/en"])
} finally {
  copyFileSync(backupPath, configPath)
  rmSync(backupPath, { force: true })
  console.log("已还原 quartz.config.ts（中文配置）")
}

console.log("=== 译文同步检查 ===")
execFileSync("node", [join(root, "scripts/check-i18n-sync.mjs")], { cwd: root, stdio: "inherit" })
console.log("=== 双语构建完成：public/（中文） + public/en/（英文） ===")
