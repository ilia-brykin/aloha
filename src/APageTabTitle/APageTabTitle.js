import APageTabTitleAPI from "../compositionAPI/APageTabTitleAPI";

// @vue/component
export default {
  name: "APageTabTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    APageTabTitleAPI(props);
  },
  render() {
    return "";
  },
};
