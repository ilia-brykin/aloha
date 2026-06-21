import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AOneCheckbox,
  ATableForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTableFormSticky",
  components: {
    AlohaExample,
    AOneCheckbox,
    ATableForm,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const isActionsSticky = ref(true);

    const columns = Array.from({
      length: 20,
    }, (_, index) => {
      const columnNumber = index + 1;

      return {
        id: `c${ columnNumber }`,
        label: `${ columnNumber }`,
        maxWidth: 120,
        minWidth: 120,
        width: 120,
        formElement: {
          controlsType: "none",
          type: "integer",
        },
      };
    });

    const rows = ref(Array.from({
      length: 6,
    }, (_, rowIndex) => {
      const row = {
        id: rowIndex + 1,
      };

      columns.forEach((column, columnIndex) => {
        row[column.id] = (rowIndex + 1) * 100 + columnIndex + 1;
      });

      return row;
    }));

    return {
      codeHtml,
      codeJs,
      columns,
      isActionsSticky,
      rows,
    };
  },
};
