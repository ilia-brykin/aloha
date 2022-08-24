import {
  toRef,
} from "vue";

import APageTabTitleAPI from "../compositionAPI/APageTabTitleAPI";

// @vue/component
export default {
  name: "APageTabTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    APageTabTitleAPI({
      title: toRef(props, "title"),
    });
  },
  render() {
    return "";
  },
};
