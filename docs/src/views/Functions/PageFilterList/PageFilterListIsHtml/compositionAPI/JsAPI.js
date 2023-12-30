import filterList from "../../../../../../../src/filters/filterList";

export default function JsAPI() {
  const ITEMS = ["label 1", "label 2", "label 3"];

  const codeJs = `const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
});
// ${ filterList(ITEMS, { isHtml: false, isSimpleArray: true }) }`;

  return {
    codeJs,
  };
}
