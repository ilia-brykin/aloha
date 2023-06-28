import AButton from "../../../../src/AButton/AButton";
import AIcon from "../../../../src/AIcon/AIcon";
import AMenuButtonToggle from "../../../../src/AMenu/AMenuButtonToggle";
import ASelect from "../../../../src/ui/ASelect/ASelect";

import LanguagesAPI from "./compositionAPI/LanguagesAPI";
import ATranslationAPI from "../../../../src/ATranslation/compositionAPI/ATranslationAPI";

export default {
  name: "TheNavbar",
  components: {
    AButton,
    AIcon,
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
