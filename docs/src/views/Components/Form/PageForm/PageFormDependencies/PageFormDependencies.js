import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFormDependencies",
  components: {
    AForm,
    AlohaExample,
  },
  setup() {
    const data = [
      {
        type: "switch",
        id: "hasDetails",
        label: "_A_FORM_EXAMPLE_SHOW_DETAILS_",
      },
      {
        type: "radio",
        id: "detailsType",
        label: "_A_FORM_EXAMPLE_DETAILS_TYPE_",
        translateData: true,
        data: [
          {
            label: "_A_FORM_EXAMPLE_BASIC_",
            value: "basic",
          },
          {
            label: "_A_FORM_EXAMPLE_ADVANCED_",
            value: "advanced",
          },
        ],
      },
      {
        type: "text",
        id: "details",
        label: "_A_FORM_EXAMPLE_DETAILS_",
        dependencies: {
          id: "hasDetails",
          value: true,
        },
      },
      {
        type: "dateRange",
        id: "period",
        label: "_A_FORM_EXAMPLE_PERIOD_",
        dependencies: [
          {
            id: "hasDetails",
            value: true,
          },
          {
            id: "detailsType",
            value: "advanced",
          },
        ],
      },
    ];
    const model = ref({
      hasDetails: false,
      detailsType: "basic",
    });

    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      data,
      model,
    };
  },
};
