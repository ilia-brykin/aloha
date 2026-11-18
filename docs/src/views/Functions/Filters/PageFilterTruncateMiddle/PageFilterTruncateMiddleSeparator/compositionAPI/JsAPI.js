import {
  computed,
} from "vue";

import {
  filterTruncateMiddle,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterTruncateMiddle("/home/user/projects/aloha/src/index.js", { start: 5, end: 8, separator: "/…/" });
// ${ filterTruncateMiddle("/home/user/projects/aloha/src/index.js", { start: 5, end: 8, separator: "/…/" }) }

filterTruncateMiddle("0x71C7656EC7ab88b098defB751B7401B5f6d8976F", { separator: "..." });
// ${ filterTruncateMiddle("0x71C7656EC7ab88b098defB751B7401B5f6d8976F", { separator: "..." }) }`;
  });

  return {
    codeJs,
  };
}
