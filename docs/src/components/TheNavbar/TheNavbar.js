import AIcon from "../../../../src/AIcon/AIcon";
import AMenuButtonToggle from "../../../../src/AMenu/AMenuButtonToggle";

import {
  setLanguage,
} from "../../../../src/ATranslation/compositionAPI/ATranslationAPI";

export default {
  name: "TheNavbar",
  components: {
    AIcon,
    AMenuButtonToggle,
  },
  data() {
    return {
      modelLanguage: "de",
      languages: [
        {
          label: "Deutsch",
          value: "de",
        },
        {
          label: "English",
          value: "en",
        },
        {
          label: "Русский",
          value: "ru",
        },
        {
          label: "Hrvatski",
          value: "hr",
        },
        {
          label: "Francais",
          value: "fr",
        },
        {
          label: "arabisch",
          value: "ar",
        },
      ],
    };
  },
  methods: {
    changeLanguage() {
      setTimeout(() => {
        setLanguage(this.modelLanguage);
      });
    },
  },
};
