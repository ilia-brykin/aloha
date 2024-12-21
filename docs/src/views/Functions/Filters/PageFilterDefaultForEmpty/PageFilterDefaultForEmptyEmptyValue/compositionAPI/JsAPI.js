import {
  filterDefaultForEmpty,
} from "../../../../../../../../src";

export default function JsAPI() {
  const codeJs = `filterDefaultForEmpty(undefined, { emptyValue: "---" });
// ${ filterDefaultForEmpty(undefined, { emptyValue: "---" }) }

filterDefaultForEmpty(undefined, { emptyValue: "false" });
// ${ filterDefaultForEmpty(undefined, { emptyValue: "false" }) }`;

  return {
    codeJs,
  };
}
