import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AFilters,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFiltersDefaultHide",
  components: {
    AFilters,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const filters = [
      {
        type: "select",
        id: "select1",
        label: "Select 1",
        alwaysVisible: true,
        keyLabel: "label",
        keyId: "id",
        data: [
          {
            label: "Aloha 0",
            id: "aloha_0",
          },
          {
            label: "Aloha 1",
            id: "aloha_1",
          },
        ],
      },
      {
        type: "multiselect",
        id: "select_one_per_group",
        label: "Select one per group",
        alwaysVisible: true,
        keyLabel: "label",
        keyId: "id",
        keyGroup: "group",
        mode: "one_per_group",
        translateData: true,
        data: [
          {
            label: "_TXT_POSITIVE_",
            id: "koeln_true",
            group: "Köln",
          },
          {
            label: "_TXT_NEGATIVE_",
            id: "koeln_false",
            group: "Köln",
          },
          {
            label: "_TXT_NEUTRAL_",
            id: "koeln_null",
            group: "Köln",
          },
          {
            label: "_TXT_POSITIVE_",
            id: "bonn_true",
            group: "Bonn",
          },
          {
            label: "_TXT_NEGATIVE_",
            id: "bonn_false",
            group: "Bonn",
          },
          {
            label: "_TXT_NEUTRAL_",
            id: "bonn_null",
            group: "Bonn",
          },
          {
            label: "_TXT_POSITIVE_",
            id: "duesseldorf_true",
            group: "Düsseldorf",
          },
          {
            label: "_TXT_NEGATIVE_",
            id: "duesseldorf_false",
            group: "Düsseldorf",
          },
          {
            label: "_TXT_NEUTRAL_",
            id: "duesseldorf_null",
            group: "Düsseldorf",
          },
        ],
      },
      {
        type: "text",
        id: "search",
        label: "_A_TABLE_FILTER_SEARCH_",
        alwaysVisible: true,
      },
      {
        type: "text",
        id: "aloha",
        label: "_A_TABLE_FILTER_TEXT_",
      },
      {
        type: "dateRange",
        id: "dateRange",
        label: "_A_TABLE_FILTER_INPUT_DATE_RANGE_",
      },
      {
        type: "numberRange",
        id: "numberRange",
        label: "_A_TABLE_FILTER_INPUT_NUMBER_RANGE_",
      },
      {
        type: "date",
        id: "date",
        label: "_A_TABLE_FILTER_DATE_",
      },
      {
        type: "text",
        id: "aloha1",
        label: "_A_TABLE_FILTER_EXTRA_",
      },
      {
        type: "integerRange",
        id: "integerNumber",
        label: "Integer range",
      },
    ];

    const appliedModel = ref({});
    const unappliedModel = ref({});

    return {
      appliedModel,
      codeHtml,
      codeJs,
      filters,
      unappliedModel,
    };
  },
};
