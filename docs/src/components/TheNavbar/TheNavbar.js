import {
  AButton,
  AIcon,
  ALink,
  AMenuButtonToggle,
  ASelect,
} from "aloha-vue";

import ATranslationAPI from "../../../../src/ATranslation/compositionAPI/ATranslationAPI";
import LanguagesAPI from "./compositionAPI/LanguagesAPI";
import ThemeAPI from "./compositionAPI/ThemeAPI";

export default {
  name: "TheNavbar",
  components: {
    AButton,
    AIcon,
    ALink,
    AMenuButtonToggle,
    ASelect,
  },
  setup() {
    const {
      changeLanguage,
      languages,
      modelLanguage,
    } = LanguagesAPI();

    const {
      themeLabel,
      toggleTheme,
    } = ThemeAPI();

    const {
      isTranslate,
      toggleTranslate,
    } = ATranslationAPI();

    return {
      changeLanguage,
      isTranslate,
      languages,
      modelLanguage,
      themeLabel,
      toggleTheme,
      toggleTranslate,
    };
  },
};
