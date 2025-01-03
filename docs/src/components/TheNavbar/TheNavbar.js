import ALink from "../../../../src/ALink/ALink";
import AButton from "../../../../src/AButton/AButton";
import AIcon from "../../../../src/AIcon/AIcon";
import ASelect from "../../../../src/ui/ASelect/ASelect";
import AMenuButtonToggle from "../../../../src/AMenu/AMenuButtonToggle/AMenuButtonToggle";

import LanguagesAPI from "./compositionAPI/LanguagesAPI";
import ATranslationAPI from "../../../../src/ATranslation/compositionAPI/ATranslationAPI";

export default {
  name: "TheNavbar",
  components: {
    AButton,
    AIcon,
    AMenuButtonToggle,
    ASelect,
    ALink,
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
