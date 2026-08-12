// 明暗主题切换
const STORAGE_KEY = "theme";

function getInitialTheme(): "light" | "dark" {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  }
  if (typeof matchMedia !== "undefined") {
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
}

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
}

export function initTheme() {
  const theme = getInitialTheme();
  applyTheme(theme);
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  const next: "light" | "dark" = isDark ? "light" : "dark";
  applyTheme(next);
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, next);
  }
}
