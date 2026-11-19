// 英文构建配置：与 quartz.config.ts 仅三处不同（pageTitle / locale / baseUrl 带 /en）。
// 由 scripts/build-bilingual.mjs 在英文构建时临时换入，构建后立即还原。
// 修改中文配置时请同步修改本文件（diff 应恒为这三处）。
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import * as Component from "./quartz/components"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Self-Driving Skill Tree",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    locale: "en-US",
    baseUrl: "donxy.github.io/autonomous-driving-notes/en",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      // 系统字体栈（在 custom.scss 里定义），不依赖 Google Fonts
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "Songti SC",
        body: "PingFang SC",
        code: "SF Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f5f0",
          lightgray: "#e7e1d6",
          gray: "#5f584d",
          darkgray: "#453f36",
          dark: "#211d18",
          secondary: "#175e63",
          tertiary: "#a85a20",
          highlight: "rgba(23, 94, 99, 0.12)",
          textHighlight: "#ffe58a88",
        },
        darkMode: {
          light: "#14161a",
          lightgray: "#2a2e35",
          gray: "#a39e94",
          darkgray: "#d6d2c9",
          dark: "#edeae3",
          secondary: "#7fb5ba",
          tertiary: "#e2a05a",
          highlight: "rgba(127, 181, 186, 0.14)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.Evidence(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({
        beforeBody: [Component.Breadcrumbs({ rootName: "首页" }), Component.ArticleTitle()],
        pageBody: Component.LineFolder(),
      }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
