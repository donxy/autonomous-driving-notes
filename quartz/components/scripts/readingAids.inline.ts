function setupReadingAids() {
  const bar = document.querySelector<HTMLElement>(".reading-progress > span")
  const fab = document.querySelector<HTMLButtonElement>(".toc-fab")
  const sheet = document.querySelector<HTMLDialogElement>(".toc-sheet")
  const pct = document.querySelector<HTMLElement>(".toc-sheet-pct")

  const progress = () => {
    const doc = document.documentElement
    const max = doc.scrollHeight - window.innerHeight
    return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
  }

  const onScroll = () => {
    if (bar) bar.style.width = `${(progress() * 100).toFixed(1)}%`
  }

  const markCurrent = () => {
    if (!sheet) return
    const links = Array.from(sheet.querySelectorAll<HTMLAnchorElement>("a[data-for]"))
    let current: HTMLAnchorElement | undefined
    for (const a of links) {
      const h = document.getElementById(a.dataset.for ?? "")
      if (h && h.getBoundingClientRect().top < window.innerHeight * 0.3) current = a
    }
    links.forEach((a) => a.classList.toggle("is-current", a === current))
    if (pct) pct.textContent = `已读 ${Math.round(progress() * 100)}%`
  }

  const open = () => {
    if (!sheet) return
    markCurrent()
    sheet.showModal()
    const target =
      sheet.querySelector<HTMLElement>("a.is-current") ?? sheet.querySelector<HTMLElement>("a")
    target?.focus()
  }

  const onSheetClick = (e: MouseEvent) => {
    if (!sheet) return
    const target = e.target as HTMLElement
    if (target === sheet) {
      sheet.close()
      return
    }
    if (target.closest("a")) sheet.close()
  }

  // Quartz 的搜索快捷键会拦截 Esc，这里自己处理，保证 Esc 能关掉面板
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape" && sheet?.open) {
      e.stopPropagation()
      sheet.close()
      fab?.focus()
    }
  }

  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })
  window.addCleanup(() => window.removeEventListener("scroll", onScroll))
  if (fab && sheet) {
    fab.addEventListener("click", open)
    sheet.addEventListener("click", onSheetClick)
    sheet.addEventListener("keydown", onKey)
    window.addCleanup(() => {
      sheet.removeEventListener("keydown", onKey)
      fab.removeEventListener("click", open)
      sheet.removeEventListener("click", onSheetClick)
      if (sheet.open) sheet.close()
    })
  }
}

document.addEventListener("nav", setupReadingAids)
