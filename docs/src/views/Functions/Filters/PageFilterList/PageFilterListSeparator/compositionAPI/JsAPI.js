import {
  filterList,
} from "../../../../../../../../src";

export default function JsAPI() {
  const ITEMS = ["label 1", "label 2", "label 3"];

  const codeJs = `const ITEMS = ["label 1", "label 2", "label 3"];

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
  separator: "; ",
});
// ${ filterList(ITEMS, { isHtml: false, isSimpleArray: true, separator: "; ", }) }

filterList(ITEMS, {
  isHtml: false,
  isSimpleArray: true,
  lastSeparator: " & ",
  separator: ", ",
});
// ${ filterList(ITEMS, { isHtml: false, isSimpleArray: true, lastSeparator: " & ", separator: ", ", }) }


filterList(ITEMS, {
  isHtml: true,
  isSimpleArray: true,
  separator: ";",
});
// ${ filterList(ITEMS, { isHtml: true, isSimpleArray: true, separator: ";", }) }`;

  return {
    codeJs,
  };
}
