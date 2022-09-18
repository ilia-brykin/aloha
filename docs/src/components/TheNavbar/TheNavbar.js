import AIcon from "../../../../src/AIcon/AIcon";
import AMenuButtonToggle from "../../../../src/AMenu/AMenuButtonToggle";

import frameworks from "../../../../src/const/frameworks";

export default {
  name: "TheNavbar",
  components: {
    AIcon,
    AMenuButtonToggle,
  },
  emits: [
    "change-framework",
  ],
  data() {
    return {
      frameworks: frameworks,
      modelFramework: "bootstrap",
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
      ],
    };
  },
  created() {
    this.changeLanguage();
    this.changeFramework();
  },
  methods: {
    changeLanguage() {
      setTimeout(() => {
        this.$root.$i18n.language = this.modelLanguage;
      });
    },

    changeFramework() {
      setTimeout(() => {
        this.$emit("change-framework", {
          framework: this.modelFramework,
        });
      });
    },
  },
};
