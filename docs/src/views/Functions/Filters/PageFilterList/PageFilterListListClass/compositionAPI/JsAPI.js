import {
  filterList,
} from "aloha-vue";

export default function JsAPI() {
  const ITEMS = ["label 1", "label 2", "label 3"];

  const codeJs = `const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  listClass: "a_list_without_styles",
  isSimpleArray: true,
});
// ${ filterList(ITEMS, { listClass: "a_list_without_styles", isSimpleArray: true }) }`;

  return {
    codeJs,
  };
}
