import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJsonEditor,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorHooks",
  components: {
    AJsonEditor,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref({
      title: "Newsletter",
      active: true,
      sendAt: "09:00",
      recipients: ["anna@example.com", "ben@example.com"],
      layout: {
        columns: 2,
        theme: "light",
      },
    });
    const log = ref([]);

    // the value of a new element: a new recipient gets an address
    const beforeAdd = ({ tokens }) => (tokens[0] === "recipients" ? "new@example.com" : undefined);
    // false stops the change, another value replaces it: keys in camelCase
    const beforeRename = ({ newKey }) => newKey.replace(/[-_ ](\w)/g, (_, char) => char.toUpperCase());
    const afterChange = ({ operation, path }) => {
      log.value.push(`${ operation }: ${ path }`);
    };
    // own actions in the menu of a row
    const getNodeActions = ({ value }) => (typeof value === "string"
? [
  { id: "trim", label: "_A_JSON_EDITOR_EXAMPLE_TRIM_", run: ({ value: text }) => text.trim() },
  { id: "upper", label: "_A_JSON_EDITOR_EXAMPLE_UPPER_", run: ({ value: text }) => text.toUpperCase() },
]
: []);

    return {
      codeHtml,
      codeJs,
      afterChange,
      beforeAdd,
      beforeRename,
      getNodeActions,
      log,
      model,
    };
  },
};
