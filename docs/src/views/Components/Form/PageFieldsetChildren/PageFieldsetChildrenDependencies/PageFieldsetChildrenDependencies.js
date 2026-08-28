import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AFieldset,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFieldsetChildrenDependencies",
  components: {
    AFieldset,
    AlohaExample,
  },
  setup() {
    const children = [
      {
        type: "switch",
        label: "Show details",
        id: "showDetails",
      },
      {
        type: "radio",
        label: "Detail type",
        id: "detailType",
        data: [
          {
            label: "Basic",
            value: "basic",
          },
          {
            label: "Advanced",
            value: "advanced",
          },
        ],
      },
      {
        type: "text",
        label: "Details",
        id: "details",
        dependencies: {
          id: "showDetails",
          value: true,
        },
      },
      {
        type: "dateRange",
        label: "Period",
        id: "period",
        dependencies: {
          id: "showDetails",
          value: true,
        },
      },
      {
        type: "template",
        id: "advancedHint",
        html: "Advanced details are enabled.",
        dependencies: [
          {
            id: "showDetails",
            value: true,
          },
          {
            id: "detailType",
            value: "advanced",
          },
        ],
      },
    ];
    const model = ref({
      showDetails: false,
      detailType: "basic",
    });

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      children,
      codeHtml,
      codeJs,
      model,
    };
  },
};
