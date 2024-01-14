import ATranslation from "../../../../src/ATranslation/ATranslation";

import TypeAPI from "./compositionAPI/TypeAPI";

export default {
  name: "TypeTranslate",
  components: {
    ATranslation,
  },
  props: {
    tag: {
      type: String,
      required: false,
      default: "strong",
    },
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const {
      typeLocal,
    } = TypeAPI(props);

    return {
      typeLocal,
    };
  },
};
