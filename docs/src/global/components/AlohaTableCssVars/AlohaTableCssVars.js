import AlohaHighlightjs from "../AlohaHighlightjs/AlohaHighlightjs";
import {
  ATable,
} from "aloha-vue";

import CssVarsAPI from "./compositionAPI/CssVarsAPI";
import SourceAPI from "./compositionAPI/SourceAPI";

export default {
  name: "AlohaTableCssVars",
  components: {
    AlohaHighlightjs,
    ATable,
  },
  props: {
    /**
     * SCSS files relative to "scss/" without extension, e.g. "components/ATabs" or ["utils/modal", "components/AModal"].
     */
    files: {
      type: [String, Array],
      required: false,
      default: undefined,
    },

    /**
     * SCSS file content (import "...scss?raw") or an Array of them. The variables are read from
     * the component tokens at the end of the file: ":where(...) { --a_x: value; // description }".
     */
    source: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    tableLabel: {
      type: String,
      required: false,
      default: "CSS variables",
    },
  },
  setup(props) {
    const {
      sourceLocal,
    } = SourceAPI(props);

    const {
      codeExample,
      columns,
      cssVars,
      selector,
    } = CssVarsAPI(props, {
      source: sourceLocal,
    });

    return {
      codeExample,
      columns,
      cssVars,
      selector,
    };
  },
};
