import AIcon from "../../../src/AIcon/AIcon.vue";

import {
  createNamespacedHelpers,
} from "vuex";

const {
  mapMutations,
} = createNamespacedHelpers("i18n");

export default {
  name: "TheNavbar",
  components: {
    AIcon,
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
      ],
    };
  },
  created() {
    this.changeLanguage();
  },
  methods: {
    changeLanguage() {
      setTimeout(() => {
        this.addTranslation(this.modelLanguage);
      });
    },

    ...mapMutations([
      "addTranslation",
    ]),
  },
};
