import {
  ref,
} from "vue";

import ARouterLinkConfig from "../../../../../../../src/ui/ARouterLinkConfig/ARouterLinkConfig";
import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageRouterLinkConfigType",
  components: {
    AlohaExample,
    ARouterLinkConfig,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      model1,
      model2,
    };
  },
};
