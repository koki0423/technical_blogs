(() => {
  const storageKey = "theme";
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  if (!toggle) return;

  const currentTheme = () => root.dataset.theme || (mediaQuery.matches ? "dark" : "light");

  const updateToggle = () => {
    const isDark = currentTheme() === "dark";
    const icon = toggle.querySelector(".theme-toggle-icon");
    const label = toggle.querySelector(".theme-toggle-text");

    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "ライトモードに切り替え" : "ダークモードに切り替え");
    if (icon) icon.textContent = isDark ? "☀" : "☾";
    if (label) label.textContent = isDark ? "Light" : "Dark";
  };

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    try {
      localStorage.setItem(storageKey, theme);
    } catch (_) {}
    updateToggle();
  };

  toggle.addEventListener("click", () => setTheme(currentTheme() === "dark" ? "light" : "dark"));
  mediaQuery.addEventListener("change", () => {
    if (!root.dataset.theme) updateToggle();
  });

  updateToggle();
})();
