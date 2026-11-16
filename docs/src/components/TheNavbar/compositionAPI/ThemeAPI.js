import {
  computed,
  ref,
} from "vue";

const STORAGE_KEY = "aloha_docs_theme";
const THEMES = ["light", "dark", "auto"];
const THEME_LABELS = {
  light: "_A_DOCS_THEME_LIGHT_",
  dark: "_A_DOCS_THEME_DARK_",
  auto: "_A_DOCS_THEME_AUTO_",
};

export const modelTheme = ref("light");

function applyTheme() {
  document.documentElement.setAttribute("data-a-theme", modelTheme.value);
}

export default function ThemeAPI() {
  const themeLabel = computed(() => THEME_LABELS[modelTheme.value]);

  const toggleTheme = () => {
    const index = THEMES.indexOf(modelTheme.value);
    modelTheme.value = THEMES[(index + 1) % THEMES.length];
    try {
      localStorage.setItem(STORAGE_KEY, modelTheme.value);
    } catch(e) {
      // storage is not available
    }
    applyTheme();
  };

  return {
    themeLabel,
    toggleTheme,
  };
}

export function setThemeFromLocalStorage() {
  let theme;
  try {
    theme = localStorage.getItem(STORAGE_KEY);
  } catch(e) {
    theme = undefined;
  }
  modelTheme.value = THEMES.includes(theme) ? theme : "light";
  applyTheme();
}
