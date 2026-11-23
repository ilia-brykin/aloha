import {
  computed,
} from "vue";

import {
  filterNewlines,
} from "aloha-vue";

export const TEXT_EXAMPLE = "Aloha Street 1\n12345 Honolulu\n\n<b>Not bold</b> & safe";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterNewlines("Line 1\\nLine 2");
// ${ filterNewlines("Line 1\nLine 2") }

filterNewlines("<b>Tom</b> & Jerry\\r\\nLine 2");
// ${ filterNewlines("<b>Tom</b> & Jerry\r\nLine 2") }

// in a template: the result is escaped, so v-html or the prop html is safe
// <div v-html="filterNewlines(notes)"></div>
// <a-translation tag="div" :html="filterNewlines(notes)" />

// in a table column
// { label: "Notes", keyLabel: "notes", filter: "newlines" }`;
  });

  return {
    codeJs,
  };
}
