// 语言偏好记录（方案 §0.3）：首次访问按浏览器语言写入 localStorage，
// 点击切换钮时写入所选语言。这里只记录、不跳转——根路径永远是中文版，不做强制跳转。
function recordLangPreference() {
  try {
    if (!localStorage.getItem("preferred-lang")) {
      const nav = (navigator.language || "zh").toLowerCase()
      localStorage.setItem("preferred-lang", nav.startsWith("en") ? "en" : "zh")
    }
  } catch {}
  document.querySelectorAll<HTMLAnchorElement>("a.lang-switch").forEach((a) => {
    a.addEventListener("click", () => {
      try {
        localStorage.setItem("preferred-lang", a.dataset.langTarget || "zh")
      } catch {}
    })
  })
}

document.addEventListener("nav", recordLangPreference)
recordLangPreference()
