import {
  computed,
} from "vue";

import {
  filterStripHtml,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterStripHtml("<p>Hello <strong>World</strong></p>");
// ${ filterStripHtml("<p>Hello <strong>World</strong></p>") }

filterStripHtml("Tom &amp; Jerry");
// ${ filterStripHtml("Tom &amp; Jerry") }

filterStripHtml("<script>alert(1)</script>Text");
// ${ filterStripHtml("<script>alert(1)</script>Text") }`;
  });

  return {
    codeJs,
  };
}
