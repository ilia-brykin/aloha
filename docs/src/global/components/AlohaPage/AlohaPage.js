import APageTabTitle from "../../../../../src/APageTabTitle/APageTabTitle";

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
