import {
  AButton,
  AIcon,
  ALink,
  AMenuButtonToggle,
  ASelect,
} from "aloha-vue";

import LanguagesAPI from "./compositionAPI/LanguagesAPI";
import ATranslationAPI from "../../../../src/ATranslation/compositionAPI/ATranslationAPI";

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
      isTranslate,
      toggleTranslate,
    } = ATranslationAPI();

    return {
      changeLanguage,
      isTranslate,
      languages,
      modelLanguage,
      toggleTranslate,
    };
  },
};
