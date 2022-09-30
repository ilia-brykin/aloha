import AIcon from "../../../../src/AIcon/AIcon";
import AMenuButtonToggle from "../../../../src/AMenu/AMenuButtonToggle";

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
      ],
    };
  },
  created() {
    this.changeLanguage();
  },
  methods: {
    changeLanguage() {
      setTimeout(() => {
        this.$root.$i18n.language = this.modelLanguage;
      });
    },
  },
};
