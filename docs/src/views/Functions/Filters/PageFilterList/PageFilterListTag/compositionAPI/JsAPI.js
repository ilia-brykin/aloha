import {
  filterList,
} from "aloha-vue";

export default function JsAPI() {
  const ITEMS = ["label 1", "label 2", "label 3"];

  const codeJs = `const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  tag: "ol",
  isSimpleArray: true,
});
// ${ filterList(ITEMS, { tag: "ol", isSimpleArray: true }) }`;

  return {
    codeJs,
  };
}
