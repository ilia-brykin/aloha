import {
  filterDefaultForEmpty,
} from "../../../../../../../../src";

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
