import {
  filterList,
} from "aloha-vue";

export default function JsAPI() {
  const ITEMS = ["label 1", "label 2", "label 3"];

  const codeJs = `const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separatorHtml: "<hr>",
});
// ${ filterList(ITEMS, { isHtml: true, isSimpleArray: true, separatorHtml: "<hr>" }) }

filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separatorHtml: "<div>Aloha</div>",
});
// ${ filterList(ITEMS, { isHtml: true, isSimpleArray: true, separatorHtml: "<div>Aloha</div>" }) }`;

  return {
    codeJs,
  };
}
