import {
  APageTabTitle,
} from "aloha-vue";

export default {
  name: "AlohaPage",
  components: {
    APageTabTitle,
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
};
