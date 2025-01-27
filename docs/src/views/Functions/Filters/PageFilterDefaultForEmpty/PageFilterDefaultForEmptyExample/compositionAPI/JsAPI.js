import {
  filterDefaultForEmpty,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = `filterDefaultForEmpty(undefined);
// ${ filterDefaultForEmpty(undefined) }

filterDefaultForEmpty(null);
// ${ filterDefaultForEmpty(null) }

filterDefaultForEmpty("");
// ${ filterDefaultForEmpty("") }

filterDefaultForEmpty("aloha");
// ${ filterDefaultForEmpty("aloha") }`;

  return {
    codeJs,
  };
}
