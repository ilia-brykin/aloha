import AIcon from "../../../../src/AIcon/AIcon";
import AMenuButtonToggle from "../../../../src/AMenu/AMenuButtonToggle";
import ASelect from "../../../../src/ui/ASelect/ASelect";

import LanguagesAPI from "./compositionAPI/LanguagesAPI";

export default {
  name: "TheNavbar",
  components: {
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

    return {
      changeLanguage,
      languages,
      modelLanguage,
    };
  },
};
