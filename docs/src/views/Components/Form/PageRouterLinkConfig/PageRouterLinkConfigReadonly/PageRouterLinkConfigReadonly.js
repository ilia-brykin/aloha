import {
  ref,
} from "vue";

import ARouterLinkConfig from "../../../../../../../src/ui/ARouterLinkConfig/ARouterLinkConfig";
import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageRouterLinkConfigReadonly",
  components: {
    AlohaExample,
    ARouterLinkConfig,
  },
  setup() {
    const model1 = ref({
      route: "NotFoundTest",
      param: {
        id: 123,
      },
      query: {
        key: "Aloha",
      },
      target: "_self",
    });
    const model2 = ref({
      route: "PageQuickStart",
    });
    const model3 = ref(undefined);

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
      model3,
    };
  },
};
