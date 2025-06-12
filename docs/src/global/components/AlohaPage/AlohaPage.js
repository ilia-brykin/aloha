import {
  APageTabTitle,
  ATranslation,
} from "aloha-vue";

export default {
  name: "AlohaPage",
  components: {
    APageTabTitle,
    ATranslation,
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
    pageTitleH1: {
      type: String,
      required: false,
      default: undefined,
    },
  },
};
